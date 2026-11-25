import { Link } from 'react-router-dom'
import { MapPin, Ruler } from 'lucide-react'

export default function ProductCard({ space }) {
  const {
    id,
    title,
    location,
    area,
    price,
    period = 'يوم',
    badge = 'متاح فوراً',
    image,
  } = space

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-xs flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/20">
      {/* Image & Availability Badge */}
      <Link
        to={`/spaces/${id}`}
        className="relative block h-48 w-full overflow-hidden bg-neutral-100"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {badge && (
          <span
            className={`absolute top-3 start-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs ${
              badge === 'محجوز قريباً' ? 'bg-danger' : 'bg-secondary'
            }`}
          >
            {badge}
          </span>
        )}
      </Link>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 mb-1.5">
            <MapPin size={14} className="shrink-0 text-neutral-400" />
            <span className="truncate">{location}</span>
          </div>

          {/* Title */}
          <Link to={`/spaces/${id}`} className="block">
            <h3 className="text-base sm:text-[17px] font-extrabold text-neutral leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>

          {/* Area */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
            <Ruler size={14} className="shrink-0 text-neutral-400" />
            <span>{area}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-extrabold text-primary">
              {price} جنيه
            </span>
            <span className="text-xs font-medium text-neutral-500">
              / {period}
            </span>
          </div>

          <Link
            to={`/spaces/${id}`}
            className="px-4 py-2 rounded-lg bg-linear-to-br from-primary to-tertiary text-white text-xs sm:text-sm font-bold shadow-[0_4px_12px_rgba(108,99,255,0.22)] hover:shadow-[0_6px_16px_rgba(108,99,255,0.34)] active:scale-95 transition-all whitespace-nowrap"
          >
            احجز الآن
          </Link>
        </div>
      </div>
    </article>
  )
}
