import { useState } from 'react'
import { products } from '../../data/products'
import type { Product } from '../../types/product'
import starIcon from '../../assets/star.svg'
import { CloseIcon, SearchIcon } from '../icons'
import CouponBanner from './CouponBanner'
import { Drawer } from './Modal'

const POPULAR_ITEM_COUNT = 8

function SearchResultCard({ product }: { product: Product }) {
  const { name, image, rating, booked_count: bookedCount } = product

  return (
    <li className="w-[90px] shrink-0 md:w-[178px]">
      <div className="mb-2 aspect-square rounded-xl bg-gray-100 p-3">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>
      <p className="truncate text-14 font-semibold">{name}</p>
      <p className="text-10 text-neutral-500">Select Dates</p>
      {bookedCount > 0 && <p className="text-10 font-medium text-success-600">{bookedCount}+ booked this month</p>}
      {rating > 0 && (
        <p className="flex items-center gap-1 text-10 font-medium">
          <span className="flex">
            {Array.from({ length: Math.round(rating) }, (_, index) => (
              <img key={index} src={starIcon} alt="" className="h-3 w-3" />
            ))}
          </span>
          ({rating})
        </p>
      )}
    </li>
  )
}

export default function SearchDrawer({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const trimmedQuery = query.trim().toLowerCase()
  const results = trimmedQuery
    ? products.filter(({ name }) => name.toLowerCase().includes(trimmedQuery))
    : products.slice(0, POPULAR_ITEM_COUNT)

  return (
    <Drawer title="Search Products" onClose={onClose}>
      <div className="bg-gray-100 p-5">
        <div className="mb-4 flex items-center gap-4">
          <button type="button" onClick={onClose} aria-label="Close">
            <CloseIcon className="h-6 w-6" />
          </button>
          <h2 className="text-20 font-bold">Search Products</h2>
        </div>
        <label className="flex h-12 items-center gap-3 rounded-full border border-neutral-200 bg-gray-100 px-4">
          <SearchIcon className="h-5 w-5 text-neutral-700" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for products"
            className="flex-1 bg-transparent text-14 outline-none placeholder:text-neutral-500"
          />
        </label>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <CouponBanner />
        <h3 className="text-10 font-medium text-neutral-500">{trimmedQuery ? 'Results' : 'Popular Items'}</h3>
        {results.length > 0 ? (
          <ul className={`flex gap-4 ${trimmedQuery ? 'flex-wrap' : 'overflow-x-auto pb-4'}`}>
            {results.map((product) => (
              <SearchResultCard key={product.id} product={product} />
            ))}
          </ul>
        ) : (
          <p className="text-14 text-neutral-500">No products found for “{query.trim()}”.</p>
        )}
      </div>
    </Drawer>
  )
}
