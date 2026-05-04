'use client'
import { X } from 'lucide-react'

interface CategoryDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  data?: any
}

export default function CategoryDetailsModal({ isOpen, onClose, data }: CategoryDetailsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg relative">
        <div className="p-6 flex items-center justify-between border-b border-gray-50">
          <h2 className="text-xl font-semibold text-gray-900">Category Details</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold">Category Name</label>
              <p className="text-sm font-medium text-gray-900 mt-1">{data?.name}</p>
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold">Items count / Description</label>
              <p className="text-sm font-medium text-gray-700 mt-1">{data?.items}</p>
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold">Status</label>
              <div className="mt-1">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                  data?.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {data?.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
