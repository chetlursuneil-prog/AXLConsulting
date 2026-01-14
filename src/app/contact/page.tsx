import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail, Phone, MapPin, Globe, Clock, Send } from 'lucide-react';
import { Button, SectionHeading, Badge } from '@/components/ui';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with AXL Consulting. Let\'s discuss how we can help transform your organization with AI-powered solutions.',
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a message and we\'ll respond within 24 hours.',
    contact: siteConfig.contact.email,
    action: `mailto:${siteConfig.contact.email}`,
    actionLabel: 'Send Email',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team during business hours.',
    contact: siteConfig.contact.phone,
    action: `tel:${siteConfig.contact.phone.replace(/\s/g, '')}`,
    actionLabel: 'Call Now',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'We\'re available across multiple time zones.',
    contact: 'Mon-Fri: 9AM - 6PM CET',
    action: null,
    actionLabel: null,
  },
];

const inquiryTypes = [
  {
    title: 'Digital Transformation',
    description: 'End-to-end transformation initiatives from strategy to execution.',
  },
  {
    title: 'AI & Automation',
    description: 'Enterprise AI solutions, ML implementation, and intelligent automation.',
  },
  {
    title: 'Strategic Advisory',
    description: 'C-suite advisory, technology strategy, and organizational design.',
  },
  {
    title: 'Program Assurance',
    description: 'Independent oversight and governance for complex technology programs.',
  },
  {
    title: 'Partnership Opportunities',
    description: 'Strategic partnerships, joint ventures, and collaboration proposals.',
  },
  {
    title: 'Careers',
    description: 'Join our team of senior practitioners and industry experts.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-navy text-white">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Contact</span>
          </nav>
          
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-6 text-white border-white/30">
              Get in Touch
            </Badge>
            <h1 className="text-display-md md:text-display-lg mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              Whether you&apos;re exploring transformation opportunities, seeking expert 
              guidance on AI adoption, or looking to partner with us, we&apos;d welcome 
              the opportunity to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{method.title}</h3>
                <p className="text-charcoal-600 text-sm mb-4">{method.description}</p>
                <p className="text-navy-900 font-medium">{method.contact}</p>
                {method.action && (
                  <a
                    href={method.action}
                    className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    {method.actionLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-navy-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="transformation">Digital Transformation</option>
                    <option value="ai">AI & Automation</option>
                    <option value="advisory">Strategic Advisory</option>
                    <option value="assurance">Program Assurance</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-xs text-charcoal-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </div>
            
            {/* Inquiry Types */}
            <div>
              <h2 className="text-2xl font-semibold text-navy-900 mb-6">
                How Can We Help?
              </h2>
              <div className="space-y-4">
                {inquiryTypes.map((inquiry, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-navy-900 mb-1">{inquiry.title}</h3>
                    <p className="text-sm text-charcoal-600">{inquiry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Global Presence"
            title="Our Offices"
            description="With locations across Europe and Asia, we're positioned to serve clients worldwide."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.locations.map((location) => (
              <div key={location.city} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">{location.city}</h3>
                    <p className="text-sm text-charcoal-500 mb-2">{location.country}</p>
                    {location.isHQ && (
                      <Badge variant="primary" className="text-xs">Headquarters</Badge>
                    )}
                    <p className="text-sm text-charcoal-600 mt-3">{location.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            alignment="center"
          />
          
          <div className="space-y-6">
            {[
              {
                question: 'What is your typical engagement model?',
                answer: 'We tailor our engagement model to each client\'s needs. This can range from strategic advisory retainers, to project-based transformations, to embedded team augmentation. Our senior-led approach ensures you work directly with experienced practitioners throughout.',
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We have deep expertise in Telecommunications, Hospitality & Tourism, Manufacturing, Retail & Consumer, and eCommerce. However, our methodologies and AI capabilities are applicable across many industries.',
              },
              {
                question: 'How do you approach AI implementations?',
                answer: 'We take a pragmatic, value-first approach to AI. We start with clear business objectives, ensure proper data foundations, and implement solutions that deliver measurable ROI. We\'re technology-agnostic and focus on selecting the right tools for each challenge.',
              },
              {
                question: 'What size organizations do you work with?',
                answer: 'We primarily work with mid-market to large enterprises, typically organizations with complex operations, multiple business units, or significant transformation needs. Our senior-led model is designed for organizations that value strategic partnership.',
              },
              {
                question: 'How long does a typical transformation take?',
                answer: 'Transformation timelines vary significantly based on scope and complexity. Quick wins can be achieved in weeks, while comprehensive enterprise transformations may span 18-24 months. We always define clear milestones and demonstrate value at each phase.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-charcoal-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-display-sm mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how AXL Consulting can help your organization achieve 
            its transformation goals with AI-powered innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us Directly
            </a>
            <Button href="/case-studies" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
