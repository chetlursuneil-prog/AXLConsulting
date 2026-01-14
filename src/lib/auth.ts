import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// In production, store these in a database
// For now, using environment variables or hardcoded admin
const ADMIN_USERS = [
  {
    id: '1',
    email: 'admin@axlconsulting.com',
    name: 'Admin',
    // Password: "AXL@admin2024" - hashed with bcrypt
    password: '$2b$12$Y1/AGxsKaIl0pLNONKVmyOmqKG3tR22Cu8AVNvPW.zSX9yxVPSgCa',
    role: 'admin',
  },
  {
    id: '2',
    email: 'axel@axlconsulting.com',
    name: 'Axel Schmitz',
    // Password: "AXL@axel2024"
    password: '$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    role: 'admin',
  },
  {
    id: '3',
    email: 'suneil@axlconsulting.com',
    name: 'Suneil Chetlur',
    // Password: "AXL@suneil2024"
    password: '$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    role: 'admin',
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter email and password');
        }

        // Debug: log incoming email (do not log raw password in production)
        console.log('[auth] attempt for', credentials.email);

        const user = ADMIN_USERS.find((u) => u.email.toLowerCase() === credentials.email.toLowerCase());

        if (!user) {
          console.log('[auth] user not found for', credentials.email);
          throw new Error('Invalid email or password');
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        console.log('[auth] password check for', credentials.email, '=>', isPasswordValid);

        if (!isPasswordValid) {
          throw new Error('Invalid email or password');
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'axl-consulting-secret-key-change-in-production',
};
