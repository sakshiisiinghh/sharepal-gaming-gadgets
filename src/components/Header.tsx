import logoShare from '../assets/logo-share.svg'
import logoPal from '../assets/logo-pal.svg'
import { CITY } from '../data/site'
import {
  CalendarIcon,
  CalendarPlusIcon,
  CartIcon,
  ChevronDownIcon,
  PinIcon,
  SearchIcon,
  UserIcon,
} from './icons'

interface HeaderProps {
  onSelectCity: () => void
  onSelectDates: () => void
  onOpenSearch: () => void
  onOpenProfile: () => void
}

const iconButton =
  'flex h-11 w-11 items-center justify-center rounded-full p-2 text-gray-100 hover:bg-neutral-150 hover:text-neutral-900'

function Logo({ className }: { className: string }) {
  return (
    <a href="/bangalore" className={`flex items-center justify-center bg-primary-500 ${className}`}>
      <img src={logoShare} alt="" className="w-[63%]" />
      <img src={logoPal} alt="SharePal" className="w-[37%]" />
    </a>
  )
}

function DesktopHeader({ onSelectCity, onSelectDates, onOpenSearch, onOpenProfile }: HeaderProps) {
  return (
    <div className="container hidden items-end justify-between gap-1 lg:flex">
      <div className="flex-1">
        <Logo className="h-[68px] w-40 rounded-b-2xl p-3 pt-[18px] shadow-sm" />
      </div>
      <div className="flex items-center gap-2 rounded-full border-2 border-category-purple bg-gray-100">
        <button
          onClick={onSelectCity}
          className="flex items-center gap-1 rounded-l-full bg-neutral-200 px-[10px] py-[6px] text-14 font-semibold text-primary-900 hover:bg-neutral-250"
        >
          <PinIcon className="w-5" />
          <span className="min-w-16 text-left">{CITY}</span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>
        <button onClick={onSelectDates} className="flex items-center gap-2 text-14 font-semibold text-neutral-700">
          <span className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            Delivery Date
          </span>
          <span className="h-5 w-[2px] bg-neutral-200" />
          <span className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            Pickup Date
          </span>
        </button>
        <button
          onClick={onSelectDates}
          className="flex h-full items-center gap-1 rounded-full bg-primary-900 px-3 py-2 text-14 text-white"
        >
          <CalendarPlusIcon className="h-4 w-4" />
          <span className="pr-1 font-semibold tracking-wide">Select</span>
        </button>
      </div>
      <div className="flex flex-1 items-end justify-end gap-3 text-gray-100">
        <button onClick={onOpenSearch} aria-label="Search" className={iconButton}>
          <SearchIcon className="h-7 w-7 fill-current" />
        </button>
        <button aria-label="Cart" className={iconButton}>
          <CartIcon className="h-7 w-7 fill-current" />
        </button>
        <button onClick={onOpenProfile} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-category-purple bg-gray-100 p-0.5 text-neutral-900 hover:bg-gray-200">
            <UserIcon className="h-6 w-6 fill-current" />
          </span>
          <span className="text-16 font-semibold">Hi, Login</span>
        </button>
      </div>
    </div>
  )
}

function MobileHeader({ onSelectCity, onSelectDates, onOpenProfile }: HeaderProps) {
  return (
    <div className="container flex flex-col gap-3 lg:hidden">
      <div className="flex items-center justify-between gap-1">
        <Logo className="h-10 w-[122px] rounded-b-xl px-3 pb-1 pt-3" />
        <div className="flex items-center justify-end gap-1.5 pt-1.5 md:gap-4">
          <button
            onClick={onSelectCity}
            className="flex items-center gap-1 rounded-full border border-category-purple bg-category-purple px-2 py-0.5 text-12 font-semibold text-gray-100 shadow-md"
          >
            <PinIcon className="w-4 fill-gray-100" />
            <span className="min-w-4">{CITY}</span>
            <ChevronDownIcon className="w-3" />
          </button>
          <button
            onClick={onOpenProfile}
            aria-label="Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-200 bg-neutral-900 p-0.5 text-gray-100"
          >
            <UserIcon className="h-5 w-5 fill-current" />
          </button>
        </div>
      </div>
      <div className="flex h-[34px] items-center justify-between rounded-full border-2 border-category-purple bg-gray-100">
        <button onClick={onSelectDates} className="flex flex-1 items-center gap-1 px-2 text-12 font-semibold text-neutral-700">
          <CalendarIcon className="mx-1 w-4" />
          Select Rental Dates
        </button>
        <button
          onClick={onSelectDates}
          className="flex h-full items-center gap-1 rounded-full bg-primary-900 py-[6px] pl-2 pr-3 text-12 font-semibold text-white"
        >
          <CalendarPlusIcon className="h-4 w-4" />
          Select
        </button>
      </div>
    </div>
  )
}

export default function Header(props: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex flex-col items-center gap-1 bg-[#4C187C] pb-3 md:pb-4">
      <DesktopHeader {...props} />
      <MobileHeader {...props} />
    </header>
  )
}
