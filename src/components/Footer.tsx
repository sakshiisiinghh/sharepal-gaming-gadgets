import { useState } from 'react'
import footerLogo from '../assets/footer-logo.svg'
import { categoryLinkGroups, footerLinkGroups, newBadgeLinks, socialLinks } from '../data/site'
import { ChevronDownIcon, FacebookIcon, HeadsetIcon, InstagramIcon, LinkedinIcon, MailIcon } from './icons'
import SeoText from './SeoText'

function NewBadge() {
  return (
    <span className="ml-1 -translate-y-2 rounded-full bg-secondary-500 px-2.5 py-[0.5px] text-10 font-bold text-secondary-900">New</span>
  )
}

function SeoSection() {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`text-neutral-300 [&_a]:underline [&_h2]:my-1 [&_h2]:text-18 [&_h2]:font-medium [&_h2]:text-gray-100 [&_h3]:my-2 [&_h3]:text-16 [&_h3]:font-medium [&_li]:mt-1 [&_li]:text-14 [&_li]:font-light [&_p]:mt-1 [&_p]:text-14 [&_p]:font-light [&_strong]:font-bold [&_strong]:text-gray-150 [&_ul]:list-inside [&_ul]:list-disc ${
          isExpanded ? '' : 'max-h-[230px] overflow-hidden'
        }`}
      >
        <SeoText />
      </div>
      <button
        type="button"
        onClick={() => setExpanded(!isExpanded)}
        className="flex items-center gap-1 text-12 font-semibold text-neutral-200 transition-colors hover:text-neutral-100"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
        <ChevronDownIcon className={`h-4 w-4 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-primary-900 py-5 pb-16 md:py-[72px] md:pb-10">
      <div className="container flex flex-col gap-5 md:gap-12">
        <div className="grid gap-6 max-md:hidden md:grid-cols-4 md:gap-10 lg:grid-cols-5">
          {categoryLinkGroups.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-4">
              <h2 className="line-clamp-2 text-18 font-semibold text-gray-100">{title}</h2>
              {links.map(({ label, href }) => (
                <a key={label} href={href} className="text-14 font-medium text-neutral-300 hover:text-neutral-200 hover:underline">
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <SeoSection />
        <div className="flex flex-col gap-8">
          <div className="flex h-10 items-center bg-gradient-to-r from-primary-900 to-[#03134F]">
            <img src={footerLogo} alt="SharePal" className="h-9" />
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:gap-3 lg:grid-cols-5">
            {footerLinkGroups.map(({ title, links }) => (
              <div key={title}>
                <h2 className="mb-3 min-w-max text-16 font-bold text-gray-100 md:mb-6">{title}</h2>
                <div className="flex min-w-max flex-col gap-1 text-12 font-medium text-neutral-300">
                  {links.map(({ label, href }) => (
                    <a key={label} href={href} className="hover:text-white md:text-14">
                      {label}
                      {newBadgeLinks.includes(label) && <NewBadge />}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h2 className="mb-3 min-w-max text-16 font-bold text-gray-100 md:mb-6">Need Help</h2>
              <div className="flex min-w-max flex-col gap-2 text-neutral-300">
                <button type="button" className="flex items-center gap-2 py-1.5 hover:text-white md:py-3">
                  <HeadsetIcon className="h-6 w-6" />
                  <span className="text-12 md:text-14">Contact Support</span>
                </button>
                <a href="/support" className="py-1.5 text-12 hover:text-white md:text-14">
                  Contact Us
                </a>
                <a href="mailto:care@sharepal.in" className="flex items-center gap-2 py-1.5 hover:text-white md:py-3">
                  <MailIcon className="h-6 w-6" />
                  <span className="text-12 md:text-14">care@sharepal.in</span>
                </a>
                <div className="flex items-center gap-3 py-1.5 md:py-3">
                  <a href={socialLinks.facebook} aria-label="Facebook"><FacebookIcon className="h-8 w-8" /></a>
                  <a href={socialLinks.instagram} aria-label="Instagram"><InstagramIcon className="h-8 w-8" /></a>
                  <a href={socialLinks.linkedin} aria-label="LinkedIn"><LinkedinIcon className="h-8 w-8" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-primary-700 py-6 text-14 font-medium text-primary-300 max-md:flex-col">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 max-md:w-full max-md:justify-center max-md:rounded-sm max-md:bg-primary-850 max-md:py-2"
            >
              Go up <ChevronDownIcon className="h-6 w-6 rotate-180" />
            </button>
            <p>© {new Date().getFullYear()}. SWNAC E-Kiraya Services Pvt Ltd</p>
            <p>Made with ♥️ for India</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
