import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export default function AboutCtaSec() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-tertiary p-8 sm:p-14 text-white text-center flex flex-col items-center shadow-[0_20px_50px_rgba(81,72,216,0.28)]">
          {/* Decorative Ambient Glows */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />

          <span className="relative z-10 text-xs sm:text-sm font-bold text-white/80 mb-3">
            جاهز للبدء؟
          </span>

          <h2 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug mb-3 max-w-xl">
            ابحث عن مساحتك التجارية المثالية اليوم وابدأ نشاطك
          </h2>

          <p className="relative z-10 text-sm sm:text-base font-medium text-white/85 mb-8 max-w-lg leading-relaxed">
            انضم إلى آلاف العلامات التجارية ورواد الأعمال الذين حجزوا مساحاتهم بكل سهولة عبر Spotly.
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/spaces"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all"
            >
              <span>استكشف المساحات</span>
              <Compass size={18} />
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white border border-white/25 font-bold text-sm sm:text-base px-6 py-3 rounded-xl backdrop-blur-xs transition-all"
            >
              أنشئ حساباً جديداً
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

