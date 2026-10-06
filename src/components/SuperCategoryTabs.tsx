import { useEffect, useRef, useState } from 'react'
import { entertainmentMenu, superCategories } from '../data/site'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

const ACTIVE_TAB = 'Gaming'
const SCROLL_STEP = 160

const arrowButton = 'absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-gray-100 md:hidden'

export default function SuperCategoryTabs() {
  const [isEntertainmentMenuOpen, setEntertainmentMenuOpen] = useState(false)
  const scrollerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const activeTab = scrollerRef.current?.querySelector<HTMLElement>('[data-active]')
    if (activeTab) scrollerRef.current?.scrollTo({ left: activeTab.offsetLeft })
  }, [])

  const scrollTabs = (direction: -1 | 1) => scrollerRef.current?.scrollBy({ left: direction * SCROLL_STEP, behavior: 'smooth' })

  return (
    <nav className="sticky top-0 z-20 bg-transparent py-1 md:top-[80px] md:bg-neutral-150">
      <div className="relative mx-auto max-w-3xl px-8">
        <button type="button" aria-label="Scroll tabs left" onClick={() => scrollTabs(-1)} className={`${arrowButton} left-1`}>
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <ul ref={scrollerRef} className="scrollbar-none relative flex overflow-x-auto gap-[10px] lg:-ml-[30px] lg:overflow-visible">
          {superCategories.map(({ label, href }) => {
            const isActive = label === ACTIVE_TAB
            const hasMenu = label === 'Entertainment'
            return (
              <li
                key={label}
                data-active={isActive || undefined}
                className="relative shrink-0 basis-[40%] px-2 py-2 text-center sm:basis-1/2 md:basis-1/3 md:px-4 lg:basis-[176px]"
                onMouseEnter={() => hasMenu && setEntertainmentMenuOpen(true)}
                onMouseLeave={() => hasMenu && setEntertainmentMenuOpen(false)}
              >
                <a href={href} className="relative inline-block w-full max-w-44 px-3">
                  <span className={`relative inline-block text-14 text-gray-200 md:text-neutral-700 ${isActive ? 'font-bold' : 'font-semibold'}`}>
                    {label}
                    {isActive && (
                      <span className="absolute left-1/2 top-full mt-2 h-[2px] w-full -translate-x-1/2 rounded-full bg-category-purple md:w-10/12" />
                    )}
                  </span>
                </a>
                {hasMenu && isEntertainmentMenuOpen && (
                  <ul className="absolute left-0 top-full z-30 hidden w-40 rounded-3xl bg-gray-100 py-3 text-left shadow-lg lg:block">
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
        <button type="button" aria-label="Scroll tabs right" onClick={() => scrollTabs(1)} className={`${arrowButton} right-1`}>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </nav>
  )
}
