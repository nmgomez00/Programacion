# Position

The `position` property in CSS specifies how an element is positioned in the document. It determines the positioning context and how the element interacts with other elements.

---

## Values

### 1. `static` (default)

- The element is positioned according to the normal document flow.
- Top, right, bottom, and left properties have no effect.

**Example:**

```css
.element {
  position: static;
}
```

### 2. `relative`

- The element is positioned relative to its normal position.
- Top, right, bottom, and left properties move the element relative to its original position.

**Example:**

```css
.element {
  position: relative;
  top: 10px;
  left: 20px;
}
```

### 3. `absolute`

- The element is positioned relative to its nearest positioned ancestor (not `static`).
- If no positioned ancestor exists, it is positioned relative to the initial containing block (usually the `<html>` element).

**Example:**

```css
.element {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

### 4. `fixed`

- The element is positioned relative to the viewport and does not move when the page is scrolled.

**Example:**

```css
.element {
  position: fixed;
  top: 0;
  right: 0;
}
```

### 5. `sticky`

- The element toggles between `relative` and `fixed` based on the scroll position.
- It is positioned relative until a specified scroll position is reached, then it becomes fixed.

**Example:**

```css
.element {
  position: sticky;
  top: 10px;
}
```

---

## Z-Index

The `z-index` property specifies the stack order of elements. Elements with a higher `z-index` appear in front of those with a lower `z-index`.

**Example:**

```css
.element {
  position: absolute;
  z-index: 10;
}
```
