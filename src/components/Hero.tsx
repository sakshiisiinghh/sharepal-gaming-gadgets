import logoPal from '../assets/logo-pal.svg'
import logoShare from '../assets/logo-share.svg'

const IMAGE_BASE = 'https://images.sharepal.in'
const brandLogos = [
  { file: 'XBOX', name: 'Xbox' },
  { file: 'PS5', name: 'PS5' },
  { file: 'Sony', name: 'Meta' },
]

export default function Hero() {
  return (
    <div
      className="relative flex min-h-[150px] w-full items-center justify-center overflow-hidden rounded-xl max-md:shadow-lg md:min-h-[228px]"
      style={{ background: 'linear-gradient(360deg, rgb(138, 43, 226) 0%, rgb(76, 24, 124) 100%)' }}
    >
      <img
        src={`${IMAGE_BASE}/super-categories/gaming-left.webp`}
        alt=""
        className="absolute -bottom-9 left-0 hidden w-48 object-contain sm:-bottom-10 sm:w-60 md:-bottom-12 md:block md:w-44 xl:w-[250px]"
      />
      <img
        src={`${IMAGE_BASE}/super-categories/gaming-right.webp`}
        alt=""
        className="absolute -bottom-11 right-0 w-48 object-contain sm:-bottom-10 sm:w-60 md:-bottom-12 md:w-44 xl:w-[250px]"
      />
      <div className="relative z-10 flex w-full flex-col items-start justify-center gap-1.5 px-4 text-center text-white md:items-center md:gap-3">
        <h1 className="font-ubuntu text-20 font-bold capitalize leading-tight tracking-tight drop-shadow-lg md:text-40 md:-tracking-[0.01em]">
          Gaming Consoles
        </h1>
        <h2 className="w-[75%] text-10 font-bold drop-shadow-md max-md:text-start sm:text-14 md:max-w-[70%] lg:max-w-[510px] lg:text-18 lg:leading-6">
          Rent the latest gaming gadgets from
          <span className="mx-1 inline-flex w-14 items-center justify-center align-middle md:w-20">
            <img src={logoShare} alt="" className="w-[63%]" />
            <img src={logoPal} alt="SharePal" className="w-[37%]" />
          </span>
          PS5, Xbox, Oculus VR, Racing Wheel on rent.
        </h2>
        <div className="flex w-full flex-wrap items-center md:mt-3 md:justify-center md:max-w-lg md:gap-2">
          {brandLogos.map(({ file, name }, index) => (
            <div key={file} className="flex items-center">
              {index > 0 && <span className="mx-1 h-4 w-[2px] rounded-full bg-category-purple opacity-50 md:mx-2 md:h-6 md:w-[3px] md:opacity-70" />}
              <img src={`${IMAGE_BASE}/super-categories-brand-logos/gaming/${file}.svg`} alt={name} className="w-12 object-contain md:w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
