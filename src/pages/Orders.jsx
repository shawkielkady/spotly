import { ChevronLeft, ChevronRight } from 'lucide-react'
import OrdersHeader from '../components/orders/OrdersHeader'
import OrdersFilterBar from '../components/orders/OrdersFilterBar'
import OrderCard from '../components/orders/OrderCard'
import productImg from '../assets/product.png'

const ORDERS = [
  {
    id: 101,
    code: 'SPT-2023-849',
    status: 'pending',
    title: 'معرض الأفق التجاري - الزمالك',
    dateRange: '15 أكتوبر 2023 - 22 أكتوبر 2023 (7 أيام)',
    total: '14,500',
    image: productImg,
  },
  {
    id: 102,
    code: 'SPT-2023-812',
    status: 'approved',
    title: 'قاعة النخبة للمؤتمرات والفعاليات',
    dateRange: '01 نوفمبر 2023 - 03 نوفمبر 2023 (3 أيام)',
    total: '8,200',
    image: productImg,
  },
  {
    id: 103,
    code: 'SPT-2023-755',
    status: 'completed',
    title: 'مساحة بوب أب وسط البلد',
    dateRange: '10 سبتمبر 2023 - 15 سبتمبر 2023 (5 أيام)',
    total: '11,000',
    image: productImg,
  },
  {
    id: 104,
    code: 'SPT-2023-292',
    status: 'cancelled',
    title: 'ستوديو الإبداع والتصميم',
    dateRange: '01 أغسطس 2023 - 02 أغسطس 2023 (يومان)',
    total: '3,000',
    image: productImg,
  },
]

export default function Orders() {
  return (
    <div className="w-full min-h-screen bg-page/60 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <OrdersHeader />
        <OrdersFilterBar />

        {/* Orders List */}
        <div className="space-y-4">
          {ORDERS.map((order) => (
            <OrderCard key={order.code} order={order} />
          ))}
        </div>

        {/* Footer Info & Pagination */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-semibold text-neutral-500">
            عرض 1 إلى 4 من أصل 12 حجز
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="الصفحة السابقة"
              className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-neutral-600 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>

            <button
              type="button"
              className="w-9 h-9 rounded-lg bg-linear-to-br from-primary to-tertiary text-white text-sm font-bold flex items-center justify-center shadow-[0_4px_12px_rgba(108,99,255,0.25)] cursor-pointer"
            >
              1
            </button>
            <button
              type="button"
              className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-sm font-bold flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              2
            </button>
            <button
              type="button"
              className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-sm font-bold flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              3
            </button>

            <button
              type="button"
              aria-label="الصفحة التالية"
              className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-neutral-600 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

