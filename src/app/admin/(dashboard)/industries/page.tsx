'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, Edit, Trash2, Eye, MoreVertical, Building2 } from 'lucide-react';
import { industries } from '@/data/industries';

export default function AdminIndustriesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIndustries = industries.filter(industry =>
    industry.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Industries</h1>
          <p className="text-charcoal-600 mt-1">Manage industry expertise areas</p>
        </div>
        <Link
          href="/admin/industries/new"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Industry
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal-400" />
          <input
            type="text"
            placeholder="Search industries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      {/* Industries List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-6 text-sm font-semibold text-charcoal-700">Industry</th>
              <th className="text-left py-3 px-6 text-sm font-semibold text-charcoal-700">Description</th>
              <th className="text-left py-3 px-6 text-sm font-semibold text-charcoal-700">Status</th>
              <th className="text-right py-3 px-6 text-sm font-semibold text-charcoal-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredIndustries.map((industry) => (
              <tr key={industry.id} className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary-600" />
                    </div>
                    <span className="font-medium text-navy-900">{industry.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="text-sm text-charcoal-600 line-clamp-1 max-w-md">{industry.description}</p>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Published
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end space-x-2">
                    <Link
                      href={`/industries/${industry.slug}`}
                      target="_blank"
                      className="p-2 hover:bg-gray-100 rounded-lg text-charcoal-500 hover:text-charcoal-700"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/admin/industries/${industry.slug}`}
                      className="p-2 hover:bg-gray-100 rounded-lg text-charcoal-500 hover:text-charcoal-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                    <button className="p-2 hover:bg-red-50 rounded-lg text-charcoal-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredIndustries.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <p className="text-charcoal-600">No industries found matching your search.</p>
        </div>
      )}
    </div>
  );
}
