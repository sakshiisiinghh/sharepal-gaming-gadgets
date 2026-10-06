import { useState } from 'react'
import CategorySidebar from '../components/CategorySidebar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SuperCategoryTabs from '../components/SuperCategoryTabs'

type Overlay = 'city' | 'dates' | 'search' | 'profile' | null

export default function GamingGadgets() {
  const [, setOverlay] = useState<Overlay>(null)

  return (
    <>
      <Header
        onSelectCity={() => setOverlay('city')}
        onSelectDates={() => setOverlay('dates')}
        onOpenSearch={() => setOverlay('search')}
        onOpenProfile={() => setOverlay('profile')}
      />
      <main className="container py-24 md:py-20">
        <SuperCategoryTabs />
        <div className="flex gap-2 px-2 max-md:pt-4 md:grid md:grid-cols-[100px_1fr] md:gap-8 md:px-0 lg:grid-cols-[120px_1fr]">
          <CategorySidebar />
          <div className="min-w-0 flex-1">
            <Hero />
          </div>
        </div>
      </main>
    </>
  )
}
