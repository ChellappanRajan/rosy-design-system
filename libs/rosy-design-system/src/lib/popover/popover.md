# Notes on CSS Anchor and Positioning Properties

## Anchor Name

The `anchor-name` is a CSS property that allows you to assign a unique identifier to an element. The identifier should start with `--` (double dash), similar to custom CSS properties.

```css
anchor-name: --popover-trigger-element;
```

Once you assign an `anchor-name` to an element, that element acts as the anchor.

## Connecting the Anchor with Other Elements

To connect the anchor with another element, use the `position-anchor` property:

```css
:popover-open {
  /* Trigger anchor reference */
  position-anchor: --popover-trigger-element;
  /* Position bottom of anchored element at top of anchor */
  /* bottom: anchor(top); */
}
```

## Example: Positioning with Logical Properties

```css
:host([position='center-right']) {
  & :popover-open {
    inset-block-start: anchor(--popover-trigger-element center);
    inset-inline-start: anchor(--popover-trigger-element right);
  }
}
```

### Logical Property Values

- **Top, Center, Bottom**
- **Left, Center, Right**

### Property Definitions

- **`inset-block-start: anchor(--popover-trigger-element center)`**: Positions the top of the panel element at the center of the trigger (anchor) element.
- **`inset-inline-start: anchor(--popover-trigger-element right)`**: Positions the left of the panel element at the right of the trigger element.

## Logical Properties and Their Physical Equivalents

| Logical Property   | Physical Property |
|--------------------|--------------------|
| `block-start`      | `top`              |
| `block-end`        | `bottom`           |
| `inline-start`     | `left`             |
| `inline-end`       | `right`            |

These logical properties help in creating layouts that adapt to different writing modes and text directions.

## Reference

For more information, see the [Anchor Positioning API](https://developer.chrome.com/blog/anchor-positioning-api).
