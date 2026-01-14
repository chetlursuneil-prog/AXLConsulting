import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AXL Consulting privacy policy - how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024';
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-charcoal-500 mb-8">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-charcoal-700">Privacy Policy</span>
          </nav>
          
          <h1 className="text-display-sm md:text-display-md text-navy-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-charcoal-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-navy-900 prose-p:text-charcoal-700 prose-a:text-primary-600 prose-strong:text-navy-900">
            
            <h2>Introduction</h2>
            <p>
              AXL Consulting (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or engage with our services.
            </p>
            <p>
              By accessing our website or using our services, you consent to the practices 
              described in this Privacy Policy. If you do not agree with the terms of this 
              Privacy Policy, please do not access our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul>
              <li>Fill out contact forms or request information</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Apply for career opportunities</li>
              <li>Engage with our consulting services</li>
              <li>Attend our events or webinars</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, company name, 
              job title, and any other information you choose to provide.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referring website addresses</li>
              <li>Date and time of your visit</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Responding to your inquiries and requests</li>
              <li>Providing and improving our services</li>
              <li>Sending marketing and promotional communications (with your consent)</li>
              <li>Processing job applications</li>
              <li>Analyzing website usage and improving user experience</li>
              <li>Complying with legal obligations</li>
              <li>Protecting our rights and preventing fraud</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share information with trusted third-party 
                service providers who assist us in operating our website and conducting our business.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law, 
                court order, or government regulation.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale 
                of assets, your information may be transferred to the acquiring entity.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information with third parties 
                when you have given us explicit consent to do so.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the Internet or electronic storage is 100% secure, and we 
              cannot guarantee absolute security.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing 
              experience. Cookies are small files stored on your device that help us understand how 
              you use our website. You can control cookie preferences through your browser settings.
            </p>
            <p>
              We may use the following types of cookies:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>

            <h2>Your Rights (GDPR)</h2>
            <p>
              If you are located in the European Economic Area (EEA), you have certain rights under 
              the General Data Protection Regulation (GDPR), including:
            </p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure (&quot;right to be forgotten&quot;)</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided below.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              for which it was collected, comply with legal obligations, resolve disputes, and enforce 
              our agreements. When personal information is no longer needed, we will securely delete 
              or anonymize it.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices or content of these external sites. We encourage you to review the 
              privacy policies of any third-party sites you visit.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 16. We do not 
              knowingly collect personal information from children. If we become aware that we have 
              collected personal information from a child under 16, we will take steps to delete 
              such information.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country 
              of residence. These countries may have different data protection laws. We ensure appropriate 
              safeguards are in place for such transfers in compliance with applicable laws.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage 
              you to review this Privacy Policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> {siteConfig.contact.email}</li>
              <li><strong>Phone:</strong> {siteConfig.contact.phone}</li>
              <li><strong>Address:</strong> {siteConfig.locations[0].address}, {siteConfig.locations[0].city}, {siteConfig.locations[0].country}</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
}
