export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  challenges: Challenge[];
  approach: ApproachItem[];
  transformations: Transformation[];
  outcomes: Outcome[];
  stats: IndustryStat[];
}

export interface Challenge {
  title: string;
  description: string;
}

export interface ApproachItem {
  title: string;
  description: string;
}

export interface Transformation {
  title: string;
  description: string;
  aiRole: string;
}

export interface Outcome {
  metric: string;
  description: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export const industries: Industry[] = [
  {
    id: 'telecommunications',
    slug: 'telecommunications',
    name: 'Telecommunications',
    tagline: 'Enabling the AI-powered telco of tomorrow',
    description: 'The telecommunications industry faces unprecedented disruption—from network virtualization and 5G monetization to the rise of AI-native competitors. We help telcos transform their technology stacks, automate operations, and unlock new revenue streams through intelligent, AI-first approaches.',
    heroImage: '/images/industries/telecom.jpg',
    challenges: [
      {
        title: 'Legacy BSS/OSS Complexity',
        description: 'Decades of accumulated technical debt in billing, provisioning, and operations support systems create barriers to agility and innovation.',
      },
      {
        title: '5G Monetization Uncertainty',
        description: 'Massive network investments require new business models and revenue streams to justify capital expenditure and deliver shareholder returns.',
      },
      {
        title: 'Operational Cost Pressure',
        description: 'Declining traditional revenue streams demand radical operational efficiency while maintaining service quality and customer experience.',
      },
      {
        title: 'Digital-Native Competition',
        description: 'OTT players and digital-first MVNOs compete with superior customer experiences and lower cost structures.',
      },
    ],
    approach: [
      {
        title: 'AI-Native BSS Modernization',
        description: 'We transform legacy billing and customer systems using AI-driven automation, enabling real-time rating, dynamic pricing, and zero-touch customer management.',
      },
      {
        title: 'Intelligent Network Operations',
        description: 'Our AIOps approach brings predictive maintenance, automated remediation, and intelligent orchestration to network operations—reducing costs while improving reliability.',
      },
      {
        title: 'Data Monetization Strategy',
        description: 'We help telcos unlock the value of their unique data assets through AI-powered analytics products, insights services, and ecosystem partnerships.',
      },
    ],
    transformations: [
      {
        title: 'Zero-Touch Operations',
        description: 'End-to-end automation of network provisioning, fault management, and service assurance.',
        aiRole: 'ML models predict failures and trigger automated remediation; NLP processes customer issues for intelligent routing.',
      },
      {
        title: 'AI-Powered Customer Experience',
        description: 'Hyper-personalized customer interactions across all touchpoints.',
        aiRole: 'LLMs power conversational interfaces; recommendation engines drive personalized offers; sentiment analysis enables proactive service recovery.',
      },
      {
        title: 'Intelligent Revenue Management',
        description: 'Dynamic pricing, real-time rating, and automated revenue assurance.',
        aiRole: 'ML models optimize pricing in real-time; anomaly detection identifies revenue leakage; predictive models forecast demand.',
      },
    ],
    outcomes: [
      { metric: '50-70%', description: 'Reduction in manual network operations tasks' },
      { metric: '30-45%', description: 'Decrease in customer service costs through AI automation' },
      { metric: '15-25%', description: 'Improvement in customer satisfaction scores' },
      { metric: '20-35%', description: 'Reduction in time-to-market for new services' },
    ],
    stats: [
      { value: '25+', label: 'Telco transformations delivered' },
      { value: '€750M+', label: 'Annual value unlocked' },
      { value: '40+', label: 'Countries served' },
    ],
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Hotels & Hospitality',
    tagline: 'AI-enabled experiences that delight guests and drive margins',
    description: 'The hospitality industry is being reshaped by changing guest expectations, distribution channel dynamics, and the imperative for operational efficiency. We help hotels and hospitality companies leverage AI to create memorable experiences while optimizing every aspect of their operations.',
    heroImage: '/images/industries/hospitality.jpg',
    challenges: [
      {
        title: 'Distribution Cost & Complexity',
        description: 'OTA dominance and channel fragmentation erode margins while increasing operational complexity across multiple distribution platforms.',
      },
      {
        title: 'Guest Experience Personalization',
        description: 'Rising guest expectations for personalized, seamless experiences across digital and physical touchpoints.',
      },
      {
        title: 'Operational Labor Challenges',
        description: 'Labor shortages and rising costs demand new approaches to service delivery and operational efficiency.',
      },
      {
        title: 'Revenue Management Complexity',
        description: 'Dynamic pricing across multiple room types, channels, and market segments requires sophisticated optimization capabilities.',
      },
    ],
    approach: [
      {
        title: 'AI-Powered Revenue Optimization',
        description: 'We implement intelligent revenue management systems that dynamically optimize pricing, inventory allocation, and channel mix using machine learning.',
      },
      {
        title: 'Guest Experience Transformation',
        description: 'Our approach creates seamless, personalized guest journeys through AI-powered recommendation engines, conversational interfaces, and predictive service delivery.',
      },
      {
        title: 'Intelligent Operations',
        description: 'We automate back-of-house operations through AI-driven scheduling, inventory management, and predictive maintenance to reduce costs and improve service quality.',
      },
    ],
    transformations: [
      {
        title: 'Dynamic Revenue Management',
        description: 'Real-time pricing optimization across all channels and segments.',
        aiRole: 'ML models analyze demand patterns, competitor pricing, and market signals to optimize rates continuously.',
      },
      {
        title: 'Personalized Guest Journey',
        description: 'AI-powered personalization from booking through post-stay engagement.',
        aiRole: 'Recommendation engines suggest relevant offers; LLMs power conversational concierge services; predictive models anticipate guest needs.',
      },
      {
        title: 'Smart Operations',
        description: 'Automated scheduling, procurement, and maintenance optimization.',
        aiRole: 'Demand forecasting drives staffing optimization; computer vision monitors maintenance needs; ML optimizes procurement and inventory.',
      },
    ],
    outcomes: [
      { metric: '8-15%', description: 'Improvement in RevPAR through AI-optimized pricing' },
      { metric: '20-35%', description: 'Reduction in operational costs through automation' },
      { metric: '25-40%', description: 'Increase in guest satisfaction scores' },
      { metric: '15-25%', description: 'Growth in direct booking revenue' },
    ],
    stats: [
      { value: '20+', label: 'Hotel properties transformed' },
      { value: '5M+', label: 'Guest interactions enhanced' },
      { value: '4', label: 'Continents served' },
    ],
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Intelligent manufacturing for the Industry 4.0 era',
    description: 'Manufacturing stands at an inflection point—where AI, IoT, and automation converge to create unprecedented opportunities for efficiency, quality, and innovation. We help manufacturers harness these technologies to build resilient, intelligent operations that deliver competitive advantage.',
    heroImage: '/images/industries/manufacturing.jpg',
    challenges: [
      {
        title: 'Supply Chain Volatility',
        description: 'Global disruptions, demand variability, and supplier risks require new approaches to supply chain visibility and resilience.',
      },
      {
        title: 'Quality & Yield Optimization',
        description: 'Increasing quality expectations and margin pressure demand continuous improvement in yield and defect reduction.',
      },
      {
        title: 'Operational Complexity',
        description: 'Complex production environments with multiple product lines, facilities, and equipment require sophisticated orchestration.',
      },
      {
        title: 'Workforce Transformation',
        description: 'Aging workforce and skills gaps necessitate new approaches to knowledge capture, training, and human-machine collaboration.',
      },
    ],
    approach: [
      {
        title: 'AI-Powered Quality Management',
        description: 'We deploy computer vision, ML-based process control, and predictive quality systems to drive dramatic improvements in yield and defect rates.',
      },
      {
        title: 'Intelligent Supply Chain',
        description: 'Our approach creates end-to-end supply chain visibility and optimization through AI-driven demand sensing, inventory optimization, and risk management.',
      },
      {
        title: 'Smart Factory Transformation',
        description: 'We help manufacturers build intelligent production environments where AI optimizes scheduling, maintenance, and resource allocation in real-time.',
      },
    ],
    transformations: [
      {
        title: 'Predictive Quality Control',
        description: 'AI-driven quality monitoring and defect prevention across production processes.',
        aiRole: 'Computer vision detects defects in real-time; ML models predict quality issues before they occur; process parameters are automatically adjusted.',
      },
      {
        title: 'Intelligent Maintenance',
        description: 'Predictive and prescriptive maintenance that maximizes equipment availability.',
        aiRole: 'IoT sensor data feeds ML models that predict failures; automated scheduling optimizes maintenance windows; root cause analysis accelerates problem resolution.',
      },
      {
        title: 'Demand-Driven Operations',
        description: 'Production planning and scheduling optimized by AI-powered demand sensing.',
        aiRole: 'ML models forecast demand across product lines; optimization algorithms generate production schedules; real-time adjustments respond to changing conditions.',
      },
    ],
    outcomes: [
      { metric: '20-40%', description: 'Reduction in quality defects through AI monitoring' },
      { metric: '25-45%', description: 'Decrease in unplanned downtime via predictive maintenance' },
      { metric: '15-30%', description: 'Improvement in overall equipment effectiveness' },
      { metric: '10-20%', description: 'Reduction in inventory carrying costs' },
    ],
    stats: [
      { value: '15+', label: 'Manufacturing transformations' },
      { value: '50+', label: 'Production lines optimized' },
      { value: '$500M+', label: 'Efficiency gains delivered' },
    ],
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Retail',
    tagline: 'AI-powered retail for the connected consumer',
    description: 'Retail is being transformed by changing consumer behaviors, digital commerce growth, and the blurring of physical and digital experiences. We help retailers harness AI to understand customers, optimize operations, and create differentiated experiences that drive loyalty and growth.',
    heroImage: '/images/industries/retail.jpg',
    challenges: [
      {
        title: 'Consumer Behavior Shifts',
        description: 'Rapidly changing consumer preferences and shopping patterns require constant adaptation and personalization.',
      },
      {
        title: 'Margin Pressure',
        description: 'Intense competition and price transparency compress margins, demanding operational efficiency and value-added differentiation.',
      },
      {
        title: 'Inventory Optimization',
        description: 'Balancing stock availability against carrying costs across multiple channels and locations presents ongoing challenges.',
      },
      {
        title: 'Unified Commerce Complexity',
        description: 'Creating seamless experiences across physical stores, digital channels, and fulfillment options requires sophisticated orchestration.',
      },
    ],
    approach: [
      {
        title: 'AI-Driven Merchandising',
        description: 'We implement intelligent assortment planning, pricing optimization, and promotion management powered by machine learning and demand sensing.',
      },
      {
        title: 'Personalization at Scale',
        description: 'Our approach delivers individualized customer experiences through AI-powered recommendations, targeted marketing, and predictive customer insights.',
      },
      {
        title: 'Intelligent Store Operations',
        description: 'We transform store operations through AI-driven workforce scheduling, inventory management, and customer service optimization.',
      },
    ],
    transformations: [
      {
        title: 'Hyper-Personalization Engine',
        description: 'AI-powered personalization across all customer touchpoints and channels.',
        aiRole: 'ML models build individual customer profiles; recommendation engines personalize products and content; NLP powers conversational commerce.',
      },
      {
        title: 'Intelligent Inventory',
        description: 'AI-optimized inventory positioning and replenishment across the network.',
        aiRole: 'Demand forecasting at SKU-location level; automated replenishment optimization; markdown optimization to minimize waste.',
      },
      {
        title: 'Smart Store',
        description: 'AI-enhanced store operations and customer experience.',
        aiRole: 'Computer vision enables checkout-free shopping; workforce scheduling optimization; real-time insights for store associates.',
      },
    ],
    outcomes: [
      { metric: '10-20%', description: 'Increase in same-store sales through personalization' },
      { metric: '15-30%', description: 'Reduction in inventory carrying costs' },
      { metric: '20-35%', description: 'Improvement in labor productivity' },
      { metric: '25-40%', description: 'Increase in customer lifetime value' },
    ],
    stats: [
      { value: '15+', label: 'Retail transformations' },
      { value: '1,500+', label: 'Stores optimized' },
      { value: '€250M+', label: 'Additional revenue generated' },
    ],
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'eCommerce & Omnichannel',
    tagline: 'Intelligent commerce for the digital-first era',
    description: 'The eCommerce landscape demands constant innovation—from AI-powered personalization and dynamic pricing to intelligent fulfillment and customer service. We help digital commerce leaders build the AI-native capabilities required to win in an increasingly competitive market.',
    heroImage: '/images/industries/ecommerce.jpg',
    challenges: [
      {
        title: 'Customer Acquisition Costs',
        description: 'Rising digital advertising costs and increased competition make customer acquisition increasingly expensive and challenging.',
      },
      {
        title: 'Conversion Optimization',
        description: 'Converting browsers to buyers across complex, multi-device customer journeys requires sophisticated optimization capabilities.',
      },
      {
        title: 'Fulfillment Expectations',
        description: 'Customer expectations for speed, convenience, and flexibility in delivery and returns continue to escalate.',
      },
      {
        title: 'Technology Complexity',
        description: 'Managing a complex technology stack across commerce, marketing, fulfillment, and customer service creates integration and performance challenges.',
      },
    ],
    approach: [
      {
        title: 'AI-Native Commerce Platform',
        description: 'We help build or transform commerce platforms with AI at the core—enabling real-time personalization, dynamic pricing, and intelligent search.',
      },
      {
        title: 'Conversion Optimization',
        description: 'Our approach applies ML and experimentation to continuously optimize the customer journey, from acquisition through conversion and retention.',
      },
      {
        title: 'Intelligent Fulfillment',
        description: 'We implement AI-powered fulfillment optimization across inventory positioning, order routing, and delivery scheduling.',
      },
    ],
    transformations: [
      {
        title: 'AI-Powered Search & Discovery',
        description: 'Intelligent product discovery that understands customer intent and context.',
        aiRole: 'NLP enables natural language search; ML models personalize results; visual search powered by computer vision.',
      },
      {
        title: 'Dynamic Pricing Engine',
        description: 'Real-time price optimization based on demand, competition, and customer value.',
        aiRole: 'ML models analyze market signals and demand patterns; automated pricing rules; personalized pricing within guardrails.',
      },
      {
        title: 'Intelligent Customer Service',
        description: 'AI-powered customer service that resolves issues efficiently and proactively.',
        aiRole: 'LLMs power conversational support; sentiment analysis prioritizes issues; predictive models enable proactive outreach.',
      },
    ],
    outcomes: [
      { metric: '15-30%', description: 'Improvement in conversion rates' },
      { metric: '20-40%', description: 'Increase in average order value through personalization' },
      { metric: '30-50%', description: 'Reduction in customer service costs' },
      { metric: '25-40%', description: 'Improvement in customer retention' },
    ],
    stats: [
      { value: '10+', label: 'eCommerce transformations' },
      { value: '$1B+', label: 'GMV under management' },
      { value: '25M+', label: 'Customer interactions optimized' },
    ],
  },
];
