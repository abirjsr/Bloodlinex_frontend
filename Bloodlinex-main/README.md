# BloodlineX Admin Dashboard

A Next.js 14 admin dashboard for the BloodlineX dog breeding platform.

## Pages Included

- **Dashboard** — Stats cards, platform activity area chart, top dog breeds donut chart
- **Breeders** — Category management table with search & pagination
- **Category** — Category management table
- **Dogs** — Dog management table with images, status badges
- **Type** — Type management (Base, Elite, Legendary)
- **Marketplace** — Listing management with images & prices
- **Chats** — Placeholder chat screen
- **Settings** — Profile, Security, and Notifications tabs

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts (area chart + donut chart)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/dashboard`.

## Color Scheme

- Primary / Active: `#F5A623` (amber/gold)
- Status approved: `#22c55e` (green)
- Status pending: `#F5A623` (amber)
- Status cancel: `#ef4444` (red)
- Background: `#f8f8f8`
- Cards/Sidebar: `#ffffff`
