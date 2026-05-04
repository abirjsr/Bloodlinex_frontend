'use client'
import AdminLayout from '@/components/AdminLayout'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import { Users, Dog, ShoppingBag, Star } from 'lucide-react'

const activityData = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 1400 },
  { month: 'Mar', value: 1200 },
  { month: 'Apr', value: 2000 },
  { month: 'May', value: 1900 },
  { month: 'Jun', value: 2100 },
  { month: 'Jul', value: 2000 },
  { month: 'Aug', value: 2400 },
  { month: 'Sep', value: 2600 },
  { month: 'Oct', value: 2800 },
  { month: 'Nov', value: 3000 },
  { month: 'Dec', value: 3300 },
]

const breedData = [
  { name: 'Golden Retriever', value: 35, color: '#F5A623' },
  { name: 'German Shepherd', value: 25, color: '#7C3AED' },
  { name: 'French Bulldog', value: 22, color: '#991B1B' },
  { name: 'Poodle', value: 18, color: '#16A34A' },
]

const stats = [
  { label: 'Total Users', value: '1,240', icon: Users, iconColor: '#F5A623', bgColor: '#FFF8EC' },
  { label: 'Total Dogs', value: '3,560', icon: Dog, iconColor: '#7C3AED', bgColor: '#F5F3FF' },
  { label: 'Marketplace Listings', value: '890', icon: ShoppingBag, iconColor: '#16A34A', bgColor: '#F0FDF4' },
  { label: 'Pending Reviews', value: '12', icon: Star, iconColor: '#DC2626', bgColor: '#FEF2F2' },
]

export default function DashboardPage() {
  return (
    <AdminLayout>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-7">
        {stats.map(({ label, value, icon: Icon, iconColor, bgColor }) => (
          <div key={label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: bgColor }}>
                <Icon size={24} color={iconColor} strokeWidth={1.8} />
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mb-1">{label}</p>
            <p className="text-center text-2xl md:text-3xl font-bold text-gray-900">{value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Area Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-900">Platform Activity</h2>
            <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-600 outline-none">
              <option>2026</option>
              <option>2025</option>
            </select>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="activityGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F5A623" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#F5A623" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                <YAxis
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v / 1000}k`}
                />
                <Tooltip
                  contentStyle={{ borderRadius: 8, border: '1px solid #F3F4F6', fontSize: 13 }}
                  formatter={(v: number) => [v.toLocaleString(), 'Activity']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#F5A623"
                  strokeWidth={2.5}
                  fill="url(#activityGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-4">
            <h2 className="text-lg font-bold text-gray-900">Top Dog Breeds</h2>
            <button className="text-sm text-gray-500 hover:text-[#F5A623]">See all</button>
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={breedData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {breedData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 w-full">
            {breedData.map((b) => (
              <div key={b.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ background: b.color }} />
                <span className="text-xs text-gray-600 truncate">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
