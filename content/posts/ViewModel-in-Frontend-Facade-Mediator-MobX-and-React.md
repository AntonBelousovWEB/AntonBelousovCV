---
title: "ViewModel in Frontend: Facade, Mediator, MobX, and React"
date: 2026-07-16
excerpt: "A practical explanation of the ViewModel pattern in frontend architecture, how it differs from a store, and how Facade and Mediator ideas fit React apps."
---

## Introduction

ViewModel is one of those architecture terms that gets both overused and underused.

Some teams call every store a ViewModel. Others avoid the term entirely and put all presentation orchestration into React components. Both extremes miss the useful middle.

A ViewModel is a presentation-facing model. It prepares state and actions for a View. It can coordinate services, derived values, commands, validation, lifecycle, and cross-domain communication.

The value is not the name. The value is giving screen logic a home outside JSX.

## React ViewModel Pattern in One Paragraph

The React ViewModel pattern moves presentation orchestration out of JSX and into a boundary shaped around what the view needs. A ViewModel can be a hook, factory, class, MobX object, Zustand selector layer, or plain function. The important part is responsibility: components render, while the ViewModel prepares state, commands, permissions, validation, and workflow decisions.

## Hook vs Class vs MobX ViewModel

| Shape | Best for | Trade-off |
| --- | --- | --- |
| Hook ViewModel | React-only screens and simple lifecycle binding | Harder to reuse outside React |
| Plain object or factory | Testable orchestration and framework-light logic | Needs explicit lifecycle decisions |
| Class ViewModel | Repeated lifecycle, commands, or observable state | Can become ceremony if there is only one implementation |
| MobX ViewModel | Rich derived state and observable workflows | Adds library semantics the team must understand |

## ViewModel Is Not Just a Store

A store usually holds state and exposes ways to update it.

A ViewModel answers a slightly different question: what does this View need?

For example, a project page may need:

1. A list of projects.
2. A filtered list for rendering.
3. Loading and error state.
4. Permission checks.
5. Commands to create, archive, and rename projects.
6. Modal orchestration.
7. Router synchronization.

You can implement that with a store. You can implement it with MobX. You can implement it with React hooks. You can implement it with Reatom atoms.

The pattern is about responsibility, not the tool.

## Facade: A Simple Surface Over Complex Internals

A ViewModel often behaves like a Facade.

The View does not want to know about multiple services, caches, permissions, route params, and mutation details. It wants a small surface:

```ts
type ProjectsViewModel = {
  projects: ProjectListItem[];
  isLoading: boolean;
  error: string | null;
  canCreateProject: boolean;
  createProject(input: CreateProjectInput): Promise<void>;
  archiveProject(id: string): Promise<void>;
};
```

Internally, the ViewModel may talk to a repository, feature flag service, modal manager, router, and query cache.

The View gets one coherent API.

That is Facade thinking.

## Mediator: Coordinating Without Direct Coupling

ViewModels can also act like Mediators.

Suppose archiving a project affects:

1. The project list.
2. The active board.
3. Notifications.
4. Permissions.
5. The current route.

You do not want every part importing every other part.

A ViewModel or application service can coordinate the use case:

```ts
async function archiveProject(id: ProjectId) {
  await projectsService.archive(id);
  boardState.closeIfProjectIsActive(id);
  notifications.success("Project archived");
  router.goToProjects();
}
```

This is not pure domain logic. It is application orchestration. It belongs near the feature boundary, not in a button component.

## MobX and ViewModels

MobX is a natural fit for ViewModel-style code because it supports observable state, computed values, and actions.

A MobX ViewModel can expose derived values without making React components manually memoize everything:

```ts
class ProjectsViewModel {
  projects: Project[] = [];
  filter = "";

  get visibleProjects() {
    return this.projects.filter((project) =>
      project.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}
```

React becomes the View. MobX tracks dependencies. The ViewModel owns presentation state.

This can be clean when the team understands the model. It can be confusing when everything becomes observable and boundaries disappear.

## Binding ViewModels to React

React components need a way to obtain and use ViewModels.

Common options:

1. Create the ViewModel in a route component.
2. Provide it through React context.
3. Resolve it through a DI container.
4. Build it inside a custom hook.
5. Pass it directly as a prop for maximum explicitness.

The simplest working option wins.

If one screen owns one ViewModel, local creation may be enough. If a subtree needs it, context is reasonable. If the object graph is large and scoped, DI can help.

Do not introduce a container just to instantiate one class.

## Lifecycle Matters

Some ViewModels need lifecycle:

1. Load initial data.
2. Subscribe to external changes.
3. Cancel requests.
4. Dispose reactions.
5. Reset feature state on unmount.

React can handle lifecycle through effects, but stuffing all lifecycle into the component recreates the original problem.

A binding hook can keep the boundary clear:

```ts
function useProjectsViewModel() {
  const viewModel = React.useMemo(() => createProjectsViewModel(), []);

  React.useEffect(() => {
    viewModel.init();
    return () => viewModel.dispose();
  }, [viewModel]);

  return viewModel;
}
```

This keeps React lifecycle integration visible without making the component own the whole workflow.

## Inheritance: Rare, But Not Always Evil

Frontend developers often avoid inheritance completely. That is usually wise. Composition should be the default.

But inheritance can be useful when there is a real shared lifecycle or contract.

For example, an abstract `ViewModel` base class might define `init()` and `dispose()` if many ViewModels need consistent lifecycle binding.

The danger is creating a hierarchy because it feels architectural. A base class with one implementation is noise. A base class that hides important behavior can make debugging harder.

Use inheritance only when it removes repeated lifecycle mechanics across several real implementations.

## ViewModel vs Hook

A hook can be a ViewModel boundary.

```ts
function useProjectsPageModel() {
  const projects = useProjectsQuery();
  const permissions = usePermissions();

  return {
    projects: mapProjects(projects.data),
    canCreateProject: permissions.can("project:create"),
  };
}
```

This is fine. You do not need classes to use ViewModel thinking.

The limitation is reuse outside React. If the logic should be testable or usable without React, a plain object, class, or factory may be better.

Again, choose based on pressure.

## React ViewModel Pattern in Practice

The React ViewModel pattern is most useful when a screen has more behavior than a component should own:

1. Mapping API data into view-ready state.
2. Combining permissions, feature flags, and loading states.
3. Coordinating form state, validation, and submit effects.
4. Turning domain events into UI decisions.
5. Keeping JSX mostly declarative.

The ViewModel does not have to be a class. A hook can be a ViewModel if it provides a stable boundary between rendering and orchestration.

The smell to watch for is simple: if a component reads like a workflow script instead of a view, a ViewModel boundary is probably missing.

For related patterns, see the [React Architecture topic hub](/blog/topics/react-architecture).

## Production Checklist

Use a ViewModel boundary when:

1. JSX is full of orchestration instead of rendering.
2. The screen combines API data, permissions, flags, forms, and routing.
3. You need to test behavior without rendering the whole component tree.
4. A workflow touches several services or state sources.
5. Several components need the same view-ready model.

Skip it when a small component and one hook already explain the feature clearly.

## Conclusion

ViewModel is useful because it gives presentation orchestration a name and a boundary.

It differs from a store because it is shaped around what a View needs, not only around stored data. It can act as a Facade over complex internals and a Mediator for feature workflows.

In React, you can implement ViewModel thinking with hooks, classes, MobX, Reatom, Zustand, or plain functions.

The pattern matters more than the technology: keep JSX focused on rendering, keep orchestration named, and give screen-level behavior a place to live.
