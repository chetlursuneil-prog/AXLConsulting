export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  deliverables: string[];
  outcomes: string[];
  aiCapabilities: string[];
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'digital-transformation',
    slug: 'digital-transformation',
    title: 'Digital Transformation Advisory & Execution',
    shortTitle: 'Digital Transformation',
    tagline: 'From legacy constraints to digital leadership',
    description: 'We guide organizations through comprehensive digital transformations—from strategy through execution. Our AI-enabled approach accelerates modernization while managing risk, ensuring your digital investments deliver measurable business outcomes.',
    icon: 'Layers',
    features: [
      {
        title: 'Legacy to Modern Stack Migration',
        description: 'Systematic modernization of legacy systems using AI-powered assessment, automated code transformation, and risk-managed migration strategies that minimize business disruption.',
      },
      {
        title: 'Enterprise & Solution Architecture',
        description: 'Future-ready architecture design leveraging cloud-native patterns, microservices, and AI/ML infrastructure to build scalable, resilient digital foundations.',
      },
      {
        title: 'AI-Enabled Transformation Roadmaps',
        description: 'Data-driven transformation planning using machine learning models to prioritize initiatives, predict outcomes, and optimize sequencing for maximum value realization.',
      },
      {
        title: 'End-to-End Delivery Governance',
        description: 'Comprehensive program governance frameworks combining traditional PMO excellence with AI-powered project analytics for early risk detection and course correction.',
      },
    ],
    deliverables: [
      'Digital maturity assessment and benchmark report',
      'Target-state architecture blueprint',
      'Prioritized transformation roadmap with business case',
      'Technology selection and vendor evaluation',
      'Migration execution playbooks',
      'Governance framework and KPI dashboard',
    ],
    outcomes: [
      '40-60% reduction in time-to-market for digital products',
      '30-50% decrease in legacy maintenance costs',
      '2-3x improvement in system reliability and performance',
      'Enhanced agility to respond to market changes',
    ],
    aiCapabilities: [
      'AI-powered code analysis and modernization recommendations',
      'Machine learning models for migration risk prediction',
      'Intelligent project monitoring and anomaly detection',
      'Automated documentation and knowledge extraction',
    ],
  },
  {
    id: 'strategic-consulting',
    slug: 'strategic-consulting',
    title: 'Strategic Consulting & Executive Advisory',
    shortTitle: 'Strategic Consulting',
    tagline: 'Strategy that drives measurable outcomes',
    description: 'We partner with C-suite leaders and boards to develop and execute strategies that create sustainable competitive advantage. Our approach combines deep industry expertise with AI-powered analytics to inform decisions and accelerate results.',
    icon: 'Target',
    features: [
      {
        title: 'Business & Operating Model Strategy',
        description: 'Comprehensive strategy development using AI-driven market analysis, competitive intelligence, and scenario modeling to identify optimal business model configurations.',
      },
      {
        title: 'Growth, Cost & Efficiency Transformation',
        description: 'End-to-end transformation programs that simultaneously drive revenue growth while optimizing cost structures through intelligent automation and process redesign.',
      },
      {
        title: 'Executive Advisory & Board Support',
        description: 'Trusted counsel to senior leaders navigating complex decisions, supported by AI-generated insights, predictive analytics, and real-time market intelligence.',
      },
      {
        title: 'M&A Strategy & Integration',
        description: 'AI-enhanced due diligence, valuation modeling, and post-merger integration planning to maximize deal value and accelerate synergy capture.',
      },
    ],
    deliverables: [
      'Strategic diagnostic and opportunity assessment',
      'Business model innovation blueprint',
      'Financial modeling and value case development',
      'Implementation roadmap with governance structure',
      'Executive dashboards and KPI frameworks',
      'Board-ready presentations and decision documents',
    ],
    outcomes: [
      '15-25% improvement in operating margins',
      '20-40% acceleration in strategic initiative delivery',
      'Enhanced market positioning and competitive advantage',
      'Improved board confidence and stakeholder alignment',
    ],
    aiCapabilities: [
      'LLM-powered competitive intelligence analysis',
      'Predictive modeling for market trend forecasting',
      'AI-driven scenario planning and simulation',
      'Natural language processing for sentiment analysis',
    ],
  },
  {
    id: 'technology-operations',
    slug: 'technology-operations',
    title: 'Technology & Operational Transformation',
    shortTitle: 'Technology & Operations',
    tagline: 'Intelligent operations for the AI era',
    description: 'We transform technology and operational capabilities through AI-native approaches. From BSS/OSS modernization to intelligent automation, we help organizations build the operational excellence required for sustainable competitive advantage.',
    icon: 'Cpu',
    features: [
      {
        title: 'BSS/OSS Automation & Modernization',
        description: 'End-to-end transformation of business and operations support systems using AI-driven automation, enabling zero-touch processes and intelligent decision-making.',
      },
      {
        title: 'Network Automation & Orchestration',
        description: 'Intelligent network management leveraging AIOps, ML-based predictive maintenance, and automated orchestration for improved reliability and reduced operational costs.',
      },
      {
        title: 'SaaS Platform Implementation',
        description: 'Strategic implementation of cloud-native CRM, ERP, and CPQ platforms with AI-powered optimization for accelerated time-to-value and enhanced user adoption.',
      },
      {
        title: 'AI-Driven Operations & Decision Intelligence',
        description: 'Deployment of intelligent operations capabilities including predictive analytics, automated anomaly detection, and AI-assisted decision support systems.',
      },
    ],
    deliverables: [
      'Operations maturity assessment and benchmark',
      'Target operating model design',
      'Automation opportunity identification and prioritization',
      'Platform selection and implementation roadmap',
      'Process redesign and optimization playbooks',
      'Operational KPI framework and dashboards',
    ],
    outcomes: [
      '50-70% reduction in manual operational tasks',
      '30-45% decrease in mean-time-to-resolution',
      '25-40% improvement in operational efficiency',
      'Enhanced customer experience through faster service delivery',
    ],
    aiCapabilities: [
      'AIOps for intelligent IT operations management',
      'Machine learning for predictive maintenance',
      'RPA and intelligent automation orchestration',
      'Computer vision for quality inspection and monitoring',
    ],
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Intelligent Automation',
    shortTitle: 'AI & Automation',
    tagline: 'Enterprise AI that delivers results',
    description: 'We help organizations harness the full potential of AI and intelligent automation. From strategy through implementation, we ensure AI investments translate into measurable business value while maintaining responsible governance.',
    icon: 'Brain',
    features: [
      {
        title: 'AI Strategy & Roadmap Development',
        description: 'Comprehensive AI strategy aligned with business objectives, including use case prioritization, capability assessment, and implementation sequencing for maximum ROI.',
      },
      {
        title: 'Machine Learning Solutions',
        description: 'Design and deployment of custom ML models for prediction, classification, and optimization—from computer vision to natural language processing applications.',
      },
      {
        title: 'Generative AI & LLM Implementation',
        description: 'Enterprise deployment of large language models and generative AI, including prompt engineering, fine-tuning, and integration with business workflows.',
      },
      {
        title: 'No-Code & Low-Code AI Platforms',
        description: 'Democratization of AI through implementation of no-code/low-code platforms that enable business users to build and deploy AI solutions independently.',
      },
    ],
    deliverables: [
      'AI readiness assessment and strategy document',
      'Use case portfolio with prioritized roadmap',
      'Data strategy and governance framework',
      'AI/ML solution architecture and design',
      'Model deployment and MLOps infrastructure',
      'AI governance and responsible AI guidelines',
    ],
    outcomes: [
      '60-80% automation of targeted manual processes',
      '25-45% improvement in decision accuracy',
      '3-5x acceleration in data-driven insights generation',
      'New revenue streams through AI-enabled products',
    ],
    aiCapabilities: [
      'Custom LLM development and fine-tuning',
      'MLOps and model lifecycle management',
      'Edge AI deployment for real-time processing',
      'Responsible AI frameworks and bias detection',
    ],
  },
  {
    id: 'program-assurance',
    slug: 'program-assurance',
    title: 'Program Assurance & Value Realization',
    shortTitle: 'Program Assurance',
    tagline: 'De-risking transformation investments',
    description: 'We provide independent assurance and governance for complex transformation programs. Our AI-enhanced monitoring and early warning systems help leadership teams navigate risk and ensure programs deliver their promised value.',
    icon: 'Shield',
    features: [
      {
        title: 'Independent Program Reviews',
        description: 'Objective assessment of program health using AI-powered analytics to identify risks, validate progress, and recommend course corrections before issues escalate.',
      },
      {
        title: 'Transformation Governance Design',
        description: 'Design and implementation of governance frameworks that balance agility with control, ensuring programs maintain momentum while managing enterprise risk.',
      },
      {
        title: 'Value Realization Management',
        description: 'Systematic tracking and optimization of business benefits through AI-driven analytics, ensuring transformation investments deliver their intended outcomes.',
      },
      {
        title: 'Risk Management & Early Warning',
        description: 'Predictive risk management leveraging ML models to identify emerging issues and enable proactive intervention before problems impact delivery.',
      },
    ],
    deliverables: [
      'Program health assessment reports',
      'Risk register with predictive analytics',
      'Governance framework and decision protocols',
      'Benefits realization tracking and dashboards',
      'Remediation plans and recovery strategies',
      'Stakeholder communication frameworks',
    ],
    outcomes: [
      '40-60% reduction in program delivery risk',
      '25-35% improvement in benefits realization',
      'Enhanced stakeholder confidence and alignment',
      'Reduced program cost and timeline overruns',
    ],
    aiCapabilities: [
      'ML-based program risk prediction models',
      'AI-powered earned value analysis',
      'Natural language processing for stakeholder sentiment',
      'Automated reporting and insight generation',
    ],
  },
  {
    id: 'change-management',
    slug: 'change-management',
    title: 'Change Management & Organizational Enablement',
    shortTitle: 'Change Management',
    tagline: 'People-centered transformation',
    description: 'Successful transformation requires more than technology—it demands organizational alignment, capability building, and sustained behavior change. We enable organizations to embrace change and build lasting transformation capabilities.',
    icon: 'Users',
    features: [
      {
        title: 'Change Impact Assessment',
        description: 'AI-enhanced analysis of transformation impacts across roles, processes, and organizational structures to inform targeted change interventions.',
      },
      {
        title: 'Leadership Alignment & Engagement',
        description: 'Structured programs to build leadership commitment, cascade change vision, and create the sponsorship required for successful transformation.',
      },
      {
        title: 'Capability Building & Training',
        description: 'Design and delivery of targeted training programs using AI-personalized learning paths to build the skills required for transformed operations.',
      },
      {
        title: 'Culture Transformation',
        description: 'Systematic approaches to shifting organizational culture, including measurement, intervention design, and sustained reinforcement programs.',
      },
    ],
    deliverables: [
      'Change impact assessment and stakeholder analysis',
      'Change management strategy and roadmap',
      'Communication plans and campaign materials',
      'Training curriculum and delivery programs',
      'Change champion network design and support',
      'Adoption monitoring and sustainment plans',
    ],
    outcomes: [
      '2-3x improvement in change adoption rates',
      '40-50% reduction in productivity dip during transition',
      'Enhanced employee engagement and satisfaction',
      'Sustained behavior change and capability retention',
    ],
    aiCapabilities: [
      'AI-powered sentiment analysis and feedback processing',
      'Personalized learning recommendations',
      'Automated change readiness scoring',
      'Predictive analytics for adoption challenges',
    ],
  },
];

export const serviceCategories = [
  {
    id: 'strategy',
    name: 'Strategy & Advisory',
    services: ['strategic-consulting', 'program-assurance'],
  },
  {
    id: 'digital',
    name: 'Digital & Technology',
    services: ['digital-transformation', 'technology-operations', 'ai-automation'],
  },
  {
    id: 'enablement',
    name: 'Organizational Enablement',
    services: ['change-management'],
  },
];
