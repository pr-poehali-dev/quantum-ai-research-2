import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько стоит установка кондиционера?",
    answer:
      "Стоимость монтажа зависит от типа и мощности оборудования, длины трассы и сложности объекта. Выезд мастера для замера и расчёта — бесплатно. После осмотра вы получите точную цену без скрытых платежей.",
  },
  {
    question: "Какие бренды кондиционеров вы устанавливаете?",
    answer:
      "Мы работаем со всеми популярными марками: Daikin, Mitsubishi, Samsung, LG, Haier, Gree и другими. Поможем подобрать оптимальную модель под ваш бюджет и задачи.",
  },
  {
    question: "Как часто нужно обслуживать кондиционер?",
    answer:
      "Рекомендуем проводить техническое обслуживание раз в год — в идеале весной, перед сезоном. Это включает чистку фильтров, проверку фреона и диагностику. Регулярное ТО значительно продлевает срок службы оборудования.",
  },
  {
    question: "Даёте ли вы гарантию на монтаж?",
    answer:
      "Да, мы даём гарантию на все выполненные работы. Если после установки возникнут проблемы по нашей вине — устраним бесплатно. Гарантия производителя на оборудование сохраняется в полном объёме.",
  },
  {
    question: "Как быстро вы сможете приехать?",
    answer:
      "Стараемся согласовать выезд в течение 1–2 рабочих дней. В срочных случаях возможен приезд в тот же день. Свяжитесь с нами — подберём удобное время.",
  },
  {
    question: "Работаете ли вы с юридическими лицами?",
    answer:
      "Да, мы выполняем монтаж и обслуживание кондиционеров в офисах, кафе, магазинах и других коммерческих объектах. Предоставляем все необходимые документы для бухгалтерии.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
