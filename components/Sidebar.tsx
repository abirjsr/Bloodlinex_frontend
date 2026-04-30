'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  Network,
  Dog,
  GitBranch,
  ShoppingBag,
  MessageSquare,
  Settings,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Breeders', href: '/breeders', icon: Users },
  { label: 'Category', href: '/category', icon: Network },
  { label: 'Dogs', href: '/dogs', icon: Dog },
  { label: 'Type', href: '/type', icon: GitBranch },
  { label: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
  { label: 'Chats', href: '/chats', icon: MessageSquare },
  { label: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar({ isOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 md:w-56 bg-white border-r border-gray-100 flex flex-col pt-6 pb-8 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-end px-4 mb-4 lg:hidden">
          <button onClick={onClose} className="p-2 text-gray-500">
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-3 mt-4 lg:mt-0">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                  active
                    ? 'bg-[#F5A623] text-white shadow-sm'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-[#F5A623]'
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />
                {label}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
