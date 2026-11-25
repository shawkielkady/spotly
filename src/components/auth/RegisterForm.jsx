import { Link } from 'react-router-dom'
import { ArrowLeft, EyeOff, Info, Lock, Mail, Phone, User } from 'lucide-react'

export default function RegisterForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      {/* Full Name */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-neutral">
          الاسم بالكامل
        </label>
        <div className="relative flex items-center">
          <User
            size={17}
            className="absolute start-3.5 text-neutral-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="محمد أحمد"
            className="w-full h-11 ps-10 pe-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral outline-none focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-neutral">
          البريد الإلكتروني
        </label>
        <div className="relative flex items-center">
          <Mail
            size={17}
            className="absolute start-3.5 text-neutral-400 pointer-events-none"
          />
          <input
            type="email"
            placeholder="name@example.com"
            dir="ltr"
            className="w-full h-11 ps-10 pe-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral text-right outline-none focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-neutral">
          رقم الهاتف
        </label>
        <div className="relative flex items-center">
          <Phone
            size={17}
            className="absolute start-3.5 text-neutral-400 pointer-events-none"
          />
          <input
            type="tel"
            placeholder="01012345678"
            dir="ltr"
            className="w-full h-11 ps-10 pe-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral text-right outline-none focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all"
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-neutral">
          كلمة المرور
        </label>
        <div className="relative flex items-center">
          <Lock
            size={17}
            className="absolute start-3.5 text-neutral-400 pointer-events-none"
          />
          <input
            type="password"
            placeholder="••••••••"
            dir="ltr"
            className="w-full h-11 ps-10 pe-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral text-right outline-none focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all"
          />
        </div>
      </div>

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-neutral">
          تأكيد كلمة المرور
        </label>
        <div className="relative flex items-center">
          <EyeOff
            size={17}
            className="absolute start-3.5 text-neutral-400 pointer-events-none"
          />
          <input
            type="password"
            placeholder="••••••••"
            dir="ltr"
            className="w-full h-11 ps-10 pe-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral text-right outline-none focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15 transition-all"
          />
        </div>
      </div>

      {/* Account Info Note */}
      <div className="rounded-xl bg-primary-50/75 border border-primary/15 p-3 flex items-start gap-2 text-xs font-medium text-neutral-600 leading-relaxed">
        <Info size={16} className="text-primary shrink-0 mt-0.5" />
        <span>
          الحسابات العامة مخصصة للعملاء لتصفح وحجز المساحات التجارية بكل سهولة.
        </span>
      </div>

      {/* Terms Checkbox */}
      <label className="flex items-center gap-2 text-xs font-semibold text-neutral-600 cursor-pointer pt-1">
        <input
          type="checkbox"
          className="w-4 h-4 rounded accent-primary cursor-pointer shrink-0"
        />
        <span>أوافق على الشروط والأحكام وسياسة الخصوصية</span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="w-full h-12 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(108,99,255,0.28)] hover:shadow-[0_8px_20px_rgba(108,99,255,0.36)] active:scale-98 transition-all cursor-pointer"
      >
        <span>إنشاء حساب جديد</span>
        <ArrowLeft size={18} />
      </button>

      {/* Login Redirect */}
      <p className="text-xs font-semibold text-neutral-500 text-center pt-1">
        لديك حساب بالفعل؟{' '}
        <Link to="/login" className="text-primary font-bold hover:underline">
          تسجيل الدخول
        </Link>
      </p>
    </form>
  )
}

