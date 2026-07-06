---
title: "I Shipped v1 of My Own Frontend Starter Template"
date: 2026-07-06
excerpt: "A React + Vite starter with SSR, route auto-discovery, DI, Reatom, Mantine, Playwright smoke tests, and a removable example module. Here is what it includes and why each piece matters."
---

## Introduction

Today I finished the first version of my own frontend starter template. Not a clone of `create-react-app` with a different folder structure. Something I would actually want to clone when a new project starts on Monday morning.

The template is built for projects that survive past the prototype phase. It assumes the codebase will grow, multiple people will touch it, and architecture decisions made on day one will compound over time.

Repository: [github.com/AntonBelousovWEB/js-template](https://github.com/AntonBelousovWEB/js-template)

## What Is Inside

### SSR with zero-config route discovery

The server renders React pages on first request, then the client hydrates. Routes are auto-discovered from the `pages/` directory — drop a `HomePage/home.page.tsx`, export a component whose name ends with `Page`, and it becomes a route. No manual route registration.

The dev server uses Vite in middleware mode, so HMR works during SSR development without a separate process.

### Request-scoped DI container

Dependencies are wired through a central container using `@needle-di/core`. Each provider module registers its bindings, and components resolve them through `useService(token)`. Tests swap implementations via `container.createChild().bindAll({ useValue: mock })` — no global mocks, no module patching.

### Reatom state management

State lives in `@reatom/core` atoms and computed values. Components wrapped with `reatomComponent` automatically subscribe to the atoms they read during render. No selector boilerplate. The template includes a working example: search, async data fetching, optimistic selection toggling, and clear — all reactive.

### Mantine UI kit

Components use Mantine v9 with `defaultColorScheme: "light"`. The example catalog page demonstrates Card, Badge, Button, TextInput, Stack, Group, Alert, and Loader components wired together.

### Removable example module

Run `npm run template:reset` and the entire demo entity/feature module is deleted. What remains is a clean `HomePage` with the full infrastructure intact — DI, SSR, routing, Reatom, testing setup. No cleanup archaeology required.

## Testing That Actually Runs

### Unit tests with Vitest

Tests live in `__tests__/` directories next to source. A custom ESLint plugin enforces this structure. Mocking uses the DI container — inject fakes through `createChild()`, verify behavior, tear down. No global mocking libraries needed.

### E2E smoke tests with Playwright

`e2e/__tests__/ssr-smoke.test.ts` verifies three things:

1. SSR delivers content — JavaScript is disabled, and the page still shows the headline and badges in raw HTML.
2. Hydration is clean — JavaScript is enabled, the catalog renders, and no runtime errors appear in the console.
3. Interaction works — clicking "Select example" updates the selection banner and flips the button state.

Playwright builds the production bundle and starts the preview server automatically. One command: `npm run test:e2e`.

### MSW infrastructure ready

API mocking handlers are co-located with their domain modules. Each entity or feature exports its own `xxxHandlers` array from a `mocks/handlers.ts` file. A central barrel just spreads them into one flat array — no giant file, no merge conflicts. The vitest setup file is pre-configured. Uncomment two lines when API contracts arrive.

## Why This Exists

Most starters give you a bundler and a routing library. This template gives you architecture decisions:

- Dependency direction is explicit — `shared → entities → features → pages`
- State is not trapped in component trees
- Tests mock at the boundary, not the implementation
- Routes self-register so adding a page requires zero ceremony
- The example module proves every layer works end to end

It is not a framework. It is a starting point for projects where the architecture matters from day one.
