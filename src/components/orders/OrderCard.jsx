import { Link } from 'react-router-dom'
import {
  Ban,
  Calendar,
  CheckCircle2,
  Clock,
  Eye,
  Printer,
  Star,
  XCircle,
} from 'lucide-react'

const STATUS_STYLES = {
  pending: {
    label: 'قيد المراجعة',
    badgeClass: 'bg-amber-50 text-amber-700 border border-amber-200/70',
    Icon: Clock,
  },
  approved: {
    label: 'مقبول ومؤكد',
    badgeClass: 'bg-secondary-100 text-secondary-700',
    Icon: CheckCircle2,
  },
  completed: {
    label: 'مكتمل',
    badgeClass: 'bg-primary-100 text-primary',
    Icon: CheckCircle2,
  },
  cancelled: {
    label: 'ملغي',
    badgeClass: 'bg-neutral-100 text-neutral-500',
    Icon: Ban,
  },
}

export default function OrderCard({ order }) {
  const { id, code, status, title, dateRange, total, image } = order
  const statusConfig = STATUS_STYLES[status] || STATUS_STYLES.pending
  const StatusIcon = statusConfig.Icon
  const isCancelled = status === 'cancelled'

  return (
    <article className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md hover:border-primary/20">
      {/* Right Side: Image & Booking Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div
          className={`w-full sm:w-28 h-40 sm:h-24 rounded-xl overflow-hidden bg-neutral-100 shrink-0 ${
            isCancelled ? 'grayscale opacity-75' : ''
          }`}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-1.5">
          {/* Status & Code */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full ${statusConfig.badgeClass}`}
            >
              <StatusIcon size={13} />
              <span>{statusConfig.label}</span>
            </span>

            <span className="text-xs font-bold text-neutral-400" dir="ltr">
              #{code}
            </span>
          </div>

          {/* Space Title */}
          <h2 className="text-base sm:text-lg font-extrabold text-neutral">
            {title}
          </h2>

          {/* Date Range */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
            <Calendar size={14} className="text-neutral-400 shrink-0" />
            <span>{dateRange}</span>
          </div>
        </div>
      </div>

      {/* Left Side: Total Price & Actions */}
      <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-100 shrink-0">
        <div className="md:text-left">
          <span className="block text-[11px] font-semibold text-neutral-500">
            المبلغ الإجمالي
          </span>
          <span
            className={`text-lg sm:text-xl font-extrabold ${
              isCancelled ? 'line-through text-neutral-400' : 'text-primary'
            }`}
          >
            {total} ج.م
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            to={`/spaces/${id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral text-xs font-bold transition-colors"
          >
            <Eye size={14} />
            <span>التفاصيل</span>
          </Link>

          {status === 'pending' && (
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-danger text-xs font-bold transition-colors cursor-pointer"
            >
              <XCircle size={14} />
              <span>إلغاء الطلب</span>
            </button>
          )}

          {status === 'approved' && (
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-xs font-bold shadow-[0_4px_10px_rgba(108,99,255,0.22)] hover:shadow-[0_6px_14px_rgba(108,99,255,0.32)] transition-all cursor-pointer"
            >
              <Printer size={14} />
              <span>فاتورة الحجز</span>
            </button>
          )}

          {status === 'completed' && (
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary-100 hover:bg-primary-200/70 text-primary text-xs font-bold transition-colors cursor-pointer"
            >
              <Star size={14} />
              <span>تقييم التجربة</span>
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

