# CSS Custom Properties

CSS variables, also known as custom properties, are just like regular CSS properties — they are inherited by default.

## Avoiding Anti-patterns in Fallbacks

It is considered an anti-pattern to define a fallback directly in the rule itself, for example:

```css
--color: black;
```

This is problematic because anyone who wants to override this variable in a component must match the same specificity used in the CSS for that component (e.g., a button). It also breaks inheritance, as the parent can't set the `--color` property and have the child button understand it.

### Example of What Will Not Work

```html
<template>
  <style>
    button {
      border: 1px solid var(--color);
      --color: black;
    }
    .parent {
      --color: red;
    }
  </style>

  <div class="parent">
    <button>Click me</button>
  </div>
</template>
```

In this example, the button does not inherit the `--color` value from the parent because the `--color` variable is set directly on the button, thus overriding the inheritance.

### Example of What Will Work

By adjusting the specificity of the selector, we can ensure that the button uses the inherited value from the parent:

```html
<template>
  <style>
    button {
      border: 1px solid var(--color);
      --color: black;
    }
    .parent {
      --color: red;
    }
  </style>

  <div class="parent">
    <button>Click me</button>
  </div>
</template>
```

However, this approach is repetitive and doesn't follow the DRY (Don't Repeat Yourself) principle.

## A Better Fallback Approach

Instead of setting the fallback on the rule itself, we can use the `var()` function with a fallback value directly:

```html
<template>
  <style>
    button {
      border: 1px solid var(--color, black);
    }
    .parent {
      --color: red;
    }
  </style>

  <div class="parent">
    <button>Click me</button>
  </div>
</template>
```

This way, the button will fallback to black if `--color` is not defined.

## Reducing Duplication with Pseudo-private Variables

Using fallback values in every property is repetitive. Instead, we can define a "private" custom property (often prefixed with an underscore) that includes the fallback logic. This approach reduces duplication and ensures DRY code.

```html
<template>
  <style>
    button {
      --_color: var(--color, black);
      border: 1px solid var(--_color);
    }
    .parent {
      --color: red;
    }
  </style>

  <div class="parent">
    <button>Click me</button>
  </div>
</template>
```

### Benefits of Pseudo-private Variables

Using pseudo-private variables like `--_color` succinctly reduces fallback duplication while maintaining the flexibility of CSS variables.

