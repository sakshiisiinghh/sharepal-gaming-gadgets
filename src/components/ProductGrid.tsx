import { Fragment } from 'react'
import type { Product } from '../types/product'
import ProductCard from './ProductCard'
import PromoBanner from './PromoBanner'

const BANNER_BASE = 'https://images.sharepal.in/sharepal-banners'

const bannersByRow: Record<number, Parameters<typeof PromoBanner>[0]> = {
  1: {
    href: 'https://assets.sharepal.in/',
    desktopImage: `${BANNER_BASE}/assets-fund-banner.png`,
    mobileImage: `${BANNER_BASE}/asset-partner-mobile.png`,
    className: 'md:my-5',
  },
  2: {
    href: 'https://earnwithus.sharepal.in/',
    desktopImage: `${BANNER_BASE}/ews-generic-banner-desktop.png`,
    mobileImage: `${BANNER_BASE}/ews-generic-banner-mobile.png`,
    className: 'py-2 md:py-4 lg:py-6',
  },
}

const PRODUCTS_PER_ROW = 4

interface ProductGridProps {
  products: Product[]
  onSelectDates: () => void
}

export default function ProductGrid({ products, onSelectDates }: ProductGridProps) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-5 md:mt-6 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
      {products.map((product, index) => {
        const banner = (index + 1) % PRODUCTS_PER_ROW === 0 ? bannersByRow[(index + 1) / PRODUCTS_PER_ROW] : undefined
        return (
          <Fragment key={product.id}>
            <ProductCard product={product} onSelectDates={onSelectDates} />
            {banner && <PromoBanner {...banner} />}
          </Fragment>
        )
      })}
    </div>
  )
}
