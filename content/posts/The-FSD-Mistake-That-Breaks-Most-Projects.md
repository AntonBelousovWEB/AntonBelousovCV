---
title: "The FSD Mistake That Breaks Most Projects"
date: 2026-05-09
excerpt: "The most common Feature-Sliced Design mistake is copying folders without respecting dependency rules, ownership, and the real direction of product change."
---

## Introduction

Feature-Sliced Design can help frontend teams structure growing applications. It gives names to layers, features, entities, shared code, and dependency direction. Used well, it makes code easier to navigate and safer to change.

But many projects break FSD by treating it as a folder template.

They copy the directory structure, move files around, and expect architecture to appear. It does not. Architecture is not the folder names. Architecture is the set of rules that makes those folders meaningful.

The biggest FSD mistake is ignoring dependency direction and ownership.

## Folders Are Not Boundaries

A folder only becomes a boundary when the team respects what can cross it.

You can create this structure:

```txt
app/
pages/
widgets/
features/
entities/
shared/
```

And still build a tangled application if `shared` imports from `features`, entities know about pages, and widgets contain business rules from half the product.

The structure looks correct in a screenshot. The dependency graph tells the truth.

FSD is valuable because it tries to make dependency direction explicit. Higher layers can depend on lower layers. Lower layers should not depend on higher layers.

When that rule is broken casually, the architecture becomes decorative.

## Shared Is the Most Dangerous Folder

The `shared` layer often becomes a dumping ground. Anything used twice goes there. Anything uncertain goes there. Anything that does not have an obvious owner goes there.

That is how `shared` turns into the least shared part of the app: a pile of unrelated utilities, UI components, business helpers, config fragments, and accidental dependencies.

Shared code should be stable, generic, and product-neutral. A button belongs there. A date formatter may belong there. A helper that knows how premium invoices behave probably does not.

A useful test is simple: could this code be reused in another product with the same tech stack?

If not, it may be feature or entity code wearing a shared costume.

## Entities Are Not Database Tables

Another common mistake is mapping FSD entities directly to backend tables.

An entity in frontend architecture should represent a meaningful business concept in the client application. Sometimes that aligns with backend models. Sometimes it does not.

For example, a backend may expose `User`, `Account`, `Membership`, and `Workspace`. The frontend flow may revolve around "current collaborator" or "billing owner." Those concepts deserve names if they shape UI behavior.

Do not let API shapes dictate the entire frontend model. The frontend has its own user experience and its own reasons to change.

## Features Should Own User Intent

Features are not random UI chunks. A feature should represent a user action or capability:

1. Invite member.
2. Change password.
3. Apply promo code.
4. Export report.
5. Toggle notification setting.

This framing helps keep feature code focused. It also prevents massive "profile feature" folders that contain every possible profile-related thing.

When a feature owns a user intent, its API becomes easier to understand. Other layers do not need to know its internals. They compose the capability.

## The Import Rule Is a Design Tool

Import rules can feel bureaucratic until you see what they protect.

If lower layers import higher layers, reusable concepts become aware of specific screens. That makes them harder to reuse and harder to test. It also creates circular pressure: changing one feature can break a supposedly stable entity or shared helper.

The rule is not about purity. It is about controlling blast radius.

When a feature changes, the change should mostly stay in that feature. When shared code changes, the team should be aware that the blast radius is wider.

## Do Not Migrate Everything at Once

Many teams damage projects by doing a big FSD migration before they understand their own domain boundaries.

A safer approach is incremental:

1. Start with one change-heavy area.
2. Identify real user capabilities.
3. Move code into boundaries that match those capabilities.
4. Add dependency checks where violations already hurt.
5. Use the result as an example for the next area.

FSD should clarify the product. If migration only changes paths, it is not doing enough.

## Conclusion

The FSD mistake that breaks most projects is treating Feature-Sliced Design as folders instead of dependency discipline.

Folders can guide developers, but only if ownership is clear, shared code stays honest, entities represent real frontend concepts, and features map to user intent.

Good FSD makes change local. Bad FSD makes a messy codebase look organized while keeping the same coupling underneath.
