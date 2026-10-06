import type { ReactNode } from 'react'
import { CartIcon, CategoriesIcon, HomeIcon, SearchIcon } from './icons'

interface MobileBottomNavProps {
  onOpenSearch: () => void
}

function NavItem({ label, icon, onClick }: { label: string; icon: ReactNode; onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex flex-1 flex-col items-center gap-0.5 py-1 text-12 text-neutral-500">
      <span className="text-primary-900">{icon}</span>
      {label}
    </button>
  )
}

export default function MobileBottomNav({ onOpenSearch }: MobileBottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200 bg-gray-100 md:hidden">
      <div className="mx-auto flex max-w-sm gap-0.5 py-1.5">
        <NavItem label="Home" icon={<HomeIcon className="h-6 w-6" />} />
        <NavItem label="Category" icon={<CategoriesIcon className="h-6 w-6" />} />
        <NavItem label="Search" icon={<SearchIcon className="h-6 w-6 fill-current" />} onClick={onOpenSearch} />
        <NavItem label="Cart" icon={<CartIcon className="h-6 w-6 fill-current" />} />
      </div>
    </nav>
  )
}
