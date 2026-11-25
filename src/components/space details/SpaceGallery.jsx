import { Heart, LayoutGrid, MapPin, Ruler, Share2, Star } from 'lucide-react'
import productImg from '../../assets/product.png'

export default function SpaceGallery() {
  return (
    <section className="mb-8">
      {/* Title & Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral mb-2">
            كشك تجاري مجهز في سيتي سنتر الإسكندرية
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-primary" />
              <span>الإسكندرية، محرم بك</span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Ruler size={15} className="text-primary" />
              <span>12 متر مربع</span>
            </span>

            <span className="inline-flex items-center gap-1.5 font-bold text-neutral">
              <Star size={15} className="text-amber-400 fill-amber-400" />
              <span>4.8</span>
              <span className="font-medium text-neutral-500">(24 تقييم)</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-neutral-200 text-xs sm:text-sm font-bold text-neutral hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            <Share2 size={15} />
            <span>مشاركة</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-neutral-200 text-xs sm:text-sm font-bold text-neutral hover:border-danger hover:text-danger transition-colors cursor-pointer"
          >
            <Heart size={15} />
            <span>حفظ</span>
          </button>
        </div>
      </div>

      {/* Bento Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-auto md:h-[380px]">
        {/* Main Large Image */}
        <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden bg-neutral-100 h-64 md:h-full">
          <img
            src={productImg}
            alt="الواجهة الرئيسية"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-3 start-3 bg-white/90 backdrop-blur-xs text-neutral text-xs font-bold px-3 py-1 rounded-lg shadow-xs">
            الواجهة الرئيسية
          </span>
        </div>

        {/* 4 Secondary Images */}
        <div className="rounded-2xl overflow-hidden bg-neutral-100 h-40 md:h-full">
          <img
            src={productImg}
            alt="منظر جانبي للمساحة"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden bg-neutral-100 h-40 md:h-full">
          <img
            src={productImg}
            alt="تجهيزات العرض"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden bg-neutral-100 h-40 md:h-full">
          <img
            src={productImg}
            alt="نقطة الكهرباء والشاشة"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-neutral-100 h-40 md:h-full group cursor-pointer">
          <img
            src={productImg}
            alt="عرض جميع الصور"
            className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-neutral/40 flex flex-col items-center justify-center gap-1.5 text-white">
            <LayoutGrid size={22} />
            <span className="text-xs sm:text-sm font-bold">عرض جميع الصور (7)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

