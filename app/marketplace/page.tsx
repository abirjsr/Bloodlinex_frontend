'use client'
import { useState } from 'react'
import AdminLayout from '@/components/AdminLayout'
import DataTable, { StatusBadge, ActionDropdown } from '@/components/DataTable'
import Image from 'next/image'
import MarketplaceDetailsModal from '@/components/MarketplaceDetailsModal'

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

const marketplaceData = [
  { id: 'LST-001', name: 'Golden Pup', category: 'puppy', breed: 'German Shepherd', price: '$1,500', seller: 'Jane Cooper', status: 'approved' },
  { id: 'LST-002', name: 'Husky Male', category: 'stud', breed: 'French Bulldog', price: '$800', seller: 'Wade Warren', status: 'pending' },
  { id: 'LST-003', name: 'Pug Puppy', category: 'puppy', breed: 'Labrador Retriever', price: '$450', seller: 'Williamson', status: 'cancel' },
  { id: 'LST-004', name: 'Rottie Stud', category: 'dogs', breed: 'Golden Retriever', price: '$1,200', seller: 'Simmons', status: 'approved' },
  { id: 'LST-005', name: 'Cooper', category: 'puppy', breed: 'Dachshund', price: '$1,000', seller: 'Jenny Wilson', status: 'approved' },
  { id: 'LST-006', name: 'Poodle Pup', category: 'stud', breed: 'Poodle', price: '$900', seller: 'Guy Hawkins', status: 'approved' },
  { id: 'LST-007', name: 'Bulldog Male', category: 'stud', breed: 'Beagle', price: '$700', seller: 'Robert Fox', status: 'pending' },
  { id: 'LST-008', name: 'Labrador Puppy', category: 'puppy', breed: 'Rottweiler', price: '$850', seller: 'Jacob Jones', status: 'cancel' },
  { id: 'LST-009', name: 'Shepherd Pup', category: 'puppy', breed: 'English Bulldog', price: '$350', seller: 'Cody Fisher', status: 'pending' },
  { id: 'LST-0010', name: 'Rex', category: 'stud', breed: 'Border Collie', price: '$800', seller: 'Albert Flores', status: 'pending' },
  { id: 'LST-0011', name: 'Charlie', category: 'stud', breed: 'Irish Setter', price: '$300', seller: 'Ralph Edwards', status: 'cancel' },
].map((d, i) => ({ ...d, imgUrl: dogImages[i % dogImages.length] }))

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'category', label: 'Category' },
  {
    key: 'imgUrl',
    label: 'Image',
    render: (v: string) => (
      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100">
        <Image src={v} alt="listing" width={40} height={40} className="object-cover" />
      </div>
    ),
  },
  { key: 'breed', label: 'Breeds' },
  { key: 'price', label: 'Price' },
  { key: 'seller', label: 'Seller' },
  { key: 'status', label: 'Status', render: (v: string) => <StatusBadge status={v} /> },
  {
    key: 'action',
    label: 'Action',
    render: (v: any, row: any) => <ActionDropdown />,
  },
]

export default function MarketplacePage() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleView = (row: any) => {
    setSelectedItem(row)
    setIsDetailsOpen(true)
  }

  return (
    <AdminLayout>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Marketplace Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage all registered users, breeders, and their permissions.</p>
        </div>
      </div>
      <DataTable 
        columns={columns} 
        data={marketplaceData} 
        searchPlaceholder="Search" 
        searchRight 
        onView={handleView}
        onEdit={(row) => console.log('Edit Marketplace', row)}
        onDelete={(row) => console.log('Delete Marketplace', row)}
      />
      <MarketplaceDetailsModal 
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        data={selectedItem}
      />
    </AdminLayout>
  )
}
