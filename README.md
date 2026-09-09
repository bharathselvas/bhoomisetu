# Bhoomi Setu V2 — National Land Acquisition Operating System

**SIH 2026 · Problem Statement 26016 · Department of Land Resources (DoLR), Government of India**

> Frontend-first prototype. No backend yet — all data is realistic mocked state.

## What this is

Bhoomi Setu is a national operating system for the **complete land acquisition lifecycle** under the RFCTLARR Act, 2013:

```
PROJECT PROPOSAL → LAND REQUIREMENT → GIS IDENTIFICATION → SUBMISSION → SCRUTINY
→ SIA → PRELIMINARY NOTIFICATION → PUBLIC DISCLOSURE → OBJECTIONS / HEARING
→ DECLARATION → FIELD VERIFICATION → COMPENSATION → AWARD → PAYMENT
→ POSSESSION → R&R → CLOSED
```

Eleven roles operate on **shared cases, parcels, documents, and audit events** — it must feel like **one national platform**, not eleven dashboards.

## Stack

React 18 · TypeScript 5 · Vite 5 · Tailwind 3.4 · shadcn/ui · React Router 6 · Zustand 4 · Leaflet / React-Leaflet · Recharts · lucide-react

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Project structure

```
src/
  components/
    ui/            # shadcn primitives
    shell/         # GovtMasthead, AppShell, Sidebar, ContextBar
    domain/        # StageStepper, CaseCard, ParcelTable …
  features/
    landing/       # Role Gallery (entry)
    cases/         # Case list + detail
    overview/      # Role-aware overview
    gis/           # Map + parcel overlay
    documents/     # Document vault
    audit/         # Audit trail
  types/           # domain.ts, rbac.ts
  lib/             # stages, format, utils
  stores/          # Zustand: session, cases
  mocks/           # cases, parcels, officers
```

## Architecture principles

- **RBAC + hierarchy + workflow + audit are designed together**
- Roles are jurisdiction-scoped (National → State → District → Tehsil → Village)
- Domain boundaries are clean so mock stores can be replaced by API services later
- Visual language: institutional, information-dense, accessible — not a SaaS template

## Previous implementation

The original `bhoomi-setu-v1` implementation is kept as reference/archive only and is **not** copied.

## License

Academic prototype for SIH 2026.
