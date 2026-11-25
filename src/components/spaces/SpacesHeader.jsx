import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function SpacesHeader() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 mb-3">
        <Link to="/" className="hover:text-primary transition-colors">
          الرئيسية
        </Link>
        <ChevronLeft size={14} />
        <span className="text-primary">استكشف المساحات</span>
      </nav>

      {/* Page Header & Sort */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral mb-1">
            اكتشف المساحات التجارية
          </h1>
          <p className="text-sm font-medium text-neutral-500">
            اعثر على المساحة المثالية لعلامتك التجارية أو مشروعك المؤقت القادم
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <span className="text-xs font-semibold text-neutral-500 whitespace-nowrap">
            ترتيب حسب:
          </span>
          <select
            defaultValue="الأحدث"
            className="h-10 px-3.5 rounded-xl bg-white border border-neutral-200 text-sm font-bold text-neutral outline-none cursor-pointer focus:border-primary"
          >
            <option value="الأحدث">الأحدث</option>
            <option value="الأقل سعراً">الأقل سعراً</option>
            <option value="الأعلى سعراً">الأعلى سعراً</option>
            <option value="الأعلى تقييماً">الأعلى تقييماً</option>
          </select>
        </div>
      </div>
    </>
  )
}

