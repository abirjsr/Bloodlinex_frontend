'use client'
import { useState } from 'react'
import AdminLayout from '@/components/AdminLayout'
import DataTable, { StatusBadge, ActionDropdown } from '@/components/DataTable'
import BreederDetailsModal from '@/components/BreederDetailsModal'

const breederData = [
  { name: 'Puppies', items: '320 items', status: 'active' },
  { name: 'Stud Services', items: '150 items', status: 'active' },
  { name: 'Grooming', items: '85 items', status: 'active' },
  { name: 'Training', items: '65 items', status: 'active' },
  { name: 'Accessories', items: '280 items', status: 'active' },
  { name: 'Dog Food', items: '120 items', status: 'active' },
  { name: 'Veterinary', items: '45 items', status: 'active' },
  { name: 'Boarding', items: '30 items', status: 'active' },
  { name: 'Dog Walking', items: '55 items', status: 'active' },
]

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'items', label: 'Items' },
  {
    key: 'status',
    label: 'Status',
    render: (v: string) => <StatusBadge status={v} />,
  },
  {
    key: 'action',
    label: 'Action',
    render: () => <ActionDropdown />,
  },
]

export default function BreedersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBreeder, setSelectedBreeder] = useState(null)

  const handleView = (row: any) => {
    setSelectedBreeder(row)
    setIsModalOpen(true)
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Breeder Management</h1>
        <p className="text-gray-500 text-sm mt-1">Manage all registered users, breeders, and their permissions.</p>
      </div>
      <DataTable
        columns={columns}
        data={breederData}
        searchPlaceholder="Search"
        addLabel="Add New Category"
        onAdd={() => {}}
        onView={handleView}
        onEdit={(row) => console.log('Edit', row)}
        onDelete={(row) => console.log('Delete', row)}
      />
      <BreederDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={selectedBreeder}
      />
    </AdminLayout>
  )
}
