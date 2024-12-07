# Style Queries

Style queries allow us to conditionally apply CSS based on the values of custom properties (CSS variables) or specific container conditions (such as size or state). They help solve several challenges when building complex components.

For example, previously, there was no way to define conditional rules like: "if `--placement="top"`, apply this `top`," or any other style based on the value of a custom property. To address this, we can use style queries to target specific values of custom properties, allowing us to say, "when `--placement` has this value, apply these CSS styles."

With style queries, we can handle all presentational styling using CSS properties instead of relying on attributes like `placement` or `size`. This decouples structure from presentation and results in more flexible, reusable components.

> Reference from web component design guidelines: [W3C Web Components Design Guidelines](https://www.w3.org/2001/tag/doc/webcomponents-design-guidelines/)

> Don’t use custom attributes for styling, like `bgcolor`. Instead, use Custom Properties or CSS Shadow Parts.

## Why Style Queries Are Better Than Attribute Styling:

1. **Decouples Structure and Presentation:**
   - Style queries allow you to handle styling exclusively in CSS, making the HTML structure simpler and more focused on semantics rather than presentation. Previously, attributes like `size` or `pill`, `variant` were used to toggle styles, mixing structure with styling.

2. **Reduces Attribute Overload:**
   - Without style queries, you'd need to use attributes for every possible style variation, leading to cluttered HTML. By using CSS properties and style queries, we avoid overloading our HTML with unnecessary attributes.

3. **Improves Maintainability and Reusability:**
   - Managing styles via CSS properties and style queries makes components more modular and maintainable. You don’t need to define multiple attributes to handle different visual states, simplifying both the codebase and styling.

4. **Enables Dynamic Conditions Without JavaScript:**
   - Style queries allow you to dynamically apply styles like `--pill="on"` or `--placement: top` directly in CSS, which previously required JavaScript or complex class manipulation. This reduces reliance on JavaScript and allows for a more streamlined styling approach.

5. **Leverages the Power of CSS:**
   - By using style queries, we can take full advantage of CSS’s capabilities to target custom properties, container breakpoints, and component states. This enables more efficient, scalable, and dynamic styling.

Here's an example using style queries:

```css
@container style(--placement: top) {
  .container {
    top: 0;
  }
}
