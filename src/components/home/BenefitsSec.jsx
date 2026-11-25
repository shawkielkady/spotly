import { Banknote, ShieldCheck, SlidersHorizontal, Zap } from 'lucide-react'

const BENEFITS = [
  {
    id: 'variety',
    title: 'خيارات متنوعة',
    description:
      'تشكيلة واسعة من المساحات والأكشاك والمحلات تناسب كافة الأنشطة التجارية.',
    Icon: SlidersHorizontal,
  },
  {
    id: 'easy-booking',
    title: 'حجز سهل',
    description:
      'واجهة مستخدم ذكية تتيح لك إتمام الحجز في خطوات معدودة دون تعقيد.',
    Icon: Zap,
  },
  {
    id: 'transparent-pricing',
    title: 'أسعار واضحة',
    description:
      'شفافية كاملة في الأسعار بدون رسوم خفية مع تفصيل كامل للتكاليف.',
    Icon: Banknote,
  },
  {
    id: 'trusted-locations',
    title: 'أماكن موثوقة',
    description:
      'جميع المساحات معتمدة وموجودة في أفضل المواقع التجارية والمولات بمصر.',
    Icon: ShieldCheck,
  },
]

export default function BenefitsSec() {
  return (
    <section className="w-full py-14 sm:py-16 px-4 sm:px-6 bg-page">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
            لماذا تختارنا
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral mb-2">
            المميزات التي تقدمها Spotly
          </h2>
          <p className="text-sm sm:text-base font-medium text-neutral-500">
            نوفر لك تجربة متكاملة لتأجير المساحات التجارية بثقة وأمان
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map(({ id, title, description, Icon }) => (
            <div
              key={id}
              className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs flex flex-col items-start text-right transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-100 text-primary flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-neutral mb-2">
                {title}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-neutral-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
