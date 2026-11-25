const STEPS = [
  {
    number: 1,
    title: 'ابحث عن المساحة',
    description: 'تصفح مئات المساحات التجارية والأكشاك في أفضل المواقع الحيوية.',
  },
  {
    number: 2,
    title: 'اختر المدة المناسبة',
    description: 'حدد تواريخ البداية والنهاية لإطلاق مشروعك التجاري المؤقت.',
  },
  {
    number: 3,
    title: 'أرسل طلب الحجز',
    description: 'قم بتقديم تفاصيل مشروعك وأكد طلب الحجز بضغطة زر واحدة.',
  },
  {
    number: 4,
    title: 'انتظر الموافقة',
    description: 'ستتم مراجعة الطلب وتأكيد الحجز معك فوراً لبدء العمل.',
  },
]

export default function StepsSec() {
  return (
    <section className="w-full py-14 sm:py-16 px-4 sm:px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
            خطوات بسيطة
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral mb-2">
            كيف تعمل منصة Spotly؟
          </h2>
          <p className="text-sm sm:text-base font-medium text-neutral-500">
            احجز مساحتك التجارية في 4 خطوات سهلة وسريعة
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
            >
              <div className="w-11 h-11 rounded-full bg-linear-to-br from-primary to-tertiary text-white font-extrabold text-lg flex items-center justify-center mb-4 shadow-[0_4px_12px_rgba(108,99,255,0.28)]">
                {step.number}
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-neutral mb-2">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-neutral-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

