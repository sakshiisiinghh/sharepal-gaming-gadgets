import { TagIcon } from '../icons'

export default function CouponBanner() {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-pink-100 via-white to-secondary-100 px-4 py-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-decorative-pink">
        <TagIcon className="h-8 w-8" />
      </span>
      <div>
        <p className="text-16 font-bold">
          <span className="text-decorative-pink">Use code SHAREPAL &amp; get 10%</span> on orders above ₹1500. Maximum discount: ₹300
        </p>
        <p className="mt-1 text-12 font-semibold text-neutral-700">Use Coupon - SHAREPAL</p>
      </div>
    </div>
  )
}
