---
title: "The Mental Model Behind Reactivity: Observers, Signals, and Frontend State"
date: 2025-05-08
excerpt: "A senior frontend perspective on reactivity, observer patterns, signals, and why state management becomes easier when you understand the dependency graph underneath."
---

## Introduction

Reactivity is one of those frontend development topics that feels obvious until you try to implement it yourself. A value changes, the UI updates, everyone is happy. But the interesting part is not the update. The interesting part is how the system knows what should update, when it should update, and how much work it can avoid.

That is why learning observers, signals, and dependency tracking is still useful even if you spend most of your day inside React. Frameworks hide the machinery, but senior frontend work often starts exactly where the abstraction stops being enough.

If you understand the mental model behind reactivity, debugging state becomes less mystical. You stop asking "why did this render?" and start asking "which dependency did I subscribe to?"

## Reactivity Is a Graph, Not a Trick

Most reactive systems are built around the same simple idea: some values depend on other values. When a source value changes, every dependent computation becomes stale and may need to run again.

That means the real structure is a graph:

1. A source holds data.
2. A computation reads that data.
3. The system records that read as a dependency.
4. Later, when the source changes, subscribed computations are notified.

The observer pattern is the classic version of this idea. One object owns a list of listeners. When something changes, it calls them. Signals make the same idea more ergonomic by turning values into trackable primitives.

The hard part is not notifying listeners. The hard part is doing it predictably without creating accidental subscriptions, memory leaks, circular updates, or unnecessary recomputation.

## Why React Developers Should Care

React does not expose signals as its default primitive, but React developers still live inside reactive systems. Props change. State changes. Context changes. Hooks recalculate. Effects rerun. Memoized values may or may not help.

The difference is that React usually works at the component level. A state update schedules rendering for a component tree, and React reconciles the result. Signal-based systems often work at a more granular level: a specific value changes, and only the exact computation that read it needs to rerun.

Neither model is universally better. Component-level rendering is flexible and simple to reason about. Fine-grained reactivity can be extremely efficient, but it requires stricter dependency tracking.

The senior habit is to understand the trade-off instead of turning it into a framework identity debate.

## A Small Observer Is Enough to Learn the Idea

You can understand a lot of state management libraries with a tiny observer implementation:

```ts
type Listener = () => void;

function createStore<T>(initialValue: T) {
  let value = initialValue;
  const listeners = new Set<Listener>();

  return {
    get() {
      return value;
    },
    set(nextValue: T) {
      if (Object.is(value, nextValue)) return;
      value = nextValue;
      listeners.forEach((listener) => listener());
    },
    subscribe(listener: Listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
```

This is not a production state manager, but it contains the seed of many production systems. There is a value, a way to change it, and a list of subscribers.

From there, every interesting question becomes architectural:

1. Should subscribers receive the whole value or a selected slice?
2. Should updates be synchronous or scheduled?
3. Should derived values be cached?
4. How do we avoid notifying subscribers that do not care?
5. How do we clean up subscriptions when UI disappears?

These questions matter more than the syntax of any particular library.

## Signals Add Dependency Tracking

Signals usually go one step further than a manual observer. Instead of explicitly subscribing to every value, a computation can run while the system tracks which signals were read.

The flow looks like this:

1. Start a computation.
2. Read signal A and signal B.
3. Store the fact that this computation depends on A and B.
4. When A changes, mark the computation stale.
5. Recompute only what depends on A.

This model feels magical because the subscription is implicit. But senior engineers should treat implicit behavior with respect. It is powerful when the boundaries are clear and dangerous when reads happen in surprising places.

For example, reading a signal during rendering is usually fine. Reading it inside a utility that sometimes runs during rendering and sometimes runs inside an event handler can create confusing behavior if the framework tracks reads differently in each context.

## The Most Common Mistake

The common mistake is treating reactivity as a replacement for architecture. It is not. Reactivity tells the system what changed. It does not decide whether your domain model is clear, whether your boundaries are stable, or whether your components are overloaded.

You can build a messy application with signals. You can build a clean application with basic React state. The primitive matters, but the design around the primitive matters more.

A healthy frontend architecture separates three concerns:

1. The domain state: what the product knows.
2. The derivations: what can be calculated from that state.
3. The presentation: how the user sees and changes it.

Reactivity helps connect those layers. It should not erase them.

## Practical Advice for Frontend Teams

When your app grows, use reactive primitives deliberately:

1. Keep source state small and explicit.
2. Prefer derived state over duplicated state.
3. Make subscriptions easy to clean up.
4. Avoid global mutable state as the default answer.
5. Measure rendering behavior before rewriting architecture.

The best frontend state management is often boring. Values have owners. Derivations have names. Updates have clear causes. Components read what they need and no more.

## Conclusion

Observers and signals are not just academic patterns. They are the foundation under a large part of modern frontend development. Understanding them makes you better at React, better at debugging state, and less dependent on library folklore.

A senior developer does not need to write a signal library for every project. But they should be able to explain how one works, where it helps, and where it can make a codebase harder to reason about.

That understanding is what turns reactivity from magic into engineering.
