import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function AdSec() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-l from-primary to-tertiary p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_18px_45px_rgba(81,72,216,0.25)]">
          {/* Subtle decorative circle */}
          <div
            className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />

          {/* Right Content */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3">
              عندك مساحة تجارية؟ اعرضها على Spotly وابدأ التأجير.
            </h2>
            <p className="text-sm sm:text-base font-medium text-white/85 leading-relaxed">
              استثمر مساحتك الفارغة وضاعف أرباحك عبر تأجيرها للمشاريع الواعدة والماركات المؤقتة بكل سهولة وأمان.
            </p>
          </div>

          {/* Left Action Button */}
          <Link
            to="/add-space"
            className="relative z-10 inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all shrink-0"
          >
            <span>سجل مساحتك الآن</span>
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
