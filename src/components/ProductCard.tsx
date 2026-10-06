import { useState } from 'react'
import type { Product } from '../types/product'
import { HeartIcon, PlusIcon } from './icons'

interface ProductCardProps {
  product: Product
  hasDates: boolean
  onSelectDates: () => void
}

const tagStyles: Record<string, string> = {
  Trending: 'border-decorative-orange text-decorative-orange',
  New: 'border-decorative-blue text-decorative-blue',
}
const defaultTagStyle = 'border-neutral-300 text-neutral-900'

export default function ProductCard({ product, hasDates, onSelectDates }: ProductCardProps) {
  const [isWishlisted, setWishlisted] = useState(false)
  const { name, image, tag, per_day_rent: perDayRent } = product

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-2.5 leading-5 transition-all duration-300 max-md:bg-gray-100 hover:bg-gray-100 md:rounded-3xl md:p-3">
      <div className="relative aspect-square shrink-0 overflow-hidden rounded-lg bg-gray-100 p-1.5 md:rounded-2xl md:p-3">
        <div className="p-3 md:p-5">
          <img src={image} alt={name} width={300} height={300} className="h-full w-full object-contain" />
        </div>
        {tag && (
          <span
            className={`absolute left-2 top-2 rounded-lg border px-1.5 text-10 font-semibold md:left-3 md:top-3 md:border-2 md:px-2.5 md:py-0.5 md:text-12 ${tagStyles[tag] ?? defaultTagStyle}`}
          >
            {tag}
          </span>
        )}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={() => setWishlisted(!isWishlisted)}
          className={`absolute right-1 top-1 scale-75 p-0 opacity-10 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 md:right-3 md:top-3 md:opacity-0 ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`}
        >
          <HeartIcon className="h-6 w-6" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" />
        </button>
      </div>
      <div className="flex h-full flex-col justify-between">
        <h2 className="line-clamp-2 pb-1 pt-2.5 text-12 font-bold md:p-2 md:pb-0 md:text-16">{name}</h2>
        <div className="flex flex-col gap-0 md:gap-1 md:px-2 md:pb-3">
          <hr className="my-1 h-px w-full border-0 bg-neutral-200" />
          <div className="flex items-end justify-between gap-1 max-md:flex-wrap md:gap-2">
            <div className="flex flex-col items-baseline gap-0 md:gap-1">
              <p className="text-10 font-bold text-gray-600 md:text-14 md:font-semibold">{hasDates ? 'Rent per day' : 'Select Dates to view price'}</p>
              <p className="text-14 font-bold text-gray-900 md:text-18">
                ₹<span className={hasDates ? '' : 'inline-flex blur-sm'}>{perDayRent}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={onSelectDates}
              className="flex h-8 items-center justify-center rounded-full border-2 border-primary-900 px-4 py-2 transition-all duration-300 hover:bg-neutral-150 max-md:w-full md:h-9 md:w-9 md:p-2 lg:h-12 lg:w-12"
            >
              <span className="text-12 font-semibold md:hidden">Add to Cart</span>
              <PlusIcon className="hidden h-6 w-6 md:block" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
