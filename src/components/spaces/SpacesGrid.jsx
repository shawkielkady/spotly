import ProductCard from '../../shared components/ProductCard'
import Pagination from '../../shared components/ui/Pagination'
import productImg from '../../assets/product.png'

const SPACES = [
  {
    id: 101,
    title: 'مساحة الزمالك الإبداعية',
    location: 'القاهرة، الزمالك',
    area: '120 م²',
    price: '3,500',
    period: 'يوم',
    badge: 'متاح الآن',
    image: productImg,
  },
  {
    id: 102,
    title: 'رواق هليوبوليس للفنون',
    location: 'القاهرة، مصر الجديدة',
    area: '250 م²',
    price: '6,200',
    period: 'يوم',
    badge: 'متاح الآن',
    image: productImg,
  },
  {
    id: 103,
    title: 'ركن التجمع التجاري الفاخر',
    location: 'القاهرة، التجمع الخامس',
    area: '85 م²',
    price: '8,000',
    period: 'يوم',
    badge: 'محجوز قريباً',
    image: productImg,
  },
  {
    id: 104,
    title: 'مساحة المهندسين الصناعية',
    location: 'الجيزة، المهندسين',
    area: '100 م²',
    price: '4,000',
    period: 'يوم',
    badge: 'متاح الآن',
    image: productImg,
  },
  {
    id: 105,
    title: 'معرض الساحل الشمالي',
    location: 'الساحل الشمالي، سيدي عبد الرحمن',
    area: '180 م²',
    price: '12,500',
    period: 'يوم',
    badge: 'متاح الآن',
    image: productImg,
  },
  {
    id: 106,
    title: 'متجر التراث الإسكندراني',
    location: 'الإسكندرية، محطة الرمل',
    area: '150 م²',
    price: '4,500',
    period: 'يوم',
    badge: 'متاح الآن',
    image: productImg,
  },
]

export default function SpacesGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {SPACES.map((space) => (
          <ProductCard key={space.id} space={space} />
        ))}
      </div>

      <Pagination />
    </div>
  )
}

