import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ChevronRight,
  CheckCircle,
  Brain,
  Target,
  TrendingUp,
  Quote,
  ArrowRight
} from 'lucide-react';
import { Button, SectionHeading, Badge } from '@/components/ui';
import { caseStudies } from '@/data/case-studies';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  
  if (!caseStudy) {
    notFound();
  }

  const otherCaseStudies = caseStudies.filter((cs) => cs.slug !== params.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{caseStudy.client}</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="gold">{caseStudy.industry}</Badge>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{caseStudy.duration}</span>
              </div>
              <h1 className="text-display-sm md:text-display-md text-white mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {caseStudy.tagline}
              </p>
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-gray-400 text-sm">Client</p>
                  <p className="text-white font-semibold">{caseStudy.client}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Type</p>
                  <p className="text-white font-semibold">{caseStudy.clientType}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {caseStudy.outcomes.metrics.map((metric, index) => (
                <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-primary-400 font-medium mb-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-gray-400">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xl text-charcoal-700 leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="primary" className="mb-4">The Challenge</Badge>
              <h2 className="text-display-sm text-navy-900 mb-6">
                Understanding the Problem
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                {caseStudy.challenge.overview}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
              <h3 className="font-semibold text-navy-900 mb-6">Key Challenges</h3>
              <ul className="space-y-4">
                {caseStudy.challenge.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-charcoal-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Solved It"
            description={caseStudy.approach.overview}
            alignment="left"
          />
          
          <div className="mt-12 space-y-8">
            {caseStudy.approach.phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">
                      {phase.name}
                    </h3>
                    <p className="text-charcoal-600 mb-4">
                      {phase.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.activities.map((activity, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-charcoal-600">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Role Section */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <SectionHeading
            eyebrow="AI & Automation"
            title="The Role of AI"
            description={caseStudy.aiRole.overview}
            theme="dark"
          />
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.aiRole.technologies.map((tech, index) => (
              <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="h-6 w-6 text-primary-400" />
                  <h3 className="font-semibold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  {tech.application}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Results"
            title="Measurable Outcomes"
            description={caseStudy.outcomes.overview}
          />
          
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-navy-900 mb-6">Business Impact</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.outcomes.businessImpact.map((impact, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-soft border border-gray-100">
                  <TrendingUp className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">{impact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="h-12 w-12 text-primary-200 mx-auto mb-6" />
              <blockquote className="text-2xl text-navy-900 font-medium leading-relaxed mb-6">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-navy-900">{caseStudy.testimonial.author}</p>
                <p className="text-charcoal-600">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="More Case Studies"
            title="Explore More Success Stories"
          />
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCaseStudies.slice(0, 3).map((cs) => (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.slug}`}
                className="group"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl mb-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/10 text-6xl font-bold">
                      {cs.client.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="navy">{cs.industry}</Badge>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-charcoal-600 line-clamp-2">
                  {cs.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-white mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you transform your organization with AI-powered solutions.
          </p>
          <Button href="/contact" variant="white" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
