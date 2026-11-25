import { Link } from 'react-router-dom'
import { ArrowLeft, Building2, LayoutGrid, PartyPopper, Store, Tag } from 'lucide-react'

const CATEGORIES = [
  {
    id: 'kiosks',
    title: 'أكشاك تجارية',
    subtitle: 'مواقع حيوية بالمولات',
    typeParam: 'كشك تجاري',
    circleClass: 'bg-primary-100 text-tertiary',
    Icon: Store,
  },
  {
    id: 'popup',
    title: 'محلات مؤقتة',
    subtitle: 'Pop-up Stores',
    typeParam: 'محل تجاري',
    circleClass: 'bg-secondary-200/80 text-secondary-800',
    Icon: Tag,
  },
  {
    id: 'booths',
    title: 'أجنحة معارض',
    subtitle: 'لعرض المنتجات',
    typeParam: 'بوث عرض',
    circleClass: 'bg-primary-100 text-tertiary',
    Icon: LayoutGrid,
  },
  {
    id: 'malls',
    title: 'داخل المولات',
    subtitle: 'إقبال جماهيري ضخم',
    typeParam: 'مساحة مؤقتة',
    circleClass: 'bg-primary-100/75 text-neutral-700',
    Icon: Building2,
  },
  {
    id: 'events',
    title: 'مساحات فعاليات',
    subtitle: 'للحفلات والإطلاقات',
    typeParam: 'مساحة مؤقتة',
    circleClass: 'bg-primary-100 text-tertiary',
    Icon: PartyPopper,
  },
]

export default function CategoriesSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="block text-xs sm:text-sm font-bold text-primary mb-1">
              التصنيفات
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral">
              استكشف حسب نوع المساحة
            </h2>
          </div>

          <Link
            to="/spaces"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-tertiary transition-colors shrink-0"
          >
            <span>عرض الكل</span>
            <ArrowLeft size={16} />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {CATEGORIES.map(({ id, title, subtitle, typeParam, circleClass, Icon }) => (
            <Link
              key={id}
              to={`/spaces?type=${encodeURIComponent(typeParam)}`}
              className="group bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/25"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 ${circleClass}`}
              >
                <Icon size={24} />
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-neutral mb-1">
                {title}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-neutral-500">
                {subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
