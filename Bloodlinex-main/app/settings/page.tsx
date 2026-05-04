'use client'
import { useState } from 'react'
import AdminLayout from '@/components/AdminLayout'
import { User, Shield, Bell } from 'lucide-react'
import Image from 'next/image'

const settingsTabs = [
  { id: 'profile', label: 'Profile Information', icon: User },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'notifications', label: 'Notifications', icon: Bell },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [name, setName] = useState('Jane Cooper')
  const [email, setEmail] = useState('janecooper@gmail.com')

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your account preferences and platform configurations.</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar tabs */}
        <div className="w-56 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-3 flex flex-col gap-1">
            {settingsTabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                  activeTab === id
                    ? 'bg-orange-50 text-[#F5A623]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={17} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl border border-gray-100 p-7">
            {activeTab === 'profile' && (
              <>
                <h2 className="text-lg font-bold text-gray-900 mb-5 pb-4 border-b border-gray-100">
                  Profile Information
                </h2>
                {/* Avatar */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Jane Cooper"
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jane Cooper</p>
                    <p className="text-sm text-gray-400">jane@example.com</p>
                  </div>
                </div>

                {/* Fields */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F5A623] transition"
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F5A623] transition"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3">
                  <button className="px-6 py-2.5 border border-red-400 text-red-500 rounded-xl text-sm font-semibold hover:bg-red-50 transition">
                    Cancel
                  </button>
                  <button className="px-6 py-2.5 bg-[#F5A623] text-white rounded-xl text-sm font-semibold hover:bg-[#E09400] transition">
                    Submit
                  </button>
                </div>
              </>
            )}

            {activeTab === 'security' && (
              <>
                <h2 className="text-lg font-bold text-gray-900 mb-5 pb-4 border-b border-gray-100">Security</h2>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F5A623] transition" />
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F5A623] transition" />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F5A623] transition" />
                </div>
                <div className="flex justify-end">
                  <button className="px-6 py-2.5 bg-[#F5A623] text-white rounded-xl text-sm font-semibold hover:bg-[#E09400] transition">
                    Update Password
                  </button>
                </div>
              </>
            )}

            {activeTab === 'notifications' && (
              <>
                <h2 className="text-lg font-bold text-gray-900 mb-5 pb-4 border-b border-gray-100">Notifications</h2>
                {['Email Notifications', 'Push Notifications', 'New Listing Alerts', 'Review Alerts'].map((item) => (
                  <div key={item} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-gray-700">{item}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F5A623]"></div>
                    </label>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
