# Flexbox

Flexbox is a powerful layout module in CSS that provides an efficient way to arrange, align, and distribute space among items in a container, even when their size is unknown or dynamic. It is particularly useful for designing complex layouts that are responsive and adapt to different screen sizes.

---

## Main Axis and Cross Axis

- **Main Axis**: The primary axis along which flex items are laid out in a flex container. The direction of the main axis is determined by the `flex-direction` property.
- **Cross Axis**: The axis perpendicular to the main axis. The alignment of flex items along the cross axis is controlled by the `align-items` property.

---

## Key Properties

### 1. `display`

- **`display: flex`**: Defines a flex container, enabling Flexbox layout for its children.

### 2. `flex-direction`

Defines the direction of the main axis.

- `row` (default): Left to right.
- `column`: Top to bottom.
- `row-reverse`: Right to left.
- `column-reverse`: Bottom to top.

**Example:**

```css
.container {
  display: flex;
  flex-direction: row;
}
```

### 3. `flex-wrap`

Specifies whether flex items should wrap.

- `nowrap` (default): Items will not wrap to the next line.
- `wrap`: Items will wrap to the next line if needed.
- `wrap-reverse`: Items will wrap to the next line in reverse order.

**Example:**

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

### 4. `justify-content`

Aligns items along the main axis.

- `flex-start` (default): Items are aligned to the start of the container.
- `flex-end`: Items are aligned to the end of the container.
- `center`: Items are aligned to the center of the container.
- `space-between`: Items are evenly distributed; the first item is at the start, the last item at the end.
- `space-around`: Items have equal space around them.
- `space-evenly`: Items have equal space between and around them.

**Example:**

```css
.container {
  display: flex;
  justify-content: center;
}
```

### 5. `align-items`

Aligns items along the cross axis.

- `stretch` (default): Items are stretched to fit the container.
- `flex-start`: Items are aligned to the start of the cross axis.
- `flex-end`: Items are aligned to the end of the cross axis.
- `center`: Items are aligned to the center of the cross axis.
- `baseline`: Items are aligned to their baselines.

**Example:**

```css
.container {
  display: flex;
  align-items: flex-start;
}
```

### 6. `align-content`

Aligns lines of flex items when there is extra space in the cross axis (when `flex-wrap` is `wrap` or `wrap-reverse`).

- `stretch` (default): Lines are stretched to fill the remaining space.
- `flex-start`: Lines are packed to the start of the container.
- `flex-end`: Lines are packed to the end of the container.
- `center`: Lines are packed to the center of the container.
- `space-between`: Lines are evenly distributed; the first line is at the start, the last line at the end.
- `space-around`: Lines have equal space around them.

**Example:**

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```

### 7. `flex`

A shorthand property for setting `flex-grow`, `flex-shrink`, and `flex-basis`.

- Default: `0 1 auto`.

**Example:**

```css
.item {
  flex: 1;
}
```

### 8. `order`

Specifies the order of a flex item within its container. Items are ordered by ascending order value and then by source code order.

**Example:**

```css
.item {
  order: 2;
}
```

### 9. `align-self`

Overrides the `align-items` property for individual flex items.

- Default: `auto` (inherits from the parent container's `align-items` property).
- Other values: `flex-start`, `flex-end`, `center`, `stretch`, `baseline`.

**Example:**

```css
.item {
  align-self: center;
}
```

---

## Additional Features

### Auto Margins

In Flexbox, `auto` margins absorb extra space in the specified direction. They can be used for aligning items.

**Example:**

```css
.item {
  margin-left: auto;
}
```

### Nesting

Flex containers can be nested within each other, allowing for complex layouts.

### Gap Property

The `gap` property (or `row-gap` and `column-gap`) specifies the size of the gap between flex items.

**Example:**

```css
.container {
  display: flex;
  gap: 10px;
}
```
