export interface NavLink {
  label: string
  href: string
}

export interface LinkGroup {
  title: string
  links: NavLink[]
}

export const CITY = 'Bangalore'

export const superCategories: NavLink[] = [
  { label: 'Photography', href: '/bangalore/photography-on-rent' },
  { label: 'Gaming', href: '/bangalore/gaming-gadgets-on-rent' },
  { label: 'Outdoor', href: '/bangalore/outdoor-gears-on-rent' },
  { label: 'Entertainment', href: '/bangalore/entertainment-on-rent' },
]

export const entertainmentMenu = ['Projectors', 'Speakers', 'Mics', 'VR']

export const gamingCategories = [
  { label: 'GTA VI', image: 'https://images.sharepal.in/category-icons/gta-vi.webp' },
  { label: 'PS5 Console', image: 'https://images.sharepal.in/sub-category-card/ps5-console-on-rent-sharepal.webp' },
  { label: 'Xbox Console', image: 'https://images.sharepal.in/sub-category-card/xbox-console-on-rent-sharepal.webp' },
  { label: 'VR', image: 'https://images.sharepal.in/sub-category-card/vr-on-rent-sharepal.webp' },
  {
    label: 'Racing Wheel',
    image:
      'https://images.sharepal.in/categories/gaming-consoles/gaming-accessories/logitech-G29-driving-force-racing-wheel/logitech-g29-racing-wheel-on-rent-sharepal-1.webp',
  },
  {
    label: 'Big Screen Gaming',
    image:
      'https://images.sharepal.in/categories/gaming-consoles/big-screen-gaming/products/ps5-with-2-controllers-with-projector-on-rent+.webp',
  },
]

export const ALL_PRODUCTS_ICON = 'https://images.sharepal.in/misc/hard-coded/sharepal/Product=All%20Products.webp'

export const cities = {
  popular: ['Delhi', 'Mumbai', 'Hyderabad', 'Pune', 'Chennai', 'Bangalore'],
  other: ['Faridabad', 'Kolkata', 'Gurgaon', 'Noida', 'Ghaziabad'],
}

const photography = '/bangalore/photography-on-rent'
const outdoor = '/bangalore/outdoor-gears-on-rent'
const gaming = '/bangalore/gaming-gadgets-on-rent'

export const categoryLinkGroups: LinkGroup[] = [
  {
    title: 'Action Cameras',
    links: [
      { label: 'Action Cameras', href: `${photography}/action-cameras-on-rent` },
      { label: 'Pocket Cameras', href: `${photography}/pocket-cameras-on-rent` },
      { label: 'GoPro Cameras', href: `${photography}/gopro-cameras-on-rent` },
      { label: 'DJI Cameras', href: `${photography}/dji-cameras-on-rent` },
      { label: 'DJI Drones', href: `${photography}/dji-drones-on-rent` },
      { label: '360 Cameras', href: `${photography}/360-cameras-on-rent` },
    ],
  },
  {
    title: 'Cameras',
    links: [
      { label: 'DSLR Cameras', href: `${photography}/dslr-cameras-on-rent` },
      { label: 'Cameras', href: `${photography}/all-cameras-on-rent` },
      { label: 'iPhones', href: `${photography}/iphones-on-rent` },
      { label: 'DSLR Gimbal Combos', href: `${photography}/dslr-gimbal-on-rent` },
      { label: 'Wildlife Photography', href: `${photography}/wildlife-photography-cameras-on-rent` },
      { label: 'Tripod and camera accessories', href: `${photography}/tripod-and-camera-accessories-on-rent` },
    ],
  },
  {
    title: 'Trekking Gear',
    links: [
      { label: 'Trekking Gear', href: `${outdoor}/trekking-gear-on-rent` },
      { label: 'Trekking Jackets', href: `${outdoor}/trekking-jackets-on-rent` },
      { label: 'Trek/Snow Pants', href: `${outdoor}/trek-snow-pants-on-rent` },
      { label: 'Trekking Shoes', href: `${outdoor}/trekking-shoes-on-rent` },
      { label: 'Trek Accessories', href: `${outdoor}/trek-accessories-on-rent` },
    ],
  },
  {
    title: 'Riding Gear',
    links: [
      { label: 'Riding Gear', href: `${outdoor}/riding-gear-on-rent` },
      { label: 'Riding Luggage', href: `${outdoor}/riding-luggage-on-rent` },
      { label: 'Riding Jackets', href: `${outdoor}/riding-jackets-on-rent` },
      { label: 'Riding Essentials', href: `${outdoor}/riding-essentials-on-rent` },
      { label: 'Riding Boots', href: `${outdoor}/riding-boots-on-rent` },
      { label: 'Binoculars', href: `${outdoor}/binoculars-on-rent` },
    ],
  },
  {
    title: 'Creator Gear',
    links: [
      { label: 'Wireless & Collar Mics', href: `${photography}/wireless-and-collar-mics-on-rent` },
      { label: 'Professional Cameras', href: `${photography}/professional-cameras-on-rent` },
      { label: 'Mirrorless Cameras', href: `${photography}/mirrorless-cameras-on-rent` },
      { label: 'UNLMTD Vlogging', href: `${photography}/unlmtd-vlogging-on-rent` },
      { label: 'Mobile Gimbals', href: `${photography}/mobile-gimbals-on-rent` },
      { label: 'Vlogging', href: `${photography}/vlogging-cameras-on-rent` },
    ],
  },
  {
    title: 'Gaming Console',
    links: [
      { label: 'PS5 Console', href: `${gaming}/ps5-console-on-rent` },
      { label: 'VR', href: `${gaming}/vr-on-rent` },
      { label: 'Racing Wheel', href: `${gaming}/gaming-controllers-on-rent` },
      { label: 'Big Screen Gaming', href: `${gaming}/big-screen-gaming` },
      { label: 'Xbox Console', href: `${gaming}/xbox-console-on-rent` },
    ],
  },
  {
    title: 'Winter Wear',
    links: [
      { label: 'Snow Boots', href: `${outdoor}/snow-boots-on-rent` },
      { label: 'Winter Jackets', href: `${outdoor}/winter-jackets-on-rent` },
      { label: 'Backpacks', href: `${outdoor}/backpacks-on-rent` },
    ],
  },
  {
    title: 'Camping Gear',
    links: [
      { label: 'Camping Gear', href: `${outdoor}/camping-gear-on-rent` },
      { label: 'Camping Stools & Tables', href: `${outdoor}/camping-stools-and-tables-on-rent` },
      { label: 'Camping Tents', href: `${outdoor}/camping-tents-on-rent` },
      { label: 'Sleeping Bags & Mats', href: `${outdoor}/sleeping-bags-and-mats-on-rent` },
    ],
  },
  {
    title: 'Audio Visual Equipment',
    links: [
      { label: 'Projectors', href: '/bangalore/entertainment-on-rent/projectors-on-rent' },
      { label: 'VR', href: '/bangalore/entertainment-on-rent/vr-on-rent' },
      { label: 'Mics', href: '/bangalore/entertainment-on-rent/mics-on-rent' },
      { label: 'Speakers', href: '/bangalore/entertainment-on-rent/speakers-on-rent' },
    ],
  },
]

export const footerLinkGroups: LinkGroup[] = [
  {
    title: 'Sharepal',
    links: [
      { label: 'About', href: '/about-us' },
      { label: 'Why SharePal', href: '/why-sharepal' },
      { label: 'Sitemap', href: '/sitemap' },
      { label: 'CarePal', href: '/carepal' },
    ],
  },
  {
    title: 'Become a Pal',
    links: [
      { label: 'Sharepal for Creators', href: '/sharepal-for-creators' },
      { label: 'Careers', href: '/life-at-sharepal?active=careers' },
      { label: 'Sharepal for Brands', href: '/sharepal-for-brands' },
      { label: 'Asset Funding Program', href: 'https://assets.sharepal.in/' },
      { label: 'Rent Your Gear', href: 'https://earnwithus.sharepal.in/' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'How it works?', href: '/how-sharepal-works' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Verification', href: '/complete-verification' },
      { label: 'Cancellation Policy', href: '/cancellation-policy' },
      { label: 'Life at Sharepal', href: '/life-at-sharepal' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Terms & Condition', href: '/terms-and-conditions' },
      { label: 'Shipping policy', href: '/shipping-policy' },
      { label: 'Damage Policy', href: '/damage-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
]

export const newBadgeLinks = ['Asset Funding Program', 'Rent Your Gear']

export const socialLinks = {
  facebook: 'https://www.facebook.com/Sharepal.in',
  instagram: 'https://www.instagram.com/sharepal.in/',
  linkedin: 'https://www.linkedin.com/company/sharepal/',
}
