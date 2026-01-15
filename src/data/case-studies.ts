export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientType: string;
  industry: string;
  duration: string;
  tagline: string;
  summary: string;
  heroImage: string;
  externalUrl?: string;
  challenge: ChallengeSection;
  approach: ApproachSection;
  aiRole: AIRoleSection;
  outcomes: OutcomeSection;
  testimonial?: Testimonial;
  featured: boolean;
}

export interface ChallengeSection {
  overview: string;
  points: string[];
}

export interface ApproachSection {
  overview: string;
  phases: ApproachPhase[];
}

export interface ApproachPhase {
  name: string;
  description: string;
  activities: string[];
}

export interface AIRoleSection {
  overview: string;
  technologies: AITechnology[];
}

export interface AITechnology {
  name: string;
  application: string;
}

export interface OutcomeSection {
  overview: string;
  metrics: OutcomeMetric[];
  businessImpact: string[];
}

export interface OutcomeMetric {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'menusense',
    slug: 'menusense',
    title: 'MenuSense: AI-Powered Restaurant Intelligence Platform',
    client: 'MenuSense',
    clientType: 'AXL Consulting Product',
    industry: 'Hospitality & Food Service',
    duration: 'Production Live',
    tagline: 'No-code AI platform transforming restaurant menu management and profitability',
    summary: 'MenuSense is a proprietary AXL Consulting product—a fully AI-driven, no-code platform that revolutionizes how restaurants manage menus, optimize costs, and drive profitability. By combining machine learning with intuitive design, MenuSense enables restaurant operators to make data-driven decisions without technical expertise.',
    heroImage: '/images/case-studies/menusense.jpg',
    externalUrl: 'https://menusense.io',
    challenge: {
      overview: 'The restaurant industry operates on razor-thin margins, yet most operators lack access to the sophisticated analytics tools used by large chains. Menu engineering—the science of optimizing menu design, pricing, and composition—remains largely manual and intuition-based for independent restaurants and small chains.',
      points: [
        'Menu pricing decisions based on gut feel rather than data-driven analysis',
        'Limited visibility into true dish profitability accounting for all cost components',
        'Inability to respond dynamically to seasonal ingredient costs and availability',
        'No systematic approach to understanding customer preferences and demand patterns',
        'Lack of tools accessible to non-technical restaurant operators',
      ],
    },
    approach: {
      overview: 'AXL Consulting developed MenuSense as a demonstration of our AI-first philosophy—creating sophisticated technology that delivers enterprise-grade capabilities through consumer-simple interfaces. The platform was built from the ground up using no-code principles and modern AI architecture.',
      phases: [
        {
          name: 'Platform Architecture',
          description: 'Designed a cloud-native, AI-first architecture enabling rapid feature development and seamless scalability.',
          activities: [
            'Microservices architecture for modular capability deployment',
            'Real-time data processing pipeline for dynamic recommendations',
            'API-first design enabling POS and inventory system integration',
            'Multi-tenant architecture supporting diverse restaurant configurations',
          ],
        },
        {
          name: 'AI Model Development',
          description: 'Built and trained specialized ML models for restaurant-specific intelligence.',
          activities: [
            'Demand forecasting models incorporating seasonality, weather, and events',
            'Cost optimization algorithms analyzing ingredient relationships',
            'Customer segmentation using behavioral and demographic data',
            'Menu performance scoring using multi-factor profitability analysis',
          ],
        },
        {
          name: 'No-Code Interface',
          description: 'Created an intuitive interface enabling sophisticated analysis without technical expertise.',
          activities: [
            'Drag-and-drop menu builder with real-time profitability visualization',
            'Natural language query interface for ad-hoc analysis',
            'Automated insight generation and recommendation engine',
            'Mobile-first design for on-the-go decision making',
          ],
        },
      ],
    },
    aiRole: {
      overview: 'MenuSense is AI-native—every feature is powered by machine learning models that continuously learn and improve from data. The platform demonstrates how AI can be embedded throughout a product to deliver intelligent automation at every touchpoint.',
      technologies: [
        {
          name: 'Demand Forecasting ML',
          application: 'Predicts dish-level demand incorporating seasonality, local events, weather patterns, and historical trends to optimize prep and reduce waste.',
        },
        {
          name: 'Cost Intelligence Engine',
          application: 'Analyzes ingredient costs, supplier pricing, and recipe compositions to calculate true dish profitability and identify optimization opportunities.',
        },
        {
          name: 'LLM-Powered Insights',
          application: 'Generates natural language explanations of menu performance and provides conversational interface for querying business data.',
        },
        {
          name: 'Recommendation System',
          application: 'Suggests menu changes, pricing adjustments, and promotional strategies based on multi-factor optimization algorithms.',
        },
        {
          name: 'Computer Vision',
          application: 'Enables menu digitization through image recognition, automatically extracting dishes, descriptions, and prices from existing menus.',
        },
      ],
    },
    outcomes: {
      overview: 'MenuSense demonstrates the transformative potential of AI-first product development. Early adopters have seen significant improvements in profitability, operational efficiency, and decision-making confidence.',
      metrics: [
        {
          value: '12-18%',
          label: 'Margin Improvement',
          description: 'Average increase in menu profitability through AI-optimized pricing and composition',
        },
        {
          value: '25-35%',
          label: 'Waste Reduction',
          description: 'Decrease in food waste through demand-driven prep recommendations',
        },
        {
          value: '80%',
          label: 'Time Savings',
          description: 'Reduction in menu analysis and planning effort through automation',
        },
        {
          value: '<5 min',
          label: 'Time to Insight',
          description: 'Average time to generate actionable menu optimization recommendations',
        },
      ],
      businessImpact: [
        'Democratized access to enterprise-grade menu intelligence for independent restaurants',
        'Enabled data-driven decision making without requiring technical expertise',
        'Created competitive advantage through dynamic, market-responsive menu management',
        'Established new category of AI-powered restaurant management tools',
      ],
    },
    testimonial: {
      quote: 'MenuSense gave us capabilities we never thought possible for a restaurant our size. We\'re making decisions based on data, not guesswork, and our margins have improved dramatically.',
      author: 'Restaurant Owner',
      role: 'Early Adopter Partner',
    },
    featured: true,
  },
  {
    id: 'telecom-bss-transformation',
    slug: 'telecom-bss-transformation',
    title: 'BSS/OSS Transformation for Tier-1 European Telco',
    client: 'Major European Telecommunications Operator',
    clientType: 'Tier-1 Telco',
    industry: 'Telecommunications',
    duration: '24 months',
    tagline: 'AI-enabled BSS modernization delivering €100M+ in annual value',
    summary: 'A comprehensive transformation of business and operations support systems for one of Europe\'s leading telecommunications operators. The program modernized legacy billing, CRM, and operations platforms while embedding AI-driven automation throughout the technology stack.',
    heroImage: '/images/case-studies/telecom-bss.jpg',
    challenge: {
      overview: 'The operator faced a critical inflection point: legacy BSS/OSS systems built over two decades were constraining innovation, driving unsustainable operational costs, and creating friction in the customer experience. With aggressive 5G rollout plans requiring new monetization capabilities, transformation was no longer optional.',
      points: [
        '200+ legacy systems with complex interdependencies and limited documentation',
        'Time-to-market for new products measured in months rather than days',
        'Customer service costs growing 8% annually despite automation attempts',
        'Network operations requiring 2,500+ manual interventions daily',
        'Billing accuracy issues driving 15% of customer complaints',
      ],
    },
    approach: {
      overview: 'AXL Consulting led the transformation strategy and governance, bringing our AI-first methodology to modernize systems while building intelligent automation capabilities. Our approach prioritized business value delivery while managing the inherent complexity of large-scale BSS transformation.',
      phases: [
        {
          name: 'Discovery & Strategy',
          description: 'Comprehensive assessment of existing systems, processes, and data to inform transformation priorities.',
          activities: [
            'AI-powered legacy system analysis and dependency mapping',
            'Process mining to identify automation opportunities',
            'Business case development with value realization roadmap',
            'Target architecture definition with cloud-native principles',
          ],
        },
        {
          name: 'Foundation Building',
          description: 'Established core platforms and data architecture to enable phased modernization.',
          activities: [
            'Cloud infrastructure deployment and security hardening',
            'Data lake and analytics platform implementation',
            'Integration layer and API management deployment',
            'MLOps infrastructure for AI model deployment',
          ],
        },
        {
          name: 'Intelligent Migration',
          description: 'Phased system modernization with AI-embedded capabilities from day one.',
          activities: [
            'AI-powered data migration with automated validation',
            'Parallel running with intelligent reconciliation',
            'Progressive customer migration with ML-based risk scoring',
            'Automated testing and regression management',
          ],
        },
        {
          name: 'Optimization & Scaling',
          description: 'Continuous improvement and expansion of AI-driven capabilities.',
          activities: [
            'ML model optimization based on production data',
            'Expansion of automation use cases',
            'Knowledge transfer and capability building',
            'Value realization tracking and optimization',
          ],
        },
      ],
    },
    aiRole: {
      overview: 'AI was not an afterthought but a foundational element of the transformation. We embedded machine learning and intelligent automation throughout the new BSS/OSS stack, creating an AI-native operations environment.',
      technologies: [
        {
          name: 'AIOps Platform',
          application: 'Unified operations intelligence platform providing predictive monitoring, automated incident resolution, and intelligent resource optimization across network and IT infrastructure.',
        },
        {
          name: 'ML-Powered Billing',
          application: 'Machine learning models for real-time rating optimization, anomaly detection in billing processes, and predictive revenue assurance.',
        },
        {
          name: 'Conversational AI',
          application: 'LLM-powered customer service automation handling 65% of customer interactions through natural language understanding and generation.',
        },
        {
          name: 'Intelligent Provisioning',
          application: 'ML-driven service provisioning that predicts resource requirements, optimizes configuration, and enables zero-touch activation.',
        },
        {
          name: 'Predictive Network Operations',
          application: 'Deep learning models analyzing network telemetry to predict failures, optimize capacity, and automate remediation.',
        },
      ],
    },
    outcomes: {
      overview: 'The transformation delivered transformative results across operational efficiency, customer experience, and business agility. The AI-embedded approach created sustainable competitive advantage and ongoing optimization capabilities.',
      metrics: [
        {
          value: '€100M+',
          label: 'Annual Value',
          description: 'Combined savings and revenue enablement delivered annually',
        },
        {
          value: '70%',
          label: 'Automation Rate',
          description: 'Network operations tasks now handled through AI-driven automation',
        },
        {
          value: '85%',
          label: 'Faster Launch',
          description: 'Reduction in time-to-market for new products and services',
        },
        {
          value: '45%',
          label: 'Cost Reduction',
          description: 'Decrease in BSS/OSS operational expenditure',
        },
      ],
      businessImpact: [
        'Enabled successful 5G monetization with dynamic pricing capabilities',
        'Transformed customer experience with AI-powered service delivery',
        'Created data-driven culture with real-time business intelligence',
        'Established foundation for ongoing AI-driven innovation',
      ],
    },
    testimonial: {
      quote: 'AXL brought a unique combination of strategic vision and practical delivery expertise. Their AI-first approach didn\'t just modernize our systems—it fundamentally changed how we operate.',
      author: 'Chief Technology Officer',
      role: 'Tier-1 European Telco',
    },
    featured: true,
  },
  {
    id: 'manufacturing-ai-optimization',
    slug: 'manufacturing-ai-optimization',
    title: 'AI-Driven Cost Optimization for Global Manufacturer',
    client: 'Global Industrial Manufacturing Company',
    clientType: 'Fortune 500 Manufacturer',
    industry: 'Manufacturing',
    duration: '18 months',
    tagline: 'Machine learning delivers $75M in operational savings',
    summary: 'A transformative engagement applying AI and machine learning to optimize manufacturing operations for a global industrial company. The program deployed intelligent automation across quality management, maintenance, and supply chain operations.',
    heroImage: '/images/case-studies/manufacturing.jpg',
    challenge: {
      overview: 'Despite decades of lean manufacturing investment, the client faced persistent challenges in operational efficiency. Traditional approaches had reached diminishing returns, while competitors leveraging AI were establishing new performance benchmarks. Leadership recognized the need for a fundamental shift to AI-driven operations.',
      points: [
        'Quality defect rates plateaued despite continuous improvement programs',
        'Unplanned downtime consuming 12% of production capacity',
        'Maintenance costs growing 5% annually with aging equipment fleet',
        'Supply chain disruptions causing frequent production schedule changes',
        'Limited visibility into true cost drivers across complex product portfolio',
      ],
    },
    approach: {
      overview: 'AXL Consulting designed and led an AI transformation program targeting the highest-value operational improvement opportunities. Our approach combined deep manufacturing expertise with cutting-edge AI capabilities to deliver rapid, measurable results.',
      phases: [
        {
          name: 'AI Opportunity Assessment',
          description: 'Systematic identification and prioritization of AI use cases based on value potential and feasibility.',
          activities: [
            'Process analysis across 12 manufacturing facilities',
            'Data readiness assessment and gap remediation planning',
            'Use case value modeling and prioritization',
            'Technology architecture and infrastructure planning',
          ],
        },
        {
          name: 'Proof of Value',
          description: 'Rapid deployment of high-priority use cases to demonstrate impact and build organizational confidence.',
          activities: [
            'Computer vision quality inspection pilot',
            'Predictive maintenance model development and validation',
            'Supply chain demand sensing prototype',
            'Value realization measurement framework',
          ],
        },
        {
          name: 'Scale & Industrialize',
          description: 'Enterprise-wide deployment of validated AI capabilities with robust governance.',
          activities: [
            'MLOps platform deployment for model lifecycle management',
            'Edge computing infrastructure for real-time inference',
            'Change management and operator training programs',
            'Continuous improvement and model optimization processes',
          ],
        },
      ],
    },
    aiRole: {
      overview: 'The transformation deployed multiple AI technologies working in concert to optimize manufacturing operations. Machine learning models were embedded at every stage of the production process, creating an intelligent manufacturing environment.',
      technologies: [
        {
          name: 'Computer Vision Quality',
          application: 'Deep learning models analyzing visual inspection data to detect defects with superhuman accuracy, reducing quality escapes by 75%.',
        },
        {
          name: 'Predictive Maintenance',
          application: 'ML models processing sensor data from 10,000+ equipment assets to predict failures 2-4 weeks in advance, enabling planned intervention.',
        },
        {
          name: 'Demand Sensing',
          application: 'Machine learning models incorporating external signals to improve demand forecast accuracy, reducing inventory costs while improving fill rates.',
        },
        {
          name: 'Process Optimization',
          application: 'Reinforcement learning models continuously optimizing process parameters to maximize yield and minimize energy consumption.',
        },
        {
          name: 'Root Cause Analysis',
          application: 'NLP-powered analysis of maintenance logs and quality records to automatically identify systemic issues and recommend corrective actions.',
        },
      ],
    },
    outcomes: {
      overview: 'The AI transformation delivered exceptional results, establishing new performance benchmarks across quality, reliability, and cost efficiency. The program created a foundation for ongoing AI-driven optimization.',
      metrics: [
        {
          value: '$75M',
          label: 'Annual Savings',
          description: 'Operational cost reduction achieved through AI optimization',
        },
        {
          value: '65%',
          label: 'Defect Reduction',
          description: 'Decrease in quality defects through computer vision inspection',
        },
        {
          value: '45%',
          label: 'Downtime Reduction',
          description: 'Improvement in equipment availability through predictive maintenance',
        },
        {
          value: '8%',
          label: 'Yield Improvement',
          description: 'Increase in production yield through process optimization',
        },
      ],
      businessImpact: [
        'Established AI center of excellence driving continuous innovation',
        'Created competitive advantage through superior operational efficiency',
        'Enabled workforce upskilling with AI-augmented decision support',
        'Built data foundation enabling future AI applications',
      ],
    },
    testimonial: {
      quote: 'The results exceeded our most optimistic projections. AXL helped us see AI not as a technology project but as a fundamental transformation of how we manufacture.',
      author: 'Chief Operating Officer',
      role: 'Global Manufacturing Company',
    },
    featured: true,
  },
  {
    id: 'hospitality-digital-platform',
    slug: 'hospitality-digital-platform',
    title: 'Digital Platform Modernization for Luxury Hotel Group',
    client: 'International Luxury Hotel Brand',
    clientType: 'Luxury Hotel Group',
    industry: 'Hotels & Hospitality',
    duration: '15 months',
    tagline: 'AI-powered guest experience transformation driving 18% RevPAR growth',
    summary: 'A comprehensive digital transformation for a prestigious luxury hotel group, modernizing guest-facing and operational platforms while embedding AI throughout the guest journey. The program delivered significant improvements in guest satisfaction, operational efficiency, and revenue performance.',
    heroImage: '/images/case-studies/hospitality.jpg',
    challenge: {
      overview: 'The hotel group\'s legacy technology infrastructure was constraining its ability to deliver the personalized, seamless experiences that luxury guests expect. Fragmented systems, limited data utilization, and manual processes were creating friction in both guest experience and operations.',
      points: [
        'Guest data siloed across PMS, CRM, and loyalty systems preventing unified view',
        'Manual processes for upselling and personalization limiting revenue capture',
        'Revenue management system unable to optimize across complex rate structures',
        'Staff spending excessive time on administrative tasks vs. guest interaction',
        'Mobile and digital experiences lagging behind guest expectations',
      ],
    },
    approach: {
      overview: 'AXL Consulting designed a guest-centric transformation strategy, building a unified data platform and AI-powered capabilities that enable personalization at every touchpoint while streamlining operations.',
      phases: [
        {
          name: 'Guest Journey Mapping',
          description: 'Deep analysis of current guest experience to identify friction points and personalization opportunities.',
          activities: [
            'End-to-end guest journey documentation across touchpoints',
            'Guest feedback analysis using NLP and sentiment modeling',
            'Competitive benchmarking and best practice identification',
            'Personalization opportunity identification and prioritization',
          ],
        },
        {
          name: 'Data Foundation',
          description: 'Creation of unified guest data platform enabling AI-powered personalization.',
          activities: [
            'Customer data platform implementation',
            'Data integration across PMS, POS, loyalty, and digital channels',
            'Guest profile unification and identity resolution',
            'Real-time data pipeline for operational intelligence',
          ],
        },
        {
          name: 'AI-Powered Experience',
          description: 'Deployment of intelligent capabilities across guest journey.',
          activities: [
            'Recommendation engine for personalized offers and experiences',
            'Conversational AI for guest services and concierge',
            'Dynamic pricing and revenue optimization deployment',
            'Staff-facing AI tools for service enhancement',
          ],
        },
      ],
    },
    aiRole: {
      overview: 'AI capabilities were embedded throughout the guest experience—from pre-arrival personalization through post-stay engagement—creating intelligent, anticipatory service that defines modern luxury hospitality.',
      technologies: [
        {
          name: 'Guest Intelligence Platform',
          application: 'ML models building rich guest profiles from behavioral data, enabling personalized service delivery and proactive anticipation of guest needs.',
        },
        {
          name: 'Revenue Optimization',
          application: 'Deep learning models for dynamic pricing optimization across room types, channels, and market segments, maximizing RevPAR while maintaining rate integrity.',
        },
        {
          name: 'Conversational Concierge',
          application: 'LLM-powered digital concierge providing natural language interaction for reservations, recommendations, and service requests across messaging platforms.',
        },
        {
          name: 'Predictive Service',
          application: 'ML models analyzing guest patterns to predict service needs, enabling staff to deliver proactive, anticipatory service.',
        },
      ],
    },
    outcomes: {
      overview: 'The transformation delivered measurable improvements across guest satisfaction, operational efficiency, and financial performance, establishing the group as a leader in AI-powered luxury hospitality.',
      metrics: [
        {
          value: '18%',
          label: 'RevPAR Growth',
          description: 'Increase in revenue per available room through AI optimization',
        },
        {
          value: '32%',
          label: 'NPS Improvement',
          description: 'Growth in Net Promoter Score from personalization initiatives',
        },
        {
          value: '45%',
          label: 'Upsell Revenue',
          description: 'Increase in ancillary revenue through AI-powered recommendations',
        },
        {
          value: '28%',
          label: 'Efficiency Gain',
          description: 'Improvement in staff productivity through automation',
        },
      ],
      businessImpact: [
        'Established differentiated guest experience driving loyalty and word-of-mouth',
        'Created real-time visibility into guest preferences and feedback',
        'Enabled staff to focus on high-value guest interactions',
        'Built foundation for continuous experience innovation',
      ],
    },
    testimonial: {
      quote: 'AXL understood that technology in luxury hospitality must be invisible to guests while empowering our staff. The results speak for themselves—happier guests, more productive teams, and stronger financial performance.',
      author: 'Chief Experience Officer',
      role: 'International Luxury Hotel Brand',
    },
    featured: true,
  },
];

export const featuredCaseStudies = caseStudies.filter(cs => cs.featured);
