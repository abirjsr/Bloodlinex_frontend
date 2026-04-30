'use client'
import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'

interface Column {
  key: string
  label: string
  render?: (value: any, row: any) => React.ReactNode
}

interface DataTableProps {
  columns: Column[]
  data: any[]
  searchPlaceholder?: string
  onAdd?: () => void
  onView?: (row: any) => void
  onEdit?: (row: any) => void
  onDelete?: (row: any) => void
  addLabel?: string
  searchRight?: boolean
}

export function StatusBadge({ status }: { status: string }) {
  const s = status.toLowerCase()
  if (s === 'approved' || s === 'active') return <span className="status-approved">{status}</span>
  if (s === 'pending') return <span className="status-pending">{status}</span>
  if (s === 'cancel' || s === 'cancelled') return <span className="status-cancel">{status}</span>
  return <span>{status}</span>
}

export function ActionDropdown({ 
  onView, 
  onEdit, 
  onDelete 
}: { 
  onView?: () => void
  onEdit?: () => void
  onDelete?: () => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="action-btn"
      >
        Action <ChevronDown size={13} />
      </button>
      {open && (
        <div
          className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
          onMouseLeave={() => setOpen(false)}
        >
          <button 
            onClick={() => {
              onView?.()
              setOpen(false)
            }}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            View
          </button>
          <button 
            onClick={() => {
              onEdit?.()
              setOpen(false)
            }}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Edit
          </button>
          <button 
            onClick={() => {
              onDelete?.()
              setOpen(false)
            }}
            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default function DataTable({
  columns,
  data,
  searchPlaceholder = 'Search',
  onAdd,
  onView,
  onEdit,
  onDelete,
  addLabel,
  searchRight = false,
}: DataTableProps) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 10

  const filtered = data.filter((row) =>
    Object.values(row).some((v) =>
      String(v).toLowerCase().includes(search.toLowerCase())
    )
  )

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <div>
      {/* Search + Add */}
      <div className={`flex items-center mb-5 gap-4 ${searchRight ? 'justify-between' : ''}`}>
        {!searchRight && (
          <>
            <div className="relative">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                className="border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm w-64 outline-none focus:border-[#F5A623] transition"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            {onAdd && (
              <button
                onClick={onAdd}
                className="ml-auto bg-[#F5A623] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#E09400] transition flex items-center gap-1"
              >
                + {addLabel || 'Add New'}
              </button>
            )}
          </>
        )}
        {searchRight && (
          <>
            <div />
            <div className="relative">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                className="border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm w-72 outline-none focus:border-[#F5A623] transition"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </>
        )}
      </div>

      {/* Table */}
      <div className="rounded-xl overflow-hidden border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F5A623]">
              {columns.map((col) => (
                <th key={col.key} className="text-left px-4 py-3 text-white font-semibold">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {paginated.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-gray-700">
                    {col.render ? (
                      col.key === 'action' ? (
                        <ActionDropdown 
                          onView={() => onView?.(row)} 
                          onEdit={() => onEdit?.(row)}
                          onDelete={() => onDelete?.(row)}
                        />
                      ) : (
                        col.render(row[col.key], row)
                      )
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>Showing 1–{Math.min(perPage, filtered.length)} out of {filtered.length}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded disabled:opacity-40 hover:bg-gray-100"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded-lg font-medium ${
                p === page
                  ? 'bg-[#F5A623] text-white'
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded disabled:opacity-40 hover:bg-gray-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
