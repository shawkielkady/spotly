import { CheckCircle2, Copy, Smartphone, Upload } from 'lucide-react'

export default function CheckoutPayment() {
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-100 shadow-xs space-y-5">
        {/* Step Header */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-tertiary text-white text-sm font-extrabold flex items-center justify-center shrink-0 mt-0.5">
            2
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-neutral">
              طريقة الدفع — التحويل عبر إنستاباي
            </h2>
            <p className="text-xs sm:text-sm font-medium text-neutral-500">
              قم بتحويل المبلغ عبر تطبيق InstaPay وأرفق صورة الإيصال لتأكيد الحجز
            </p>
          </div>
        </div>

        {/* Single Selected Payment Method: InstaPay */}
        <div className="rounded-xl p-4 border border-primary bg-primary-50/45 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary flex items-center justify-center shrink-0">
              <Smartphone size={20} />
            </div>
            <div>
              <span className="block text-sm font-extrabold text-neutral">
                التحويل عبر إنستاباي (InstaPay)
              </span>
              <span className="block text-xs font-medium text-neutral-500 mt-0.5">
                تحويل بنكي فوري ومجاني عبر شبكة المدفوعات اللحظية
              </span>
            </div>
          </div>

          <CheckCircle2 size={20} className="text-primary shrink-0" />
        </div>

        {/* InstaPay Account Details */}
        <div className="rounded-xl bg-neutral-50 border border-neutral-200/80 p-4 space-y-3">
          <span className="block text-xs font-bold text-neutral-500">
            بيانات التحويل الرسمية
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="bg-white rounded-xl p-3 border border-neutral-100 flex items-center justify-between gap-2">
              <div>
                <span className="block text-[11px] font-medium text-neutral-500">
                  عنوان الدفع (IPA)
                </span>
                <span className="font-extrabold text-primary" dir="ltr">
                  spotly@instapay
                </span>
              </div>
              <button
                type="button"
                aria-label="نسخ عنوان إنستاباي"
                className="p-2 rounded-lg bg-primary-50 text-primary hover:bg-primary-100 transition-colors cursor-pointer"
              >
                <Copy size={15} />
              </button>
            </div>

            <div className="bg-white rounded-xl p-3 border border-neutral-100 flex items-center justify-between gap-2">
              <div>
                <span className="block text-[11px] font-medium text-neutral-500">
                  رقم الهاتف المربوط
                </span>
                <span className="font-extrabold text-neutral" dir="ltr">
                  0100 000 0000
                </span>
              </div>
              <button
                type="button"
                aria-label="نسخ رقم الهاتف"
                className="p-2 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <Copy size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Transfer Confirmation Inputs */}
        <div className="pt-2 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-neutral">
              حساب إنستاباي أو رقم الهاتف المُحوّل منه
            </label>
            <input
              type="text"
              placeholder="name@instapay أو 010xxxxxxxx"
              className="w-full h-11 px-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral outline-none focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15"
            />
          </div>

          <div className="space-y-1.5">
            <span className="block text-xs font-bold text-neutral">
              صورة إيصال التحويل (Screenshot)
            </span>
            <label className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50/70 p-5 text-center cursor-pointer hover:border-primary hover:bg-primary-50/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary-100 text-primary flex items-center justify-center">
                <Upload size={18} />
              </div>
              <div>
                <span className="block text-xs sm:text-sm font-bold text-neutral">
                  اضغط لرفع صورة إيصال التحويل
                </span>
                <span className="block text-[11px] font-medium text-neutral-500 mt-0.5">
                  PNG, JPG أو PDF (الحد الأقصى 5 ميجابايت)
                </span>
              </div>
              <input type="file" accept="image/*,.pdf" className="hidden" />
            </label>
          </div>
        </div>
      </div>

      {/* Terms & Preferences */}
      <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-xs space-y-3">
        <label className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-neutral-600 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked
            className="w-4 h-4 mt-0.5 rounded accent-primary cursor-pointer shrink-0"
          />
          <span>
            أوافق على{' '}
            <span className="text-primary font-bold underline">
              الشروط والأحكام
            </span>{' '}
            الخاصة بالمنصة و
            <span className="text-primary font-bold underline">
              سياسة الإلغاء المرنة
            </span>{' '}
            (استرداد كامل خلال أول 48 ساعة من تأكيد الحجز).
          </span>
        </label>

        <label className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-neutral-600 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 mt-0.5 rounded accent-primary cursor-pointer shrink-0"
          />
          <span>
            أرغب في تلقي عروض وتنبيهات المساحات التجارية المماثلة عبر البريد الإلكتروني ورسائل الجوال.
          </span>
        </label>
      </div>
    </div>
  )
}
