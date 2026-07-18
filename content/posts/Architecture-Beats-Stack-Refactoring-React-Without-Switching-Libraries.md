---
title: "Architecture Beats Stack: Refactoring React Without Switching Libraries"
date: 2026-07-10
excerpt: "Why frontend architecture matters more than library choice, and how to refactor React applications by moving business logic, not chasing a new stack."
---

## Introduction

There is a comforting myth in frontend development: if the stack were better, the architecture would be better.

It rarely works that way.

You can write clean code with plain React and custom hooks. You can write tangled code with Zustand, Effector, Reatom, MobX, signals, or a dependency injection container. Tools influence the shape of code, but they do not replace architectural judgment.

Architecture beats stack because the hard part is not installing the library. The hard part is deciding where business logic lives, how modules communicate, and what depends on what.

## The First Refactor Is Usually Not a Tool Change

When a React application feels messy, the first instinct is often to introduce a state manager or architecture methodology.

Sometimes that is necessary. Often, the first useful refactor is simpler:

1. Move data fetching out of presentational components.
2. Name business rules.
3. Extract transformations from JSX.
4. Separate infrastructure details from feature code.
5. Reduce props that represent accidental coupling.

None of this requires a new library.

A component that mixes rendering, fetching, permissions, formatting, and mutations will remain hard to understand even if the state moves into a different store.

## Business Logic Outside UI

The most important refactor is usually moving business logic outside the UI.

This does not mean components should be empty. It means product rules should not be anonymous conditions inside JSX.

Instead of this:

```tsx
{user.role === "admin" && project.status !== "archived" && (
  <ArchiveProjectButton />
)}
```

Prefer this:

```ts
function canArchiveProject(user: User, project: Project) {
  return user.role === "admin" && project.status !== "archived";
}
```

Now the rule has a name. It can be tested. It can be reused. It can be discussed with product people.

This is architecture in its smallest useful form.

## Custom Hooks Are Infrastructure, Not Magic

Custom hooks are a good way to hide framework mechanics. They can coordinate state, subscriptions, effects, queries, and events.

But hooks can also become junk drawers.

A hook named `useProjectPage` that loads data, transforms it, handles modals, checks permissions, emits analytics, and syncs URL params may simply move the unreadable component into another file.

Good hooks have a clear job:

1. `useCurrentUser`
2. `useProjectPermissions`
3. `useCreateProjectForm`
4. `useRouteQueryState`

When hooks describe capabilities, they improve architecture. When hooks hide everything, they only reduce line count.

## The Same Architecture Can Survive Different State Managers

A healthy frontend feature should not be completely rewritten because the team changes state managers.

The internal implementation may change, but the feature boundary should stay stable.

For example, if a catalog feature exposes a `CharactersCatalog` component and depends on a `CharactersService`, it should not matter much whether the feature internally uses React state, Zustand, signals, or Reatom.

That is what "architecture beats stack" means:

1. The domain concepts stay.
2. The service boundary stays.
3. The UI contract stays.
4. The state mechanism can change.

If switching libraries requires rewriting product logic, the product logic was probably living in the wrong place.

## Bad Code Is Useful

A deliberately bad version of an application is a great teaching tool because it makes the pain visible.

Without bad code, good code can look like unnecessary ceremony.

The useful exercise is to ask:

1. What requirement makes this code painful?
2. What exact coupling causes the pain?
3. Which refactor removes that coupling?
4. What did we add, and what did we delete?

Architecture should be a response to observed pain, not a performance of sophistication.

## Technology Can Help, But It Cannot Decide

Different tools encourage different architecture:

1. Zustand makes small stores easy.
2. Effector encourages explicit events and effects.
3. Reatom encourages atomized reactive models.
4. MobX makes observable models natural.
5. Signals encourage fine-grained dependency tracking.

These tools matter. They change ergonomics and failure modes.

But they do not answer product questions for you. They do not decide where a domain rule belongs. They do not prevent a shared component from becoming business-specific. They do not automatically make features reusable.

The library can support architecture. It cannot replace it.

## A Practical Refactoring Order

When facing a messy React feature, refactor in this order:

1. Identify the user capability.
2. Name the domain entities and rules.
3. Move infrastructure calls behind a small service boundary.
4. Extract render-only UI when it becomes useful.
5. Choose state tools based on the remaining coordination problem.

Notice that tool choice comes late. That is intentional.

If you choose the state manager first, you may optimize the wrong problem.

## Visualize Before You Rewrite

Frontend architecture is easier when you can visualize module relationships.

Draw the current flow:

1. Components.
2. Hooks.
3. Stores.
4. Services.
5. API clients.
6. External dependencies.

Then draw the flow you want.

The value is not the diagram itself. The value is forcing yourself to see dependency direction. Many architecture problems are obvious once the graph is visible.

## Conclusion

Architecture beats stack because libraries are implementation details around deeper responsibilities.

A cleaner React app usually starts by moving business logic out of UI, naming domain concepts, clarifying service boundaries, and making dependencies explicit.

After that, choose the tool that reduces the remaining complexity. Not before.

The best frontend stack is the one your architecture can survive replacing.