import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Wifi, 
  Hotel, 
  Factory, 
  ShoppingCart, 
  ShoppingBag,
  Building2,
  ChevronRight,
  CheckCircle,
  Brain,
  Target,
  TrendingUp
} from 'lucide-react';
import { Button, SectionHeading, Badge } from '@/components/ui';
import { industries } from '@/data/industries';

const industryIcons: Record<string, any> = {
  telecommunications: Wifi,
  hospitality: Hotel,
  manufacturing: Factory,
  retail: ShoppingCart,
  ecommerce: ShoppingBag,
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: industry.name,
    description: industry.description,
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find((i) => i.slug === params.slug);
  
  if (!industry) {
    notFound();
  }

  const Icon = industryIcons[industry.slug] || Building2;
  const otherIndustries = industries.filter((i) => i.slug !== params.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{industry.name}</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <Badge variant="gold" className="mb-4">{industry.name}</Badge>
              <h1 className="text-display-md md:text-display-lg text-white mb-6">
                {industry.tagline}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {industry.description}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {industry.stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-5 text-center border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Industry Challenges"
            title="Understanding Your Context"
            alignment="left"
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-charcoal-600">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Help"
            description={`Our AI-first approach to ${industry.name.toLowerCase()} transformation delivers measurable results.`}
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {industry.approach.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-primary-600 font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Transformations Section */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <SectionHeading
            eyebrow="AI-Enabled Transformations"
            title="Intelligent Solutions"
            description="We leverage AI across every transformation to deliver faster, more accurate, and more sustainable results."
            theme="dark"
          />
          
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {industry.transformations.map((transformation, index) => (
              <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="h-6 w-6 text-primary-400" />
                  <h3 className="text-lg font-semibold text-white">
                    {transformation.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  {transformation.description}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-primary-400 font-medium mb-2">AI Role:</p>
                  <p className="text-sm text-gray-300">
                    {transformation.aiRole}
                  </p>
                </div>
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
            title="Business Outcomes"
            description="Typical results our clients achieve through AI-enabled transformation."
          />
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.outcomes.map((outcome, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 text-center">
                <TrendingUp className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {outcome.metric}
                </div>
                <p className="text-sm text-charcoal-600">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Explore More"
            title="Other Industries"
          />
          
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {otherIndustries.map((otherIndustry) => {
              const OtherIcon = industryIcons[otherIndustry.slug] || Building2;
              return (
                <Link
                  key={otherIndustry.id}
                  href={`/industries/${otherIndustry.slug}`}
                  className="bg-white rounded-xl p-6 text-center shadow-soft border border-gray-100 hover:shadow-soft-lg hover:border-primary-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                    <OtherIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 group-hover:text-primary-600 transition-colors">
                    {otherIndustry.name}
                  </h3>
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
            Ready to Transform Your {industry.name} Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI-enabled approach can help you address your 
            specific challenges and achieve breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="white" size="lg" showArrow>
              Start a Conversation
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
