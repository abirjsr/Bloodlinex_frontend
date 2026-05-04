'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, redirect to dashboard as a success simulation
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5A623] p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-48 h-16 relative mb-2">
            <Image 
              src="/logo.png.png" 
              alt="BloodlineX Logo" 
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-500 text-sm font-medium mt-1">Admin Portal Access</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Login to your account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#F5A623] focus:border-[#F5A623] transition-colors outline-none"
                  placeholder="admin@bloodlinex.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-gray-700">Password</label>
                <button type="button" className="text-sm font-bold text-[#F5A623] hover:underline">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#F5A623] focus:border-[#F5A623] transition-colors outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#F5A623] focus:ring-[#F5A623] border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 font-medium cursor-pointer">
                Remember this device
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#F5A623] hover:bg-[#E09512] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-[#F5A623]/20 active:scale-[0.98] mt-2"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Footer info */}
        <p className="text-center text-gray-500 text-sm mt-8">
          By logging in, you agree to our <span className="font-bold text-gray-700 underline cursor-pointer">Security Policies</span>.
        </p>
      </div>
    </div>
  )
}
