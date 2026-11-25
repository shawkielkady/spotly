import { Search, SlidersHorizontal } from 'lucide-react'

export default function SpacesFilter() {
  return (
    <aside className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-xs space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
        <div className="flex items-center gap-2 text-base font-extrabold text-neutral">
          <SlidersHorizontal size={18} className="text-primary" />
          <span>تصفية النتائج</span>
        </div>
        <button
          type="button"
          className="text-xs font-bold text-primary hover:text-tertiary cursor-pointer"
        >
          إعادة تعيين
        </button>
      </div>

      {/* City */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-neutral">المدينة</label>
        <select
          defaultValue="القاهرة"
          className="w-full h-10 px-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral outline-none focus:border-primary"
        >
          <option value="القاهرة">القاهرة</option>
          <option value="الجيزة">الجيزة</option>
          <option value="الإسكندرية">الإسكندرية</option>
        </select>
      </div>

      {/* District */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-neutral">المنطقة</label>
        <select
          defaultValue="جميع المناطق"
          className="w-full h-10 px-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral outline-none focus:border-primary"
        >
          <option value="جميع المناطق">جميع المناطق</option>
          <option value="الزمالك">الزمالك</option>
          <option value="مصر الجديدة">مصر الجديدة</option>
          <option value="التجمع الخامس">التجمع الخامس</option>
        </select>
      </div>

      {/* Space Type */}
      <div className="space-y-2.5">
        <span className="block text-xs font-bold text-neutral">نوع المساحة</span>
        <div className="space-y-2">
          <label className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 rounded accent-primary cursor-pointer"
            />
            <span>متجر مؤقت (Pop-up Store)</span>
          </label>
          <label className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-primary cursor-pointer"
            />
            <span>رواق معرض (Gallery)</span>
          </label>
          <label className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-primary cursor-pointer"
            />
            <span>مساحة عرض جزئية</span>
          </label>
          <label className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-primary cursor-pointer"
            />
            <span>ركن داخل مركز تجاري</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-neutral">نطاق السعر (جنيه / يوم)</span>
          <span className="font-bold text-primary">500 ج.م - 25,000 ج.م</span>
        </div>
        <input
          type="range"
          min="500"
          max="25000"
          defaultValue="12000"
          className="w-full accent-primary cursor-pointer"
        />
        <div className="flex items-center justify-between text-[11px] font-medium text-neutral-500">
          <span>500 ج.م</span>
          <span>25,000 ج.م</span>
        </div>
      </div>

      {/* Area */}
      <div className="space-y-1.5">
        <span className="block text-xs font-bold text-neutral">
          المساحة بالمتر المربع
        </span>
        <div className="grid grid-cols-2 gap-2.5">
          <input
            type="number"
            placeholder="من"
            className="w-full h-10 px-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral outline-none focus:border-primary"
          />
          <input
            type="number"
            placeholder="إلى"
            className="w-full h-10 px-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Rental Duration */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-neutral">مدة الإيجار</label>
        <select
          defaultValue="أي مدة"
          className="w-full h-10 px-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral outline-none focus:border-primary"
        >
          <option value="أي مدة">أي مدة</option>
          <option value="يومي">يومي</option>
          <option value="أسبوعي">أسبوعي</option>
          <option value="شهري">شهري</option>
        </select>
      </div>

      {/* Apply Filter Button */}
      <button
        type="button"
        className="w-full h-11 rounded-xl bg-linear-to-br from-primary to-tertiary text-white text-sm font-bold inline-flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(108,99,255,0.28)] hover:shadow-[0_8px_20px_rgba(108,99,255,0.36)] active:scale-98 transition-all cursor-pointer"
      >
        <Search size={16} />
        <span>تطبيق الفلتر</span>
      </button>
    </aside>
  )
}

