import { Calendar, Lock, Search, Store } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    title: 'استكشف المساحات',
    description:
      'تصفح مئات المساحات التجارية المميزة في أفضل المولات والمناطق، وفلتر النتائج حسب المساحة والميزانية.',
    tag: 'بحث متقدم ودقيق',
    Icon: Search,
  },
  {
    number: '02',
    title: 'اختر الفترة والطلب',
    description:
      'حدد تواريخ البداية والنهاية عبر تقويم الحجز التفاعلي، وقدم طلبك بضغطة زر واحدة دون تعقيد.',
    tag: 'مرونة تامة في التواريخ',
    Icon: Calendar,
  },
  {
    number: '03',
    title: 'الدفع والموافقة',
    description:
      'ادفع بأمان تام بالجنيه المصري (EGP) عبر بوابة الدفع المشفرة، واحصل على الموافقة السريعة من المالك.',
    tag: 'معاملات مالية مؤمنة',
    Icon: Lock,
  },
  {
    number: '04',
    title: 'استلم وابدأ نشاطك',
    description:
      'استلم مفاتيح مساحتك التجارية، وابدأ في عرض منتجاتك أو استقبال عملائك لتحقيق أهدافك التجارية.',
    tag: 'انطلق بنشاطك فوراً',
    Icon: Store,
  },
]

export default function AboutSteps() {
  return (
    <section className="w-full py-14 sm:py-16 px-4 sm:px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
            رحلة الحجز
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral mb-2">
            كيف تعمل منصة Spotly؟
          </h2>
          <p className="text-sm sm:text-base font-medium text-neutral-500">
            أربع خطوات بسيطة تفصلك عن إطلاق مشروعك التجاري المؤقت بكل ثقة وأمان.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(({ number, title, description, tag, Icon }) => (
            <div
              key={number}
              className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs flex flex-col justify-between text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-linear-to-br from-primary to-tertiary text-white font-extrabold text-base flex items-center justify-center mx-auto mb-5 shadow-[0_4px_12px_rgba(108,99,255,0.28)]">
                  {number}
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-neutral mb-2">
                  {title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-neutral-500 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-center gap-1.5 text-xs font-bold text-primary">
                <Icon size={14} />
                <span>{tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

