import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Layers, 
  Target, 
  Cpu, 
  Brain, 
  Shield,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button, SectionHeading, Badge } from '@/components/ui';
import { services, serviceCategories } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore AXL Consulting\'s AI-enabled transformation services including digital transformation, strategic consulting, technology operations, and more.',
};

const iconMap: Record<string, any> = {
  Layers,
  Target,
  Cpu,
  Brain,
  Shield,
  Users,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Our Services</Badge>
            <h1 className="text-display-md md:text-display-lg text-white mb-6">
              AI-Enabled Transformation Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From strategy through execution, we deliver comprehensive transformation 
              capabilities powered by artificial intelligence and intelligent automation. 
              Every service is designed to create measurable business value.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <Badge variant="primary" className="mb-4">Our Approach</Badge>
              <h2 className="text-display-sm text-navy-900 mb-6">
                AI-First by Design
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                We don&apos;t simply add AI to traditional consulting approaches—we&apos;ve rebuilt 
                the consulting model from the ground up with artificial intelligence at its core. 
                This means faster insights, better decisions, and accelerated outcomes.
              </p>
              
              <div className="space-y-4">
                {[
                  'Machine learning embedded in every analysis',
                  'LLM-powered document and data processing',
                  'Automated monitoring and optimization',
                  'No-code solutions for sustainable capability',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Layers;
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="block bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-soft-lg hover:border-primary-200 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                        <Icon className="h-7 w-7 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {service.shortTitle}
                        </h3>
                        <p className="text-charcoal-600 mb-4">
                          {service.tagline}
                        </p>
                        <div className="flex items-center text-sm font-medium text-primary-600">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Service Areas"
            title="Comprehensive Capabilities"
            description="Our services span the full transformation lifecycle, from strategic vision to operational excellence."
          />
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category) => {
              const categoryServices = services.filter(s => 
                category.services.includes(s.slug)
              );
              
              return (
                <div key={category.id} className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-6 pb-4 border-b border-gray-100">
                    {category.name}
                  </h3>
                  <ul className="space-y-4">
                    {categoryServices.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center justify-between text-charcoal-700 hover:text-primary-600 transition-colors group"
                        >
                          <span>{service.shortTitle}</span>
                          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Capabilities Highlight */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="gold" className="mb-4">AI Capabilities</Badge>
              <h2 className="text-display-sm text-white mb-6">
                Powered by Enterprise AI
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Every service we deliver is enhanced by our proprietary AI capabilities. 
                We leverage the full spectrum of AI technologies—from machine learning 
                and natural language processing to computer vision and predictive analytics.
              </p>
              <Button href="/ai-innovation" variant="white" showArrow>
                Explore Our AI Approach
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Machine Learning', desc: 'Predictive analytics and optimization' },
                { title: 'LLMs & NLP', desc: 'Intelligent document processing' },
                { title: 'Computer Vision', desc: 'Visual inspection and analysis' },
                { title: 'MLOps', desc: 'Production AI at enterprise scale' },
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-navy-900 mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI-enabled services can help you achieve 
            breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Start a Conversation
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
