import { Headphones, MapPin, ShieldCheck } from 'lucide-react'
import productImg from '../../assets/product.png'

export default function CheckoutSummary() {
  return (
    <aside className="lg:sticky lg:top-24 bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm">
      {/* Space Preview Image */}
      <div className="relative h-44 w-full bg-neutral-100">
        <img
          src={productImg}
          alt="معرض الأفق التجاري"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 start-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
          متاح فوراً
        </span>
      </div>

      {/* Summary Details */}
      <div className="p-5 space-y-4">
        <div>
          <span className="block text-xs font-bold text-primary mb-1">
            معرض تجاري فاخر
          </span>
          <h2 className="text-lg font-extrabold text-neutral mb-1">
            معرض الأفق التجاري
          </h2>
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
            <MapPin size={14} className="text-neutral-400 shrink-0" />
            <span>الزمالك، القاهرة، مصر</span>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="pt-4 border-t border-neutral-100 space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-center justify-between text-neutral-600">
            <span>السعر اليومي:</span>
            <span className="font-bold text-neutral">2,500 جنيه مصري</span>
          </div>
          <div className="flex items-center justify-between text-neutral-600">
            <span>مدة الحجز:</span>
            <span className="font-bold text-neutral">6 أيام</span>
          </div>
          <div className="flex items-center justify-between text-neutral-600">
            <span>رسوم الخدمة والتشغيل:</span>
            <span className="font-bold text-neutral">1,500 جنيه مصري</span>
          </div>
          <div className="flex items-center justify-between text-neutral-600">
            <span>ضريبة القيمة المضافة (14%):</span>
            <span className="font-bold text-neutral">2,100 جنيه مصري</span>
          </div>
        </div>

        {/* Final Total */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-2">
          <span className="text-base font-extrabold text-neutral">
            الإجمالي النهائي:
          </span>
          <span className="text-xl font-extrabold text-primary">
            18,600 جنيه مصري
          </span>
        </div>

        {/* Confirm CTA */}
        <button
          type="button"
          className="w-full h-12 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(108,99,255,0.28)] hover:shadow-[0_8px_20px_rgba(108,99,255,0.36)] active:scale-98 transition-all cursor-pointer"
        >
          <ShieldCheck size={18} />
          <span>تأكيد وإرسال طلب الحجز</span>
        </button>

        {/* Support Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-neutral-500 pt-1">
          <Headphones size={14} className="text-secondary shrink-0" />
          <span>دعم فني ومساعد شخصي متوفر 24/7 طوال فترة الإيجار</span>
        </div>
      </div>
    </aside>
  )
}

