---
title: "Frontend Architecture Fundamentals: SOLID Without Dogma"
date: 2026-07-07
updated: 2026-08-13
excerpt: "A practical frontend architecture article on using SOLID principles in React without turning them into rigid rules or over-engineered ceremony."
image: "/img/blog/frontend-architecture-fundamentals-solid-without-dogma.webp"
---

## Introduction

SOLID principles are useful in frontend architecture, but only if we stop treating them like religious law. They are not a checklist that magically makes React code good. They are thinking tools.

The real value of SOLID is that it gives names to problems we already feel in growing applications: components that know too much, flags that multiply forever, props that lie about what a component really needs, and features that cannot be reused because they are glued to one data source.

In frontend work, the goal is not to "apply SOLID." The goal is to keep change cheap.

## Frontend Architecture in One Paragraph

Frontend architecture is the set of boundaries that keeps product change cheap: where rendering lives, where data is loaded, where state is owned, where product rules are named, and which modules are allowed to know about infrastructure. In React, good architecture is usually less about folder names and more about making dependency direction, responsibility, and replacement cost visible.

## Which Pattern Should I Choose?

| Pressure | Useful pattern | Why |
| --- | --- | --- |
| Component mixes fetching and rendering | Container / Presentational split | Separates data ownership from UI representation |
| Screen orchestration dominates JSX | ViewModel | Gives presentation logic a home |
| Feature imports API/storage directly | Dependency inversion | Protects feature code from infrastructure changes |
| Many feature-specific flags in one component | Composition | Extends behavior without switchboard props |
| Shared subsystem has messy internals | Facade | Gives consumers a small stable API |

## Why Frontend Developers Need Fundamentals

A lot of frontend architecture discussions start too late. People argue about Feature-Sliced Design, Clean Architecture, MVVM, signals, Zustand, MobX, or folder names before they can explain what responsibility a module actually has.

That is backwards.

Frameworks change. State libraries change. Build tools change. But the same structural problems return:

1. UI code mixes rendering with data loading.
2. Reusable components become product-specific.
3. Domain rules are duplicated across pages.
4. A small requirement forces edits in many unrelated files.
5. The team cannot replace one dependency without rewriting a feature.

SOLID helps because it pushes you to ask boring, useful questions. What is this module responsible for? What should be open for extension? What contract does this component expose? What dependency direction are we accepting?

Those questions age better than any framework debate.

## Single Responsibility Is About Reasons to Change

The Single Responsibility Principle is often explained badly. It does not mean "one component should do one tiny thing." If taken literally, that advice creates hundreds of small files with no real improvement.

SRP means a unit should have one main reason to change.

Consider a `UserProfile` component that fetches user data, stores loading state, handles errors, and renders the profile. It works, but it has at least two responsibilities:

1. It knows how to obtain user data.
2. It knows how to display user data.

That coupling becomes painful when the data source changes. What if one page reads from an API, another from cache, and a third from preloaded server data? The UI should not care.

A cleaner split is not about fashion. It is about substitution:

```tsx
function UserProfile({ user }: { user: User }) {
  return (
    <section>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </section>
  );
}
```

Now data loading can live in a hook, route loader, query layer, server component, or parent feature. The profile component has one job: represent a user.

That is SRP in React: make the reason to change visible.

## Open-Closed Principle Is Mostly Composition

The Open-Closed Principle says code should be open for extension and closed for modification. In frontend projects, this often means composition beats prop flags.

Imagine a `Key` component with two buttons: use and remove. Then a new requirement arrives: sometimes show only remove, sometimes only use, sometimes add details, sometimes add a custom action.

The common reaction is flags:

```tsx
<Key showUse showRemove showDetails />
```

This looks harmless until every new product case adds another flag. The component becomes a switchboard of possible layouts.

A more flexible approach is to let the caller provide the variable part:

```tsx
function Key({ value, actions }: { value: string; actions: React.ReactNode }) {
  return (
    <div className="key">
      <div>{value}</div>
      <div>{actions}</div>
    </div>
  );
}
```

Now the component is closed to internal modification for every new action combination. It is open through composition.

This is the frontend version of OCP: do not edit a stable component every time a feature wants different behavior.

## Liskov Is Less Visible, But Still Matters

The Liskov Substitution Principle is less central in everyday React code than SRP, OCP, or DIP. Still, the idea matters: if something claims to be a replacement for another thing, it should not break the expectations of the caller.

In React, this often appears around component contracts.

If a custom `Button` accepts normal button props, it should behave like a button. It should forward `disabled`, `type`, `onClick`, accessibility attributes, and refs when that is part of the contract.

When a design-system component looks like a button but silently ignores native behavior, consumers cannot substitute it safely. That is a Liskov problem with a UI face.

The senior move is simple: make component contracts honest.

## Interface Segregation Means Props Should Tell the Truth

The Interface Segregation Principle says clients should not depend on things they do not use.

In React, this shows up in props.

This component is easy to write:

```tsx
function Book({ book }: { book: Book }) {
  return (
    <article>
      <img src={book.image} alt="" />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </article>
  );
}
```

But it hides the real contract. Does `Book` need the whole book object? Or only `image`, `title`, and `author`?

If the component only needs three fields, pass three fields:

```tsx
function BookCard({
  image,
  title,
  author,
}: {
  image: string;
  title: string;
  author: string;
}) {
  return (
    <article>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{author}</p>
    </article>
  );
}
```

This makes the component easier to reuse and easier to understand. The prop list documents the dependency.

## Dependency Inversion Is the Big One

Dependency Inversion is the most important SOLID principle for frontend architecture.

The core idea is simple: high-level policy should not depend directly on low-level details.

A feature should not care whether data comes from REST, GraphQL, localStorage, IndexedDB, Firebase, Supabase, Zustand, MobX, or a mock. It should depend on a capability.

For example, a profile feature needs something that can load a user:

```ts
type UserRepository = {
  getCurrentUser(): Promise<User>;
};
```

The feature can depend on `UserRepository`. The application can decide which implementation to provide.

This is not abstraction for its own sake. It earns its place when substitution is real: tests, multiple products, different state managers, offline mode, or migration away from an API.

If there is only one implementation and no pressure to swap it, keep it simpler. YAGNI still applies.

## SOLID Should Reduce Code Pressure

Bad SOLID creates ceremony. Good SOLID removes pressure.

Use the principles when they solve a real problem:

1. SRP when a module has multiple reasons to change.
2. OCP when a stable component keeps receiving feature-specific flags.
3. LSP when replacement components break expected behavior.
4. ISP when components receive objects much larger than they need.
5. DIP when a feature is glued to infrastructure that should be replaceable.

You do not need an interface for every function. You do not need a folder for every principle. You need names for boundaries that are already hurting.

## Frontend Architecture Patterns in React

React architecture patterns are not a checklist of names. They are decisions about where change is allowed to happen.

The useful questions are:

1. Where does rendering stop and orchestration begin?
2. Where do product rules live?
3. Where are API and storage details hidden?
4. Which modules are allowed to import each other?
5. What can be replaced without rewriting the feature?

Patterns like Container/Presentational, ViewModel, Facade, Repository, Composition Root, and Feature-Sliced Design are only useful when they answer those questions.

The senior move is not to use every pattern. It is to pick the smallest boundary that prevents the next predictable change from damaging the whole feature.

For more senior-level frontend architecture material, see the [Senior Frontend Developer topic hub](/blog/topics/senior-frontend-developer) and the [React Architecture topic hub](/blog/topics/react-architecture).

## Production Checklist

Before introducing an architecture pattern, ask:

1. What change pressure are we solving?
2. What dependency direction are we accepting?
3. Can a smaller component/hook/function solve it?
4. Does the pattern reduce edits across unrelated files?
5. Will a new teammate understand the boundary quickly?
6. Is the pattern enforced by code, naming, imports, or only hope?

## Conclusion

SOLID in frontend architecture is not about importing backend ceremony into React. It is about learning to see responsibility, substitution, extension, and dependency direction.

The best frontend architecture is usually boring. Components render. Hooks coordinate. Services talk to infrastructure. Domain functions hold product rules. Boundaries exist where change pressure exists.

That is SOLID without dogma: not more code, just code with fewer accidental reasons to break.
