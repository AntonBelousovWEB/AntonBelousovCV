---
title: "Reusable React Components: Slots, Render Props, and Composition Over Flags"
date: 2026-07-12
excerpt: "How to design reusable React components with slots, render props, and composition instead of prop flags that turn components into product-specific switchboards."
---

## Introduction

Reusable React components usually fail for one reason: they try to predict the future with props.

At first, a component is simple. Then a new page needs one extra button. Another page needs a different header. A third page needs a custom empty state. Soon the component has `showHeader`, `showFooter`, `variant`, `mode`, `withActions`, `hideDetails`, `renderExtra`, and a few product-specific conditions hidden inside.

That is not reuse. That is a switchboard.

The better default is composition.

## The Flag Problem

Prop flags feel cheap because each flag is small.

```tsx
<Card showActions showBadge compact highlighted />
```

The cost appears in combinations. Four booleans already create sixteen possible states. Most are untested. Some are invalid. Future developers will not know which combinations are intentional.

Flags are fine for stable visual choices:

1. `disabled`
2. `loading`
3. `selected`
4. `required`

They are risky when they represent product-specific layout or behavior.

If a flag exists because one page needs a special case, composition is probably better.

## Slots

Slots let the caller provide parts of the component.

React does not have a special slot syntax, but `children` and named props work well:

```tsx
function Panel({
  title,
  actions,
  children,
}: {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <h2>{title}</h2>
        {actions}
      </header>
      <div>{children}</div>
    </section>
  );
}
```

Now the component owns layout, but the caller owns the variable content.

This is often enough. No framework-level abstraction needed.

## Render Props

Render props are useful when the reusable component owns behavior but the caller owns rendering.

Example:

```tsx
function AsyncState<T>({
  load,
  children,
}: {
  load(): Promise<T>;
  children(state: AsyncResult<T>): React.ReactNode;
}) {
  // loading/error/data mechanics live here
  return children(state);
}
```

The component controls the async lifecycle. The caller controls what each state looks like.

Render props are especially useful when:

1. Behavior is reusable.
2. UI must remain flexible.
3. A hook alone would expose too many details.

Do not use render props everywhere. Use them when they remove real duplication without freezing the UI.

## Headless Components

A headless component provides behavior without visual decisions.

For example, a modal manager may control registration, opening, closing, and stacking, while the actual modal UI comes from the design system.

Headless patterns work well for:

1. Dropdowns.
2. Modals.
3. Tabs.
4. Forms.
5. Command palettes.
6. Data tables.

The trade-off is that headless components require a stronger API. If the API is vague, every consumer becomes confusing.

## Compound Components

Compound components let related pieces communicate through context:

```tsx
<Tabs defaultValue="details">
  <Tabs.List>
    <Tabs.Trigger value="details">Details</Tabs.Trigger>
    <Tabs.Trigger value="history">History</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="details">...</Tabs.Content>
  <Tabs.Content value="history">...</Tabs.Content>
</Tabs>
```

This pattern is useful when the component represents a small UI system with internal relationships.

The parent owns shared state. Children register or consume context. The caller gets flexible composition without manually wiring every prop.

Use it when components are genuinely related. Do not turn every component family into a local framework.

## Business Logic Does Not Belong in Shared UI

Reusable UI should stay less specific than the features that use it.

A generic `DataTable` can know about columns, rows, sorting, selection, loading, and empty states. It should not know that premium users see a billing warning or archived projects cannot be selected.

Feature code should provide those meanings through props, render functions, or composed children.

When shared UI imports domain types or feature helpers, reuse becomes coupling.

## The CharactersCatalog Test

A good way to test reusability is to imagine extracting a component into a UI kit.

Ask:

1. Does it import app-specific stores?
2. Does it know API response shapes?
3. Does it know product permissions?
4. Does it require one exact state manager?
5. Can another product provide its own data and actions?

If not, the component is not reusable yet. That may be okay. Not everything should be reusable.

The mistake is pretending feature-specific code is shared.

## Composition and TypeScript

TypeScript helps when component contracts are explicit.

For example:

```ts
type CatalogProps<TItem> = {
  items: TItem[];
  getKey(item: TItem): string;
  renderItem(item: TItem): React.ReactNode;
  emptyState?: React.ReactNode;
};
```

This API says what the component owns:

1. Iteration.
2. Key extraction.
3. Empty state placement.

The caller owns item rendering.

Generics are useful here because they preserve item type without coupling the component to one domain.

## When a Flag Is Fine

Composition is not a religion.

Use a flag when the choice is:

1. Stable.
2. Small.
3. Visual or accessibility-related.
4. Not product-specific.
5. Unlikely to create invalid combinations.

For example, `disabled`, `loading`, `orientation`, and `size` are often fine. A flag like `isBillingEnterpriseException` is not.

## Conclusion

Reusable React components should not predict every product variation with flags. They should create stable structure and leave variable parts to the caller.

Slots, render props, headless components, and compound components are all versions of the same idea: own the reusable mechanics, delegate the unstable details.

That keeps shared UI generic, feature code expressive, and future requirements from turning one component into a wall of booleans.
