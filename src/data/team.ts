export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  education: string[];
  experience: string;
  bio: string[];
  expertise: string[];
  regions: string[];
  linkedin: string;
  image: string;
}

export const founders: TeamMember[] = [
  {
    id: 'axel-schmitz',
    name: 'Axel Schmitz',
    role: 'Founder & Managing Partner',
    title: 'Founder',
    education: [
      'Master\'s in Management – Copenhagen',
      'Bachelor\'s in Management – Copenhagen',
    ],
    experience: '30+ years',
    bio: [
      'Axel Schmitz brings over three decades of international leadership and consulting experience to AXL Consulting. As a trusted advisor to C-suite executives and board members across the globe, he has built a reputation for delivering complex, high-stakes transformations that create lasting value.',
      'His strategic acumen spans organizational transformation, business model innovation, and executive advisory—always with a focus on measurable outcomes and sustainable change. Axel\'s leadership has guided Fortune 500 companies, government entities, and emerging market leaders through periods of significant disruption and growth.',
      'Throughout his career, Axel has operated at the intersection of strategy and execution, ensuring that bold visions translate into operational reality. His approach combines rigorous analysis with pragmatic implementation, earning him the confidence of leaders who face their most critical decisions.',
    ],
    expertise: [
      'C-Suite & Board Advisory',
      'Organizational Transformation',
      'Strategic Planning & Execution',
      'Business Model Innovation',
      'Executive Leadership Development',
      'M&A Integration',
      'Corporate Governance',
    ],
    regions: [
      'Europe',
      'Middle East',
      'Asia Pacific',
      'Africa',
      'North America',
      'Latin America',
    ],
    linkedin: 'https://www.linkedin.com/in/axelschmitz/',
    image: '/images/team/Axelimg.jpg',
  },
  {
    id: 'suneil-chetlur',
    name: 'Suneil Chetlur',
    role: 'Co-Founder & Technology Partner',
    title: 'Co-Founder',
    education: [
      'MBA – Warwick Business School, London',
      'Bachelor\'s in Computer Science Engineering – India',
    ],
    experience: '20+ years',
    bio: [
      'Suneil Chetlur is a seasoned technology transformation leader with two decades of experience driving digital innovation across global enterprises. His unique combination of deep technical expertise and business acumen positions him as a bridge between strategic vision and technological execution.',
      'As Co-Founder of AXL Consulting, Suneil leads the firm\'s technology and AI practice, bringing hands-on experience in enterprise-scale digital transformations. He has designed and governed multi-million-euro programs across telecommunications, financial services, and manufacturing sectors, consistently delivering measurable ROI and operational excellence.',
      'Suneil\'s expertise spans the full spectrum of enterprise technology—from legacy modernization and cloud migration to AI-driven automation and intelligent operations. His approach emphasizes pragmatic innovation, ensuring that emerging technologies deliver tangible business value rather than merely technological novelty.',
    ],
    expertise: [
      'AI & Machine Learning Strategy',
      'BSS/OSS Transformation',
      'Network Automation & Orchestration',
      'SaaS Platform Implementation (CRM, ERP, CPQ)',
      'Enterprise Architecture',
      'Digital Product Development',
      'Transformation Program Governance',
    ],
    regions: [
      'Europe',
      'Middle East',
      'Asia Pacific',
      'Americas',
    ],
    linkedin: 'https://www.linkedin.com/in/suneilchetlur/',
    image: '/images/team/Suneilimg.jpg',
  },
];

export const teamStats = [
  { label: 'Combined Experience', value: '50+', suffix: 'Years' },
  { label: 'Countries Operated In', value: '40+', suffix: '' },
  { label: 'Enterprise Transformations', value: '200+', suffix: '' },
  { label: 'Client Retention Rate', value: '95', suffix: '%' },
];
