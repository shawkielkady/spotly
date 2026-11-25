import { Link } from 'react-router-dom'
import { ArrowLeft, Lock, Mail } from 'lucide-react'

export default function LoginForm() {
  return (
    <div>
      {/* Tabs Switcher */}
      <div className="grid grid-cols-2 p-1 rounded-xl bg-neutral-100 mb-6">
        <Link
          to="/login"
          className="py-2 rounded-lg bg-white text-neutral text-xs sm:text-sm font-bold text-center shadow-xs"
        >
          تسجيل الدخول
        </Link>
        <Link
          to="/register"
          className="py-2 rounded-lg text-neutral-500 hover:text-neutral text-xs sm:text-sm font-semibold text-center transition-colors"
        >
          حساب جديد
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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

        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between text-xs pt-1">
          <label className="inline-flex items-center gap-2 font-semibold text-neutral-600 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-primary cursor-pointer"
            />
            <span>تذكرني</span>
          </label>

          <Link
            to="/change-password"
            className="font-bold text-primary hover:underline"
          >
            نسيت كلمة المرور؟
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-12 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(108,99,255,0.28)] hover:shadow-[0_8px_20px_rgba(108,99,255,0.36)] active:scale-98 transition-all cursor-pointer mt-2"
        >
          <span>تسجيل الدخول</span>
          <ArrowLeft size={18} />
        </button>
      </form>
    </div>
  )
}

