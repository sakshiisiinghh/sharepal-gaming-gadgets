import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CategorySidebar from '../components/CategorySidebar'
import FaqSection from '../components/FaqSection'
import FloatingActions from '../components/FloatingActions'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'
import ReviewsSection from '../components/ReviewsSection'
import SuperCategoryTabs from '../components/SuperCategoryTabs'

type Overlay = 'city' | 'dates' | 'search' | 'profile' | 'faqs' | null

export default function GamingGadgets() {
  const [, setOverlay] = useState<Overlay>(null)
  const openDates = () => setOverlay('dates')

  return (
    <>
      <Header
        onSelectCity={() => setOverlay('city')}
        onSelectDates={openDates}
        onOpenSearch={() => setOverlay('search')}
        onOpenProfile={() => setOverlay('profile')}
      />
      <main className="container px-0 py-24 pb-0 md:py-20 md:pb-0">
        <SuperCategoryTabs />
        <div className="flex gap-2 px-2 max-md:pt-4 md:grid md:grid-cols-[100px_1fr] md:gap-8 md:px-0 lg:grid-cols-[120px_1fr]">
          <CategorySidebar />
          <div className="min-w-0 flex-1">
            <Hero />
            <ProductSection onSelectDates={openDates} />
          </div>
        </div>
      </main>
      <FaqSection onViewMore={() => setOverlay('faqs')} />
      <Breadcrumb />
      <ReviewsSection />
      <Footer />
      <FloatingActions onSelectDates={openDates} />
    </>
  )
}
