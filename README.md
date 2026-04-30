# WoW Raid Composition

A web application for planning and managing World of Warcraft Classic raid compositions. Build raid groups by assigning characters to slots, manage boss-specific assignments, and share compositions via URL.

## Features

- **Composition Builder** — Assign characters across multiple raid groups (25-man), filter the roster by rank, class, spec, and role, copy the composition as an image to clipboard
- **Shareable URLs** — Raid compositions are serialized into query params so you can share a link directly
- **Boss Assignments** — Per-boss assignment views with automatic role-based logic and one-click MRT addon note generation:
  - **Raid-wide** — Generic cross-raid assignments
  - **T4 (Gruul's Lair / Magtheridon's Lair)** — High King Maulgar, Gruul the Dragon Killer, Magtheridon (tank assignments, Manticron cube clickers, interrupt rotations)
  - **SSC (Serpentshrine Cavern)** *(assignments coming soon)*
  - **TK (The Eye)** *(assignments coming soon)*
  - Blackwing Lair *(disabled)*
  - Ahn'Qiraj 40 *(disabled)*
  - Naxxramas *(disabled)*
- **BIS** — Best in Slot gear lists per spec
- **Characters** — Roster view grouped by class with WCL performance rankings, linked to individual character pages
- **Warcraft Logs Integration** — Character performance percentiles and gear are pre-fetched via the WCL API and bundled at build time
- **Players** — Roster view showing all players and their characters
- **Calendar** — Raid schedule pulled from Raid Helper event data

## Supported Classes & Roles

| Class   | Roles                                |
|---------|--------------------------------------|
| Warrior | Tank, Melee DPS                      |
| Paladin | Tank, Healer, Melee DPS              |
| Hunter  | Ranged DPS                           |
| Druid   | Tank, Healer, Melee DPS, Ranged DPS  |
| Rogue   | Melee DPS                            |
| Warlock | Ranged DPS                           |
| Mage    | Ranged DPS                           |
| Priest  | Healer                               |
| Shaman  | Healer, Melee DPS, Ranged DPS        |

## Tech Stack

- [Angular 21](https://angular.dev)
- TypeScript 5.9
- SCSS (Sass module system — `@use`/`@forward`)
- [html2canvas](https://html2canvas.hertzen.com) — screenshot to clipboard
- Font Awesome 6

## Requirements

- **Node.js** ≥ 20.19 or ≥ 22.12 (required by Angular 21)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open `http://localhost:4200/` in your browser. The app reloads automatically on file changes.

## Building

Production build:

```bash
npm run build
```

Build for GitHub Pages deployment:

```bash
npm run build:gpages
```

Build artifacts are output to the `dist/` directory.

## WCL Data Baking

Character rankings and gear snapshots are fetched from the [Warcraft Logs API v2](https://www.warcraftlogs.com/api/docs) and baked into a static TypeScript file before the Angular build. This keeps the app fully static (no runtime API calls).

Create a `.env` file in the project root:

```env
WCL_CLIENT_ID=your_client_id
WCL_CLIENT_SECRET=your_client_secret
WCL_DEFAULT_REALM=gehennas
WCL_DEFAULT_REGION=eu

# Optional
WCL_ZONE_ID=1012          # Filter rankings to a specific zone
WCL_SKIP_GEAR=false       # Set to "true" to skip gear fetching (faster)
WCL_API_DELAY_MS=300      # Delay between API calls in ms
```

Then run:

```bash
npm run bake:wcl
```

This writes `src/app/_data/wcl-baked.data.ts`, which is imported by the app at build time. The script is a no-op if `WCL_CLIENT_ID` is not set, so the existing baked file is preserved.

## Running Tests

```bash
npm test
```

Uses [Karma](https://karma-runner.github.io) with Jasmine.

## Deployment

The app is deployed to GitHub Pages at:
[https://nick-kravchenko.github.io/wow-raid-composition/](https://nick-kravchenko.github.io/wow-raid-composition/)