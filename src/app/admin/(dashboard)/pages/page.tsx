'use client';

import Link from 'next/link';
import { FileText, Edit, Eye, Home, Info, Briefcase, Building2, FolderKanban, Lightbulb, Users, Mail, Shield, ScrollText } from 'lucide-react';

const pages = [
  { name: 'Home', href: '/', icon: Home, description: 'Main landing page with hero, services, and CTA sections' },
  { name: 'About', href: '/about', icon: Info, description: 'Company story, mission, values, and leadership team' },
  { name: 'Services', href: '/services', icon: Briefcase, description: 'Service offerings overview page' },
  { name: 'Industries', href: '/industries', icon: Building2, description: 'Industry expertise overview page' },
  { name: 'Case Studies', href: '/case-studies', icon: FolderKanban, description: 'Client success stories listing' },
  { name: 'AI & Innovation', href: '/ai-innovation', icon: Lightbulb, description: 'AI philosophy and capabilities' },
  { name: 'Insights', href: '/insights', icon: FileText, description: 'Thought leadership articles listing' },
  { name: 'Careers', href: '/careers', icon: Users, description: 'Job opportunities and company culture' },
  { name: 'Contact', href: '/contact', icon: Mail, description: 'Contact form and office locations' },
  { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Privacy and data protection policy' },
  { name: 'Terms of Service', href: '/terms', icon: ScrollText, description: 'Terms and conditions' },
];

export default function AdminPagesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Pages</h1>
        <p className="text-charcoal-600 mt-1">Manage website pages and content</p>
      </div>

      {/* Info banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Page content is currently managed through code files. 
          To edit page content, modify the corresponding files in the <code className="bg-blue-100 px-1 rounded">src/app</code> directory.
        </p>
      </div>

      {/* Pages List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {pages.map((page) => (
            <div key={page.href} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <page.icon className="h-5 w-5 text-charcoal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900">{page.name}</h3>
                    <p className="text-sm text-charcoal-500">{page.description}</p>
                    <p className="text-xs text-charcoal-400 mt-1">{page.href}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Published
                  </span>
                  <Link
                    href={page.href}
                    target="_blank"
                    className="p-2 hover:bg-gray-100 rounded-lg text-charcoal-500 hover:text-charcoal-700"
                    title="View Page"
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help section */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="font-semibold text-navy-900 mb-2">Need to edit page content?</h3>
        <p className="text-sm text-charcoal-600 mb-4">
          Page content is managed through the following data files and page components:
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="font-medium text-navy-900 mb-2">Data Files</p>
            <ul className="space-y-1 text-charcoal-600">
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/data/services.ts</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/data/industries.ts</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/data/case-studies.ts</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/data/insights.ts</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/data/team.ts</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/data/site-config.ts</code></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="font-medium text-navy-900 mb-2">Page Components</p>
            <ul className="space-y-1 text-charcoal-600">
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/app/page.tsx</code> (Home)</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/app/about/page.tsx</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/app/contact/page.tsx</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/app/careers/page.tsx</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src/app/ai-innovation/page.tsx</code></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
