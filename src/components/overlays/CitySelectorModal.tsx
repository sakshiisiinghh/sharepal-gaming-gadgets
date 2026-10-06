import { cities } from '../../data/site'
import { CloseButton, Modal } from './Modal'

interface CitySelectorModalProps {
  selectedCity: string
  onSelect: (city: string) => void
  onClose: () => void
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 text-14 text-neutral-300">
      <span className="h-[2px] flex-1 bg-neutral-200" />
      {label}
      <span className="h-[2px] flex-1 bg-neutral-200" />
    </div>
  )
}

export default function CitySelectorModal({ selectedCity, onSelect, onClose }: CitySelectorModalProps) {
  return (
    <Modal title="Select Your City" maxWidth="max-w-3xl" onClose={onClose}>
      <div className="relative bg-gray-100 p-6 md:px-8">
        <div className="absolute right-4 top-4">
          <CloseButton onClose={onClose} />
        </div>
        <h2 className="mb-5 text-center text-20 font-bold">Select Your City</h2>
        <SectionDivider label="Popular Cities" />
        <ul className="my-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {cities.popular.map((city) => (
            <li key={city}>
              <button
                type="button"
                onClick={() => onSelect(city)}
                className={`flex w-full flex-col items-center gap-2 rounded-xl border p-3 text-12 font-semibold hover:bg-neutral-150 ${
                  city === selectedCity ? 'border-primary-400 bg-primary-100' : 'border-transparent'
                }`}
              >
                <img src={`https://images.sharepal.in/cities/${city.toLowerCase()}.svg`} alt="" className="h-9 w-9" />
                {city}
              </button>
            </li>
          ))}
        </ul>
        <SectionDivider label="Other Cities" />
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {cities.other.map((city) => (
            <li key={city}>
              <button
                type="button"
                onClick={() => onSelect(city)}
                className="w-28 rounded-full border border-neutral-200 py-2 text-12 font-semibold shadow-sm hover:bg-neutral-150 sm:w-32"
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  )
}
