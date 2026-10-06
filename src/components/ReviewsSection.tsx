import googleLogo from '../assets/google.svg'
import starIcon from '../assets/star.svg'
import { reviews, type Review } from '../data/reviews'

const stats = [
  { value: '250Cr+', label: 'Saved Together' },
  { value: '4.5M Kg', label: 'CO₂e Emissions Saved' },
  { value: '100K+', label: 'Products in Circulation' },
]

function initials(name: string) {
  return name.slice(0, 2).toUpperCase()
}

function ReviewCard({ text, name, city, category }: Review) {
  return (
    <div className="flex min-w-[328px] max-w-[328px] flex-col justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-100 p-3 md:rounded-3xl lg:min-w-[360px] lg:max-w-[360px] lg:px-0 lg:p-4">
      <div className="flex flex-col gap-2 md:px-4">
        <div className="flex gap-2">
          <img src={googleLogo} alt="Google" className="h-6 w-6" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <img key={index} src={starIcon} alt="" className="h-5 w-5" />
            ))}
          </div>
        </div>
        <p className="mt-1.5 line-clamp-4 text-14 font-bold text-primary-900 lg:text-16">“ {text} ”</p>
      </div>
      <div className="flex gap-5 md:px-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-150 text-12 font-semibold text-primary-600 md:text-16">
          {initials(name)}
        </span>
        <div>
          <h4 className="text-12 font-medium text-gray-600 lg:text-14">{name}</h4>
          <p className="text-10 text-gray-400 lg:text-14">
            {city} • {category}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="flex flex-col gap-5 bg-gray-100 py-4 lg:gap-12 lg:py-12">
      <h2 className="px-4 text-center font-ubuntu text-24 font-bold leading-7 -tracking-[0.02em] md:text-48 md:leading-[56px]">
        Served more than <span className="text-decorative-orange">1 Lakh Orders</span>
      </h2>
      <div className="overflow-hidden py-3">
        <div className="group p-2">
          <div className="flex w-max animate-marquee gap-4 px-4 group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-4" aria-hidden={copy === 1}>
                {reviews.map((review) => (
                  <ReviewCard key={review.name} {...review} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <dl className="container grid grid-cols-3 gap-3 border-y-2 border-neutral-150 px-0 py-4 md:gap-6 md:py-6">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-2">
            <dd className="bg-gradient-to-r from-[#002CD1] via-[#1945E8] to-[#7EC904] bg-clip-text text-center font-ubuntu text-24 font-bold text-transparent md:py-3 lg:text-60">
              {value}
            </dd>
            <dt className="text-center text-12 capitalize text-gray-800 sm:text-20">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
