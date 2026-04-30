'use client'
import { useState } from 'react'
import AdminLayout from '@/components/AdminLayout'
import DataTable, { StatusBadge, ActionDropdown } from '@/components/DataTable'
import AddTypeModal from '@/components/AddTypeModal'

const typeData = [
  { name: 'Base', status: 'active' },
  { name: 'Elite', status: 'active' },
  { name: 'Legendary', status: 'active' },
]

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status', render: (v: string) => <StatusBadge status={v} /> },
  { key: 'action', label: 'Action', render: (v: any, row: any) => <ActionDropdown /> },
]

export default function TypePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedType, setSelectedType] = useState(null)

  const handleAdd = () => {
    setSelectedType(null)
    setIsModalOpen(true)
  }

  const handleEdit = (row: any) => {
    setSelectedType(row)
    setIsModalOpen(true)
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Type Management</h1>
        <p className="text-gray-500 text-sm mt-1">Manage all registered users, breeders, and their permissions.</p>
      </div>
      <DataTable
        columns={columns}
        data={typeData}
        searchPlaceholder="Search"
        addLabel="Add New Type"
        onAdd={handleAdd}
        onView={handleEdit}
        onEdit={handleEdit}
        onDelete={(row) => console.log('Delete Type', row)}
      />
      <AddTypeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        initialData={selectedType}
      />
    </AdminLayout>
  )
}
