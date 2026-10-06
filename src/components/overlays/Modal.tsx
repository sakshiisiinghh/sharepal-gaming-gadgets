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
        className={`absolute left-1/2 top-1/2 max-h-svh w-[95%] ${maxWidth} -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-[28px] bg-gray-150 shadow-lg`}
      >
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
