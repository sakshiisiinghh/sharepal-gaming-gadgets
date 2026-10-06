import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CategorySidebar from '../components/CategorySidebar'
import FaqSection from '../components/FaqSection'
import FloatingActions from '../components/FloatingActions'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MobileBottomNav from '../components/MobileBottomNav'
import ProductSection from '../components/ProductSection'
import ReviewsSection from '../components/ReviewsSection'
import CitySelectorModal from '../components/overlays/CitySelectorModal'
import DateRangeModal, { type DateRange } from '../components/overlays/DateRangeModal'
import FaqDrawer from '../components/overlays/FaqDrawer'
import ProfileDrawer from '../components/overlays/ProfileDrawer'
import SearchDrawer from '../components/overlays/SearchDrawer'
import SuperCategoryTabs from '../components/SuperCategoryTabs'
import { CITY } from '../data/site'

type Overlay = 'city' | 'dates' | 'search' | 'profile' | 'faqs' | null

export default function GamingGadgets() {
  const [overlay, setOverlay] = useState<Overlay>(null)
  const [city, setCity] = useState(CITY)
  const [dateRange, setDateRange] = useState<DateRange | null>(null)
  const openDates = () => setOverlay('dates')
  const closeOverlay = () => setOverlay(null)

  return (
    <>
      <Header
        city={city}
        dateRange={dateRange}
        onSelectCity={() => setOverlay('city')}
        onSelectDates={openDates}
        onOpenSearch={() => setOverlay('search')}
        onOpenProfile={() => setOverlay('profile')}
      />
      <main className="container px-0 py-24 md:py-20">
        <div className="max-md:bg-[linear-gradient(360deg,#8A2BE2_0%,#4C187C_100%)] max-md:pb-3 md:contents">
          <SuperCategoryTabs />
          <div className="px-2 md:hidden">
            <Hero />
          </div>
        </div>
        <div className="flex gap-2 px-2 max-md:pt-4 md:grid md:grid-cols-[100px_1fr] md:gap-8 md:px-0 lg:grid-cols-[120px_1fr]">
          <CategorySidebar />
          <div className="min-w-0 flex-1">
            <div className="hidden md:block">
              <Hero />
            </div>
            <ProductSection dateRange={dateRange} onSelectDates={openDates} />
          </div>
        </div>
      </main>
      <FaqSection onViewMore={() => setOverlay('faqs')} />
      <Breadcrumb />
      <ReviewsSection />
      <Footer />
      <FloatingActions onSelectDates={openDates} />
      <MobileBottomNav onOpenSearch={() => setOverlay('search')} />
      {overlay === 'city' && (
        <CitySelectorModal
          selectedCity={city}
          onSelect={(selectedCity) => {
            setCity(selectedCity)
            closeOverlay()
          }}
          onClose={closeOverlay}
        />
      )}
      {overlay === 'dates' && (
        <DateRangeModal
          initialRange={dateRange}
          onConfirm={(range) => {
            setDateRange(range)
            closeOverlay()
          }}
          onClose={closeOverlay}
        />
      )}
      {overlay === 'search' && <SearchDrawer onClose={closeOverlay} />}
      {overlay === 'profile' && <ProfileDrawer onClose={closeOverlay} />}
      {overlay === 'faqs' && <FaqDrawer onClose={closeOverlay} />}
    </>
  )
}
