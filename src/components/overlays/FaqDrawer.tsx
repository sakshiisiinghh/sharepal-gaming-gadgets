import { faqs } from '../../data/faqs'
import FaqAccordion from '../FaqAccordion'
import { CloseIcon } from '../icons'
import { Drawer } from './Modal'

export default function FaqDrawer({ onClose }: { onClose: () => void }) {
  return (
    <Drawer title="FAQs" onClose={onClose}>
      <div className="sticky top-0 flex items-center gap-4 bg-gray-100 px-5 py-5">
        <button type="button" onClick={onClose} aria-label="Close">
          <CloseIcon className="h-6 w-6" />
        </button>
        <h2 className="text-20 font-bold">FAQs</h2>
      </div>
      <div className="p-4">
        <FaqAccordion faqs={faqs} variant="drawer" />
      </div>
    </Drawer>
  )
}
