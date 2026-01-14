'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Save, Globe, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

export default function AdminSettingsPage() {
  const { data: session } = useSession();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Settings</h1>
          <p className="text-charcoal-600 mt-1">Configure website settings</p>
        </div>
        <button
          onClick={handleSave}
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Save className="h-5 w-5 mr-2" />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Site Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary-600" />
              </div>
              <h2 className="text-lg font-semibold text-navy-900">Site Information</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Site Name</label>
                <input
                  type="text"
                  defaultValue={siteConfig.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Site URL</label>
                <input
                  type="url"
                  defaultValue={siteConfig.url}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Site Description</label>
                <textarea
                  rows={3}
                  defaultValue={siteConfig.description}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary-600" />
              </div>
              <h2 className="text-lg font-semibold text-navy-900">Contact Information</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue={siteConfig.contact.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  defaultValue={siteConfig.contact.phone}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Headquarters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary-600" />
              </div>
              <h2 className="text-lg font-semibold text-navy-900">Headquarters</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">City</label>
                <input
                  type="text"
                  defaultValue={siteConfig.headquarters.city}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Country</label>
                <input
                  type="text"
                  defaultValue={siteConfig.headquarters.country}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Full Address</label>
                <input
                  type="text"
                  defaultValue={siteConfig.headquarters.address}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-navy-900 mb-6">Social Links</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">LinkedIn URL</label>
                <input
                  type="url"
                  defaultValue={siteConfig.links.linkedin}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">Twitter/X URL</label>
                <input
                  type="url"
                  defaultValue={siteConfig.links.twitter}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* User Account */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary-600" />
              </div>
              <h2 className="text-lg font-semibold text-navy-900">Your Account</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1">Name</label>
                <p className="text-charcoal-900">{session?.user?.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1">Email</label>
                <p className="text-charcoal-900">{session?.user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1">Role</label>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700 capitalize">
                  {session?.user?.role || 'Admin'}
                </span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <h3 className="font-medium text-yellow-800 mb-2">Note</h3>
            <p className="text-sm text-yellow-700">
              Settings changes are saved to the frontend configuration. For permanent changes, 
              update the <code className="bg-yellow-100 px-1 rounded text-xs">site-config.ts</code> file.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-navy-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/admin" className="text-primary-600 hover:text-primary-700">Dashboard</a>
              </li>
              <li>
                <a href="/" target="_blank" className="text-primary-600 hover:text-primary-700">View Website</a>
              </li>
              <li>
                <a href="/admin/pages" className="text-primary-600 hover:text-primary-700">Manage Pages</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
