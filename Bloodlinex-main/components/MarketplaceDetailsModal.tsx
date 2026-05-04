'use client'
import { X } from 'lucide-react'
import Image from 'next/image'

interface MarketplaceDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  data?: any
}

export default function MarketplaceDetailsModal({ isOpen, onClose, data }: MarketplaceDetailsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl relative">
        <div className="p-6 flex items-center justify-between border-b border-gray-50">
          <h2 className="text-xl font-semibold text-gray-900">Listing Details</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-56 h-56 rounded-xl overflow-hidden bg-gray-100 relative">
              {data?.imgUrl && (
                <Image
                  src={data.imgUrl}
                  alt={data.name || 'Listing'}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold">ID</label>
                  <p className="text-sm font-medium text-gray-900">{data?.id}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold">Name</label>
                  <p className="text-sm font-medium text-gray-900">{data?.name}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold">Category</label>
                  <p className="text-sm font-medium text-gray-900 capitalize">{data?.category}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold">Breed</label>
                  <p className="text-sm font-medium text-gray-900">{data?.breed}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold">Price</label>
                  <p className="text-lg font-bold text-[#F5A623]">{data?.price}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold">Seller</label>
                  <p className="text-sm font-medium text-gray-900">{data?.seller}</p>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold">Status</label>
                <div className="mt-1">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                    data?.status === 'approved' ? 'bg-green-100 text-green-700' : 
                    data?.status === 'pending' ? 'bg-orange-100 text-orange-700' : 
                    'bg-red-100 text-red-700'
                  }`}>
                    {data?.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
