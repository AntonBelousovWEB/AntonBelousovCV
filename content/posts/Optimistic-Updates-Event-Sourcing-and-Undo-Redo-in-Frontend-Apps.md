---
title: "Optimistic Updates, Event Sourcing, and Undo/Redo in Frontend Apps"
date: 2026-07-13
excerpt: "How to design optimistic updates, event sourcing, undo/redo, and perceived performance in complex frontend applications without lying to the user."
---

## Introduction

Fast interfaces are not only about network speed. They are about perceived performance: how quickly the user sees meaningful feedback after an action.

Optimistic updates are one of the strongest tools for that. The UI updates immediately, before the server confirms the mutation. Used well, the product feels responsive. Used badly, the UI lies and loses user trust.

Undo/redo and event sourcing live near the same idea: instead of thinking only in final states, think in actions and transitions.

That mindset is valuable for frontend architecture.

## What Is an Optimistic Update?

An optimistic update applies a user action locally before the backend confirms it.

For example:

1. User moves a card on a kanban board.
2. The card moves instantly in the UI.
3. The app sends the mutation to the server.
4. If the request succeeds, nothing visibly changes.
5. If the request fails, the app rolls back or shows recovery.

This is not just "update state early." It is a contract with the user.

The application is saying: I believe this action will succeed, and I know what to do if it does not.

## Optimism Needs a Rollback Plan

The easiest optimistic update is also the most dangerous:

```ts
moveCardLocally(cardId, columnId);
await api.moveCard(cardId, columnId);
```

What happens if the request fails? What if the server accepts the move but returns a corrected order? What if another user moved the same card? What if the user's session expired?

A serious optimistic update needs at least one recovery strategy:

1. Roll back to the previous state.
2. Refetch authoritative server state.
3. Keep the local state and mark it as unsynced.
4. Ask the user to retry.
5. Merge server corrections.

The right choice depends on product risk.

Moving a kanban card can often be rolled back. Sending money cannot be treated so casually.

## Event Thinking

Event sourcing means storing events as the source of truth rather than only storing the latest state.

Frontend applications rarely need full event sourcing in the backend sense. But event thinking is extremely useful.

Instead of only asking "what is the current board state?", ask "what user action happened?"

Examples:

1. `CardMoved`
2. `TaskCreated`
3. `ColumnRenamed`
4. `ProjectArchived`
5. `CommentDeleted`

Events are easier to undo, replay, log, and reason about than arbitrary state mutations.

## Undo/Redo as Commands

Undo/redo works best when user actions are represented as commands or events with enough information to reverse them.

For example:

```ts
type MoveCardEvent = {
  type: "card/moved";
  cardId: string;
  fromColumnId: string;
  toColumnId: string;
  previousIndex: number;
  nextIndex: number;
};
```

This event can be applied and reversed.

Undo is not magic. It is a second transition:

1. Apply event.
2. Push event to history.
3. Undo by applying inverse event.
4. Redo by applying original event again.

If state changes are anonymous setters, undo becomes much harder.

## Normalized Data Helps

Complex optimistic updates are easier when data is normalized.

Instead of deeply nested boards:

```ts
boards -> columns -> cards -> comments
```

Use maps and ordered IDs:

```ts
type BoardState = {
  cardsById: Record<string, Card>;
  columnsById: Record<string, Column>;
  cardIdsByColumnId: Record<string, string[]>;
};
```

Now moving a card updates a small, predictable part of state. Rollback is easier. Derived views can be recalculated. Tests become smaller.

Normalization is not always necessary for simple screens. It becomes valuable when relationships and mutations grow.

## Fail Fast Without Punishing the User

Optimistic UI should still fail fast at the boundary.

If a user is not allowed to perform an action, do not optimistically pretend it happened. If required data is missing, block the action before mutating local state. If the app is offline and the feature does not support offline queues, say so.

Fail fast means invalid actions should be stopped early and clearly.

It does not mean showing raw technical errors. Good recovery copy matters:

1. "We could not move this card. Try again."
2. "Your session expired. Sign in again to continue."
3. "This project was archived by another user."

The user needs a path forward.

## Perceived Performance Is Not Deception

Perceived performance is about matching feedback to user intent.

Good optimistic UI feels immediate but honest:

1. The action appears quickly.
2. Pending state is visible when needed.
3. Failure is recoverable.
4. Server corrections do not feel random.
5. Critical operations remain conservative.

Do not use optimism to hide slow or unreliable systems. Use it where the product semantics support it.

## Where Event Sourcing Is Overkill

Full event sourcing is not needed for every feature.

Skip it when:

1. Actions are simple and irreversible.
2. State is server-owned and cheaply refetched.
3. Undo is not a product requirement.
4. The team does not need replay, audit, or offline queues.

Use the smallest model that supports the workflow.

For many features, a simple history stack is enough:

```ts
type History<T> = {
  past: T[];
  present: T;
  future: T[];
};
```

That is not event sourcing, but it may solve undo/redo just fine.

## Conclusion

Optimistic updates, undo/redo, and event sourcing all push frontend architecture toward the same lesson: user actions deserve names.

When actions are explicit, the app can apply them, reverse them, replay them, track them, and recover from failure.

The senior decision is not to make every frontend feature event-sourced. It is to recognize when anonymous state mutation is no longer enough.

Fast UI is good. Honest fast UI is better.
