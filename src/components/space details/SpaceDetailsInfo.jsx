import {
  BadgeCheck,
  Car,
  Lightbulb,
  MapPin,
  Plug,
  ShieldCheck,
  Snowflake,
  Star,
  Wifi,
} from 'lucide-react'

const AMENITIES = [
  { label: 'إضاءة كاملة', Icon: Lightbulb },
  { label: 'تكييف مركزي', Icon: Snowflake },
  { label: 'حراسة أمنية 24/7', Icon: ShieldCheck },
  { label: 'واي فاي فائق السرعة', Icon: Wifi },
  { label: 'مقابس كهربائية متعددة', Icon: Plug },
  { label: 'مواقف سيارات متاحة', Icon: Car },
]

const REVIEWS = [
  {
    id: 1,
    initials: 'م ك',
    name: 'محمود كريم',
    date: 'منذ أسبوعين',
    comment:
      'مساحة رائعة جداً وخدمات ممتازة، لكن السعر إضافي. التعامل مع المالك كان سلساً للغاية والموقع استراتيجي.',
  },
  {
    id: 2,
    initials: 'س هـ',
    name: 'سارة هاشم',
    date: 'منذ شهر',
    comment:
      'الكشك مجهز بالكامل ولا يحتاج أي مصاريف إضافية للديكور. تجربة ممتازة والمكان نظيف وآمن.',
  },
]

export default function SpaceDetailsInfo() {
  return (
    <div className="space-y-6">
      {/* Owner Card */}
      <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary font-extrabold text-sm flex items-center justify-center shrink-0">
            أ ح
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-base font-extrabold text-neutral">أحمد محمد</h2>
              <BadgeCheck size={16} className="text-primary" />
            </div>
            <p className="text-xs font-medium text-neutral-500 mt-0.5">
              مالك معتمد • استجابة خلال ساعة • تمت إدارة 14+ مساحة بنجاح
            </p>
          </div>
        </div>

        <button
          type="button"
          className="px-4 py-2 rounded-xl bg-white border border-neutral-200 text-xs sm:text-sm font-bold text-neutral hover:border-primary hover:text-primary transition-colors cursor-pointer shrink-0"
        >
          تواصل مع المالك
        </button>
      </div>

      {/* About the Space */}
      <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs">
        <h2 className="text-lg font-extrabold text-neutral mb-3">
          عن المساحة التجارية
        </h2>
        <p className="text-sm font-medium text-neutral-600 leading-relaxed mb-5">
          مساحة تجارية استثنائية (كشك مجهز بالكامل) تقع في قلب سيتي سنتر الإسكندرية بمنطقة محرم بك الحيوية. تتميز المساحة بتواجدها في نقطة مرور رئيسية تضمن تدفقاً عالياً للعملاء يومياً. الكشك مصمم بعناية فائقة ليلبي احتياجات العلامات التجارية الناشئة والمتاجر المؤقتة (Pop-up stores)، مع إمكانية التعديل السهل للديكورات الداخلية لتتناسب مع هوية علامتك التجارية.
        </p>

        <div className="pt-4 border-t border-neutral-100 grid grid-cols-3 gap-4">
          <div>
            <span className="block text-xs font-medium text-neutral-500 mb-0.5">
              نوع المتجر
            </span>
            <span className="text-sm font-extrabold text-neutral">
              كشك تجاري داخلي
            </span>
          </div>
          <div>
            <span className="block text-xs font-medium text-neutral-500 mb-0.5">
              الارتفاع
            </span>
            <span className="text-sm font-extrabold text-neutral">3.2 متر</span>
          </div>
          <div>
            <span className="block text-xs font-medium text-neutral-500 mb-0.5">
              الحد الأدنى للحجز
            </span>
            <span className="text-sm font-extrabold text-neutral">3 أيام</span>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs">
        <h2 className="text-lg font-extrabold text-neutral mb-4">
          التجهيزات والمرافق المتاحة
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {AMENITIES.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-xs sm:text-sm font-bold text-neutral"
            >
              <Icon size={17} className="text-primary shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Location Map Placeholder */}
      <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs">
        <h2 className="text-lg font-extrabold text-neutral mb-1">
          الموقع الجغرافي
        </h2>
        <p className="text-xs sm:text-sm font-medium text-neutral-500 mb-4">
          محرم بك، الإسكندرية، بجوار المدخل الرئيسي للمركز التجاري
        </p>

        <div className="relative h-56 rounded-2xl overflow-hidden border border-neutral-200 bg-linear-to-br from-[#E6F2F8] via-[#EDF5F1] to-[#E3EFF7] flex items-center justify-center">
          {/* Decorative map grid */}
          <div
            className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(120,127,160,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,127,160,0.15)_1px,transparent_1px)] bg-size-[36px_36px]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center gap-1.5 text-center px-4">
            <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_6px_16px_rgba(108,99,255,0.35)]">
              <MapPin size={22} />
            </div>
            <span className="text-sm font-extrabold text-neutral">
              الإسكندرية • Alexandria
            </span>
          </div>

          <div className="absolute bottom-3 start-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-sm border border-neutral-100 inline-flex items-center gap-1.5 text-xs font-bold text-neutral">
            <MapPin size={14} className="text-primary" />
            <span>سيتي سنتر الإسكندرية، محرم بك</span>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-extrabold text-neutral mb-1">
              تقييمات العملاء
            </h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-neutral">4.8</span>
              <span className="font-medium text-neutral-500">(24 تقييم)</span>
            </div>
          </div>

          <button
            type="button"
            className="px-4 py-2 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-xs sm:text-sm font-bold shadow-[0_4px_12px_rgba(108,99,255,0.25)] hover:shadow-[0_6px_16px_rgba(108,99,255,0.35)] cursor-pointer transition-all"
          >
            أضف تقييماً
          </button>
        </div>

        <div className="space-y-4">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-4 rounded-xl bg-neutral-50 border border-neutral-100"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-primary-100 text-primary text-xs font-extrabold flex items-center justify-center">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-neutral">
                      {review.name}
                    </h3>
                    <span className="text-[11px] font-medium text-neutral-500">
                      {review.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm font-medium text-neutral-600 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

