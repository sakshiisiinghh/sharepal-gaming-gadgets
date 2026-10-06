import type { Product } from '../types/product'

export type SortKey = 'relevance' | 'price-asc' | 'price-desc' | 'rating' | 'popularity'

export const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'relevance', label: 'Relevance' },
  { key: 'price-asc', label: 'Price: Low to High' },
  { key: 'price-desc', label: 'Price: High to Low' },
  { key: 'rating', label: 'Top Rated' },
  { key: 'popularity', label: 'Most Booked' },
]

export const PAGE_SIZE = 12

export interface ProductFilters {
  sortKey: SortKey
  inStockOnly: boolean
  tag: string | null
  category: string | null
}

export const defaultFilters: ProductFilters = { sortKey: 'relevance', inStockOnly: false, tag: null, category: null }

// The data has no category field, so products are matched to sidebar categories by name. First match wins.
const categoryRules: { category: string; pattern: RegExp }[] = [
  { category: 'Racing Wheel', pattern: /racing wheel/i },
  { category: 'GTA VI', pattern: /gta/i },
  { category: 'Xbox Console', pattern: /xbox/i },
  { category: 'VR', pattern: /\bvr\b|oculus|quest/i },
  { category: 'Big Screen Gaming', pattern: /projector|big screen/i },
  { category: 'PS5 Console', pattern: /ps5|playstation|controller/i },
]

function getCategory({ name }: Product) {
  return categoryRules.find(({ pattern }) => pattern.test(name))?.category
}

const comparators: Record<SortKey, ((a: Product, b: Product) => number) | null> = {
  relevance: null,
  'price-asc': (a, b) => a.per_day_rent - b.per_day_rent,
  'price-desc': (a, b) => b.per_day_rent - a.per_day_rent,
  rating: (a, b) => b.rating - a.rating,
  popularity: (a, b) => b.booked_count - a.booked_count,
}

export function applyFilters(products: Product[], { sortKey, inStockOnly, tag, category }: ProductFilters) {
  const matching = products.filter(
    (product) =>
      (!inStockOnly || !product.out_of_stock) && (!tag || product.tag === tag) && (!category || getCategory(product) === category),
  )
  const comparator = comparators[sortKey]
  return comparator ? [...matching].sort(comparator) : matching
}
