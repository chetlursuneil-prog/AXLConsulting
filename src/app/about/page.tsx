import { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPin, 
  Globe, 
  Award, 
  Target, 
  Users, 
  Lightbulb,
  ChevronRight,
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import { Button, SectionHeading, Badge, StatsGrid } from '@/components/ui';
import { getTeamData } from '@/lib/get-team';
import { siteConfig } from '@/data/site-config';
import type { TeamMember } from '@/data/team';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AXL Consulting, a senior-led AI-first consulting firm delivering transformation globally. Meet our founders and understand our approach.',
};

export default function AboutPage() {
  const data = getTeamData();
  const founders: TeamMember[] = data?.founders ?? [];
  const teamStats = data?.teamStats ?? [];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">About AXL Consulting</Badge>
            <h1 className="text-display-md md:text-display-lg text-navy-900 mb-6">
              Senior Expertise. AI Innovation. Global Impact.
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              AXL Consulting is a senior leadership–led, AI-first management consulting firm headquartered 
              in Copenhagen, Denmark. We combine decades of enterprise transformation experience 
              with cutting-edge artificial intelligence to deliver measurable business outcomes 
              for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h2>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                To democratize access to enterprise-grade AI capabilities, enabling organizations 
                of all sizes to harness the transformative power of artificial intelligence and 
                intelligent automation. We believe that AI should deliver measurable business 
                value—not just technological novelty.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h2>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                A world where AI amplifies human potential, where intelligent automation frees 
                people to focus on creativity and connection, and where data-driven decisions 
                lead to better outcomes for businesses, employees, and society. We're building 
                the bridge between AI's promise and enterprise reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Approach"
            title="AI-First by Design"
            description="We don't bolt AI onto traditional consulting—we build it into the foundation of everything we do."
          />
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Clarity',
                description: 'We start with business outcomes, not technology. Every engagement begins with a clear understanding of the value to be created and the metrics that matter.',
                points: ['Business case development', 'Value realization roadmaps', 'Executive alignment'],
              },
              {
                title: 'AI-Embedded Execution',
                description: 'AI is woven throughout our delivery approach—from analysis and design to implementation and optimization. We leverage ML, LLMs, and automation at every stage.',
                points: ['ML-powered analytics', 'Intelligent automation', 'Continuous optimization'],
              },
              {
                title: 'Sustainable Capability',
                description: 'We build lasting organizational capabilities, not just point solutions. Our goal is to leave you with the skills, tools, and processes for ongoing AI-driven improvement.',
                points: ['Knowledge transfer', 'Capability building', 'Long-term partnership'],
              },
            ].map((approach, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{approach.title}</h3>
                <p className="text-charcoal-600 mb-6">{approach.description}</p>
                <ul className="space-y-2">
                  {approach.points.map((point, i) => (
                    <li key={i} className="flex items-center text-sm text-charcoal-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Leadership"
            title="Senior Partners, Global Experience"
            description="Our founders bring over 50 years of combined experience leading enterprise transformations across six continents."
          />
          
          <div className="mt-16 space-y-16">
            {founders.map((founder, index) => (
              <div 
                key={founder.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-6 mb-8">
                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                          {founder.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={founder.image} alt={founder.name} className="object-cover w-full h-full" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-3xl font-bold text-white">
                              {founder.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{founder.name}</h3>
                          <p className="text-primary-400 font-medium">{founder.role}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Experience</p>
                          <p className="text-xl font-semibold">{founder.experience}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Global Reach</p>
                          <p className="text-xl font-semibold">{founder.regions.length} Regions</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-gray-400 text-sm mb-2">Education</p>
                        <ul className="space-y-1">
                          {founder.education.map((edu, i) => (
                            <li key={i} className="text-sm">{edu}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300"
                      >
                        Connect on LinkedIn
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Badge variant="gold" className="mb-4">{founder.title}</Badge>
                  <div className="space-y-4 text-charcoal-600 leading-relaxed">
                    {founder.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-navy-900 mb-4">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-navy-900 mb-4">Regional Experience</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.regions.map((region, i) => (
                        <span key={i} className="inline-flex items-center text-sm text-charcoal-600">
                          <MapPin className="h-3 w-3 mr-1 text-primary-600" />
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-navy">
        <div className="container-custom">
          <StatsGrid
            stats={[
              { value: '50+', label: 'Years Combined Experience' },
              { value: '40+', label: 'Countries Served' },
              { value: '75+', label: 'Transformations Delivered' },
              { value: '95%', label: 'Client Retention Rate' },
            ]}
            theme="dark"
          />
        </div>
      </section>

      {/* Global Presence Section */}
      <section id="locations" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Global Presence"
            title="Strategic Locations, Global Reach"
            description="With offices across Europe and Asia, we deliver local expertise with global perspective."
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {siteConfig.locations.map((location) => (
              <div
                key={location.city}
                className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  {location.type === 'Headquarters' && (
                    <Badge variant="gold" size="sm">HQ</Badge>
                  )}
                </div>
                <h3 className="font-semibold text-navy-900">{location.city}</h3>
                <p className="text-sm text-charcoal-600">{location.country}</p>
                <p className="text-xs text-charcoal-500 mt-2">{location.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides Us"
            description="The principles that define how we work and the relationships we build."
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We hold ourselves to the highest standards in everything we do, from analysis to execution.',
              },
              {
                icon: Users,
                title: 'Partnership',
                description: 'We work as an extension of your team, invested in your success as if it were our own.',
              },
              {
                icon: Target,
                title: 'Impact',
                description: 'We measure success by the tangible value we create, not the volume of our activity.',
              },
              {
                icon: Globe,
                title: 'Integrity',
                description: 'We build relationships on trust, transparency, and honest counsel—even when it\'s difficult.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{value.title}</h3>
                <p className="text-sm text-charcoal-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-white mb-6">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to explore how AXL Consulting can help transform your enterprise? 
            We&apos;d welcome the opportunity to learn about your challenges and ambitions.
          </p>
          <Button href="/contact" variant="white" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
