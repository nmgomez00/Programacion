# Pseudo-Classes

Pseudo-classes in CSS define the special state of an element. They allow you to style elements based on their state, position, or user interaction.

---

## Common Pseudo-Classes

### 1. `:hover`

Applies styles when the user hovers over an element.

**Example:**

```css
a:hover {
  color: red;
}
```

### 2. `:focus`

Applies styles when an element gains focus (e.g., a form input).

**Example:**

```css
input:focus {
  border-color: blue;
}
```

### 3. `:nth-child()`

Selects elements based on their position in a parent element.

**Example:**

```css
li:nth-child(2) {
  color: green;
}
```

### 4. `:first-child` and `:last-child`

- `:first-child`: Selects the first child of a parent.
- `:last-child`: Selects the last child of a parent.

**Example:**

```css
p:first-child {
  font-weight: bold;
}

p:last-child {
  font-style: italic;
}
```

### 5. `:not()`

Selects elements that do not match a specified selector.

**Example:**

```css
div:not(.active) {
  background-color: gray;
}
```

---

## User Interaction Pseudo-Classes

- `:active`: Applies styles when an element is being clicked.
- `:visited`: Styles links that have been visited.
- `:disabled`: Styles disabled form elements.

**Example:**

```css
button:disabled {
  opacity: 0.5;
}
```
