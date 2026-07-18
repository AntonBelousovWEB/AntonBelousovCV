---
title: "State Management Is Business Logic Placement, Not a Library Choice"
date: 2026-07-11
excerpt: "A senior frontend guide to state management as a question of business logic placement, state ownership, derived data, and library trade-offs."
---

## Introduction

State management discussions often start with the wrong question: Which library should we use?

The better question is: Where should business logic live?

A state manager is not just a place to store values. It shapes how the application represents user intent, server data, derived state, errors, loading states, optimistic updates, permissions, and cross-feature communication.

Choosing a library before understanding those responsibilities is how teams end up with beautiful stores that still contain messy architecture.

## First: What Kind of State Is It?

Not all state is the same.

A frontend application usually contains several categories:

1. Server state: data owned by the backend.
2. UI state: local visual state like open tabs and panels.
3. Form state: temporary, often invalid user input.
4. Domain state: client-owned business concepts.
5. Session state: current user, auth, roles, permissions.
6. Navigation state: URL params, route state, browser history.
7. Derived state: values calculated from other state.

Putting all of these into one global store is convenient at first and expensive later.

Each type has different ownership and lifecycle.

## Server State Is Not Client State

Server state should usually be handled by a query/cache layer, not a hand-rolled global store.

Server state needs:

1. Fetching.
2. Caching.
3. Invalidation.
4. Refetching.
5. Stale data policies.
6. Error and retry behavior.
7. Synchronization after mutation.

Tools like TanStack Query exist because this problem is bigger than `useState`.

You can store API responses in Zustand or MobX, but then you must rebuild cache policy yourself. Sometimes that is justified. Often it is not.

Lazy architecture uses the tool that already matches the lifecycle.

## UI State Should Stay Local Until It Cannot

Local UI state is cheap and readable.

If a dropdown is open, keep that state near the dropdown. If a modal belongs to one feature, keep it near the feature. If a form field is only relevant before submit, keep it inside the form.

Promoting local state to global state should require a reason:

1. Multiple distant components need it.
2. It must survive navigation.
3. It must coordinate with another domain concept.
4. It must be inspected or controlled by infrastructure.

Otherwise, global state becomes a junk drawer.

## Business Logic Needs a Home

State managers become dangerous when they are treated as storage only.

Consider this mutation:

```ts
set({ selectedProjectId: id });
```

That may be fine. But what if selecting a project also clears a task draft, closes a modal, updates permissions, and syncs the URL?

Now selection is not just a value update. It is a business action.

Name it:

```ts
selectProject(id: ProjectId) {
  // coordinate the actual product behavior here
}
```

A good state model exposes user intent, not random setters.

## Derived State Should Be Derived

Duplicated state is one of the easiest ways to create bugs.

If `visibleTasks` can be calculated from `tasks`, `filters`, and `search`, it should usually be derived rather than stored separately.

Derived state has two benefits:

1. It reduces synchronization bugs.
2. It documents the relationship between values.

The exception is performance. If derivation is expensive, cache it with selectors, memoization, computed values, or the state manager's native mechanism.

But do not duplicate first and justify later.

## Events, Actions, Atoms, Stores, Observables

Different libraries make different concepts cheap:

1. Zustand makes small stores and selectors easy.
2. Effector makes events, effects, and explicit data flow central.
3. Reatom encourages atomized state and derived relations.
4. MobX makes observable models and computed values ergonomic.
5. Signals make fine-grained dependencies direct.

The library's philosophy matters because it changes how the team thinks.

If the app has many independent reactive pieces, atomized systems may feel natural. If the app is model-heavy and benefits from object-like ViewModels, MobX may fit. If the app is small, React state plus a query library may be enough.

The mature answer is not "my favorite tool." It is "this tool matches the shape of our state."

## Store vs Service

A recurring frontend architecture question: should business operations live in the store or in a service?

The answer depends on what the operation is.

A store is good at holding state, exposing derived values, and coordinating state transitions.

A service is good at talking to infrastructure, implementing use cases, and hiding low-level details.

If a store directly owns HTTP, transformation, permissions, optimistic updates, analytics, and UI state, it may become too powerful. If every state update goes through services, simple UI interactions become bureaucratic.

Use the smaller boundary that keeps the code understandable.

## Cross-Domain Communication

State management becomes hardest when domains need to talk.

For example, archiving a project may affect:

1. Project list.
2. Task board.
3. Notifications.
4. Permissions.
5. URL state.

Direct imports between every domain create coupling. A facade or application service can coordinate the use case without making domains know too much about each other.

This is where architecture matters more than library choice. The wrong dependency direction will hurt in any state manager.

## Conclusion

State management is business logic placement.

Before choosing a library, identify the kinds of state in the application, who owns them, how long they live, and which user actions change them.

Then pick the smallest tool that matches the problem. Local state for local UI. Query cache for server data. Stores or models for client-owned domain state. Services or facades for cross-domain coordination.

The best state management decision is not the most fashionable one. It is the one that makes product behavior explicit and future change boring.
