import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, Search } from 'lucide-react'

const CITIES = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'الشيخ زايد',
  'التجمع الخامس',
  'المنصورة',
]

const SPACE_TYPES = [
  'كشك تجاري',
  'محل تجاري',
  'بوث عرض',
  'مساحة مؤقتة',
  'عربة طعام',
]

export default function Hero() {
  const navigate = useNavigate()
  const [city, setCity] = useState('القاهرة')
  const [spaceType, setSpaceType] = useState('كشك تجاري')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (city) params.set('city', city)
    if (spaceType) params.set('type', spaceType)
    if (startDate) params.set('start', startDate)
    if (endDate) params.set('end', endDate)

    navigate(`/spaces?${params.toString()}`)
  }

  return (
    <section className="relative w-full min-h-[540px] flex items-center justify-center py-12 px-4 sm:py-18 sm:px-6 overflow-hidden bg-linear-to-b from-[#F5F6FC] to-[#ECEFFA]">
      {/* Subtle Ambient Glows */}
      <div
        className="pointer-events-none absolute -top-24 start-1/6 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 end-1/6 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Subtle Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-45 bg-[linear-gradient(to_right,rgba(108,99,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(108,99,255,0.04)_1px,transparent_1px)] bg-size-[48px_48px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-100 text-tertiary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 border border-primary/15">
          <CheckCircle2 size={16} />
          <span>منصة التأجير التجاري الأولى في مصر</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-neutral leading-tight mb-4 max-w-3xl">
          مساحتك التجارية المثالية على بُعد خطوات
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg font-medium text-neutral-600 leading-relaxed mb-10 max-w-2xl">
          اكتشف واحجز أفضل المساحات التجارية المؤقتة، الأكشاك، والمحلات لإطلاق مشروعك بسهولة.
        </p>

        {/* Search Bar Card */}
        <div className="w-full bg-white rounded-2xl sm:rounded-[20px] p-4 sm:p-6 shadow-[0_18px_45px_rgba(32,35,56,0.08)] border border-neutral-100">
          <form
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] gap-3.5 sm:gap-4 items-end"
            onSubmit={handleSearch}
          >
            {/* City */}
            <div className="flex flex-col items-start gap-1.5 text-right">
              <label
                htmlFor="hero-city"
                className="text-xs font-semibold text-neutral-500 ps-1"
              >
                المدينة
              </label>
              <select
                id="hero-city"
                className="w-full h-11.5 px-3.5 rounded-[10px] border border-transparent bg-neutral-50 text-neutral text-sm font-semibold outline-none cursor-pointer transition-all focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Space Type */}
            <div className="flex flex-col items-start gap-1.5 text-right">
              <label
                htmlFor="hero-space-type"
                className="text-xs font-semibold text-neutral-500 ps-1"
              >
                نوع المساحة
              </label>
              <select
                id="hero-space-type"
                className="w-full h-11.5 px-3.5 rounded-[10px] border border-transparent bg-neutral-50 text-neutral text-sm font-semibold outline-none cursor-pointer transition-all focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15"
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
              >
                {SPACE_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Start Date */}
            <div className="flex flex-col items-start gap-1.5 text-right">
              <label
                htmlFor="hero-start-date"
                className="text-xs font-semibold text-neutral-500 ps-1"
              >
                تاريخ البداية
              </label>
              <input
                id="hero-start-date"
                type="date"
                className="w-full h-11.5 px-3.5 rounded-[10px] border border-transparent bg-neutral-50 text-neutral text-sm font-semibold outline-none transition-all focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* End Date */}
            <div className="flex flex-col items-start gap-1.5 text-right">
              <label
                htmlFor="hero-end-date"
                className="text-xs font-semibold text-neutral-500 ps-1"
              >
                تاريخ النهاية
              </label>
              <input
                id="hero-end-date"
                type="date"
                className="w-full h-11.5 px-3.5 rounded-[10px] border border-transparent bg-neutral-50 text-neutral text-sm font-semibold outline-none transition-all focus:bg-white focus:border-primary focus:ring-3 focus:ring-primary/15"
                value={endDate}
                min={startDate || undefined}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="sm:col-span-2 lg:col-span-1 w-full lg:w-auto h-11.5 px-6 rounded-[11px] bg-linear-to-br from-primary to-tertiary text-white text-sm font-bold inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-[0_6px_16px_rgba(108,99,255,0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(108,99,255,0.36)] active:scale-95 transition-all"
            >
              <Search size={18} />
              <span>ابحث عن مساحة</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
