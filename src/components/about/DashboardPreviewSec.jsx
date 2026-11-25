import { Calendar, CheckCircle2 } from 'lucide-react'

export default function DashboardPreviewSec() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-page/75 border border-neutral-100 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Right Side: Description */}
          <div>
            <span className="block text-xs sm:text-sm font-bold text-secondary mb-2">
              تجربة ذكية وسريعة
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral mb-3">
              إدارة كاملة لحجزك من لوحة التحكم
            </h2>

            <p className="text-sm sm:text-base font-medium text-neutral-600 leading-relaxed mb-6">
              تابع حالة طلباتك، تواصل مباشرة مع ملاك المساحات، وقم بتنزيل الفواتير والعقود الرقمية بلسان حال صريح وبدون أي ورقية معقدة.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-bold text-neutral">
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary shrink-0" />
                <span>عقود رقمية معتمدة</span>
              </div>

              <div className="inline-flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary shrink-0" />
                <span>دعم متواصل 24/7</span>
              </div>
            </div>
          </div>

          {/* Left Side: Booking Status Card Mockup */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_14px_35px_rgba(32,35,56,0.08)] border border-neutral-100">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary-100 text-primary flex items-center justify-center shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-neutral">
                    معرض فني مؤقت - الزمالك
                  </h3>
                  <p className="text-xs font-medium text-neutral-500">
                    الحجز النشط: 3 أيام
                  </p>
                </div>
              </div>

              <span className="bg-secondary-100 text-secondary-700 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                مؤكد
              </span>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-2 text-xs sm:text-sm mb-3">
              <span className="font-semibold text-neutral-500">
                إجمالي المبلغ: 15,000 EGP
              </span>
              <span className="font-extrabold text-primary">مدفوع بالكامل</span>
            </div>

            <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
              <div className="h-full w-full rounded-full bg-linear-to-l from-primary to-tertiary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

