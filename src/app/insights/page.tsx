import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, User } from 'lucide-react';
import { Button, SectionHeading, Badge } from '@/components/ui';
import { insights, featuredInsights, insightCategories } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Thought leadership on AI, digital transformation, and enterprise strategy from AXL Consulting\'s senior partners.',
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Insights</Badge>
            <h1 className="text-display-md md:text-display-lg text-white mb-6">
              Thought Leadership
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Perspectives on AI, transformation, and the future of enterprise from 
              our senior partners. Drawing on decades of experience across industries 
              and geographies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Featured"
            title="Latest Thinking"
            alignment="left"
          />
          
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            {featuredInsights.slice(0, 2).map((insight, index) => (
              <Link
                key={insight.id}
                href={`/insights/${insight.slug}`}
                className="group"
              >
                <div className={`aspect-[16/9] bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl mb-6 relative overflow-hidden ${index === 0 ? 'lg:aspect-[16/10]' : ''}`}>
                  <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge variant="primary">{insight.category}</Badge>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {insight.title}
                </h2>
                <p className="text-charcoal-600 mb-4 line-clamp-2">
                  {insight.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-charcoal-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{insight.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="All Insights"
            title="Explore Our Perspectives"
          />
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <Link
                key={insight.id}
                href={`/insights/${insight.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="primary" size="sm">{insight.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 mb-4 line-clamp-2">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-charcoal-500">
                    <span>{insight.author}</span>
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Topics"
            title="Explore by Category"
          />
          
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {insightCategories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-charcoal-700 border border-gray-200 hover:border-primary-500 hover:text-primary-600 cursor-pointer transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-display-sm text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Subscribe to receive our latest insights on AI, transformation, and 
            enterprise strategy directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button type="submit" variant="white">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
