import Link from 'next/link';
import { 
  ArrowRight, 
  Brain, 
  Cpu, 
  Target, 
  Layers, 
  Shield,
  Users,
  Globe,
  Zap,
  TrendingUp,
  Building2,
  Hotel,
  Factory,
  ShoppingCart,
  ShoppingBag,
  Wifi,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { Button, SectionHeading, Card, StatsGrid, Badge } from '@/components/ui';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { featuredCaseStudies } from '@/data/case-studies';
import { featuredInsights } from '@/data/insights';
import { getTeamData } from '@/lib/get-team';

const iconMap: Record<string, any> = {
  Layers,
  Target,
  Cpu,
  Brain,
  Shield,
  Users,
};

const industryIcons: Record<string, any> = {
  telecommunications: Wifi,
  hospitality: Hotel,
  manufacturing: Factory,
  retail: ShoppingCart,
  ecommerce: ShoppingBag,
};

export default function HomePage() {
  const data = getTeamData();
  const founders = data?.founders ?? [];
  const teamStats = data?.teamStats ?? [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10 py-32">
          <div className="max-w-4xl">
            <Badge variant="gold" className="mb-6">
              AI-First Consulting
            </Badge>
            <h1 className="text-display-lg md:text-display-xl text-white mb-6">
              Transform Your Enterprise with{' '}
              <span className="text-gradient-gold">AI-Powered</span> Strategy & Execution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              AXL Consulting is a senior-led, AI-first consulting firm delivering measurable 
              business outcomes through strategy, digital transformation, and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="white" size="lg" showArrow>
                Start a Conversation
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                View Our Work
              </Button>
            </div>
            
            {/* Hero Stats */}
            <div className="mt-16 pt-16 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400 mt-1">Years Combined Experience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">40+</div>
                  <div className="text-sm text-gray-400 mt-1">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">200+</div>
                  <div className="text-sm text-gray-400 mt-1">Transformations Delivered</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">€2B+</div>
                  <div className="text-sm text-gray-400 mt-1">Value Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="primary" className="mb-4">Why AXL Consulting</Badge>
              <h2 className="text-display-sm md:text-display-md text-navy-900 mb-6">
                Senior Expertise Meets AI Innovation
              </h2>
              <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
                We combine decades of C-suite advisory experience with cutting-edge AI and automation 
                capabilities. Our founders have led enterprise transformations across six continents, 
                bringing a unique perspective that bridges strategic vision with technical execution.
              </p>
              <div className="space-y-4">
                {[
                  'AI-native approach embedded in every engagement',
                  'Senior partners directly involved in all projects',
                  'Measurable outcomes tied to business value',
                  'Global delivery with local expertise',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button href="/about" variant="primary" showArrow>
                  Learn About Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <Brain className="h-8 w-8 text-primary-600 mb-4" />
                    <h3 className="font-semibold text-navy-900 mb-2">AI Strategy</h3>
                    <p className="text-sm text-charcoal-600">Enterprise AI roadmaps and implementation</p>
                  </div>
                  <div className="bg-navy-900 rounded-2xl p-6 text-white">
                    <TrendingUp className="h-8 w-8 text-primary-400 mb-4" />
                    <h3 className="font-semibold mb-2">Value Realization</h3>
                    <p className="text-sm text-gray-400">Measurable ROI on every engagement</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <Globe className="h-8 w-8 text-primary-600 mb-4" />
                    <h3 className="font-semibold text-navy-900 mb-2">Global Reach</h3>
                    <p className="text-sm text-charcoal-600">Operations across 5 continents</p>
                  </div>
                  <div className="bg-primary-600 rounded-2xl p-6 text-white">
                    <Zap className="h-8 w-8 text-white mb-4" />
                    <h3 className="font-semibold mb-2">Rapid Delivery</h3>
                    <p className="text-sm text-white/80">Accelerated outcomes through automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Services"
            title="AI-Enabled Transformation Services"
            description="From strategy through execution, we deliver comprehensive transformation capabilities powered by artificial intelligence and intelligent automation."
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => {
              const Icon = iconMap[service.icon] || Layers;
              return (
                <Card
                  key={service.id}
                  title={service.shortTitle}
                  description={service.tagline}
                  icon={Icon}
                  href={`/services/${service.slug}`}
                  showArrow
                  variant="default"
                />
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline" showArrow>
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* AI Philosophy Section */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="gold" className="mb-4">AI & Innovation</Badge>
              <h2 className="text-display-sm md:text-display-md text-white mb-6">
                AI-First by Design, Not Afterthought
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We don&apos;t bolt AI onto traditional consulting—we build it into the foundation 
                of everything we do. Our approach leverages machine learning, large language models, 
                and intelligent automation to deliver faster insights, better decisions, and 
                measurable outcomes.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: 'Machine Learning', desc: 'Predictive analytics & optimization' },
                  { title: 'Large Language Models', desc: 'Intelligent document & data processing' },
                  { title: 'No-Code Platforms', desc: 'Democratized AI for business users' },
                  { title: 'Responsible AI', desc: 'Enterprise governance & ethics' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button href="/ai-innovation" variant="white" showArrow>
                Discover Our AI Approach
              </Button>
            </div>
            <div className="relative">
              <div className="bg-navy-800/50 backdrop-blur rounded-2xl p-8 border border-navy-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-sm">
                  <p className="text-gray-500"># AXL AI Transformation Engine</p>
                  <p className="text-primary-400 mt-2">import</p>
                  <p className="text-white ml-4">{`{ strategy, execution, value }`}</p>
                  <p className="text-primary-400 mt-4">class <span className="text-white">AITransformation</span>:</p>
                  <p className="text-gray-400 ml-4">def __init__(self):</p>
                  <p className="text-white ml-8">self.approach = &quot;AI-first&quot;</p>
                  <p className="text-white ml-8">self.outcomes = &quot;measurable&quot;</p>
                  <p className="text-white ml-8">self.delivery = &quot;accelerated&quot;</p>
                  <p className="text-gray-400 ml-4 mt-4">def transform(self, enterprise):</p>
                  <p className="text-primary-400 ml-8">return</p>
                  <p className="text-green-400 ml-12">enterprise.evolve()</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Industries"
            title="Deep Expertise Across Sectors"
            description="We bring specialized knowledge and AI capabilities to transform enterprises across key industries."
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((industry) => {
              const Icon = industryIcons[industry.slug] || Building2;
              return (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="group bg-white rounded-xl p-6 text-center hover:shadow-soft-lg transition-all duration-300 border border-gray-100 hover:border-primary-200"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <Icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 group-hover:text-primary-600 transition-colors">
                    {industry.name}
                  </h3>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/industries" variant="outline" showArrow>
              Explore All Industries
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Case Studies"
            title="Proven Results, Measurable Impact"
            description="Explore how we've helped leading organizations transform their operations and achieve breakthrough results with AI."
          />
          
          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            {featuredCaseStudies.slice(0, 2).map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={`/case-studies/${caseStudy.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-navy-900 to-navy-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-6xl font-bold">
                      {caseStudy.client.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="navy">{caseStudy.industry}</Badge>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-charcoal-600 mb-6 line-clamp-2">
                    {caseStudy.summary}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {caseStudy.outcomes.metrics.slice(0, 2).map((metric, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-primary-600">{metric.value}</div>
                        <div className="text-sm text-charcoal-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/case-studies" variant="primary" showArrow>
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Leadership"
            title="Senior Partners, Global Experience"
            description="Our founders bring over 50 years of combined experience leading enterprise transformations across the globe."
          />
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {founder.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={founder.image} alt={founder.name} className="object-cover w-full h-full" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white text-3xl font-bold">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy-900">{founder.name}</h3>
                    <p className="text-primary-600 font-medium">{founder.role}</p>
                    <p className="text-sm text-charcoal-500 mt-1">{founder.experience} experience</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {founder.expertise.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-charcoal-600 line-clamp-3">
                  {founder.bio[0]}
                </p>
                <Link
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Connect on LinkedIn
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/about" variant="outline" showArrow>
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Insights"
            title="Thought Leadership"
            description="Perspectives on AI, transformation, and the future of enterprise from our senior partners."
          />
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {featuredInsights.slice(0, 3).map((insight) => (
              <Link
                key={insight.id}
                href={`/insights/${insight.slug}`}
                className="group"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl mb-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="primary">{insight.category}</Badge>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-sm text-charcoal-600 mb-3 line-clamp-2">
                  {insight.excerpt}
                </p>
                <div className="flex items-center text-sm text-charcoal-500">
                  <span>{insight.author}</span>
                  <span className="mx-2">·</span>
                  <span>{insight.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/insights" variant="outline" showArrow>
              Read All Insights
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-display-sm md:text-display-md text-white mb-6 max-w-3xl mx-auto">
            Ready to Transform Your Enterprise with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how AXL Consulting can help you achieve breakthrough results 
            through AI-powered strategy and execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="white" size="lg" showArrow>
              Start a Conversation
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
