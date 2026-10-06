import { ALL_PRODUCTS_ICON, gamingCategories } from '../data/site'

const categories = [{ label: 'All', image: ALL_PRODUCTS_ICON }, ...gamingCategories]

interface CategorySidebarProps {
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export default function CategorySidebar({ selectedCategory, onSelectCategory }: CategorySidebarProps) {
  return (
    <aside className="w-[80px] shrink-0 md:w-full">
      <div className="scrollbar-none sticky top-[140px] max-h-[calc(100dvh-160px)] overflow-y-auto rounded-lg bg-gray-100 p-1 shadow-[0_2px_15px_rgba(0,0,0,0.06)] max-md:py-3 md:max-h-[calc(100dvh-10rem)] md:rounded-xl md:p-3">
        <ul className="flex flex-col gap-2 md:gap-3 lg:gap-4">
          {categories.map(({ label, image }) => {
            const isSelected = (selectedCategory ?? 'All') === label
            return (
              <li key={label}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelectCategory(label === 'All' ? null : label)}
                  className="group flex w-full flex-col items-center gap-0.5 md:gap-1"
                >
                  <span
                    className={`flex aspect-square w-12 items-center justify-center overflow-hidden rounded-lg p-1 group-hover:bg-gray-100 md:w-14 md:rounded-xl md:p-1.5 lg:w-16 ${
                      isSelected ? 'border-2 border-primary-500 bg-gray-100' : 'border bg-gray-50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={label}
                      className={`h-full w-full object-contain transition-transform duration-300 group-hover:scale-110 ${isSelected ? 'scale-105' : ''}`}
                    />
                  </span>
                  <span
                    className={`line-clamp-2 max-w-[50px] text-center text-10 font-semibold leading-tight md:max-w-[60px] md:text-12 md:font-bold lg:max-w-[80px] lg:text-14 lg:font-semibold ${
                      isSelected ? 'text-primary-500' : 'text-neutral-900'
                    }`}
                  >
                    {label}
                    {isSelected && <span className="mx-auto mt-0.5 block h-[2px] w-4 rounded-full bg-primary-500 md:w-6 lg:w-8" />}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
