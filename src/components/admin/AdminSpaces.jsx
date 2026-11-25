import { Edit3, Plus, Trash2 } from 'lucide-react'
import productImg from '../../assets/product.png'

const ADMIN_SPACES = [
  {
    id: 1,
    name: 'كشك تجاري في سيتي سنتر الإسكندرية',
    city: 'الإسكندرية',
    type: 'كشك تجاري',
    price: '800 ج.م / يوم',
    status: 'متاح',
    statusClass: 'bg-secondary-100 text-secondary-700',
  },
  {
    id: 2,
    name: 'مساحة Pop-up Store في مول العرب',
    city: 'الجيزة، 6 أكتوبر',
    type: 'متجر مؤقت',
    price: '1,500 ج.م / يوم',
    status: 'متاح',
    statusClass: 'bg-secondary-100 text-secondary-700',
  },
  {
    id: 3,
    name: 'ركن التجمع التجاري الفاخر',
    city: 'القاهرة، التجمع الخامس',
    type: 'ركن عرض',
    price: '8,000 ج.م / يوم',
    status: 'محجوز',
    statusClass: 'bg-amber-50 text-amber-700',
  },
  {
    id: 4,
    name: 'معرض الأفق التجاري - الزمالك',
    city: 'القاهرة، الزمالك',
    type: 'معرض تجاري',
    price: '2,500 ج.م / يوم',
    status: 'قيد المراجعة',
    statusClass: 'bg-primary-100 text-primary',
  },
]

export default function AdminSpaces() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-neutral">
            جميع المساحات التجارية
          </h2>
          <p className="text-xs font-medium text-neutral-500">
            إضافة وتعديل وحذف المساحات المتاحة على المنصة
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-xs sm:text-sm font-bold shadow-[0_4px_12px_rgba(108,99,255,0.25)] cursor-pointer self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>إضافة مساحة جديدة</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-right text-xs sm:text-sm">
          <thead className="bg-neutral-50 text-neutral-500 font-bold border-b border-neutral-100">
            <tr>
              <th className="py-3.5 px-5">المساحة</th>
              <th className="py-3.5 px-4">المدينة</th>
              <th className="py-3.5 px-4">النوع</th>
              <th className="py-3.5 px-4">السعر</th>
              <th className="py-3.5 px-4">الحالة</th>
              <th className="py-3.5 px-5 text-center">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {ADMIN_SPACES.map((space) => (
              <tr key={space.id} className="hover:bg-neutral-50/70 transition-colors">
                <td className="py-3.5 px-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={productImg}
                      alt={space.name}
                      className="w-11 h-11 rounded-xl object-cover shrink-0 bg-neutral-100"
                    />
                    <span className="font-extrabold text-neutral">
                      {space.name}
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-medium text-neutral-600">
                  {space.city}
                </td>
                <td className="py-3.5 px-4 font-medium text-neutral-600">
                  {space.type}
                </td>
                <td className="py-3.5 px-4 font-extrabold text-primary whitespace-nowrap">
                  {space.price}
                </td>
                <td className="py-3.5 px-4">
                  <span
                    className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full ${space.statusClass}`}
                  >
                    {space.status}
                  </span>
                </td>
                <td className="py-3.5 px-5">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      type="button"
                      title="تعديل"
                      className="w-8 h-8 rounded-lg bg-primary-50 text-primary flex items-center justify-center hover:bg-primary-100 cursor-pointer"
                    >
                      <Edit3 size={15} />
                    </button>
                    <button
                      type="button"
                      title="حذف"
                      className="w-8 h-8 rounded-lg bg-red-50 text-danger flex items-center justify-center hover:bg-red-100 cursor-pointer"
                    >
                      <Trash2 size={15} />
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

