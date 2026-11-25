import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronLeft, Menu, User, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'الرئيسية', to: '/' },
  { label: 'استكشف المساحات', to: '/spaces' },
  { label: 'كيف تعمل المنصة', to: '/how-it-works' },
  { label: 'لوحة التحكم', to: '/dashboard' },
  { label: 'تسجيل الدخول', to: '/login' },
]

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { pathname } = useLocation()
  const [prevPathname, setPrevPathname] = useState(pathname)

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    if (isSidebarOpen) setIsSidebarOpen(false)
  }

  useEffect(() => {
    if (!isSidebarOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsSidebarOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isSidebarOpen])

  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-6">
          {/* Brand (Right in RTL) */}
          <Link to="/" className="flex flex-col shrink-0">
            <span className="text-[22px] font-extrabold text-primary leading-tight tracking-tight">
              Spotly
            </span>
            <span className="text-[11px] font-medium text-neutral-500 leading-snug">
              مساحتك التجارية تبدأ من هنا
            </span>
          </Link>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="التنقل الرئيسي">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-[10px] text-sm whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-linear-to-br from-primary to-tertiary text-white font-bold shadow-[0_4px_12px_rgba(108,99,255,0.25)]'
                      : 'text-neutral-600 font-semibold hover:text-primary hover:bg-primary-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions (Left in RTL) */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/get-started"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] text-sm font-bold text-white bg-linear-to-br from-primary to-tertiary shadow-[0_4px_12px_rgba(108,99,255,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(108,99,255,0.35)] active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              ابدأ الآن
            </Link>

            <Link
              to="/profile"
              className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-tertiary text-white inline-flex items-center justify-center shadow-[0_3px_10px_rgba(81,72,216,0.25)] hover:scale-105 hover:shadow-[0_5px_14px_rgba(81,72,216,0.35)] transition-all duration-200 shrink-0"
              aria-label="الملف الشخصي"
              title="الملف الشخصي"
            >
              <User size={19} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-[10px] border border-neutral-200 bg-neutral-50 text-neutral hover:bg-primary-50 hover:text-primary hover:border-primary-200 transition-colors cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="فتح القائمة"
              aria-expanded={isSidebarOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-99 bg-neutral/45 backdrop-blur-xs transition-all duration-300 ${
          isSidebarOpen
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeSidebar}
        aria-hidden={!isSidebarOpen}
      />

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`lg:hidden fixed top-0 bottom-0 right-0 z-100 w-[min(310px,82vw)] bg-white shadow-[-10px_0_35px_rgba(32,35,56,0.16)] flex flex-col justify-between transition-all duration-300 ease-out ${
          isSidebarOpen
            ? 'translate-x-0 visible pointer-events-auto'
            : 'translate-x-full invisible pointer-events-none'
        }`}
        aria-label="القائمة الجانبية"
        aria-hidden={!isSidebarOpen}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <Link to="/" className="flex flex-col" onClick={closeSidebar}>
            <span className="text-[22px] font-extrabold text-primary leading-tight tracking-tight">
              Spotly
            </span>
            <span className="text-[11px] font-medium text-neutral-500 leading-snug">
              مساحتك التجارية تبدأ من هنا
            </span>
          </Link>

          <button
            type="button"
            className="w-9 h-9 rounded-[10px] border border-neutral-200 bg-neutral-50 text-neutral inline-flex items-center justify-center hover:bg-red-50 hover:text-danger hover:border-transparent transition-colors cursor-pointer"
            onClick={closeSidebar}
            aria-label="إغلاق القائمة"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-5 flex flex-col gap-2 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-[15px] flex items-center justify-between transition-all duration-200 ${
                  isActive
                    ? 'bg-linear-to-br from-primary to-tertiary text-white font-bold shadow-[0_4px_12px_rgba(108,99,255,0.22)]'
                    : 'text-neutral-600 font-semibold hover:bg-primary-50 hover:text-primary'
                }`
              }
            >
              <span>{item.label}</span>
              <ChevronLeft size={16} />
            </NavLink>
          ))}
        </nav>

        <div className="p-5 border-t border-neutral-100 flex flex-col gap-3">
          <Link
            to="/get-started"
            className="w-full py-3 px-4 rounded-[10px] text-center text-sm font-bold text-white bg-linear-to-br from-primary to-tertiary shadow-[0_4px_12px_rgba(108,99,255,0.25)]"
            onClick={closeSidebar}
          >
            ابدأ الآن
          </Link>
          <Link
            to="/profile"
            className="w-full py-2.5 px-4 rounded-[10px] border border-neutral-200 bg-neutral-50 text-neutral text-sm font-semibold inline-flex items-center justify-center gap-2 hover:border-primary hover:text-primary hover:bg-primary-50 transition-colors"
            onClick={closeSidebar}
          >
            <User size={18} />
            <span>الملف الشخصي</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
