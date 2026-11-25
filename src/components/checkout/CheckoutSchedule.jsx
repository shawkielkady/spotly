import { Calendar } from 'lucide-react'

export default function CheckoutSchedule() {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-100 shadow-xs space-y-5">
      {/* Step Header */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-tertiary text-white text-sm font-extrabold flex items-center justify-center shrink-0 mt-0.5">
          1
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-neutral">
            فترة الحجز والجدولة
          </h2>
          <p className="text-xs sm:text-sm font-medium text-neutral-500">
            اختر تواريخ البدء والانتهاء لمعرضك التجاري
          </p>
        </div>
      </div>

      {/* Date Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-neutral-500">
            تاريخ البدء
          </label>
          <div className="h-11 px-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-sm font-bold text-neutral">
            <span>11/01/2024</span>
            <Calendar size={16} className="text-neutral-500" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-neutral-500">
            تاريخ الانتهاء
          </label>
          <div className="h-11 px-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-sm font-bold text-neutral">
            <span>11/07/2024</span>
            <Calendar size={16} className="text-neutral-500" />
          </div>
        </div>
      </div>

      {/* Duration Summary */}
      <div className="bg-primary-50/75 rounded-xl px-4 py-3 flex items-center justify-between gap-2 text-xs sm:text-sm">
        <span className="font-semibold text-neutral-600">
          المدة الإجمالية للحجز:
        </span>
        <span className="font-extrabold text-primary">
          6 أيام (فترة مؤقتة نشطة)
        </span>
      </div>
    </div>
  )
}

