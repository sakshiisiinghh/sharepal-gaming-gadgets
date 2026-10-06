import { faqs } from '../data/faqs'
import FaqAccordion from './FaqAccordion'

const PREVIEW_COUNT = 5

export default function FaqSection({ onViewMore }: { onViewMore: () => void }) {
  return (
    <section className="container !my-10 rounded-3xl bg-gray-100 p-4 py-10">
      <div className="flex flex-col items-start gap-2 p-4 !pt-0 md:p-6">
        <h3 className="py-2 text-20 font-bold text-neutral-900 md:text-24">Frequently Asked Questions (FAQs)</h3>
        <FaqAccordion faqs={faqs.slice(0, PREVIEW_COUNT)} />
        <button
          type="button"
          onClick={onViewMore}
          className="h-11 w-full rounded-xl bg-neutral-150 px-6 py-3 text-14 font-semibold text-primary-900 hover:bg-neutral-200 md:text-16"
        >
          View more FAQ&apos;s
        </button>
      </div>
    </section>
  )
}
