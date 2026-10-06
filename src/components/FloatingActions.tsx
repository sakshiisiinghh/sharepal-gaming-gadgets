import { useEffect, useState } from 'react'
import { useLottie } from 'lottie-react'
import chatbotAnimation from '../assets/chatbot-animation.json'
import { CalendarPlusIcon } from './icons'

const SHOW_AFTER_SCROLL = 300

export default function FloatingActions({ onSelectDates }: { onSelectDates: () => void }) {
  const [isScrolled, setScrolled] = useState(false)
  const { View: chatbotAnimationView } = useLottie({ animationData: chatbotAnimation, loop: true })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SHOW_AFTER_SCROLL)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isScrolled && (
        <button
          type="button"
          onClick={onSelectDates}
          className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border-2 border-secondary-500 bg-primary-900 px-4 py-2.5 text-12 font-semibold text-white shadow-lg"
        >
          <CalendarPlusIcon className="h-4 w-4" />
          Select rental dates to view prices
        </button>
      )}
      <a href="/chatbot" title="Open chatbot" className="fixed bottom-16 right-2 z-40 md:bottom-10 md:right-6">
        <div className="w-20 lg:w-28">{chatbotAnimationView}</div>
      </a>
    </>
  )
}
