# PlotNest

Interactive real estate prototype built with Next.js App Router, React, TypeScript and Tailwind CSS v4.

## Development

Requires Node.js 20.9+.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run typecheck
npm run build
```

The build exports a static website to `out/`. Deploy that directory to a static host; use `npx serve out` to preview the production export. `next start` is not used with static export.

## Structure

- `app/layout.tsx`: root layout and metadata
- `app/page.tsx`: entry page
- `app/globals.css`: Tailwind import, shared color/background/font tokens, base styles and reusable controls
- `components/plotnest.tsx`: interactive application and typed React state
- `components/property-card.tsx`: reusable listing card
- `components/modal.tsx`: accessible dialog with focus trap, restoration and Escape handling
- `lib/types.ts`: property, visit, message and demo state types
- `lib/data.ts`: sample listings and formatting helpers

Layout and responsive styles use Tailwind utility classes. Change the CSS variables in `globals.css` to update the shared theme.

## Demo flows

Search and filter listings, sort prices, save favourites, explore an illustrative map, inspect property details, request/cancel visits, try simulated seller chat, submit listings, approve/reject listings and confirm visits through the admin view.

State is persisted in browser localStorage. Existing data from the original HTML prototype is migrated when available.

## Boundaries

This is a responsive web prototype, not a production backend or native mobile app. Listings, prices, verification badges, photography and conversations are sample data. No real authentication, payments, map service, seller communication or server-side admin authorization is implemented. Google Fonts and Unsplash images require internet access.
