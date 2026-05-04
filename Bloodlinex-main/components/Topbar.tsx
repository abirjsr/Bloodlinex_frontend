import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Menu, LogOut } from 'lucide-react'

export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const router = useRouter()

  const handleLogout = () => {
    // Add any logout logic here
    router.push('/login')
  }

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6 shrink-0 z-30 sticky top-0">
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile menu toggle */}
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 text-gray-600 lg:hidden hover:bg-gray-100 rounded-lg"
        >
          <Menu size={20} />
        </button>
        
        {/* Logo */}
        <div className="flex items-center bg-[#F5A623] p-1.5 rounded-full border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          <Image
            src="/logo.png.png"
            alt="BloodlineX"
            width={120}
            height={33}
            className="object-contain md:w-[130px] md:h-[36px]"
            priority
          />
        </div>
      </div>

      {/* User */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Rumi Aktar"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-gray-800 hidden sm:inline">Rumi Aktar</span>
        </div>
        
        <button
          onClick={handleLogout}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  )
}
