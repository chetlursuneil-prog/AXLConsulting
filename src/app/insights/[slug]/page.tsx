import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import { insights } from '@/data/insights';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = insights.find((i) => i.slug === params.slug);
  
  if (!insight) {
    return {
      title: 'Insight Not Found',
    };
  }

  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default function InsightPage({ params }: Props) {
  const insight = insights.find((i) => i.slug === params.slug);
  
  if (!insight) {
    notFound();
  }

  const relatedInsights = insights.filter((i) => i.slug !== params.slug && i.category === insight.category).slice(0, 3);

  // Format date
  const formattedDate = new Date(insight.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-charcoal-500 mb-8">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/insights" className="hover:text-primary-600">Insights</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-charcoal-700">{insight.category}</span>
          </nav>
          
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">{insight.category}</Badge>
            <h1 className="text-display-sm md:text-display-md text-navy-900 mb-6">
              {insight.title}
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
              {insight.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-charcoal-600">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{insight.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-charcoal-400">{insight.authorRole}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{insight.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-16">
            <div className="lg:col-span-3">
              <div className="prose prose-lg prose-headings:text-navy-900 prose-p:text-charcoal-700 prose-a:text-primary-600 prose-strong:text-navy-900 max-w-none">
                {insight.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-navy-900 mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  return <p key={index}>{paragraph}</p>;
                })}
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {insight.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
              
              {/* Author Box */}
              <div className="mt-8 bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {insight.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">{insight.author}</h3>
                    <p className="text-primary-600 font-medium">{insight.authorRole}</p>
                    <p className="text-charcoal-600 mt-2 text-sm">
                      {insight.author === 'Axel Schmitz' 
                        ? 'Axel brings over 30 years of international leadership and consulting experience, serving as a trusted advisor to C-suite executives and boards across the globe.'
                        : 'Suneil is a seasoned technology transformation leader with two decades of experience driving digital innovation across global enterprises.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                    Share
                  </h3>
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </button>
                    <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </button>
                  </div>
                </div>
                
                {relatedInsights.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                      Related Insights
                    </h3>
                    <div className="space-y-4">
                      {relatedInsights.map((related) => (
                        <Link
                          key={related.id}
                          href={`/insights/${related.slug}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-navy-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-charcoal-500 mt-1">{related.readTime}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16">
        <div className="container-custom">
          <Link
            href="/insights"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Insights
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-navy-900 mb-6">
            Let&apos;s Discuss These Ideas
          </h2>
          <p className="text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto">
            Interested in exploring how these concepts apply to your organization? 
            We&apos;d welcome the conversation.
          </p>
          <Button href="/contact" variant="primary" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
