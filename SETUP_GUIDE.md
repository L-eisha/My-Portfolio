# Setup Guide

## Prerequisites

- Node.js 20.9 or newer
- Corepack (included with many Node.js installations) or pnpm 11.20.0
- Git, if you plan to clone or update the repository
- A terminal in the project root

This project uses Next.js 16, React 19, and TypeScript. The exact pnpm version is pinned in `package.json`.

## Enable pnpm and install

From PowerShell, in the project root:

```powershell
corepack pnpm --version
corepack pnpm install
```

The `packageManager` field pins the Corepack version to pnpm 11.20.0. If the `pnpm` command is preferred, enable Corepack's shim first:

```powershell
corepack enable
```

If Corepack is unavailable, install the pinned package manager and then the project dependencies:

```powershell
npm install --global pnpm@11.20.0
pnpm install
```

Do not use `npm install` or another package manager to install the project dependencies.

## Environment configuration

Create a local environment file:

```powershell
Copy-Item .env.example .env.local
```

Edit `.env.local` as needed. Keep it local and do not commit API keys or credentials.

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | For contact-form delivery | Server-side Resend API key used by `/api/send`. The portfolio can be viewed without configuring email delivery. Never prefix this key with `NEXT_PUBLIC_`. |
| `NEXT_PUBLIC_WS_URL` | No | URL of the separate Socket.IO backend for live cursors, presence, and chat. Leave blank to disable realtime features. |
| `UMAMI_DOMAIN` | No | Umami script URL. Set together with `UMAMI_SITE_ID` to enable Umami analytics. |
| `UMAMI_SITE_ID` | No | Umami website identifier. |
| `UMAMI_DEPLOY_SITE_ID` | No | Optional Umami website identifier used by the deployment-host collection endpoint. |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID. |
| `NEXT_PUBLIC_LEGACY_HOST` | No | Previous hostname for the dismissible site-moved notice. Leave blank if unused. |

The contact form requires a valid Resend key at runtime; without it, the API returns a configuration error and the production build still works. Realtime features require a separately operated backend; no backend server is included in this repository. Analytics are optional. A personal production domain has not been configured, so canonical URLs and sitemap host entries are omitted until one is supplied.

## Run locally

Start the development server:

```powershell
corepack pnpm dev
```

Open <http://localhost:3000>.

Create and run an optimized production build locally:

```powershell
corepack pnpm build
corepack pnpm start
```

## Available checks

```powershell
corepack pnpm lint
corepack pnpm typecheck
```

## Project structure

- `src/app/` — Next.js pages, metadata, and API routes
- `src/components/` — shared UI, effects, 3D keyboard, and page sections
- `src/data/config.ts` — portfolio identity, SEO text, contact, and social links
- `src/data/constants.ts` — skills, work experience, and education
- `src/data/projects.tsx` — featured project cards and descriptions
- `public/assets/` — site UI assets

Project cards without supplied screenshots use the existing gradient preview background. Add verified screenshots under `public/assets/projects-screenshots/` and reference them in the corresponding project data if you want to show project images.

## Security notes

- Keep `.env.local` out of source control.
- Do not place API keys in client-side code or variables prefixed with `NEXT_PUBLIC_`.
- Realtime requires an independently configured WebSocket service and is disabled when its URL is blank.
- This guide describes local setup only; it does not deploy the site.
