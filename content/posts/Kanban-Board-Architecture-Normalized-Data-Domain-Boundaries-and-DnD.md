---
title: "Kanban Board Architecture: Normalized Data, Domain Boundaries, and Drag-and-Drop"
date: 2026-07-15
excerpt: "How to design a kanban board frontend with normalized data, drag-and-drop, modal workflows, domain boundaries, and state that can survive growing complexity."
---

## Introduction

A kanban board looks like a UI problem until you start building it.

Then it becomes a state modeling problem, a drag-and-drop problem, a modal workflow problem, a routing problem, a persistence problem, and eventually an architecture problem.

That is why kanban boards are useful practice for frontend developers. They expose the difference between rendering lists and designing a feature.

## Start With Domain Boundaries

Before choosing a drag-and-drop library, define the domain concepts:

1. Board.
2. Column.
3. Card.
4. Task.
5. Project.
6. Assignee.
7. Position.

Some of these are domain entities. Some are feature-specific concepts. The distinction matters.

A `Project` may exist across the whole app. A `DraggedCardPreview` belongs only to the board feature. If both live in the same global model layer, the architecture becomes muddy.

A useful rule: domain concepts should outlive one UI. Feature concepts can belong to the feature.

## Normalize Early When Relationships Matter

Nested data is easy to render:

```ts
type Board = {
  columns: {
    id: string;
    cards: Card[];
  }[];
};
```

But nested data becomes awkward when the app needs to move cards, update one card, sync server changes, or implement undo.

Normalized state is often better:

```ts
type BoardState = {
  columnIds: string[];
  columnsById: Record<string, Column>;
  cardsById: Record<string, Card>;
  cardIdsByColumnId: Record<string, string[]>;
};
```

This shape makes operations explicit:

1. Moving a card changes ordered IDs.
2. Editing a card changes `cardsById`.
3. Deleting a column removes one column and its card mapping.

Rendering can still derive nested views from normalized state.

## Drag-and-Drop Is Infrastructure

Drag-and-drop libraries solve pointer mechanics, keyboard behavior, collision detection, sensors, and accessibility details.

Use a library. This is not a place to prove bravery.

But do not let the drag-and-drop library own your domain model.

The library should produce an interaction result:

```ts
type DragResult = {
  cardId: string;
  fromColumnId: string;
  toColumnId: string;
  fromIndex: number;
  toIndex: number;
};
```

Your domain logic should decide what that result means.

This boundary keeps the feature portable. If you replace `dnd-kit` with another library, the board rules should survive.

## Single Source of Truth

A board has many derived views:

1. Cards grouped by column.
2. Visible cards after filtering.
3. Counts per column.
4. Drag preview state.
5. Empty column states.

Do not store all of them as independent state unless performance forces you to.

Keep one source of truth and derive the rest.

If `cardsByColumn` and `cardsById` can disagree, they eventually will. If derived state is expensive, memoize it. Do not duplicate it blindly.

## Modal Workflows

Kanban boards often need modals:

1. Create project.
2. Create column.
3. Edit card.
4. Assign user.
5. Confirm delete.

The architecture problem is where the workflow lives.

A card edit form should not need to know how the board refreshes, how the modal stack works, and how routing is synchronized. It should own form behavior. The feature should own the use case.

For example:

```ts
async function editCard(input: EditCardInput) {
  const card = await cardsService.updateCard(input);
  boardState.applyCardUpdate(card);
}
```

The modal can call the use case and close on success.

## Routing and React State

Complex boards often synchronize UI state with the URL:

1. Selected project.
2. Open card.
3. Filters.
4. Search query.
5. Active view.

This creates a boundary between React state and router state. The router is not "inside React" in the same way component state is. Treat it as an external source.

Decide what belongs in the URL:

1. State that should be shareable.
2. State that should survive reload.
3. State that defines page identity.

Keep purely local interaction state out of the URL.

## CRUD Grows Complexity Fast

The first board version may only move cards. Then CRUD arrives:

1. Create.
2. Rename.
3. Delete.
4. Reorder.
5. Filter.
6. Assign.
7. Archive.

Each operation needs state transitions, optimistic behavior, error handling, and permission rules.

This is where feature architecture matters. If every operation is implemented inline in components, the board becomes difficult to change.

Name use cases. Keep mutations explicit. Keep UI focused on intent.

## Undo/Redo Changes the Model

If undo/redo is a requirement, design for it early.

You need enough information to reverse operations:

```ts
type BoardCommand =
  | { type: "card/move"; cardId: string; from: Position; to: Position }
  | { type: "card/create"; card: Card; columnId: string; index: number }
  | { type: "card/delete"; card: Card; columnId: string; index: number };
```

Anonymous setters are hard to undo. Named commands are much easier.

This does not mean full event sourcing is always needed. It means user actions should be represented clearly enough to reverse when the product asks for it.

## Conclusion

A kanban board is a compact frontend architecture test.

It forces you to model domain boundaries, normalize data, isolate drag-and-drop infrastructure, coordinate modals, sync URL state, handle CRUD, and think about optimistic updates or undo.

The senior approach is not to build a private framework. It is to keep each responsibility named and replaceable.

Render the board with React. Let the board model own board rules. Let DnD handle interaction mechanics. Let services handle persistence. Let the URL represent shareable state.

That separation is what keeps a board feature from collapsing under its own usefulness.
