import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarCheck,
  LayoutDashboard,
  Settings,
  Store,
  Users,
  X,
} from 'lucide-react'

const ADMIN_TABS = [
  { id: 'overview', label: 'نظرة عامة', Icon: LayoutDashboard },
  { id: 'spaces', label: 'إدارة المساحات', Icon: Store },
  { id: 'bookings', label: 'الحجوزات وإنستاباي', Icon: CalendarCheck, badge: 6 },
  { id: 'users', label: 'المستخدمين والملاك', Icon: Users },
  { id: 'settings', label: 'إعدادات المنصة', Icon: Settings },
]

export default function AdminSidebar({
  activeTab,
  onSelectTab,
  isOpen,
  onClose,
}) {
  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-99 bg-neutral/45 backdrop-blur-xs transition-all duration-300 ${
          isOpen
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 right-0 z-100 lg:z-30 h-screen w-68 bg-neutral text-white flex flex-col justify-between shrink-0 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="px-5 py-5 border-b border-white/10 flex items-center justify-between">
            <Link to="/admin" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary to-tertiary flex items-center justify-center font-extrabold text-white shadow-md">
                S
              </div>
              <div>
                <span className="block text-lg font-extrabold leading-none">
                  Spotly
                </span>
                <span className="block text-[11px] font-medium text-neutral-300 mt-1">
                  لوحة تحكم الإدارة
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              aria-label="إغلاق القائمة"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1.5">
            {ADMIN_TABS.map(({ id, label, Icon, badge }) => {
              const isActive = activeTab === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    onSelectTab(id)
                    onClose()
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'bg-linear-to-br from-primary to-tertiary text-white shadow-[0_4px_14px_rgba(108,99,255,0.35)]'
                      : 'text-neutral-300 hover:bg-white/8 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon size={18} />
                    <span>{label}</span>
                  </div>

                  {badge && (
                    <span className="bg-secondary text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full">
                      {badge}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Back to Public Site */}
        <div className="p-4 border-t border-white/10">
          <Link
            to="/"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/8 hover:bg-white/15 text-neutral-200 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <ArrowRight size={16} />
            <span>العودة للموقع الرئيسي</span>
          </Link>
        </div>
      </aside>
    </>
  )
}

