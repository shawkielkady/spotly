import { Link } from 'react-router-dom'
import { Store } from 'lucide-react'

export default function AuthCard({ children }) {
  return (
    <section className="relative min-h-[calc(100vh-72px)] w-full flex items-center justify-center py-12 px-4 overflow-hidden bg-neutral-50">
      {/* Subtle Ambient Glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/12 blur-3xl"
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-[440px] bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(32,35,56,0.08)] border border-neutral-100">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-tertiary text-white flex items-center justify-center mx-auto mb-4 shadow-[0_6px_16px_rgba(108,99,255,0.28)]">
            <Store size={22} />
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-neutral mb-1">
            مرحباً بك في Spotly
          </h1>
          <p className="text-xs sm:text-sm font-medium text-neutral-500">
            منصتك الأولى لحجز المساحات التجارية قصيرة الأجل
          </p>
        </div>

        {/* Form Content */}
        {children}

        {/* Footer Terms */}
        <p className="text-[11px] font-medium text-neutral-500 text-center mt-5 leading-relaxed">
          بالتسجيل أنت توافق على{' '}
          <Link to="/terms" className="text-primary font-bold hover:underline">
            الشروط والأحكام
          </Link>{' '}
          و
          <Link to="/terms" className="text-primary font-bold hover:underline">
            سياسة الخصوصية
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

