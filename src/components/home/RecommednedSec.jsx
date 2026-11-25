import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProductCard from '../../shared components/ProductCard'
import productImg from '../../assets/product.png'

const RECOMMENDED_SPACES = [
  {
    id: 1,
    title: 'كشك تجاري في سيتي سنتر الإسكندرية',
    location: 'الإسكندرية، محرم بك',
    area: '12 م²',
    price: 800,
    period: 'يوم',
    badge: 'متاح فوراً',
    image: productImg,
  },
  {
    id: 2,
    title: 'مساحة Pop-up Store في مول العرب',
    location: 'الجيزة، 6 أكتوبر',
    area: '25 م²',
    price: 1500,
    period: 'يوم',
    badge: 'متاح فوراً',
    image: productImg,
  },
  {
    id: 3,
    title: 'جناح عرض في سموحة',
    location: 'الإسكندرية، سموحة',
    area: '18 م²',
    price: 1000,
    period: 'يوم',
    badge: 'متاح فوراً',
    image: productImg,
  },
  {
    id: 4,
    title: 'مساحة فعاليات في القاهرة الجديدة',
    location: 'القاهرة، التجمع الخامس',
    area: '40 م²',
    price: 2000,
    period: 'يوم',
    badge: 'متاح فوراً',
    image: productImg,
  },
  {
    id: 5,
    title: 'كشك عرض في كايرو فيستيفال سيتي',
    location: 'القاهرة، التجمع الخامس',
    area: '15 م²',
    price: 1200,
    period: 'يوم',
    badge: 'متاح فوراً',
    image: productImg,
  },
  {
    id: 6,
    title: 'محل مؤقت في أركان بلازا',
    location: 'الجيزة، الشيخ زايد',
    area: '30 م²',
    price: 1800,
    period: 'يوم',
    badge: 'متاح فوراً',
    image: productImg,
  },
]

const ITEMS_PER_VIEW = 4

export default function RecommednedSec() {
  const [startIndex, setStartIndex] = useState(0)
  const maxStart = Math.max(0, RECOMMENDED_SPACES.length - ITEMS_PER_VIEW)

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxStart : prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxStart ? 0 : prev + 1))
  }

  const visibleSpaces = RECOMMENDED_SPACES.slice(
    startIndex,
    startIndex + ITEMS_PER_VIEW
  )

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-page/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="block text-xs sm:text-sm font-bold text-primary mb-1">
              المساحات المميزة
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral">
              اختر من أفضل المساحات المتاحة الآن
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="السابق"
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-neutral flex items-center justify-center shadow-xs hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="التالي"
              className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-tertiary text-white flex items-center justify-center shadow-[0_4px_12px_rgba(108,99,255,0.28)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
          </div>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleSpaces.map((space) => (
            <ProductCard key={space.id} space={space} />
          ))}
        </div>
      </div>
    </section>
  )
}
