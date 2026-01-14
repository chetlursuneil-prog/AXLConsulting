'use client';

import Link from 'next/link';
import { 
  Briefcase, 
  Building2, 
  FolderKanban, 
  Lightbulb, 
  Users, 
  Eye,
  TrendingUp,
  ArrowUpRight,
  Plus
} from 'lucide-react';

const stats = [
  { name: 'Total Services', value: '6', icon: Briefcase, change: '+0', href: '/admin/services' },
  { name: 'Industries', value: '5', icon: Building2, change: '+0', href: '/admin/industries' },
  { name: 'Case Studies', value: '4', icon: FolderKanban, change: '+1', href: '/admin/case-studies' },
  { name: 'Insights', value: '6', icon: Lightbulb, change: '+2', href: '/admin/insights' },
];

const recentActivity = [
  { action: 'Added new case study', item: 'MenuSense AI Platform', time: '2 hours ago', type: 'create' },
  { action: 'Updated service', item: 'AI & Automation', time: '5 hours ago', type: 'update' },
  { action: 'Published insight', item: 'AI Transformation Playbook', time: '1 day ago', type: 'publish' },
  { action: 'Updated team member', item: 'Axel Schmitz', time: '2 days ago', type: 'update' },
];

const quickActions = [
  { name: 'Add Case Study', href: '/admin/case-studies/new', icon: FolderKanban },
  { name: 'Add Insight', href: '/admin/insights/new', icon: Lightbulb },
  { name: 'Add Service', href: '/admin/services/new', icon: Briefcase },
  { name: 'Add Team Member', href: '/admin/team/new', icon: Users },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Dashboard</h1>
        <p className="text-charcoal-600 mt-1">Welcome to the AXL Consulting admin panel</p>
      </div>

      {/* Stats grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
              <span className="flex items-center text-green-600 text-sm font-medium">
                {stat.change}
                <TrendingUp className="h-4 w-4 ml-1" />
              </span>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-navy-900">{stat.value}</p>
              <p className="text-sm text-charcoal-600 mt-1">{stat.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:border-primary-200 border border-transparent transition-colors text-center group"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-2 group-hover:bg-primary-100 transition-colors">
                  <action.icon className="h-5 w-5 text-charcoal-600 group-hover:text-primary-600" />
                </div>
                <span className="text-xs font-medium text-charcoal-700">{action.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-navy-900">Recent Activity</h2>
            <Link href="/admin/activity" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-0">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'create' ? 'bg-green-500' :
                  activity.type === 'publish' ? 'bg-blue-500' : 'bg-yellow-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-charcoal-900">
                    {activity.action}: <span className="font-medium">{activity.item}</span>
                  </p>
                  <p className="text-xs text-charcoal-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-navy-900 mb-4">Content Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Section</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Items</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-charcoal-700">Last Updated</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-charcoal-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { section: 'Services', items: 6, status: 'Published', updated: '2 days ago' },
                { section: 'Industries', items: 5, status: 'Published', updated: '3 days ago' },
                { section: 'Case Studies', items: 4, status: 'Published', updated: '2 hours ago' },
                { section: 'Insights', items: 6, status: 'Published', updated: '1 day ago' },
                { section: 'Team Members', items: 2, status: 'Published', updated: '1 week ago' },
              ].map((row) => (
                <tr key={row.section} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-navy-900">{row.section}</td>
                  <td className="py-3 px-4 text-sm text-charcoal-600">{row.items}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-charcoal-500">{row.updated}</td>
                  <td className="py-3 px-4 text-right">
                    <Link 
                      href={`/admin/${row.section.toLowerCase().replace(' ', '-')}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Manage →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
