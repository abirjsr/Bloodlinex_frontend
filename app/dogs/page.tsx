'use client'
import { useState } from 'react'
import AdminLayout from '@/components/AdminLayout'
import DataTable, { StatusBadge, ActionDropdown } from '@/components/DataTable'
import Image from 'next/image'
import DogDetailsModal from '@/components/DogDetailsModal'

const dogImages = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1552053831-71594a27632d?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=60&h=60&fit=crop',
]

const dogsData = [
  { id: 'DOG001', name: 'Titan', breed: 'German Shepherd', gender: 'male', prevOwner: 'Royal Kennel', currOwner: 'Puppy Hub', status: 'approved' },
  { id: 'DOG002', name: 'Venom', breed: 'French Bulldog', gender: 'female', prevOwner: 'Wade Warren Hub', currOwner: 'Jane Smith Hub', status: 'pending' },
  { id: 'DOG003', name: 'Bella', breed: 'Labrador Retriever', gender: 'male', prevOwner: 'Williamson Kennel', currOwner: 'Simmons Hub', status: 'cancel' },
  { id: 'DOG004', name: 'Luna', breed: 'Golden Retriever', gender: 'female', prevOwner: 'Jenny Wilson Hub', currOwner: 'Simmons Kennel', status: 'approved' },
  { id: 'DOG005', name: 'Cooper', breed: 'Dachshund', gender: 'female', prevOwner: 'Wolfstone Kennels', currOwner: 'Guy Hawkins Hub', status: 'approved' },
  { id: 'DOG006', name: 'Daisy', breed: 'Poodle', gender: 'male', prevOwner: 'Breeding Kennel', currOwner: 'Alpha Kennels', status: 'approved' },
  { id: 'DOG007', name: 'Molly', breed: 'Beagle', gender: 'male', prevOwner: 'Origin Kennels', currOwner: 'Grandline Kennel', status: 'pending' },
  { id: 'DOG008', name: 'Buddy', breed: 'Rottweiler', gender: 'male', prevOwner: 'Valiant Kennels', currOwner: 'Silverhawk Kennels', status: 'cancel' },
  { id: 'DOG009', name: 'Zoe', breed: 'English Bulldog', gender: 'male', prevOwner: 'Elite Kennels', currOwner: 'Titan Blood Kennel', status: 'pending' },
  { id: 'DOG0010', name: 'Rex', breed: 'Border Collie', gender: 'female', prevOwner: 'Stormborn Kennel', currOwner: 'Evercrest Kennels', status: 'pending' },
  { id: 'DOG0011', name: 'Charlie', breed: 'Irish Setter', gender: 'female', prevOwner: 'TrueBreed Kennels', currOwner: 'BlueRiver Kennel', status: 'cancel' },
].map((d, i) => ({ ...d, imgUrl: dogImages[i % dogImages.length] }))

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  {
    key: 'imgUrl',
    label: 'Image',
    render: (v: string) => (
      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100">
        <Image src={v} alt="dog" width={40} height={40} className="object-cover" />
      </div>
    ),
  },
  { key: 'breed', label: 'Breeds' },
  { key: 'gender', label: 'Gender' },
  { key: 'prevOwner', label: 'Previous Owner' },
  { key: 'currOwner', label: 'Current Owner' },
  { key: 'status', label: 'Status', render: (v: string) => <StatusBadge status={v} /> },
  { key: 'action', label: 'Action', render: (v: any, row: any) => <ActionDropdown /> },
]

export default function DogsPage() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedDog, setSelectedDog] = useState(null)

  const handleView = (row: any) => {
    setSelectedDog(row)
    setIsDetailsOpen(true)
  }

  return (
    <AdminLayout>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dog Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage all registered users, breeders, and their permissions.</p>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={dogsData}
        searchPlaceholder="Search"
        searchRight
        onView={handleView}
        onEdit={(row) => console.log('Edit Dog', row)}
        onDelete={(row) => console.log('Delete Dog', row)}
      />
      <DogDetailsModal 
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        data={selectedDog}
      />
    </AdminLayout>
  )
}
