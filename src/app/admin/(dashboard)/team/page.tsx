'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, Edit, Trash2, Mail, Linkedin } from 'lucide-react';
import { founders } from '@/data/team';

export default function AdminTeamPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeam = founders.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Team Members</h1>
          <p className="text-charcoal-600 mt-1">Manage leadership and team profiles</p>
        </div>
        <Link
          href="/admin/team/new"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Team Member
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal-400" />
          <input
            type="text"
            placeholder="Search team members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredTeam.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900">{member.name}</h3>
                      <p className="text-primary-600 font-medium">{member.role}</p>
                      <p className="text-sm text-charcoal-500 mt-1">{member.regions[0]}</p>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-charcoal-600 mt-4 line-clamp-3">{member.bio[0]}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {member.expertise.slice(0, 3).map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-charcoal-600">
                    {skill}
                  </span>
                ))}
                {member.expertise.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 rounded-md text-xs text-charcoal-500">
                    +{member.expertise.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-charcoal-600">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    href={`/admin/team/${member.id}`}
                    className="p-2 hover:bg-gray-100 rounded-lg text-charcoal-500 hover:text-charcoal-700"
                  >
                    <Edit className="h-4 w-4" />
                  </Link>
                  <button className="p-2 hover:bg-red-50 rounded-lg text-charcoal-500 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTeam.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <p className="text-charcoal-600">No team members found matching your search.</p>
        </div>
      )}
    </div>
  );
}
