import { Lock } from 'lucide-react'
import CheckoutSchedule from '../components/checkout/CheckoutSchedule'
import CheckoutPayment from '../components/checkout/CheckoutPayment'
import CheckoutSummary from '../components/checkout/CheckoutSummary'

export default function CheckoutPage() {
  return (
    <div className="w-full min-h-screen bg-page/60 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mb-2">
            <Lock size={14} />
            <span>صفحة دفع آمنة ومشفرة بالكامل</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral mb-1">
            إتمام حجز المساحة التجارية
          </h1>
          <p className="text-sm font-medium text-neutral-500">
            أنت على خطوة واحدة من تأكيد حجز مساحتك واستلام تفاصيل الدخول.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
          <div className="space-y-6">
            <CheckoutSchedule />
            <CheckoutPayment />
          </div>

          <CheckoutSummary />
        </div>
      </div>
    </div>
  )
}

