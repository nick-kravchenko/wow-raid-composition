# WoW Raid Composition

An Angular application for planning a 25-player World of Warcraft: The Burning Crusade Classic raid. It combines roster management, shareable raid compositions, boss assignments, gear references, attendance, and statically baked Warcraft Logs and Battle.net data.

Live site: [nick-kravchenko.github.io/wow-raid-composition](https://nick-kravchenko.github.io/wow-raid-composition/)

## Features

- Build five raid groups from the guild roster and bench, with rank, class, specialization, and role filters.
- Preserve compositions and assignment titles in URL query parameters for sharing.
- Copy a composition as an image.
- Generate MRT notes for raid-wide and Tier 4 boss assignments.
- Browse players, characters, per-character Warcraft Logs rankings and gear, and Tier 4/Tier 5 best-in-slot lists.
- View SSC and Tempest Keep speed-ranking milestones alongside selected guilds.
- Review the raid calendar and Raid Helper attendance data.

SSC and Tempest Keep assignment pages exist as placeholders. Older Blackwing Lair, Ahn'Qiraj 40, and Naxxramas assignment views are present in the codebase but disabled in the current UI.

## Stack and requirements

- Angular 21 with standalone, lazy-loaded components
- TypeScript 5.9 and SCSS
- Node.js `^20.19.0`, `^22.12.0`, or `>=24.0.0`
- npm (the repository includes `package-lock.json`)

The application is fully static at runtime. External character and ranking data is fetched by maintenance scripts and committed as generated TypeScript modules under `src/app/_data/`.

## Local development

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). The development server reloads when source files change.

`npm start`, `npm run build`, and `npm run watch` generate `src/environments/environment.ts` from `.env` before running Angular. The only browser environment setting is currently `BITLY_API_TOKEN`; it is optional, and URL shortening is disabled in `BitlyService` at present.

## Build and test

```bash
# Production build
npm run build

# Continuous development build
npm run watch

# GitHub Pages build with the repository base href
npm run build:gpages

# Angular/Karma test runner (requires Chrome)
npm test
```

Production artifacts are written to `dist/wow-raid-composition/`.

Some script and presentation tests use Node's test runner through `tsx` rather than Karma. For example:

```bash
npx tsx scripts/wcl-stats-baker/normalize.test.ts
npx tsx scripts/wcl-stats-baker/baker.test.ts
npx tsx scripts/wcl-baker/overall-ranks.test.ts
npx tsx src/app/wcl-stats/wcl-stats.test.ts
```

## Data baking

Create a root `.env` file for the APIs you intend to use. Both `.env` and the generated Angular environment file are ignored by Git.

### Warcraft Logs character data

`npm run bake:wcl` reads the roster from `src/app/_data/players.data.ts`, fetches rankings and recent logged gear, and writes `src/app/_data/wcl-baked.data.ts`.

```env
WCL_CLIENT_ID=your_client_id
WCL_CLIENT_SECRET=your_client_secret
WCL_DEFAULT_REALM=spineshatter
WCL_DEFAULT_REGION=eu

# Optional
WCL_ZONE_ID=
WCL_OVERALL_RANK_ZONE_ID=1056
WCL_OVERALL_SSC_BOSS_ID=100702
WCL_OVERALL_TK_BOSS_ID=100703
WCL_SKIP_GEAR=false
WCL_API_DELAY_MS=300
WCL_BATCH_SIZE=10
WCL_BATCH_DELAY_MS=500
WCL_CACHE_MAX_AGE_HOURS=6
WCL_DEBUG=false
```

Complete character entries are reused within `WCL_CACHE_MAX_AGE_HOURS` to avoid
spending WCL quota on repeated bakes. Set it to `0` to force a full refresh.
Gear requests are deduplicated automatically when characters share a report.

Obtain API credentials from the [Warcraft Logs API clients page](https://www.warcraftlogs.com/api/clients/), then run:

```bash
npm run bake:wcl
```

### Warcraft Logs speed statistics

`npm run bake:wcl-stats` uses the same WCL client ID and secret. It fetches configured SSC and Tempest Keep clear-time milestones and tracked guilds, validates the complete result, then atomically replaces `src/app/_data/wcl-stats.data.ts`.

Raid IDs and tracked guilds are maintained in `scripts/wcl-stats-baker/config.ts`.

```bash
npm run bake:wcl-stats
```

### Battle.net profiles

`npm run bake:bnet` reads the roster, fetches character profile and media data, and writes `src/app/_data/battlenet-baked.data.ts`.

```env
BNET_CLIENT_ID=your_client_id
BNET_CLIENT_SECRET=your_client_secret
BNET_REALM_SLUG=spineshatter
BNET_REGION=eu

# Optional
BNET_GAME_VERSION=classic
BNET_BATCH_SIZE=10
BNET_BATCH_DELAY_MS=100
BNET_DEBUG=false
```

Create credentials in the [Battle.net Developer Portal](https://develop.battle.net/access/clients), then run:

```bash
npm run bake:bnet
```

Failed per-character requests retain existing baked entries when possible. Credentials are required for both bakers; a missing required variable causes the command to fail without replacing generated data.

## Maintenance scripts

| Command | Purpose |
| --- | --- |
| `npm run bake:bis:t4` | Rebuild Tier 4 best-in-slot modules from Wowhead guides. |
| `npm run bake:bis:t5` | Rebuild Tier 5 best-in-slot modules from Wowhead guides. |
| `npm run vr:curses` | Print a weekly Void Reaver curse matrix for roster warlocks using WCL data. |
| `npm run attendance` | Compare the two Raid Helper event IDs currently configured in the script. |

The BIS parsers perform many external requests and overwrite the corresponding files in `scripts/bis-baker/`. Review their configured source URLs before running them. The attendance event IDs are currently constants at the bottom of `src/app/_data/raid-helper-attendance.ts`.

## Project layout

```text
src/app/                 Angular pages, shared UI, domain types, and roster data
src/app/_data/           Hand-maintained and generated static data modules
src/assets/              Images, icons, fonts, and encounter plans
scripts/wcl-baker/       Character rankings and gear baker
scripts/wcl-stats-baker/ Raid speed-statistics baker
scripts/battlenet-baker/ Battle.net profile baker
scripts/bis-baker/       Tier 4 and Tier 5 BIS parsers and generated lists
scripts/void-reaver-curses/ WCL-based curse audit utility
scss/                    Shared Sass variables
```
