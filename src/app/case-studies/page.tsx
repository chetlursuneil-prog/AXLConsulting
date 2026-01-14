import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button, SectionHeading, Badge } from '@/components/ui';
import { caseStudies } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore how AXL Consulting has helped leading organizations transform through AI-powered strategy and execution.',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Case Studies</Badge>
            <h1 className="text-display-md md:text-display-lg text-white mb-6">
              Proven Results, Measurable Impact
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore how we&apos;ve helped leading organizations transform their operations 
              and achieve breakthrough results through AI-powered strategy and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-16">
            {caseStudies.map((caseStudy, index) => (
              <div 
                key={caseStudy.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Link href={`/case-studies/${caseStudy.slug}`} className="block group">
                    <div className="aspect-[4/3] bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/10 text-8xl font-bold">
                          {caseStudy.client.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute top-6 left-6">
                        <Badge variant="navy">{caseStudy.industry}</Badge>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="grid grid-cols-2 gap-4">
                          {caseStudy.outcomes.metrics.slice(0, 2).map((metric, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-3">
                              <div className="text-2xl font-bold text-white">{metric.value}</div>
                              <div className="text-xs text-gray-400">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="primary">{caseStudy.clientType}</Badge>
                    <span className="text-sm text-charcoal-500">•</span>
                    <span className="text-sm text-charcoal-500">{caseStudy.duration}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                    {caseStudy.title}
                  </h2>
                  <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                    {caseStudy.summary}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                      Key Results
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.outcomes.metrics.slice(0, 4).map((metric, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-primary-600">{metric.value}</div>
                          <div className="text-sm text-charcoal-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button href={`/case-studies/${caseStudy.slug}`} variant="primary" showArrow>
                      Read Full Case Study
                    </Button>
                    {caseStudy.externalUrl && (
                      <Button href={caseStudy.externalUrl} variant="outline" showArrow>
                        Visit Site
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-navy-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar breakthrough results 
            through AI-powered transformation.
          </p>
          <Button href="/contact" variant="primary" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
