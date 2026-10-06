import { sortOptions, type ProductFilters, type SortKey } from '../utils/productFilters'
import { ChevronDownIcon } from './icons'

interface ProductToolbarProps {
  filters: ProductFilters
  tags: string[]
  onChange: (filters: ProductFilters) => void
}

function FilterChip({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={`shrink-0 rounded-full border-2 px-3 py-1 text-12 font-semibold transition-colors md:text-14 ${
        isActive
          ? 'border-primary-900 bg-primary-900 text-white'
          : 'border-neutral-250 bg-gray-100 text-neutral-700 hover:bg-neutral-150'
      }`}
    >
      {label}
    </button>
  )
}

export default function ProductToolbar({ filters, tags, onChange }: ProductToolbarProps) {
  const { sortKey, inStockOnly, tag } = filters

  return (
    <div className="mt-3 flex flex-col gap-3 md:mt-4 md:flex-row md:items-center md:justify-between">
      <div className="scrollbar-none flex min-w-0 items-center gap-2 overflow-x-auto max-md:-mx-1 max-md:px-1">
        <FilterChip label="In stock" isActive={inStockOnly} onClick={() => onChange({ ...filters, inStockOnly: !inStockOnly })} />
        {tags.map((name) => (
          <FilterChip key={name} label={name} isActive={tag === name} onClick={() => onChange({ ...filters, tag: tag === name ? null : name })} />
        ))}
      </div>
      <label className="relative shrink-0 self-start md:self-auto">
        <span className="sr-only">Sort by</span>
        <select
          value={sortKey}
          onChange={(event) => onChange({ ...filters, sortKey: event.target.value as SortKey })}
          className="h-9 cursor-pointer appearance-none rounded-full border-2 border-neutral-250 bg-gray-100 py-1 pl-3 pr-8 text-12 font-semibold text-neutral-700 hover:bg-neutral-150 md:text-14"
        >
          {sortOptions.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-700" />
      </label>
    </div>
  )
}
