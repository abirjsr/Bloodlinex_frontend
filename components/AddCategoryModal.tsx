'use client'
import { X, ChevronDown } from 'lucide-react'

interface AddCategoryModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: any
}

export default function AddCategoryModal({ isOpen, onClose, initialData }: AddCategoryModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg relative">
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {initialData ? 'Edit Category' : 'Add New Category'}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <form className="p-6 pt-0 space-y-6">
          {/* Category Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Category Name
            </label>
            <input
              type="text"
              defaultValue={initialData?.name || ''}
              placeholder="Enter category name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F5A623] transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Description
            </label>
            <textarea
              placeholder="Typing here"
              defaultValue={initialData?.items || ''}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F5A623] transition-colors resize-none"
            ></textarea>
          </div>

          {/* Status */}
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

          {/* Actions */}
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
