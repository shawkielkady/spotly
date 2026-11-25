import { Link } from 'react-router-dom'
import { ArrowLeft, Zap } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 overflow-hidden bg-linear-to-br from-primary-50 via-white to-secondary-50/70">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 bg-primary-100 text-tertiary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 border border-primary/15">
          <Zap size={15} />
          <span>بساطة، سرعة، واحترافية</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-neutral leading-tight mb-4 max-w-2xl">
          احجز مساحتك التجارية بكل سهولة في خطوات معدودة
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base font-medium text-neutral-500 leading-relaxed mb-8 max-w-2xl">
          منصة Spotly تجمع لك أفضل المساحات التجارية قصيرة الأجل (معارض، متاجر مؤقتة، فعاليات) في مكان واحد لتنطلق بعلامتك التجارية نحو النجاح.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            to="/spaces"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-sm sm:text-base font-bold shadow-[0_6px_16px_rgba(108,99,255,0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(108,99,255,0.36)] active:scale-95 transition-all"
          >
            <span>استكشف المساحات الآن</span>
            <ArrowLeft size={18} />
          </Link>

          <Link
            to="/add-space"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-neutral-100 text-neutral text-sm sm:text-base font-bold hover:bg-neutral-200 transition-colors"
          >
            سجل عقارك معنا
          </Link>
        </div>
      </div>
    </section>
  )
}

