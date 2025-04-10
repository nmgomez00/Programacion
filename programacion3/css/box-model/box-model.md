# Box Model

The CSS Box Model is a fundamental concept that describes how elements are structured and spaced in a web page. It consists of the following components:

1. **Content**: The innermost part of the box, where text and images are displayed.
2. **Padding**: The space between the content and the border. It adds extra space inside the element.
3. **Border**: The edge of the box that wraps around the padding and content.
4. **Margin**: The outermost layer that creates space between the element and its neighbors.

---

## Key Properties

### 1. `width` and `height`

Defines the size of the content area.

**Example:**

```css
.box {
  width: 200px;
  height: 100px;
}
```

### 2. `padding`

Specifies the space between the content and the border.

**Example:**

```css
.box {
  padding: 10px;
}
```

### 3. `border`

Defines the border around the padding and content.

**Example:**

```css
.box {
  border: 2px solid black;
}
```

### 4. `margin`

Specifies the space outside the border.

**Example:**

```css
.box {
  margin: 20px;
}
```

---

## Box Sizing

The `box-sizing` property determines whether the `width` and `height` include padding and border.

- `content-box` (default): Width and height include only the content.
- `border-box`: Width and height include content, padding, and border.

**Example:**

```css
.box {
  box-sizing: border-box;
}
```
