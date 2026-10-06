import type { Product } from '../types/product'

export type SortKey = 'relevance' | 'price-asc' | 'price-desc' | 'rating' | 'popularity'

export const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'relevance', label: 'Relevance' },
  { key: 'price-asc', label: 'Price: Low to High' },
  { key: 'price-desc', label: 'Price: High to Low' },
  { key: 'rating', label: 'Top Rated' },
  { key: 'popularity', label: 'Most Booked' },
]

export interface ProductFilters {
  sortKey: SortKey
  inStockOnly: boolean
  tag: string | null
}

export const defaultFilters: ProductFilters = { sortKey: 'relevance', inStockOnly: false, tag: null }

const comparators: Record<SortKey, ((a: Product, b: Product) => number) | null> = {
  relevance: null,
  'price-asc': (a, b) => a.per_day_rent - b.per_day_rent,
  'price-desc': (a, b) => b.per_day_rent - a.per_day_rent,
  rating: (a, b) => b.rating - a.rating,
  popularity: (a, b) => b.booked_count - a.booked_count,
}

export function applyFilters(products: Product[], { sortKey, inStockOnly, tag }: ProductFilters) {
  const matching = products.filter(
    (product) => (!inStockOnly || !product.out_of_stock) && (!tag || product.tag === tag),
  )
  const comparator = comparators[sortKey]
  return comparator ? [...matching].sort(comparator) : matching
}
