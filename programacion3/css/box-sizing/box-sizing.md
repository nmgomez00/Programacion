# Box Sizing

The `box-sizing` property in CSS defines how the total width and height of an element are calculated. It determines whether the dimensions include padding and border or not.

---

## Values

### 1. `content-box` (default)

- The `width` and `height` properties include only the content.
- Padding and border are added outside the specified dimensions.

**Example:**

```css
.box {
  box-sizing: content-box;
  width: 200px;
  padding: 10px;
  border: 5px solid black;
}
```

_Total width = 200px (content) + 10px (padding) + 5px (border) = 220px_

### 2. `border-box`

- The `width` and `height` properties include content, padding, and border.
- This makes it easier to manage the total size of an element.

**Example:**

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 10px;
  border: 5px solid black;
}
```

_Total width = 200px (content + padding + border)_

---

## Why Use `border-box`?

Using `border-box` simplifies layout calculations, especially for responsive designs, as the total size of an element remains consistent regardless of padding or border changes.

**Example:**

```css
* {
  box-sizing: border-box;
}
```
