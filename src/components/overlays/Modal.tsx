import { useEffect, type ReactNode } from 'react'
import { CloseIcon } from '../icons'

interface OverlayFrameProps {
  title: string
  maxWidth?: string
  onClose: () => void
  children: ReactNode
}

function useDismiss(onClose: () => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])
}

export function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button type="button" onClick={onClose} aria-label="Close" className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-150">
      <CloseIcon className="h-5 w-5" />
    </button>
  )
}

export function Modal({ title, maxWidth = 'max-w-7xl', onClose, children }: OverlayFrameProps) {
  useDismiss(onClose)

  return (
    <div className="fixed inset-0 z-[60] animate-fade-in bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        className={`absolute bottom-0 left-0 max-h-[92svh] w-full overflow-auto rounded-t-3xl bg-gray-150 shadow-lg md:bottom-auto md:left-1/2 md:top-1/2 md:max-h-svh md:w-[95%] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[28px] ${maxWidth}`}
      >
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-neutral-200 md:hidden" />
        {children}
      </div>
    </div>
  )
}

export function Drawer({ title, onClose, children }: OverlayFrameProps) {
  useDismiss(onClose)

  return (
    <div className="fixed inset-0 z-[60] animate-fade-in bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <aside
        role="dialog"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        className="absolute bottom-0 right-0 top-0 flex w-full animate-slide-in-right flex-col overflow-y-auto rounded-l-3xl bg-gray-150 shadow-lg sm:w-[600px]"
      >
        {children}
      </aside>
    </div>
  )
}
