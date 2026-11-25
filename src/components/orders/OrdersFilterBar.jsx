import { Search } from 'lucide-react'

const FILTER_TABS = [
  { id: 'all', label: 'الكل (12)', active: true },
  { id: 'pending', label: 'قيد المراجعة (3)', active: false },
  { id: 'approved', label: 'مقبولة (4)', active: false },
  { id: 'completed', label: 'مكتملة (3)', active: false },
  { id: 'cancelled', label: 'ملغية (2)', active: false },
]

export default function OrdersFilterBar() {
  return (
    <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-xs mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      {/* Status Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              tab.active
                ? 'bg-linear-to-br from-primary to-tertiary text-white shadow-[0_4px_10px_rgba(108,99,255,0.25)]'
                : 'bg-neutral-50 text-neutral-600 hover:bg-primary-50 hover:text-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative flex items-center w-full lg:w-72">
        <Search
          size={16}
          className="absolute start-3.5 text-neutral-400 pointer-events-none"
        />
        <input
          type="text"
          placeholder="ابحث برقم الحجز أو اسم المساحة..."
          className="w-full h-10 ps-10 pe-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm font-semibold text-neutral outline-none focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all"
        />
      </div>
    </div>
  )
}

