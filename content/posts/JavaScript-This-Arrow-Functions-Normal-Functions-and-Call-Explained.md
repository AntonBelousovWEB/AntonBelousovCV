---
title: "JavaScript this Explained: Arrow Functions, Normal Functions, and call()"
date: 2026-07-06
excerpt: "A practical explanation of JavaScript this binding, arrow functions, normal functions, dot notation, strict mode, and call()."
---

## Introduction

`this` in JavaScript is one of those topics that looks small until an interview question or production bug exposes how much is hidden behind it.

Consider this code:

```js
function foo() {
  const x = 10;

  return {
    x: 20,
    bar: () => {
      console.log("bar:", this.x);
    },
    baz: function () {
      console.log("baz:", this.x);
    },
  };
}

const obj1 = foo();
obj1.bar(); // ?
obj1.baz(); // ?

const obj2 = foo.call({ x: 30 });
let y = obj2.bar;
let z = obj2.baz;
y(); // ?
z(); // ?
obj2.bar(); // ?
obj2.baz(); // ?
```

At first glance, it feels like a simple question about object methods. In reality, it tests whether you understand three separate things:

1. JavaScript code execution and lexical environments.
2. The difference between arrow functions and normal functions.
3. How `this` is bound at call time.

Before we solve it, one important warning: do not treat AI-generated answers as truth when you are still learning the material. Tools can be useful when you already understand the concept and need a reminder, but they can also produce explanations that sound confident while disagreeing with what the console actually does. For topics like `this`, always verify the model against the runtime.

## The Core Rule

Arrow functions and normal functions differ in how they relate to `this`.

An arrow function does not create its own `this`. It does not rebind `this` when called. When code inside an arrow function refers to `this`, JavaScript resolves it like a regular identifier from the surrounding lexical environment.

A normal function does have a `this` binding. That binding is established when the function is called, and it depends on how the call is made.

The simplest normal-function case is dot notation:

```js
obj1.baz();
```

Here, `baz` is a normal function and the call is made through `obj1`. Inside `baz`, `this` is bound to the value before the dot: `obj1`.

Now compare it with this:

```js
let z = obj2.baz;
z();
```

`z` points to the same normal function, but the call is no longer made through dot notation. In non-strict mode, `this` defaults to `globalThis`. In strict mode, `this` is `undefined`.

This distinction is the whole problem.

## Case 1: obj1.bar()

Let us start with the first object:

```js
const obj1 = foo();
obj1.bar(); // ?
```

`bar` is an arrow function. Calling it as `obj1.bar()` does not make `this` equal to `obj1`, because arrow functions do not bind `this` at call time.

Instead, `this` is resolved from the environment where `bar` was created.

In non-strict script code, top-level `this` is usually `globalThis` in a browser, which is `window`. If `window.x` was never defined, the result is:

```txt
bar: undefined
```

You can verify the relationship by defining `globalThis.x` before calling `bar`:

```js
const obj1 = foo();
globalThis.x = "from globalThis";

obj1.bar(); // bar: from globalThis
```

The important point: `obj1.bar()` looks like a method call, but `bar` is still an arrow function. Dot notation does not create a new `this` for it.

## What Changes in Strict Mode?

In strict mode, top-level `this` is not automatically bound to `globalThis`. It is `undefined`.

That changes the behavior:

```js
"use strict";

function foo() {
  const x = 10;

  return {
    x: 20,
    bar: () => {
      console.log("bar:", this.x);
    },
    baz: function () {
      console.log("baz:", this.x);
    },
  };
}

const obj1 = foo();
globalThis.x = "from globalThis";

obj1.bar();
```

This throws:

```txt
TypeError: Cannot read properties of undefined (reading 'x')
```

The arrow function still does not bind `this`. It resolves `this` from the surrounding environment, and in strict mode that value is `undefined`.

Trying to read `this.x` therefore becomes an attempt to read property `x` from `undefined`.

## Case 2: obj1.baz()

Now look at the normal function:

```js
const obj1 = foo();
obj1.baz(); // ?
```

`baz` is a normal function:

```js
baz: function () {
  console.log("baz:", this.x);
}
```

Because it is called through dot notation, `this` is bound to the value before the dot.

That value is `obj1`, and `obj1.x` is `20`.

The result is:

```txt
baz: 20
```

This is the simplest stable rule for normal functions: when a normal function is called as `object.method()`, `this` inside the function is `object`.

## Case 3: foo.call({ x: 30 })

The next block adds `call()`:

```js
const obj2 = foo.call({ x: 30 });
let y = obj2.bar;
let z = obj2.baz;

y(); // ?
z(); // ?
obj2.bar(); // ?
obj2.baz(); // ?
```

`call()` invokes a function with an explicitly provided `this` value.

So this line:

```js
const obj2 = foo.call({ x: 30 });
```

means that during the execution of `foo`, `this` is bound to:

```js
{ x: 30 }
```

That matters because `bar` is an arrow function created inside `foo`. Since arrow functions capture `this` from their surrounding environment, `bar` keeps the `this` value from the `foo.call({ x: 30 })` execution.

In other words, `bar` remembers `{ x: 30 }`.

`baz` does not. It is a normal function, so its `this` is still decided later, when it is called.

## Case 4: y()

Now we call `y`:

```js
let y = obj2.bar;
y(); // ?
```

`y` points to the arrow function originally stored in `obj2.bar`.

Because it is an arrow function, the call form `y()` does not create a new `this`. The function keeps using the `this` value from the environment where it was created.

That environment was the execution of:

```js
foo.call({ x: 30 })
```

So the result is:

```txt
bar: 30
```

This is often the surprising part. We detached `bar` from `obj2`, but it still prints `30`, because it never depended on `obj2` in the first place.

It depended on the lexical `this` captured during `foo`.

## Case 5: z()

Now compare that with `z`:

```js
let z = obj2.baz;
z(); // ?
```

`z` points to `baz`, and `baz` is a normal function.

Normal functions bind `this` at call time. The call is just:

```js
z();
```

There is no object before a dot. Therefore, in non-strict mode, `this` defaults to `globalThis`. In a browser, that is `window`.

If `globalThis.x` is not defined, the result is:

```txt
baz: undefined
```

You can verify it:

```js
const obj2 = foo.call({ x: 30 });
let z = obj2.baz;

globalThis.x = "from globalThis";
z(); // baz: from globalThis
```

Again, the key is not where the function was stored before. The key is how the normal function is called now.

## Case 6: obj2.bar()

Next:

```js
obj2.bar(); // ?
```

This looks like a method call, but `bar` is an arrow function. Dot notation still does not rebind `this` for an arrow function.

`bar` was created while `foo` was running with `this` bound to `{ x: 30 }`, because of `foo.call({ x: 30 })`.

So the result is:

```txt
bar: 30
```

The call form does not matter for `bar`. Its `this` was already lexically captured.

## Case 7: obj2.baz()

Finally:

```js
obj2.baz(); // ?
```

`baz` is a normal function. It binds `this` at call time.

This time, the function is called through dot notation, and the value before the dot is `obj2`.

What is `obj2`?

It is the object returned from `foo`:

```js
{
  x: 20,
  bar: () => {
    console.log("bar:", this.x);
  },
  baz: function () {
    console.log("baz:", this.x);
  },
}
```

So `this` inside `baz` is `obj2`, and `obj2.x` is `20`.

The result is:

```txt
baz: 20
```

## Final Answers

In non-strict script code, assuming `globalThis.x` is not defined, the output is:

```txt
obj1.bar(); // bar: undefined
obj1.baz(); // baz: 20

y();        // bar: 30
z();        // baz: undefined
obj2.bar(); // bar: 30
obj2.baz(); // baz: 20
```

In strict mode, the arrow-function cases that captured top-level `this` as `undefined` may throw when they try to access `this.x`.

## The Mental Model to Keep

When you see `this` inside an arrow function, ask the same question you would ask for any other identifier:

Where was it defined, and what value was available in that surrounding environment?

When you see `this` inside a normal function, ask a different question:

How was the function called?

If the call uses dot notation, `this` is the value before the dot. If the function is called directly, `this` is either `globalThis` in non-strict mode or `undefined` in strict mode. If `call`, `apply`, or `bind` is used, those methods explicitly control the binding.

That mental split makes JavaScript `this` much less mysterious:

1. Arrow functions capture `this` lexically.
2. Normal functions receive `this` dynamically at call time.
3. Dot notation matters for normal functions only.
4. `call()`, `apply()`, and `bind()` override the default normal-function behavior.

Once you keep those rules separate, the puzzle stops being a puzzle and becomes a predictable execution trace.
