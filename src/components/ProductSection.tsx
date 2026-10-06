import { useState } from 'react'
import { products } from '../data/products'
import type { DateRange } from './overlays/DateRangeModal'
import ProductGrid from './ProductGrid'

const PAGE_SIZE = 12

interface ProductSectionProps {
  dateRange: DateRange | null
  onSelectDates: () => void
}

export default function ProductSection({ dateRange, onSelectDates }: ProductSectionProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleProducts = products.slice(0, visibleCount)
  const hasMore = visibleCount < products.length

  return (
    <section className="pb-10">
      <div className="flex items-center justify-between border-b-2 border-neutral-200 pb-3 md:py-4">
        <h1 className="text-14 font-bold capitalize md:text-24">gaming gadgets on rent</h1>
        <p className="flex items-center gap-1 text-12 font-medium text-neutral-300 md:text-16">
          <span className="hidden md:inline">Total items: </span>
          <span className="text-neutral-500">{products.length} items</span>
        </p>
      </div>
      <ProductGrid products={visibleProducts} hasDates={dateRange !== null} onSelectDates={onSelectDates} />
      <div className="mt-5 flex flex-col items-center border-t border-gray-200 py-7 md:mt-10">
        <p className="pb-3 text-14 text-gray-400 md:text-16">
          Showing {visibleProducts.length} of {products.length} results
        </p>
        {hasMore && (
          <button
            type="button"
            onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)}
            className="h-9 w-full border-2 border-neutral-900 bg-gray-100 p-5 text-16 font-medium hover:bg-neutral-150 sm:max-w-72 md:p-6 rounded-4xl flex items-center justify-center"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  )
}
