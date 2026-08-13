---
title: "Model-View Patterns for React Developers: MVC, MVP, MVVM, and ViewModel"
date: 2026-07-08
updated: 2026-08-13
excerpt: "A senior-friendly explanation of MVC, MVP, MVVM, and ViewModel thinking for React developers who want clearer frontend architecture."
image: "/img/blog/model-view-patterns-for-react-developers.webp"
---

## Introduction

React developers often learn architecture through folders: `components`, `features`, `entities`, `shared`, `hooks`, `services`. That can help, but folders are not the foundation. Roles are.

Model-View patterns are useful because they teach you to see roles before tools. Once you understand the difference between model, view, presenter, and view model, React stops being the whole architecture. It becomes one way to implement a view.

That shift matters. It is the difference between "where should I put this file?" and "what responsibility does this code have?"

## Why MV Patterns Still Matter

MVC, MVP, and MVVM come from older UI architecture traditions, but the problems they solve are still alive in frontend applications:

1. UI code becomes mixed with business rules.
2. State shape becomes optimized for rendering instead of domain clarity.
3. API details leak into components.
4. Components become hard to test without rendering the whole app.
5. Changing the UI breaks logic that should have been independent.

The names may feel old, but the pressure is modern.

In React, JSX is the easiest place to put code. That is exactly why it attracts too much responsibility.

## The View

The View is what the user sees and interacts with.

In React, a View is usually a component or a tree of components. A good View should be biased toward rendering:

```tsx
function TaskListView({
  tasks,
  onToggleTask,
}: {
  tasks: TaskViewItem[];
  onToggleTask(id: string): void;
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            {task.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
```

This component does not know where tasks come from. It does not know how toggling is persisted. It receives render-ready data and emits user intent.

That is a healthy View.

## The Model

The Model represents domain knowledge. It does not have to be an OOP class. In frontend code, a model can be a type, function, service, schema, store, or state machine.

The important point is that the Model owns meaning.

For example, "completed task", "overdue invoice", "current collaborator", and "billing owner" are product concepts. They deserve names outside JSX.

```ts
function canCompleteTask(user: User, task: Task) {
  return !task.archived && user.permissions.includes("task:update");
}
```

This is not fancy. It is architecture because it gives a business rule a home.

## MVC in Frontend Terms

MVC separates Model, View, and Controller.

In a frontend application:

1. The Model owns data and rules.
2. The View renders state.
3. The Controller reacts to user input and coordinates updates.

React does not force this separation, but you can still use the idea. A route component or container can act as a controller by loading data, wiring actions, and passing props to presentational components.

The danger is that controllers become giant files. If the controller does everything, you moved the mess out of JSX but did not reduce it.

MVC helps when coordination is simple. It becomes weaker when UI state and derived state become rich.

## MVP and Testable Presentation Logic

MVP introduces a Presenter between View and Model. The Presenter prepares data for the View and handles user actions.

In React, a presenter can be a hook or plain function:

```ts
function createTaskPresenter(tasks: Task[]) {
  return tasks.map((task) => ({
    id: task.id,
    title: task.title.trim(),
    completed: task.status === "done",
  }));
}
```

This kind of presenter is useful because it is testable without React. It turns domain data into view data.

The View stays dumb in the best sense: it does not need to know why a task is considered completed or how labels should be normalized.

## MVVM and ViewModel Thinking

MVVM is especially relevant to modern frontend work because it maps well to reactive state.

In MVVM:

1. The Model owns domain data and rules.
2. The View renders.
3. The ViewModel exposes state and actions shaped specifically for the View.

A ViewModel is not just a store. A store holds state. A ViewModel coordinates state, derived values, commands, and sometimes lifecycle.

For example, a `ProjectsViewModel` may expose:

1. `projects`
2. `isLoading`
3. `canCreateProject`
4. `openCreateProjectModal()`
5. `archiveProject(id)`
6. `visibleProjects`

The View does not need to know whether the ViewModel uses MobX, Reatom, Zustand, signals, React state, or TanStack Query internally.

That is the point.

## ViewModel vs Store

The difference between a ViewModel and a store is easy to blur.

A store is usually a state container. It may include actions, selectors, and subscriptions. A ViewModel is a presentation-facing abstraction. It describes what a particular screen or feature needs to know and do.

Sometimes one store can power many ViewModels. Sometimes one ViewModel composes several stores and services. Sometimes a small feature does not need either term.

The naming matters only when it clarifies responsibility.

If a "store" contains API calls, modal orchestration, formatting, permissions, router sync, analytics, and derived screen state, it may actually be a ViewModel wearing the wrong name.

## React Is the View, Not the Whole System

React is very good at rendering UI from state. It is not an architecture by itself.

The mistake is treating React components as the default home for every role. When that happens:

1. JSX becomes business logic.
2. Hooks become service layers.
3. Context becomes a global dependency bucket.
4. Components become impossible to reuse outside their original flow.

MV patterns remind us that the UI is only one part of the system.

## How to Use This Without Overbuilding

Do not create `model`, `view`, `presenter`, and `view-model` folders on day one because an article said so.

Use the pattern when pressure appears:

1. Extract a domain function when a business rule repeats.
2. Extract a presenter when rendering needs non-trivial mapping.
3. Extract a ViewModel when a screen coordinates several states and actions.
4. Keep simple components simple.

Architecture should make the code easier to change, not more ceremonial.

## Conclusion

MVC, MVP, MVVM, and ViewModel thinking are not outdated. They are vocabulary for responsibilities that every serious frontend application eventually has.

React gives you the rendering model. It does not decide where domain rules, orchestration, derived state, and infrastructure boundaries belong.

Once you see those roles clearly, technology choices become less emotional. React, Vue, Angular, MobX, Zustand, Reatom, Effector, or signals are implementation details around the same architectural question:

Who owns this responsibility?
