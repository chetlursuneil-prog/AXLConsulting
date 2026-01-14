import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain,
  Cpu,
  Zap,
  Shield,
  Code,
  Database,
  Network,
  Eye,
  MessageSquare,
  BarChart,
  Layers,
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button, SectionHeading, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'AI & Innovation',
  description: 'Discover AXL Consulting\'s AI philosophy, capabilities, and how we embed artificial intelligence across strategy, operations, and technology.',
};

const aiCapabilities = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models for prediction, classification, optimization, and anomaly detection across enterprise use cases.',
  },
  {
    icon: MessageSquare,
    title: 'Large Language Models',
    description: 'Enterprise LLM deployment including fine-tuning, prompt engineering, and integration with business workflows.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Visual inspection, document processing, and image analysis for quality control, automation, and insights.',
  },
  {
    icon: Network,
    title: 'Deep Learning',
    description: 'Neural network architectures for complex pattern recognition, sequence modeling, and generative applications.',
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics',
    description: 'Forecasting and predictive models for demand planning, risk assessment, and proactive decision-making.',
  },
  {
    icon: Code,
    title: 'NLP & Text Analytics',
    description: 'Natural language processing for sentiment analysis, entity extraction, summarization, and conversational AI.',
  },
];

const principles = [
  {
    title: 'Business Outcome First',
    description: 'We start with the business problem, not the technology. Every AI initiative is anchored in measurable value creation.',
  },
  {
    title: 'Production-Ready',
    description: 'We build AI systems designed for enterprise scale, with robust MLOps, monitoring, and continuous improvement.',
  },
  {
    title: 'Human-Centered',
    description: 'We design AI that augments human capability rather than replacing it, building trust and adoption.',
  },
  {
    title: 'Responsible AI',
    description: 'We embed ethics, fairness, and transparency into every AI system we build and deploy.',
  },
];

export default function AIInnovationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">AI & Innovation</Badge>
            <h1 className="text-display-md md:text-display-lg text-white mb-6">
              AI-First by Design, Not Afterthought
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We don&apos;t bolt AI onto traditional consulting—we&apos;ve rebuilt the consulting 
              model from the ground up with artificial intelligence at its core. This means 
              faster insights, better decisions, and accelerated outcomes for every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="primary" className="mb-4">Our Philosophy</Badge>
              <h2 className="text-display-sm text-navy-900 mb-6">
                AI That Delivers Business Value
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                Too many AI initiatives fail because they start with technology rather than 
                business outcomes. We take a different approach: every AI capability we deploy 
                is directly tied to measurable value creation—whether that&apos;s revenue growth, 
                cost reduction, risk mitigation, or competitive advantage.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                Our AI-first approach means artificial intelligence is embedded in how we 
                analyze problems, design solutions, and deliver results. From machine learning 
                models that accelerate our diagnostic work to LLMs that power intelligent 
                automation, AI amplifies everything we do.
              </p>
            </div>
            
            <div className="bg-navy-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6">Our AI Principles</h3>
                <div className="space-y-6">
                  {principles.map((principle, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{principle.title}</h4>
                        <p className="text-sm text-gray-400">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="AI Capabilities"
            title="Enterprise-Grade AI Technologies"
            description="We leverage the full spectrum of AI technologies to solve complex business problems and drive transformation."
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <capability.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-charcoal-600">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No-Code & Automation Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
                  <Zap className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">Rapid Deployment</h3>
                  <p className="text-sm text-white/80">AI solutions in weeks, not months</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                  <Settings className="h-8 w-8 text-primary-600 mb-4" />
                  <h3 className="font-semibold text-navy-900 mb-2">Configurable</h3>
                  <p className="text-sm text-charcoal-600">Business-user friendly interfaces</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                  <Layers className="h-8 w-8 text-primary-600 mb-4" />
                  <h3 className="font-semibold text-navy-900 mb-2">Scalable</h3>
                  <p className="text-sm text-charcoal-600">From pilot to enterprise rollout</p>
                </div>
                <div className="bg-navy-900 rounded-2xl p-6 text-white">
                  <Database className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">Integrated</h3>
                  <p className="text-sm text-gray-400">Connect to existing systems</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge variant="primary" className="mb-4">No-Code & Automation</Badge>
              <h2 className="text-display-sm text-navy-900 mb-6">
                Democratizing AI Across the Enterprise
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                We believe AI should be accessible to everyone—not just data scientists. 
                Our approach emphasizes no-code and low-code platforms that enable business 
                users to build, deploy, and iterate on AI solutions independently.
              </p>
              <div className="space-y-4">
                {[
                  'No-code AI platforms for citizen developers',
                  'Pre-built AI components and templates',
                  'Visual workflow builders for automation',
                  'Self-service analytics and insights',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible AI Section */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="gold" className="mb-4">Responsible AI</Badge>
              <h2 className="text-display-sm text-white mb-6">
                AI You Can Trust
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We believe responsible AI isn&apos;t just about risk management—it&apos;s about 
                building AI systems that create sustainable value. Our approach embeds 
                ethics, fairness, and governance into every AI system we deploy.
              </p>
              <div className="space-y-4">
                {[
                  'Bias detection and mitigation frameworks',
                  'Explainable AI for transparent decision-making',
                  'Privacy-preserving AI techniques',
                  'Continuous monitoring and governance',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">AI Governance Framework</h3>
              <div className="space-y-4">
                {[
                  { title: 'Risk Assessment', desc: 'Systematic evaluation of AI applications for potential harms' },
                  { title: 'Technical Controls', desc: 'Bias testing, explainability tools, and monitoring systems' },
                  { title: 'Organizational Accountability', desc: 'Clear ownership and escalation paths for AI decisions' },
                  { title: 'Continuous Improvement', desc: 'Regular audits and model performance reviews' },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MenuSense Product Highlight */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="gold" className="mb-4">Featured Product</Badge>
                <h2 className="text-display-sm text-white mb-6">
                  MenuSense: AI-Powered Restaurant Intelligence
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  MenuSense is our flagship AI product—a no-code platform that brings 
                  enterprise-grade menu intelligence to restaurants of all sizes. It 
                  demonstrates our philosophy of making sophisticated AI accessible 
                  through intuitive design.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: '12-18%', label: 'Margin Improvement' },
                    { value: '25-35%', label: 'Waste Reduction' },
                    { value: '80%', label: 'Time Savings' },
                    { value: '<5 min', label: 'Time to Insight' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3">
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Button href="/case-studies/menusense" variant="white" showArrow>
                  Learn About MenuSense
                </Button>
              </div>
              
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="h-4 w-4 text-primary-400" />
                      <span className="text-sm font-medium text-white">Demand Forecasting</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-primary-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart className="h-4 w-4 text-primary-400" />
                      <span className="text-sm font-medium text-white">Cost Intelligence</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-primary-400" />
                      <span className="text-sm font-medium text-white">LLM Insights</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-5/6 bg-primary-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-navy-900 mb-6">
            Ready to Explore AI for Your Enterprise?
          </h2>
          <p className="text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI capabilities can help you achieve breakthrough 
            results and sustainable competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Start a Conversation
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View AI Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
