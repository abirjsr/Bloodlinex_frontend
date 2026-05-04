'use client'
import { X, ChevronDown } from 'lucide-react'

interface AddTypeModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: any
}

export default function AddTypeModal({ isOpen, onClose, initialData }: AddTypeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg relative">
        <div className="p-6 flex items-center justify-between border-b border-gray-50">
          <h2 className="text-xl font-semibold text-gray-900">
            {initialData ? 'Edit Type' : 'Add New Type'}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <form className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Type Name
            </label>
            <input
              type="text"
              defaultValue={initialData?.name || ''}
              placeholder="Enter type name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F5A623] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Status
            </label>
            <div className="relative">
              <select 
                defaultValue={initialData?.status || ''}
                className="w-full appearance-none px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#F5A623] transition-colors text-gray-500"
              >
                <option value="">select one</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg border border-[#B94A2C] text-[#B94A2C] font-medium hover:bg-[#B94A2C]/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-[#F5A623] text-white font-medium hover:bg-[#E09400] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
