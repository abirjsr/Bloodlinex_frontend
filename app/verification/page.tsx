'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function VerificationPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1)
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-lg p-8 md:p-12">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Verification</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
            We've sent a verification code to your registered email address. Please enter the code below to confirm your identity and continue.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-base font-semibold text-gray-900 mb-4">
              Enter your OTP
            </label>
            <div className="flex justify-between gap-2 md:gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 md:w-14 md:h-14 border border-gray-200 rounded-lg text-center text-lg font-semibold focus:outline-none focus:border-[#F5A623] transition-colors"
                />
              ))}
            </div>
          </div>

          <button className="w-full bg-[#F5B842] hover:bg-[#E0A72E] text-gray-900 font-bold py-4 rounded-xl transition-colors shadow-sm">
            Reset Password
          </button>

          <div className="text-center space-y-1">
            <p className="text-sm text-gray-500">
              Didn't receive the code? Check your click
            </p>
            <button className="text-[#B94A2C] font-bold text-sm hover:underline">
              Resend Code to try again.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
