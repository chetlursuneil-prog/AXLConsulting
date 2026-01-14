'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, Edit, Trash2, Eye, MoreVertical, TrendingUp } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';

export default function AdminCaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCaseStudies = caseStudies.filter(study =>
    study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    study.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Case Studies</h1>
          <p className="text-charcoal-600 mt-1">Manage client success stories</p>
        </div>
        <Link
          href="/admin/case-studies/new"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Case Study
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal-400" />
          <input
            type="text"
            placeholder="Search case studies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredCaseStudies.map((study) => (
          <div key={study.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700 mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-lg font-semibold text-navy-900">{study.title}</h3>
                  <p className="text-sm text-charcoal-500 mt-1">{study.client}</p>
                </div>
                <div className="relative group">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="h-5 w-5 text-charcoal-400" />
                  </button>
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      target="_blank"
                      className="flex items-center px-4 py-2 text-sm text-charcoal-700 hover:bg-gray-50"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Live
                    </Link>
                    <Link
                      href={`/admin/case-studies/${study.slug}`}
                      className="flex items-center px-4 py-2 text-sm text-charcoal-700 hover:bg-gray-50"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Link>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-charcoal-600 line-clamp-2 mb-4">{study.summary}</p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                {study.outcomes.metrics.slice(0, 3).map((metric, index) => (
                  <div key={index} className="text-center">
                    <p className="text-lg font-bold text-primary-600">{metric.value}</p>
                    <p className="text-xs text-charcoal-500 line-clamp-1">{metric.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {study.featured ? 'Featured' : 'Published'}
                </span>
                <span className="text-xs text-charcoal-500">{study.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCaseStudies.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <p className="text-charcoal-600">No case studies found matching your search.</p>
        </div>
      )}
    </div>
  );
}
