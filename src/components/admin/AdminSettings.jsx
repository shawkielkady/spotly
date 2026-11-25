import { Save } from 'lucide-react'

export default function AdminSettings() {
  return (
    <div className="max-w-3xl bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs space-y-6">
      <div>
        <h2 className="text-base sm:text-lg font-extrabold text-neutral">
          إعدادات المنصة العامة
        </h2>
        <p className="text-xs font-medium text-neutral-500">
          إعدادات بيانات التحويل عبر إنستاباي ونسب العمولة
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-neutral">
              اسم المنصة
            </label>
            <input
              type="text"
              defaultValue="Spotly"
              className="w-full h-11 px-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral outline-none focus:bg-white focus:border-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-neutral">
              نسبة عمولة المنصة (%)
            </label>
            <input
              type="number"
              defaultValue="10"
              className="w-full h-11 px-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral outline-none focus:bg-white focus:border-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-neutral">
              عنوان الدفع الرسمي (InstaPay IPA)
            </label>
            <input
              type="text"
              defaultValue="spotly@instapay"
              dir="ltr"
              className="w-full h-11 px-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral text-right outline-none focus:bg-white focus:border-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-neutral">
              رقم هاتف الدعم الفني
            </label>
            <input
              type="tel"
              defaultValue="01000000000"
              dir="ltr"
              className="w-full h-11 px-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral text-right outline-none focus:bg-white focus:border-primary"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-sm font-bold shadow-[0_6px_16px_rgba(108,99,255,0.28)] cursor-pointer"
          >
            <Save size={16} />
            <span>حفظ الإعدادات</span>
          </button>
        </div>
      </form>
    </div>
  )
}

