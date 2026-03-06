# WoW Raid Composition

A web application for planning and managing World of Warcraft Classic raid compositions. Build raid groups by assigning characters to slots, manage boss-specific assignments, and share compositions via URL.

## Features

- **Composition Builder** — Drag-and-drop interface to assign characters across multiple 25-man raid groups
- **Filtering** — Filter the character roster by rank, level, class, spec, and role
- **Shareable URLs** — Raid compositions are serialized into query params so you can share a link directly
- **Boss Assignments** — Per-raid assignment views for specific encounters:
  - Raid-wide assignments
  - Magtheridon (T4)
  - Blackwing Lair *(coming soon)*
  - Ahn'Qiraj 40 *(coming soon)*
  - Naxxramas *(coming soon)*
  - SSC / The Eye *(coming soon)*
- **Players & Calendar** — Additional views for managing player roster and raid schedule

## Supported Classes & Roles

| Class | Specs |
|-------|-------|
| Warrior | Arms, Fury, Protection |
| Paladin | Holy, Protection, Retribution |
| Hunter | Beast Mastery, Marksmanship, Survival |
| Druid | Balance, Feral, Restoration |
| Rogue | Assassination, Combat, Subtlety |
| Warlock | Affliction, Demonology, Destruction |
| Mage | Arcane, Fire, Frost |
| Priest | Discipline, Holy, Shadow |
| Shaman | Elemental, Enhancement, Restoration |

Roles: Tank, Healer, Melee DPS, Ranged DPS

## Tech Stack

- [Angular 19](https://angular.dev)
- TypeScript 5.7
- SCSS
- [html2canvas](https://html2canvas.hertzen.com)
- Font Awesome

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

## Running Tests

```bash
npm test
```

Uses [Karma](https://karma-runner.github.io) with Jasmine.

## Deployment

The app is deployed to GitHub Pages at:
[https://nick-kravchenko.github.io/wow-raid-composition/](https://nick-kravchenko.github.io/wow-raid-composition/)