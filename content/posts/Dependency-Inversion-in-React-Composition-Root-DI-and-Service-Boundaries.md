---
title: "Dependency Inversion in React: Composition Root, DI, and Service Boundaries"
date: 2026-07-09
excerpt: "How to use dependency inversion, dependency injection, composition roots, React context, and service boundaries in frontend architecture without over-engineering."
---

## Introduction

Dependency inversion is the frontend architecture principle that pays rent when a feature must survive real change.

It lets a feature depend on what it needs, not on the exact tool that provides it. That difference matters when the same feature must work with different APIs, different state managers, tests, mocks, local storage, offline mode, or another product shell.

But dependency inversion is also easy to overdo. Not every `fetch()` call needs an interface. Not every app needs an IoC container. The trick is to invert dependencies where substitution is real.

## The Problem: Features Glued to Infrastructure

Imagine a feature that imports its own API client, reads global config, writes to a Zustand store, and opens modals through a concrete modal library.

It works. It may even look clean at first.

The problem appears later:

1. You want to reuse the feature in another product.
2. You want to test it without network calls.
3. You migrate from REST to GraphQL.
4. You replace Zustand with another state solution.
5. You need local demo data for a sales environment.

If the feature imports every concrete dependency directly, reuse becomes surgery.

Dependency inversion changes the direction. The feature defines what it needs. The application decides what implementation it receives.

## Depend on Capabilities

A feature rarely needs "Axios" or "localStorage" directly. It needs a capability.

For example:

```ts
type CharactersService = {
  getCharacters(query: CharactersQuery): Promise<Character[]>;
  getCharacter(id: string): Promise<Character>;
};
```

The feature can depend on `CharactersService`. One implementation may use REST. Another may use mocked data. Another may read from IndexedDB.

The feature does not care.

This is useful because the feature boundary becomes stable. Infrastructure can change behind it.

## Composition Root

A composition root is the place where dependencies are assembled.

In a React app, this can be:

1. The application entry point.
2. A route module.
3. A feature provider.
4. A test setup.
5. A server-rendering boundary.

The point is not the exact file. The point is that object creation and wiring happen near the outside of the system, while feature code receives ready dependencies.

```tsx
function AppProviders({ children }: { children: React.ReactNode }) {
  const services = React.useMemo(
    () => ({
      characters: createHttpCharactersService(httpClient),
    }),
    []
  );

  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
}
```

This is enough for many apps. No container required.

## DI Through Props

The simplest dependency injection is props.

```tsx
function CharactersCatalog({
  service,
}: {
  service: CharactersService;
}) {
  // use service here
}
```

This is explicit, testable, and boring. Boring is good.

The downside is prop drilling. If the dependency is needed deep in a subtree, passing it through every layer becomes noise.

That is when React context can help.

## DI Through React Context

React context is a reasonable DI mechanism when a dependency is shared by a subtree.

```tsx
const ServicesContext = React.createContext<Services | null>(null);

function useServices() {
  const services = React.useContext(ServicesContext);
  if (!services) throw new Error("ServicesProvider is missing");
  return services;
}
```

This keeps dependency access centralized without introducing a full IoC container.

The danger is turning context into a global junk drawer. If every dependency goes into one huge `AppContext`, you have not created architecture. You have created a hidden import system.

Keep contexts scoped. Keep services named. Keep public APIs small.

## Service Locator: Useful, Dangerous, Sometimes Enough

The Service Locator pattern gives code a way to ask for a dependency by name or token.

It can be useful when explicit injection becomes too noisy, especially in modular applications. But it hides dependencies. A function may look pure while reaching into a global registry.

That makes testing and reading harder.

Use Service Locator when the dependency graph is dynamic enough to justify it. Avoid it as a default for simple React apps.

If a prop or a small context works, stop there.

## IoC Containers Are Not Architecture

Inversify, Tsyringe, and similar tools can assemble object graphs, handle scopes, and support decorators or tokens. They are useful when the dependency graph becomes large.

But an IoC container does not automatically make code clean. It only moves construction elsewhere.

Bad code with a container is still bad code:

1. Huge services still know too much.
2. Cycles still hurt.
3. Interfaces without substitution still add noise.
4. Hidden dependencies still confuse readers.

Use a container when dependency assembly itself is painful. Do not use one to feel architectural.

## Dependency Scopes

Frontend apps often need different dependency lifetimes:

1. App scope: configuration, API clients, logging.
2. Session scope: current user, auth services.
3. Route scope: page-specific loaders and controllers.
4. Feature scope: modal managers, draft services, view models.
5. Test scope: mocks and fakes.

Thinking in scopes is more important than choosing a DI library. If everything is global, cleanup and isolation become hard. If everything is recreated too often, performance and identity become fragile.

React already gives you natural scoping through component trees. Use that before inventing more machinery.

## Public API Matters

If a feature exposes every internal file, it is not really modular.

A feature public API should reveal capabilities, not implementation details:

```ts
export { CharactersCatalog } from "./ui/CharactersCatalog";
export type { CharactersService } from "./model/ports";
```

Consumers should not import random hooks, helpers, and internal models just because TypeScript allows it.

Dependency inversion works best when boundaries are enforced socially or technically. Import rules, lint rules, or package boundaries can help when the team is large enough to need them.

## When to Skip DI

Skip dependency inversion when:

1. There is one implementation and no realistic substitution.
2. The abstraction name is weaker than the concrete code.
3. Tests can mock at a higher boundary.
4. The feature is tiny and local.

Over-abstracted frontend code is expensive. Every interface asks the next developer to learn one more local concept.

The lazy senior rule: invert only where the dependency is already creating change pressure.

## React Dependency Injection Without Containers

Most React dependency injection does not need a library. The practical version is smaller:

1. Put object creation near the app boundary.
2. Pass feature dependencies through props when the path is short.
3. Use context when a whole subtree needs the same capability.
4. Keep infrastructure behind named services or repositories.
5. Use test doubles at the same boundary the production app uses.

This gives you the important part of DI: the feature can ask for a capability without knowing the concrete transport, cache, storage, analytics client, or state manager.

A container becomes useful only when dependency assembly itself is the problem. For most React apps, composition root plus scoped context is enough.

## Conclusion

Dependency inversion in React is not about containers, decorators, or enterprise ceremony. It is about protecting features from infrastructure details.

Start with props. Use context when a subtree needs shared dependencies. Add a service locator or IoC container only when assembly becomes a real problem.

The best DI is almost invisible: the feature says what it needs, the app provides it, and future changes do not require rewriting the feature.
