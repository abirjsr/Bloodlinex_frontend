'use client'
import { useState } from 'react'
import AdminLayout from '@/components/AdminLayout'
import DataTable, { StatusBadge, ActionDropdown } from '@/components/DataTable'
import AddCategoryModal from '@/components/AddCategoryModal'
import CategoryDetailsModal from '@/components/CategoryDetailsModal'

const categoryData = [
  { name: 'Puppies', items: '320 items', status: 'active' },
  { name: 'Stud Services', items: '150 items', status: 'active' },
  { name: 'Grooming', items: '85 items', status: 'active' },
  { name: 'Training', items: '65 items', status: 'active' },
  { name: 'Accessories', items: '280 items', status: 'active' },
  { name: 'Dog Food', items: '120 items', status: 'active' },
]

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'items', label: 'Items' },
  { key: 'status', label: 'Status', render: (v: string) => <StatusBadge status={v} /> },
  { key: 'action', label: 'Action', render: (v: any, row: any) => <ActionDropdown /> },
]

export default function CategoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleAdd = () => {
    setSelectedCategory(null)
    setIsModalOpen(true)
  }

  const handleView = (row: any) => {
    setSelectedCategory(row)
    setIsDetailsOpen(true)
  }

  const handleEdit = (row: any) => {
    setSelectedCategory(row)
    setIsModalOpen(true)
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Category Management</h1>
        <p className="text-gray-500 text-sm mt-1">Manage all registered users, breeders, and their permissions.</p>
      </div>
      <DataTable
        columns={columns}
        data={categoryData}
        searchPlaceholder="Search"
        addLabel="Add New Category"
        onAdd={handleAdd}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={(row) => console.log('Delete', row)}
      />
      <AddCategoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        initialData={selectedCategory}
      />
      <CategoryDetailsModal 
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        data={selectedCategory}
      />
    </AdminLayout>
  )
}
