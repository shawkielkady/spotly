import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    id: 1,
    question: 'كيف يتم احتساب الأسعار وعمليات الدفع؟',
    answer:
      'تُعرض جميع الأسعار بالجنيه المصري (EGP) بناءً على مدة الحجز (باليوم، الأسبوع، أو الشهر). يتم الدفع إلكترونياً بشكل آمن تماماً عبر بطاقتك الائتمانية أو المحافظ الإلكترونية المعتمدة في مصر.',
  },
  {
    id: 2,
    question: 'ما هي سياسة الإلغاء واسترداد الأموال؟',
    answer:
      'نقدم سياسة إلغاء مرنة تختلف حسب كل مساحة. يمكنك استرداد المبلغ المدفوع بالكامل في حال إلغاء الحجز قبل موعد البدء بأسبوعين على الأقل، وفقاً للشروط المحددة لكل مساحة تجارية.',
  },
  {
    id: 3,
    question: 'هل يمكنني زيارة المساحة التجارية قبل تأكيد الحجز؟',
    answer:
      'نعم بالتأكيد! يمكنك طلب معاينة للمساحة عبر المنصة، وسيتم التنسيق معك لزيارة المكان ومعاينة كافة التجهيزات المتاحة قبل إتمام الدفع النهائي.',
  },
  {
    id: 4,
    question: 'ما هي المستندات المطلوبة لحجز مساحة تجارية؟',
    answer:
      'للأفراد، تحتاج فقط إلى بطاقة الرقم القومي السارية. للشركات والأنشطة التجارية، قد يُطلب السجل التجاري أو بطاقة الضريبة حسب طبيعة الفعالية أو المتجر المؤقت.',
  },
]

export default function AboutFaqSec() {
  const [openIds, setOpenIds] = useState([1, 2, 3, 4])

  const toggleItem = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="w-full py-14 sm:py-16 px-4 sm:px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="block text-xs sm:text-sm font-bold text-primary mb-1.5">
            الأسئلة الشائعة
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral">
            كل ما تريد معرفته عن الحجوزات والأسعار
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id)
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-neutral-100 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-right cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-extrabold text-neutral">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm font-medium text-neutral-500 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

