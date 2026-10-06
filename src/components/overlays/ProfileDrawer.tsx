import { ArrowRightIcon } from '../icons'
import CouponBanner from './CouponBanner'
import { Drawer } from './Modal'

export default function ProfileDrawer({ onClose }: { onClose: () => void }) {
  return (
    <Drawer title="Profile" onClose={onClose}>
      <div className="bg-gray-100 p-5">
        <div className="mb-4 flex items-center justify-between pt-10">
          <h2 className="text-24 font-bold md:text-40">Hi, Pal!</h2>
          <button type="button" className="flex items-center gap-1 rounded-full bg-primary-900 px-5 py-3 text-14 font-semibold text-white">
            Log In
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
        <CouponBanner />
      </div>
      <div className="flex-1" />
      <a href="https://assets.sharepal.in/" className="m-4 block rounded-2xl bg-gradient-to-r from-primary-900 to-primary-500 p-5 text-white">
        <p className="text-12 font-bold uppercase tracking-wide text-secondary-400">Asset Partner Program</p>
        <p className="text-18 font-bold">Sponsor an asset. Earn every month.</p>
        <p className="text-12 text-primary-150">Monthly payouts to your bank — plus discounts on every rental.</p>
      </a>
    </Drawer>
  )
}
