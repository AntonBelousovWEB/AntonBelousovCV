---
title: "The Cost of Abstract Interfaces in Frontend Architecture"
date: 2026-07-18
excerpt: "A senior frontend look at the cost of abstract interfaces, when dependency inversion helps, and when a concrete API client is simpler and better."
---

## Introduction

Frontend developers often discover dependency inversion and then create interfaces everywhere.

Every API client gets an interface. Every service gets a port. Every store gets an adapter. Every helper gets wrapped. The code looks architectural, but the team moves slower.

Abstract interfaces are not free. They are useful when they protect real change. They are waste when they only rename concrete code.

The senior question is not "can we abstract this?" The question is "what future change does this abstraction make cheaper?"

## Abstraction Has a Carrying Cost

Every abstraction adds cost:

1. A name to learn.
2. A contract to maintain.
3. A layer to debug.
4. A file to navigate.
5. A possibility that the abstraction lies.

This cost can be worth it. But pretending it does not exist leads to over-engineered frontend systems where simple changes require edits across many "clean" layers.

Good architecture reduces change cost. Bad architecture moves cost into ceremony.

## Interfaces Are Valuable When Substitution Is Real

An interface is useful when multiple implementations are realistic.

For example:

```ts
type AuthTokenStorage = {
  get(): string | null;
  set(token: string): void;
  clear(): void;
};
```

This may be worth abstracting if the app needs to support memory storage, localStorage, secure native storage, and test fakes.

The interface describes a capability independent of the storage detail.

But if there is one API client and no realistic replacement, an interface may only create distance.

## Mocking Is Not Always a Good Reason

Testing is often used to justify interfaces.

Sometimes that is valid. But if the only reason an interface exists is "so tests can mock it", consider whether the test boundary is too low.

You may be able to test at a higher level:

1. Mock the network with a request handler.
2. Use a fake repository only at the feature boundary.
3. Test pure domain functions without mocking infrastructure.
4. Use the real implementation with controlled inputs.

Interfaces should reflect product architecture, not only testing convenience.

## Concrete Code Can Be Clearer

This is easier to understand:

```ts
const user = await usersApi.getCurrentUser();
```

Than this:

```ts
const user = await userGateway.resolveCurrentUserPort().execute();
```

Names matter. If the abstraction vocabulary is heavier than the problem, the code becomes harder to read.

Concrete code is not automatically bad. Tight coupling is bad when the coupled thing needs to change independently.

## The Adapter Pattern Is a Boundary Tool

Adapters are useful when external shapes do not match internal needs.

For example, an API may return:

```ts
type ApiUser = {
  user_id: string;
  full_name: string;
  permissions: string[];
};
```

The app may want:

```ts
type User = {
  id: string;
  name: string;
  permissions: Permission[];
};
```

An adapter makes sense:

```ts
function mapApiUser(user: ApiUser): User {
  return {
    id: user.user_id,
    name: user.full_name,
    permissions: user.permissions.map(parsePermission),
  };
}
```

This is not over-engineering. It prevents external naming and shape decisions from leaking through the app.

## Builder Pattern and Configuration Pressure

Builders can be useful when object creation has meaningful variation.

For frontend architecture, builders often appear around services, query clients, view models, or feature modules.

Use a builder when construction has several valid configurations:

```ts
const catalog = createCatalogFeature()
  .withCharactersService(service)
  .withAnalytics(analytics)
  .build();
```

But if construction is always the same, a builder is just a slower function call.

Do not add a builder because it looks professional. Add it when construction is becoming error-prone.

## Service Layer vs Store Layer

A common abstraction mistake is deleting the service layer and putting everything into the store.

This can work for small features. But as complexity grows, the store may absorb:

1. API calls.
2. Data mapping.
3. Permissions.
4. Business rules.
5. Optimistic updates.
6. UI state.
7. Error handling.

At that point, the store becomes the application.

A service layer is useful when it keeps infrastructure and use cases out of state containers. But if a service only forwards one method to one API call, it may be unnecessary.

Again: abstraction should pay rent.

## A Simple Decision Framework

Before adding an interface, ask:

1. Do we have multiple implementations now?
2. Is a second implementation likely soon?
3. Does the current dependency block reuse?
4. Does the abstraction hide an external boundary?
5. Is the abstraction name clearer than the concrete dependency?

If the answer is no to all five, skip it.

You can add the interface later when the second implementation appears. Future you is allowed to refactor.

## Conclusion

Abstract interfaces are powerful when they protect real boundaries. They are expensive when they exist only because architecture diagrams look cleaner with boxes between boxes.

Frontend code should be concrete by default and abstract where change pressure justifies it.

Use adapters at external boundaries. Use dependency inversion when substitution matters. Use builders when construction is genuinely variable. Keep simple code simple.

The best abstraction is the one that makes tomorrow's change smaller without making today's code harder to understand.
