'use client'
import { useState } from 'react'
import AdminLayout from '@/components/AdminLayout'
import { User, Repeat } from 'lucide-react'

const conversations = [
  { id: 1, customer: 'Alice Smith', provider: "John's", active: true },
  { id: 2, customer: 'Bob Jones', provider: 'Electric Pro', active: false },
  { id: 3, customer: 'Jane Cooper', provider: 'Wade', active: false },
  { id: 4, customer: 'Howard', provider: 'Cameron', active: false },
  { id: 5, customer: 'Williamson', provider: 'Simmons', active: false },
  { id: 6, customer: 'Jenny Wilson', provider: 'Leslie', active: false },
  { id: 7, customer: 'Robert Fox', provider: 'Hawkins', active: false },
]

const messages = [
  { id: 1, sender: 'Alice Smith', role: 'Customer', text: 'Hi, I need a plumber for a leaky sink.', time: '09:00 AM' },
  { id: 2, sender: "John's", role: 'Provider', text: 'Hello! I can help with that. When are you available?', time: '09:00 AM' },
  { id: 3, sender: 'Alice Smith', role: 'Customer', text: 'Is tomorrow morning okay?', time: '09:00 AM' },
  { id: 4, sender: "John's", role: 'Provider', text: "Yeah that's fine", time: '09:00 AM' },
]

export default function ChatsPage() {
  const [activeConv, setActiveConv] = useState(conversations[0])

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Chats</h1>
        <p className="text-gray-500 text-sm mt-1">Manage all registered users, breeders, and their permissions.</p>
      </div>

      <div className="flex flex-col lg:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden lg:h-[calc(100vh-220px)] min-h-[600px]">
        {/* Sidebar - Conversation List */}
        <div className="w-full lg:w-80 border-r border-gray-100 flex flex-col bg-white">
          <div className="bg-[#F5A623] text-white p-4 font-semibold text-center border-b border-[#F5A623]">
            Conversation List
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {conversations.map((conv) => (
              <div 
                key={conv.id}
                onClick={() => setActiveConv(conv)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  activeConv.id === conv.id 
                    ? 'bg-[#FEF5E7] border-[#F5A623]/30 shadow-sm' 
                    : 'bg-white border-gray-50 hover:bg-gray-50 hover:border-gray-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#CC7D14]/20 flex items-center justify-center text-[#CC7D14] shrink-0">
                    <User size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate">C : {conv.customer}</p>
                    <p className="text-sm text-gray-500 truncate mt-1">P : {conv.provider}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-white">
            <div className="w-10 h-10 rounded-full bg-[#F5A623] flex items-center justify-center text-white shrink-0 shadow-sm">
              <User size={20} />
            </div>
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="font-semibold text-gray-900 truncate">{activeConv.customer}</span>
              <Repeat size={16} className="text-gray-400 shrink-0" />
              <span className="font-semibold text-gray-900 truncate">{activeConv.provider}</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8 bg-white">
            <div className="flex justify-center">
              <span className="bg-white text-gray-400 text-xs px-4 py-1.5 rounded-lg border border-gray-100 shadow-sm">Today</span>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 shrink-0 self-end">
                  <User size={16} />
                </div>
                <div className="space-y-1.5 max-w-[85%] md:max-w-[70%] text-left">
                  <p className="text-[11px]">
                    <span className="font-bold text-gray-900">{msg.sender}</span>
                    <span className="text-[#F5A623] ml-1 font-medium italic">({msg.role})</span>
                  </p>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm p-4 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-700 text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <p className="text-[10px] text-gray-400 pl-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer - Read Only */}
          <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Admin Monitoring Mode Read Only</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
