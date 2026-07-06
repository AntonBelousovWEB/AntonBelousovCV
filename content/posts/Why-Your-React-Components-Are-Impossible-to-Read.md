---
title: "Why Your React Components Are Impossible to Read"
date: 2026-06-08
excerpt: "React components become unreadable when they mix responsibilities, hide business rules in JSX, overuse hooks, and fail to separate data, behavior, and presentation."
---

## Introduction

React components usually become impossible to read gradually. No one sits down and decides to create a 400-line component with five effects, three loading branches, inline transformations, permission checks, analytics calls, and a form hidden in the middle.

It happens one reasonable change at a time.

A condition is added. A request is added. A modal is added. A special case is added for one customer. Then another developer reuses the component because it already has the data. Eventually, reading the component feels like debugging a meeting transcript.

The problem is not React. The problem is mixed responsibility.

## JSX Is a Terrible Place to Hide Business Rules

JSX is great for describing UI structure. It is not great for hiding complex decisions.

This kind of code is common:

```tsx
{user.role === "admin" &&
  account.status !== "suspended" &&
  !invoice.paid &&
  featureFlags.newBilling && (
    <PayInvoiceButton invoiceId={invoice.id} />
  )}
```

The issue is not the condition length. The issue is that an important product rule has no name.

Give it one:

```ts
const canPayInvoice =
  user.role === "admin" &&
  account.status !== "suspended" &&
  !invoice.paid &&
  featureFlags.newBilling;
```

Better yet, move it into a domain function if it appears in more than one place:

```ts
function canPayInvoice(user: User, account: Account, invoice: Invoice) {
  return user.role === "admin" && account.status !== "suspended" && !invoice.paid;
}
```

Readable components are full of named concepts.

## Effects Often Carry Too Much Meaning

`useEffect` is one of the easiest places to lose readability. It can synchronize, fetch, subscribe, imperatively update, patch state, emit analytics, or clean up resources.

When a component has multiple effects, ask what each effect means in product language. If the answer is vague, the code will be vague too.

Bad effect names live only in comments:

```ts
// sync data
useEffect(() => {
  // many lines
}, [id, user, filters]);
```

Better design separates the concern:

1. A data-fetching hook fetches data.
2. An analytics helper records events.
3. A subscription hook manages subscription lifecycle.
4. The component composes the results.

Effects should not become a second hidden component lifecycle language.

## Too Many Hooks Can Be a Smell

Custom hooks are useful, but a component that calls ten hooks is not automatically clean. Sometimes it is just outsourcing complexity to names that do not explain enough.

The question is whether the hooks form a coherent story:

```tsx
const project = useProject(projectId);
const permissions = useProjectPermissions(projectId);
const form = useProjectSettingsForm(project.data);
```

This is readable because each hook has a clear role.

But a sequence of vague hooks makes the component harder to understand:

```tsx
useSetup();
useSync();
useFeatureStuff();
useHandlers();
```

Names should reduce mystery, not relocate it.

## Separate Data, Behavior, and Presentation

A readable React component usually has visible layers:

1. Get the data.
2. Derive the values needed for rendering.
3. Define event handlers.
4. Return the UI.

This does not require a rigid template, but the flow should be easy to follow.

If data fetching is interleaved with rendering branches, derived values are calculated inline, handlers mutate unrelated state, and JSX contains business conditions, the reader has to hold the whole component in memory.

That is what makes code feel hard: not line count, but cognitive load.

## Inline Transformations Age Badly

Inline transformations are fine when they are tiny:

```tsx
items.map((item) => <Item key={item.id} item={item} />)
```

They become painful when they contain product logic:

```tsx
orders
  .filter((order) => order.status !== "draft" || user.role === "admin")
  .sort((a, b) => Number(b.priority) - Number(a.priority))
  .map((order) => ({
    ...order,
    label: order.customer?.name || "Unknown customer",
  }))
```

If the transformation has business meaning, name it. The render function should not be the only documentation.

## Readability Is a Product Feature

Readable components are not just nicer for developers. They reduce product risk.

When code is readable:

1. Bugs are easier to localize.
2. Requirements are easier to map to implementation.
3. Reviews become more meaningful.
4. New developers can contribute sooner.
5. Refactors feel less dangerous.

Unreadable components slow down every future change. The user eventually pays for that slowdown.

## Conclusion

React components become unreadable when they are asked to own too much. The fix is not a new folder structure by itself. The fix is naming concepts, separating responsibilities, and keeping JSX focused on presentation.

Move business rules out of anonymous conditions. Give effects clear purposes. Use hooks as meaningful boundaries. Keep transformations named when they carry product meaning.

Readable React is not about making every component tiny. It is about making every component honest.
