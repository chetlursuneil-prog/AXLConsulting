import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Layers, 
  Target, 
  Cpu, 
  Brain, 
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { Button, SectionHeading, Badge } from '@/components/ui';
import { services } from '@/data/services';

const iconMap: Record<string, any> = {
  Layers,
  Target,
  Cpu,
  Brain,
  Shield,
  Users,
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.shortTitle,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Layers;
  const otherServices = services.filter((s) => s.slug !== params.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{service.shortTitle}</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <Badge variant="gold" className="mb-4">{service.shortTitle}</Badge>
            <h1 className="text-display-md md:text-display-lg text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Capabilities"
            title="What We Deliver"
            alignment="left"
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="primary" className="mb-4">AI-Enabled</Badge>
              <h2 className="text-display-sm text-navy-900 mb-6">
                Powered by Artificial Intelligence
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                Our {service.shortTitle.toLowerCase()} services leverage cutting-edge AI 
                technologies to accelerate delivery, improve accuracy, and create sustainable 
                competitive advantage.
              </p>
              <div className="space-y-4">
                {service.aiCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Brain className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-navy-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Key Deliverables</h3>
              <ul className="space-y-3">
                {service.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Results"
            title="Measurable Outcomes"
            description="We measure success by the tangible value we create. Here are typical outcomes our clients achieve."
          />
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.outcomes.map((outcome, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {outcome.split(' ')[0]}
                </div>
                <p className="text-sm text-charcoal-600">
                  {outcome.split(' ').slice(1).join(' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Related Services"
            title="Explore More Capabilities"
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((relatedService) => {
              const RelatedIcon = iconMap[relatedService.icon] || Layers;
              return (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.slug}`}
                  className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-soft-lg hover:border-primary-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <RelatedIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {relatedService.shortTitle}
                  </h3>
                  <p className="text-sm text-charcoal-600">
                    {relatedService.tagline}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our {service.shortTitle.toLowerCase()} capabilities 
            can help you achieve your transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="white" size="lg" showArrow>
              Start a Conversation
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              View Related Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
