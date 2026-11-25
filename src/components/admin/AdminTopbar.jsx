import { Bell, Menu, Search } from 'lucide-react'

export default function AdminTopbar({ title, onOpenSidebar }) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-neutral-100 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label="فتح قائمة الإدارة"
          className="lg:hidden w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral flex items-center justify-center hover:bg-primary-50 hover:text-primary cursor-pointer"
        >
          <Menu size={20} />
        </button>

        <h1 className="text-lg sm:text-xl font-extrabold text-neutral">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center relative w-64">
          <Search
            size={16}
            className="absolute start-3 text-neutral-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="بحث سريع في الإدارة..."
            className="w-full h-9.5 ps-9 pe-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral outline-none focus:bg-white focus:border-primary"
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="الإشعارات"
          className="relative w-9.5 h-9.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-600 flex items-center justify-center hover:text-primary hover:border-primary transition-colors cursor-pointer"
        >
          <Bell size={18} />
          <span className="absolute top-2 end-2 w-2 h-2 rounded-full bg-danger" />
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-2.5 ps-2 border-s border-neutral-200">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary to-tertiary text-white text-xs font-extrabold flex items-center justify-center">
            م ع
          </div>
          <div className="hidden sm:block text-right">
            <span className="block text-xs font-extrabold text-neutral leading-tight">
              أحمد علي
            </span>
            <span className="block text-[11px] font-medium text-neutral-500">
              المدير العام
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

