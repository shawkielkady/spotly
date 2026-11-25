import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

export default function OrdersHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral mb-1">
          حجوزاتي
        </h1>
        <p className="text-xs sm:text-sm font-medium text-neutral-500">
          متابعة وإدارة طلبات الحجز الخاصة بك وموافقات الإدارة
        </p>
      </div>

      <Link
        to="/spaces"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-sm font-bold shadow-[0_4px_12px_rgba(108,99,255,0.28)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(108,99,255,0.36)] active:scale-95 transition-all self-start sm:self-auto shrink-0"
      >
        <Plus size={18} />
        <span>حجز مساحة جديدة</span>
      </Link>
    </div>
  )
}

