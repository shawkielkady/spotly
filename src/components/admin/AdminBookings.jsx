import { Check, Eye, FileImage, X } from 'lucide-react'

const ADMIN_BOOKINGS = [
  {
    code: 'SPT-2023-849',
    client: 'محمود كريم',
    space: 'معرض الأفق التجاري - الزمالك',
    dates: '01/11 - 07/11/2024',
    total: '18,600 ج.م',
    instapayRef: 'mahmoud@instapay',
    status: 'بانتظار التأكيد',
    statusClass: 'bg-amber-50 text-amber-700',
  },
  {
    code: 'SPT-2023-812',
    client: 'سارة هاشم',
    space: 'قاعة النخبة للمؤتمرات',
    dates: '01/11 - 03/11/2024',
    total: '8,200 ج.م',
    instapayRef: 'sara.h@instapay',
    status: 'مؤكد',
    statusClass: 'bg-secondary-100 text-secondary-700',
  },
  {
    code: 'SPT-2023-755',
    client: 'شركة أفق للتجارة',
    space: 'مساحة بوب أب وسط البلد',
    dates: '10/09 - 15/09/2024',
    total: '11,000 ج.م',
    instapayRef: '01098765432',
    status: 'مكتمل',
    statusClass: 'bg-primary-100 text-primary',
  },
]

export default function AdminBookings() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-neutral">
            إدارة الحجوزات وتحويلات إنستاباي
          </h2>
          <p className="text-xs font-medium text-neutral-500">
            مراجعة إيصالات التحويل وتأكيد أو رفض طلبات الحجز
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-bold">
            الكل (42)
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-neutral-50 text-neutral-600 text-xs font-bold">
            بانتظار التأكيد (6)
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-neutral-50 text-neutral-600 text-xs font-bold">
            مؤكد (24)
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-right text-xs sm:text-sm">
          <thead className="bg-neutral-50 text-neutral-500 font-bold border-b border-neutral-100">
            <tr>
              <th className="py-3.5 px-5">رقم الحجز</th>
              <th className="py-3.5 px-4">العميل</th>
              <th className="py-3.5 px-4">المساحة</th>
              <th className="py-3.5 px-4">حساب إنستاباي</th>
              <th className="py-3.5 px-4">الإجمالي</th>
              <th className="py-3.5 px-4">الحالة</th>
              <th className="py-3.5 px-5 text-center">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {ADMIN_BOOKINGS.map((booking) => (
              <tr
                key={booking.code}
                className="hover:bg-neutral-50/70 transition-colors"
              >
                <td className="py-3.5 px-5 font-extrabold text-primary" dir="ltr">
                  #{booking.code}
                </td>
                <td className="py-3.5 px-4 font-bold text-neutral">
                  {booking.client}
                </td>
                <td className="py-3.5 px-4">
                  <span className="block font-semibold text-neutral">
                    {booking.space}
                  </span>
                  <span className="block text-[11px] text-neutral-500">
                    {booking.dates}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded-lg"
                    dir="ltr"
                  >
                    <FileImage size={13} className="text-primary" />
                    {booking.instapayRef}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-extrabold text-neutral whitespace-nowrap">
                  {booking.total}
                </td>
                <td className="py-3.5 px-4">
                  <span
                    className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${booking.statusClass}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="py-3.5 px-5">
                  <div className="flex items-center justify-center gap-1.5">
                    <button
                      type="button"
                      title="عرض الإيصال"
                      className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral flex items-center justify-center hover:bg-neutral-200 cursor-pointer"
                    >
                      <Eye size={14} />
                    </button>
                    <button
                      type="button"
                      title="تأكيد"
                      className="w-8 h-8 rounded-lg bg-secondary text-white flex items-center justify-center hover:bg-secondary-600 cursor-pointer"
                    >
                      <Check size={14} />
                    </button>
                    <button
                      type="button"
                      title="رفض"
                      className="w-8 h-8 rounded-lg bg-red-50 text-danger flex items-center justify-center hover:bg-red-100 cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

