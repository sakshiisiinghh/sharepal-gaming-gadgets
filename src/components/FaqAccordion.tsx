import { useState } from 'react'
import type { Faq } from '../data/faqs'
import { ChevronDownIcon } from './icons'

interface FaqAccordionProps {
  faqs: Faq[]
  variant?: 'section' | 'drawer'
}

export default function FaqAccordion({ faqs, variant = 'section' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isDrawer = variant === 'drawer'

  return (
    <div className={`flex w-full flex-col ${isDrawer ? 'gap-3' : ''}`}>
      {faqs.map(({ question, answer }, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={question}
            className={`rounded-xl transition-colors duration-300 ${
              isDrawer ? 'bg-gray-100 shadow-sm' : `hover:bg-gray-150 ${isOpen ? 'bg-gray-150' : 'bg-gray-100'}`
            }`}
          >
            <h3 className="flex">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex flex-1 items-center justify-between gap-4 px-4 py-4 text-left text-14 font-medium leading-5 md:text-16 md:font-semibold md:leading-6"
              >
                {question}
                <ChevronDownIcon className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </h3>
            {isOpen && <p className="px-4 pb-4 text-14 text-gray-600">{answer}</p>}
          </div>
        )
      })}
    </div>
  )
}
