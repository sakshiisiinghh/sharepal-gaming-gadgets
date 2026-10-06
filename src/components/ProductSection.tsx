import { useState } from 'react'
import { products } from '../data/products'
import { applyFilters, defaultFilters, type ProductFilters } from '../utils/productFilters'
import type { DateRange } from './overlays/DateRangeModal'
import ProductGrid from './ProductGrid'
import ProductToolbar from './ProductToolbar'

const PAGE_SIZE = 12
const tags = [...new Set(products.map(({ tag }) => tag).filter(Boolean))]

interface ProductSectionProps {
  dateRange: DateRange | null
  onSelectDates: () => void
}

export default function ProductSection({ dateRange, onSelectDates }: ProductSectionProps) {
  const [filters, setFilters] = useState(defaultFilters)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const matchingProducts = applyFilters(products, filters)
  const visibleProducts = matchingProducts.slice(0, visibleCount)
  const hasMore = visibleCount < matchingProducts.length

  const changeFilters = (nextFilters: ProductFilters) => {
    setFilters(nextFilters)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <section className="pb-10">
      <div className="flex items-center justify-between border-b-2 border-neutral-200 pb-3 md:py-4">
        <h1 className="text-14 font-bold capitalize md:text-24">gaming gadgets on rent</h1>
        <p className="flex items-center gap-1 text-12 font-medium text-neutral-300 md:text-16">
          <span className="hidden md:inline">Total items: </span>
          <span className="text-neutral-500">{matchingProducts.length} items</span>
        </p>
      </div>
      <ProductToolbar filters={filters} tags={tags} onChange={changeFilters} />
      {matchingProducts.length > 0 ? (
        <ProductGrid products={visibleProducts} hasDates={dateRange !== null} onSelectDates={onSelectDates} />
      ) : (
        <div className="flex flex-col items-center gap-4 py-16">
          <p className="text-16 font-semibold text-neutral-500">No products match these filters.</p>
          <button
            type="button"
            onClick={() => changeFilters(defaultFilters)}
            className="rounded-full border-2 border-neutral-900 px-5 py-2 text-14 font-semibold hover:bg-neutral-150"
          >
            Clear filters
          </button>
        </div>
      )}
      <div className="mt-5 flex flex-col items-center border-t border-gray-200 py-7 md:mt-10">
        <p className="pb-3 text-14 text-gray-400 md:text-16">
          Showing {visibleProducts.length} of {matchingProducts.length} results
        </p>
        {hasMore && (
          <button
            type="button"
            onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)}
            className="flex h-9 w-full items-center justify-center rounded-4xl border-2 border-neutral-900 bg-gray-100 p-5 text-16 font-medium hover:bg-neutral-150 sm:max-w-72 md:p-6"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  )
}
