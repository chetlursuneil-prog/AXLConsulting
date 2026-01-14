import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Briefcase, MapPin, Globe, Users, Rocket, Brain, Heart } from 'lucide-react';
import { Button, Card, SectionHeading, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join AXL Consulting and work with senior leaders on transformative AI and digital innovation projects for global enterprises.',
};

const values = [
  {
    icon: Brain,
    title: 'Excellence in Expertise',
    description: 'We operate at the highest levels of professional competence, delivering solutions that meet rigorous enterprise standards.',
  },
  {
    icon: Users,
    title: 'Collaborative Leadership',
    description: 'Every team member contributes to strategic discussions. We value diverse perspectives and collective wisdom.',
  },
  {
    icon: Rocket,
    title: 'Innovation-First Mindset',
    description: 'We continuously explore emerging technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Client Partnership',
    description: 'We treat client challenges as our own, building lasting relationships through genuine commitment to their success.',
  },
];

const benefits = [
  'Competitive compensation packages',
  'Flexible remote-first work environment',
  'Global project exposure',
  'Direct client engagement opportunities',
  'Continuous learning and development',
  'Collaborative, senior-led teams',
  'Work-life balance focus',
  'International travel opportunities',
];

const openPositions = [
  {
    title: 'Senior AI/ML Consultant',
    location: 'Copenhagen / Remote',
    type: 'Full-time',
    department: 'AI & Automation',
    description: 'Lead AI transformation initiatives for enterprise clients, designing and implementing production-ready ML solutions.',
  },
  {
    title: 'Digital Transformation Lead',
    location: 'Hyderabad / Remote',
    type: 'Full-time',
    department: 'Digital Transformation',
    description: 'Drive end-to-end digital transformation programs, from strategy through execution, for global organizations.',
  },
  {
    title: 'Technology Strategy Consultant',
    location: 'Nice / Remote',
    type: 'Full-time',
    department: 'Strategic Consulting',
    description: 'Advise C-suite executives on technology-enabled business strategies and enterprise architecture decisions.',
  },
  {
    title: 'Program Assurance Manager',
    location: 'Istanbul / Remote',
    type: 'Full-time',
    department: 'Program Assurance',
    description: 'Provide independent oversight of complex technology programs, ensuring delivery excellence and risk management.',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-navy text-white">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Careers</span>
          </nav>
          
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-6 text-white border-white/30">
              Join Our Team
            </Badge>
            <h1 className="text-display-md md:text-display-lg mb-6">
              Build the Future of Enterprise Innovation
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              Join a team of senior practitioners who are reshaping how global enterprises 
              approach digital transformation and AI adoption. We&apos;re not just consultants—
              we&apos;re partners in transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Why AXL */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why AXL"
            title="A Different Kind of Consulting"
            description="We've built AXL on the belief that consulting should be done differently. Senior expertise, genuine partnership, and a commitment to lasting impact."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Senior-Led, Always
              </h3>
              <p className="text-charcoal-600">
                At AXL, you work alongside experienced leaders who bring decades of 
                real-world expertise. No hierarchy of junior staff—every engagement 
                features senior practitioners who understand the nuances of enterprise 
                transformation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Global Reach, Personal Impact
              </h3>
              <p className="text-charcoal-600">
                With offices across Copenhagen, Hyderabad, Nice, Istanbul, and Helsinki, 
                you&apos;ll have opportunities to work on international projects while being 
                part of an intimate team where your contributions matter.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                AI-First Innovation
              </h3>
              <p className="text-charcoal-600">
                We&apos;re at the forefront of enterprise AI adoption, developing proprietary 
                products like MenuSense while helping clients navigate the AI transformation 
                landscape. You&apos;ll work with cutting-edge technology daily.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Meaningful Work
              </h3>
              <p className="text-charcoal-600">
                Every project we undertake aims to create lasting, measurable impact. 
                You won&apos;t just produce deliverables—you&apos;ll help transform how organizations 
                operate, compete, and serve their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            description="These principles guide every decision we make and every engagement we undertake."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-charcoal-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Opportunities"
            description="We're always looking for exceptional talent to join our team. Explore our current openings."
          />
          
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-navy-900">{position.title}</h3>
                      <Badge variant="outline">{position.type}</Badge>
                    </div>
                    <p className="text-charcoal-600 mb-3">{position.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-500">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="md" href="/contact">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Don&apos;t See the Right Role?
            </h3>
            <p className="text-charcoal-600 mb-6 max-w-2xl mx-auto">
              We&apos;re always interested in connecting with exceptional professionals. 
              Send us your resume and let us know how you could contribute to our team.
            </p>
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6 text-white border-white/30">
                Benefits & Perks
              </Badge>
              <h2 className="text-display-sm mb-6">
                Supporting Your Success
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                We believe in taking care of our team. From competitive compensation to 
                flexible work arrangements, we&apos;re committed to creating an environment 
                where you can do your best work.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Global Presence"
            title="Where We Work"
            description="Our distributed team spans multiple time zones, enabling 24/7 client support and diverse perspectives."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { city: 'Copenhagen', country: 'Denmark', label: 'Headquarters' },
              { city: 'Hyderabad', country: 'India', label: 'Technology Hub' },
              { city: 'Nice', country: 'France', label: 'European Office' },
              { city: 'Istanbul', country: 'Turkey', label: 'Regional Office' },
              { city: 'Helsinki', country: 'Finland', label: 'Nordic Office' },
            ].map((office) => (
              <div key={office.city} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-navy-900">{office.city}</h3>
                <p className="text-sm text-charcoal-500">{office.country}</p>
                <p className="text-xs text-primary-600 mt-1">{office.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-navy-900 mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto">
            If you&apos;re passionate about technology, driven by excellence, and ready 
            to make an impact, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Apply Now
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Learn About Our Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
