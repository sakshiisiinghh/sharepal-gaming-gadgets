import { CITY } from '../data/site'
import { ChevronRightIcon } from './icons'

export default function Breadcrumb() {
  return (
    <nav className="container py-3 md:py-6" aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-12 font-semibold md:gap-2.5 md:text-14">
        <li className="flex items-center gap-1.5">
          <a href="/bangalore" className="text-neutral-500 hover:text-neutral-600">
            {CITY}
          </a>
          <ChevronRightIcon className="h-3.5 w-3.5 text-neutral-500" />
        </li>
        <li className="text-neutral-900">Gaming gadgets on rent</li>
      </ol>
    </nav>
  )
}
