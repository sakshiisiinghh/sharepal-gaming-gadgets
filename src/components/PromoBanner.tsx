interface PromoBannerProps {
  href: string
  desktopImage: string
  mobileImage: string
  className?: string
}

export default function PromoBanner({ href, desktopImage, mobileImage, className = '' }: PromoBannerProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`col-span-full block ${className}`}>
      <img src={desktopImage} alt="Banner" width={1920} height={400} className="hidden w-full rounded-2xl object-cover md:block" />
      <img src={mobileImage} alt="Banner" width={768} height={400} className="w-full rounded-lg object-cover md:hidden" />
    </a>
  )
}
