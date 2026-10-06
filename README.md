# SharePal - Gaming Gadgets

A frontend recreation of the SharePal gaming gadgets rental page, built as part of a frontend assignment.

Original page: https://sharepal.in/bangalore/gaming-gadgets-on-rent

## Overview

This recreates the Bangalore gaming gadgets page: header, category tabs, hero, product grid, FAQs, customer reviews and the footer. The goal was to match the original layout and behaviour as closely as possible, on desktop and on mobile.

Products are rendered from the provided `product-list.json` (kept in `src/data/`), not hardcoded. Names, images, tags and prices all come from that file, and the order is preserved.

Only the Gaming page is built. The other tabs (Photography, Outdoor, Entertainment) and most footer links don't lead anywhere, since there is no product data for them.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- lottie-react (for the animated chat button)

## Features

- Responsive layout for desktop, tablet and mobile, including the mobile header and bottom nav
- Product grid driven by JSON, with a "Show More" button that loads 12 at a time
- Reusable product card with tag badges (Trending, New, etc.) and a wishlist heart
- Promo banners between product rows
- City picker and a date range picker with rental-day calculation; once dates are chosen the card prices are revealed
- Search drawer that filters products by name, and shows rating and booked count
- FAQ accordion and a "View more" drawer
- Customer reviews marquee and stats
- Login drawer (UI only) and the Entertainment dropdown

There is no backend, so login, cart and checkout aren't functional.

## Project Structure

```
src/
  components/    UI pieces (Header, ProductCard, ProductGrid, Footer, ...)
    overlays/    Modals and drawers (city, dates, search, profile, FAQs)
  pages/         GamingGadgets page
  data/          product-list.json, products, FAQs, reviews, nav and footer content
  types/         Product type
  utils/         Date helpers
  App.tsx
  main.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

Other scripts:

```bash
npm run build    # type-check and build for production
npm run lint
```
