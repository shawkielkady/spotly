import { Link } from 'react-router-dom'
import { Calendar, CalendarCheck, ChevronLeft, ChevronRight, Info } from 'lucide-react'

const WEEKDAYS = ['س', 'ح', 'ن', 'ث', 'ر', 'خ', 'ج']

const CALENDAR_DAYS = [
  { day: 27, muted: true },
  { day: 28, muted: true },
  { day: 29, muted: true },
  { day: 30, muted: true },
  { day: 31, muted: true },
  { day: 1, selected: true },
  { day: 2, selected: true },
  { day: 3, inRange: true },
  { day: 4, inRange: true },
  { day: 5, inRange: true },
  { day: 6, inRange: true },
  { day: 7 },
  { day: 8 },
  { day: 9 },
]

export default function SpaceBookingCard() {
  return (
    <aside className="lg:sticky lg:top-24 bg-white rounded-2xl p-5 sm:p-6 border border-neutral-100 shadow-sm space-y-5">
      {/* Price & Availability */}
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-neutral-100">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold text-primary">800 جنيه</span>
          <span className="text-xs font-medium text-neutral-500">/ يوم</span>
        </div>

        <span className="bg-secondary-100 text-secondary-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
          متاح للحجز الفوري
        </span>
      </div>

      {/* Date Inputs */}
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="block text-xs font-bold text-neutral-500">
            تاريخ البدء
          </label>
          <div className="h-10 px-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-sm font-bold text-neutral">
            <span>11/01/2024</span>
            <Calendar size={16} className="text-neutral-500" />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-bold text-neutral-500">
            تاريخ الانتهاء
          </label>
          <div className="h-10 px-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-sm font-bold text-neutral">
            <span>11/06/2024</span>
            <Calendar size={16} className="text-neutral-500" />
          </div>
        </div>
      </div>

      {/* Mini Calendar Preview */}
      <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-extrabold text-neutral">نوفمبر 2024</span>
          <div className="flex items-center gap-1 text-neutral-500">
            <button
              type="button"
              aria-label="الشهر السابق"
              className="p-1 rounded-md hover:bg-neutral-200/70 cursor-pointer"
            >
              <ChevronRight size={14} />
            </button>
            <button
              type="button"
              aria-label="الشهر التالي"
              className="p-1 rounded-md hover:bg-neutral-200/70 cursor-pointer"
            >
              <ChevronLeft size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-neutral-400 mb-1.5">
          {WEEKDAYS.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold">
          {CALENDAR_DAYS.map((item, idx) => (
            <span
              key={idx}
              className={`h-7 flex items-center justify-center rounded-lg ${
                item.selected
                  ? 'bg-primary text-white'
                  : item.inRange
                    ? 'bg-primary-100 text-primary'
                    : item.muted
                      ? 'text-neutral-300'
                      : 'text-neutral-700'
              }`}
            >
              {item.day}
            </span>
          ))}
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2.5 text-xs sm:text-sm pt-2 border-t border-neutral-100">
        <div className="flex items-center justify-between text-neutral-600">
          <span>800 جنيه × 5 أيام</span>
          <span className="font-bold text-neutral">4,000 جنيه</span>
        </div>
        <div className="flex items-center justify-between text-neutral-600">
          <span>رسوم الخدمة والتشغيل</span>
          <span className="font-bold text-neutral">200 جنيه</span>
        </div>
        <div className="flex items-center justify-between text-neutral-600">
          <span>ضريبة القيمة المضافة (14%)</span>
          <span className="font-bold text-neutral">560 جنيه</span>
        </div>

        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-base font-extrabold text-neutral">
            الإجمالي التقديري
          </span>
          <span className="text-lg font-extrabold text-primary">4,760 جنيه</span>
        </div>
      </div>

      {/* Request Booking CTA */}
      <Link
        to="/checkout"
        className="w-full h-12 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(108,99,255,0.28)] hover:shadow-[0_8px_20px_rgba(108,99,255,0.36)] active:scale-98 transition-all"
      >
        <CalendarCheck size={18} />
        <span>اطلب الحجز</span>
      </Link>

      {/* Info Note */}
      <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-start gap-2 text-[11px] font-medium text-neutral-500 leading-relaxed">
        <Info size={15} className="text-neutral-400 shrink-0 mt-0.5" />
        <span>إرسال طلب الحجز مجاني تماماً ويخضع لموافقة صاحب المساحة.</span>
      </div>
    </aside>
  )
}

