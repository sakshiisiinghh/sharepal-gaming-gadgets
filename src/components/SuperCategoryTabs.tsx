import { useState } from 'react'
import { entertainmentMenu, superCategories } from '../data/site'

const ACTIVE_TAB = 'Gaming'

export default function SuperCategoryTabs() {
  const [isEntertainmentMenuOpen, setEntertainmentMenuOpen] = useState(false)

  return (
    <nav className="sticky top-[84px] z-20 hidden bg-neutral-150 py-1 md:block">
      <ul className="mx-auto flex max-w-3xl px-8">
        {superCategories.map(({ label, href }) => {
          const isActive = label === ACTIVE_TAB
          const hasMenu = label === 'Entertainment'
          return (
            <li
              key={label}
              className="relative basis-1/3 px-4 py-2 text-center lg:basis-1/4"
              onMouseEnter={() => hasMenu && setEntertainmentMenuOpen(true)}
              onMouseLeave={() => hasMenu && setEntertainmentMenuOpen(false)}
            >
              <a href={href} className="relative inline-block w-full max-w-44 px-3">
                <span className={`relative inline-block text-14 text-neutral-700 ${isActive ? 'font-bold' : 'font-semibold'}`}>
                  {label}
                  {isActive && (
                    <span className="absolute left-1/2 top-full mt-2 h-[2px] w-10/12 -translate-x-1/2 rounded-full bg-category-purple" />
                  )}
                </span>
              </a>
              {hasMenu && isEntertainmentMenuOpen && (
                <ul className="absolute left-0 top-full z-30 w-40 rounded-3xl bg-gray-100 py-3 text-left shadow-lg">
                  {entertainmentMenu.map((item) => (
                    <li key={item}>
                      <a href="/bangalore/entertainment-on-rent" className="block px-5 py-2 text-14 font-semibold text-neutral-700 hover:bg-neutral-150">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
