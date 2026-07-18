---
title: "Frontend Infrastructure: Modal Managers, Feature Flags, Themes, and Provider Composition"
date: 2026-07-14
excerpt: "A practical guide to frontend infrastructure code: modal managers, feature flags, themes, provider composition, and keeping cross-cutting concerns boring."
---

## Introduction

Frontend infrastructure is the code users rarely notice until it fails.

Modal managers, feature flags, themes, provider trees, environment configuration, routing helpers, HTTP clients, and error boundaries are not product features by themselves. But they shape how product features are built.

The danger is that infrastructure code tends to grow quietly. A small helper becomes a global framework. A modal utility becomes coupled to business flows. A provider tree becomes impossible to read. A feature flag system becomes an unowned pile of conditions.

Good frontend infrastructure should be boring, explicit, and hard to misuse.

## Modal Managers

Modals look like UI, but modal orchestration is infrastructure.

The UI part is simple: render a dialog. The hard part is lifecycle:

1. Open from distant parts of the app.
2. Pass input data.
3. Resolve a result.
4. Close on success or cancel.
5. Handle stacking.
6. Preserve accessibility.
7. Avoid coupling a feature to one component lifetime.

A modal manager can help when modals become workflows rather than local UI.

But do not start with a global modal manager for one settings dialog. Local state is cheaper.

Use a manager when opening and resolving modals crosses feature boundaries or repeats across the app.

## The React Lifecycle Trap

A common modal problem is tying business logic to the lifecycle of a specific React component.

For example, a form component may open itself, submit itself, close itself, invalidate queries, and update parent state. Reusing that form elsewhere becomes hard because the form owns the whole workflow.

A better split:

1. The form owns input and validation.
2. The modal shell owns dialog behavior.
3. The feature owns submission behavior.
4. The modal manager owns opening and closing.

This makes each part easier to reuse.

## Feature Flags

Feature flags are deceptively simple:

```ts
if (flags.newDashboard) {
  return <NewDashboard />;
}
```

The problem is not the condition. The problem is lifecycle and ownership.

Every flag should have:

1. A name.
2. An owner.
3. A purpose.
4. A removal plan.
5. A default behavior.
6. A defined source: build env, remote config, user segment, experiment, or permission.

Without this, flags become permanent branches. Permanent branches double the code paths the team must understand.

## Environment Variables Are Not Feature Flags

Build-time environment variables are useful for configuration:

1. API base URLs.
2. App mode.
3. Public keys.
4. Static deployment settings.

They are weaker for runtime product decisions. If changing the value requires rebuilding the app, it is not a flexible feature flag.

Use build-time env for things that truly belong to the build. Use runtime config or a flag service for product rollout.

## Themes

Themes are another infrastructure area that grows from simple to complex quickly.

At first, dark mode is enough. Then product wants custom themes, branded clients, user preferences, high-contrast modes, and maybe theme-aware illustrations.

Good theme architecture separates:

1. Design tokens.
2. Theme selection.
3. Persistence.
4. Runtime application.
5. Component styling.

CSS variables are often the simplest useful foundation:

```css
:root {
  --color-bg: white;
  --color-text: black;
}

[data-theme="dark"] {
  --color-bg: #111;
  --color-text: #f5f5f5;
}
```

This keeps most theme changes in CSS, where they belong.

## Provider Composition

React apps often grow a provider tower:

```tsx
<AuthProvider>
  <ThemeProvider>
    <QueryClientProvider>
      <FeatureFlagsProvider>
        <RouterProvider>
          <App />
        </RouterProvider>
      </FeatureFlagsProvider>
    </QueryClientProvider>
  </ThemeProvider>
</AuthProvider>
```

This is not automatically bad. Providers are how React scopes dependencies.

But provider towers become hard to maintain when order matters and no one knows why.

A small `Compose` helper can flatten the visual shape:

```tsx
function Compose({
  providers,
  children,
}: {
  providers: React.ComponentType<{ children: React.ReactNode }>[];
  children: React.ReactNode;
}) {
  return providers.reduceRight(
    (tree, Provider) => <Provider>{tree}</Provider>,
    children
  );
}
```

Use this only if the provider list is truly noisy. If the app has three providers, a helper is not buying much.

## Cross-Cutting Does Not Mean Global

Infrastructure concerns often cross many features, but that does not mean every concern must be global.

Some dependencies are app-wide:

1. Theme.
2. Auth session.
3. Query client.

Some are route-scoped:

1. Page-level data loaders.
2. Feature-specific services.
3. Modal managers for a workflow.

Some are local:

1. A dropdown state.
2. A small form modal.
3. A one-off loading state.

Scope is architecture. Global should be a deliberate choice.

## Keep Public APIs Small

Infrastructure becomes painful when it exposes too much.

A feature flag system should not expose its whole provider internals. A modal manager should not require every caller to know how dialogs are registered. A theme system should not leak implementation details into every component.

Good infrastructure has a small public API:

```ts
const enabled = useFeatureFlag("new-dashboard");
const theme = useTheme();
const modal = useModal();
```

Small APIs are easier to replace.

## Frontend Feature Flags in React

Frontend feature flags are useful, but they are easy to misuse.

A good React feature flag setup answers four questions:

1. Who owns the flag?
2. Is the flag evaluated on the client, server, or both?
3. What is the kill switch path if production breaks?
4. When will the flag be removed?

Client-side flags are good for UI exposure, gradual rollout, and experiments. They are not security boundaries. If a capability must be protected, the backend still needs to enforce it.

The healthiest feature flags are temporary. Every long-lived flag becomes another branch the team has to reason about, test, and eventually debug.

## Conclusion

Frontend infrastructure should make product code simpler, not turn the app into a private framework.

Use modal managers when modal workflows cross boundaries. Use feature flags with ownership and removal plans. Use CSS variables for themes before reaching for heavier machinery. Compose providers only when the provider tree becomes real noise.

The best infrastructure is boring enough that the feature code remains the interesting part.
