import { Building2, Headphones, ShieldCheck, Zap } from 'lucide-react'

const FEATURES = [
  {
    id: 'security',
    title: 'أمان تام',
    description:
      'معاملات مالية مضمونة وحماية كاملة لحقوق المستأجر والمالك مع عقود قانونية موثقة.',
    Icon: ShieldCheck,
  },
  {
    id: 'speed',
    title: 'سرعة في الإجراءات',
    description:
      'انتقل من معاينة المساحة إلى الحجز والدفع في أقل من 10 دقائق دون الحاجة لوسطاء تقليديين.',
    Icon: Zap,
  },
  {
    id: 'variety',
    title: 'تنوع المساحات',
    description:
      'متاجر بوب أب، معارض فنية، مساحات في مولات كبرى، وأسطح مناسبة للفعاليات في مختلف مناطق القاهرة.',
    Icon: Building2,
  },
  {
    id: 'support',
    title: 'دعم فني متخصص',
    description:
      'فريق دعم متواجد على مدار الساعة لمساعدتك في اختيار المساحة المناسبة وحل أي استفسار.',
    Icon: Headphones,
  },
]

export default function AboutFeaturesSec() {
  return (
    <section className="w-full py-14 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
            لماذا Spotly؟
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral mb-2">
            مميزات مصممة خصيصاً لنجاح أعمالك
          </h2>
          <p className="text-sm sm:text-base font-medium text-neutral-500">
            تقدم بيئة عمل متكاملة تلبي احتياجات العلامات التجارية ورواد الأعمال في مصر.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(({ id, title, description, Icon }) => (
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

