'use client'
import { X } from 'lucide-react'
import Image from 'next/image'

interface BreederDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  data?: any
}

export default function BreederDetailsModal({ isOpen, onClose, data }: BreederDetailsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl relative">
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Breeders Details</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Personal Details */}
          <div className="border border-gray-100 rounded-xl p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-900">Personal Details</h3>
              <span className="bg-[#B94A2C] text-white px-3 py-1 rounded-md text-sm font-medium">Suspended</span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
                  alt="Jane Smith"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Royal Kennel</h4>
                <p className="text-gray-500 text-sm">janesmith@gmail.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">ID:</span>
                <span className="text-gray-900 font-medium">BRE001</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Email</span>
                <span className="text-gray-900 font-medium">royal@example.com</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Joined</span>
                <span className="text-gray-900 font-medium">2025-02-20</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Status</span>
                <span className="text-green-500 font-medium">active</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Registered Dogs</span>
                <span className="text-gray-900 font-medium">10</span>
              </div>
            </div>
          </div>

          {/* Kennel Details */}
          <div className="border border-gray-100 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-6">Kennel Details</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Kennel Name</span>
                <span className="text-gray-900 font-medium">Royal Kennel</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Experience</span>
                <span className="text-gray-900 font-medium">12 years</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Specialization</span>
                <span className="text-gray-900 font-medium">German Shepherds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
