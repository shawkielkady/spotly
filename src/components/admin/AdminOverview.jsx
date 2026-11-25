import {
  Banknote,
  CalendarCheck,
  Check,
  Clock,
  Store,
  TrendingUp,
  X,
} from 'lucide-react'

const KPI_STATS = [
  {
    id: 'revenue',
    label: 'إجمالي الإيرادات',
    value: '248,500 ج.م',
    trend: '+18.4%',
    iconBg: 'bg-primary-100 text-primary',
    Icon: Banknote,
  },
  {
    id: 'bookings',
    label: 'الحجوزات النشطة',
    value: '42 حجز',
    trend: '+12%',
    iconBg: 'bg-secondary-100 text-secondary-700',
    Icon: CalendarCheck,
  },
  {
    id: 'spaces',
    label: 'المساحات المسجلة',
    value: '128 مساحة',
    trend: '+7 جديدة',
    iconBg: 'bg-tertiary-100 text-tertiary',
    Icon: Store,
  },
  {
    id: 'pending',
    label: 'بانتظار مراجعة إنستاباي',
    value: '6 طلبات',
    trend: 'يحتاج تأكيد',
    iconBg: 'bg-amber-100 text-amber-700',
    Icon: Clock,
  },
]

const MONTHLY_REVENUE = [
  { month: 'يونيو', height: 'h-20', amount: '24k' },
  { month: 'يوليو', height: 'h-28', amount: '35k' },
  { month: 'أغسطس', height: 'h-24', amount: '30k' },
  { month: 'سبتمبر', height: 'h-36', amount: '48k' },
  { month: 'أكتوبر', height: 'h-44', amount: '62k' },
  { month: 'نوفمبر', height: 'h-40', amount: '54k' },
]

const RECENT_REQUESTS = [
  {
    code: 'SPT-2023-849',
    client: 'محمود كريم',
    space: 'معرض الأفق التجاري - الزمالك',
    amount: '14,500 ج.م',
    ipa: 'mahmoud@instapay',
  },
  {
    code: 'SPT-2023-850',
    client: 'سارة هاشم',
    space: 'كشك تجاري في سيتي سنتر',
    amount: '4,760 ج.م',
    ipa: 'sara.h@instapay',
  },
  {
    code: 'SPT-2023-851',
    client: 'شركة نيو براند',
    space: 'مساحة Pop-up Store مول العرب',
    amount: '9,000 ج.م',
    ipa: '01012345678',
  },
]

export default function AdminOverview() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {KPI_STATS.map(({ id, label, value, trend, iconBg, Icon }) => (
          <div
            key={id}
            className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-xs flex items-start justify-between gap-3"
          >
            <div>
              <span className="block text-xs font-semibold text-neutral-500 mb-1">
                {label}
              </span>
              <span className="block text-xl sm:text-2xl font-extrabold text-neutral mb-2">
                {value}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary-700 bg-secondary-50 px-2 py-0.5 rounded-full">
                <TrendingUp size={12} />
                {trend}
              </span>
            </div>

            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}
            >
              <Icon size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* Chart & Pending InstaPay Verifications */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-6">
        {/* Monthly Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-neutral">
                نمو الإيرادات الشهرية
              </h2>
              <p className="text-xs font-medium text-neutral-500">
                آخر 6 أشهر (بالجنيه المصري)
              </p>
            </div>
            <span className="text-xs font-bold text-primary bg-primary-50 px-3 py-1 rounded-full">
              2024
            </span>
          </div>

          <div className="h-52 flex items-end justify-between gap-3 pt-4 border-b border-neutral-100 pb-2">
            {MONTHLY_REVENUE.map((item) => (
              <div
                key={item.month}
                className="flex-1 flex flex-col items-center gap-2 group"
              >
                <span className="text-[11px] font-bold text-neutral-500 group-hover:text-primary transition-colors">
                  {item.amount}
                </span>
                <div
                  className={`w-full max-w-10 rounded-t-xl bg-linear-to-t from-primary to-tertiary/80 group-hover:from-secondary group-hover:to-secondary-400 transition-all ${item.height}`}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-3 pt-2">
            {MONTHLY_REVENUE.map((item) => (
              <span
                key={item.month}
                className="flex-1 text-center text-[11px] font-bold text-neutral-500"
              >
                {item.month}
              </span>
            ))}
          </div>
        </div>

        {/* Pending InstaPay Approvals */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-extrabold text-neutral">
              تحويلات إنستاباي بانتظار التأكيد
            </h2>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
              جديد
            </span>
          </div>

          <div className="space-y-3">
            {RECENT_REQUESTS.map((req) => (
              <div
                key={req.code}
                className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-extrabold text-neutral truncate">
                      {req.client}
                    </span>
                    <span className="text-[11px] font-bold text-primary" dir="ltr">
                      #{req.code}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-neutral-500 truncate">
                    {req.space} • <span dir="ltr">{req.ipa}</span>
                  </p>
                  <span className="inline-block text-xs font-extrabold text-primary mt-1">
                    {req.amount}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    title="تأكيد الدفع"
                    className="w-8 h-8 rounded-lg bg-secondary text-white flex items-center justify-center hover:bg-secondary-600 cursor-pointer"
                  >
                    <Check size={15} />
                  </button>
                  <button
                    type="button"
                    title="رفض الطلب"
                    className="w-8 h-8 rounded-lg bg-red-50 text-danger flex items-center justify-center hover:bg-red-100 cursor-pointer"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

