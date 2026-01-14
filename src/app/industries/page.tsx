import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Wifi, 
  Hotel, 
  Factory, 
  ShoppingCart, 
  ShoppingBag,
  Building2,
  ArrowRight
} from 'lucide-react';
import { Button, SectionHeading, Badge } from '@/components/ui';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Explore AXL Consulting\'s industry expertise across telecommunications, hospitality, manufacturing, retail, and eCommerce.',
};

const industryIcons: Record<string, any> = {
  telecommunications: Wifi,
  hospitality: Hotel,
  manufacturing: Factory,
  retail: ShoppingCart,
  ecommerce: ShoppingBag,
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Industries</Badge>
            <h1 className="text-display-md md:text-display-lg text-white mb-6">
              Deep Expertise Across Sectors
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We bring specialized knowledge, proven methodologies, and AI capabilities 
              to transform enterprises across key industries. Our sector expertise enables 
              us to speak your language and address your specific challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-16">
            {industries.map((industry, index) => {
              const Icon = industryIcons[industry.slug] || Building2;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={industry.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <Link href={`/industries/${industry.slug}`} className="block group">
                      <div className="aspect-[4/3] bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="h-24 w-24 text-white/20 group-hover:text-white/30 transition-colors" />
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex flex-wrap gap-2">
                            {industry.stats.slice(0, 3).map((stat, i) => (
                              <div key={i} className="bg-white/10 backdrop-blur rounded-lg px-3 py-1.5">
                                <span className="text-white font-semibold">{stat.value}</span>
                                <span className="text-gray-400 text-sm ml-1">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary-600" />
                    </div>
                    <Badge variant="primary" className="mb-4">{industry.name}</Badge>
                    <h2 className="text-display-sm text-navy-900 mb-4">
                      {industry.tagline}
                    </h2>
                    <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                        Key Challenges We Address
                      </h3>
                      <div className="space-y-2">
                        {industry.challenges.slice(0, 3).map((challenge, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                            <span className="text-charcoal-600">{challenge.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button href={`/industries/${industry.slug}`} variant="primary" showArrow>
                      Explore {industry.name}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Cross-Industry"
            title="Universal AI Capabilities"
            description="Regardless of industry, we bring core AI and transformation capabilities that drive results."
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Strategy & Implementation',
                description: 'Enterprise-grade AI roadmaps, use case identification, and production deployment across any industry context.',
              },
              {
                title: 'Process Automation',
                description: 'Intelligent automation of manual processes using RPA, ML, and LLMs to drive efficiency and accuracy.',
              },
              {
                title: 'Data & Analytics',
                description: 'End-to-end data strategy, platform implementation, and advanced analytics to unlock business insights.',
              },
            ].map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{capability.title}</h3>
                <p className="text-charcoal-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-white mb-6">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Our AI and transformation capabilities extend across sectors. 
            Let&apos;s discuss how we can help your specific industry context.
          </p>
          <Button href="/contact" variant="white" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
