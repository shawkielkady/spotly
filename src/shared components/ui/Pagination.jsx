import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        aria-label="الصفحة السابقة"
        className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-neutral-600 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
      >
        <ChevronRight size={16} />
      </button>

      <button
        type="button"
        className="w-9 h-9 rounded-lg bg-linear-to-br from-primary to-tertiary text-white text-sm font-bold flex items-center justify-center shadow-[0_4px_12px_rgba(108,99,255,0.25)] cursor-pointer"
      >
        1
      </button>
      <button
        type="button"
        className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-sm font-bold flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
      >
        2
      </button>
      <button
        type="button"
        className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-sm font-bold flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
      >
        3
      </button>

      <span className="px-1.5 text-sm font-bold text-neutral-400">...</span>

      <button
        type="button"
        className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-sm font-bold flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
      >
        8
      </button>

      <button
        type="button"
        aria-label="الصفحة التالية"
        className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-neutral-600 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
      >
        <ChevronLeft size={16} />
      </button>
    </div>
  )
}

