# Selectors

CSS selectors are patterns used to select and style elements in a web page. They allow you to target specific elements based on their attributes, relationships, or states.

---

## Types of Selectors

### 1. Universal Selector

Selects all elements.

**Example:**

```css
* {
  margin: 0;
  padding: 0;
}
```

### 2. Type Selector

Selects elements by their tag name.

**Example:**

```css
p {
  font-size: 16px;
}
```

### 3. Class Selector

Selects elements with a specific class.

**Example:**

```css
.box {
  border: 1px solid black;
}
```

### 4. ID Selector

Selects an element with a specific ID.

**Example:**

```css
#header {
  background-color: blue;
}
```

### 5. Attribute Selector

Selects elements based on their attributes.

**Example:**

```css
input[type="text"] {
  border: 1px solid gray;
}
```

---

## Combinators

### 1. Descendant Selector

Selects elements that are descendants of a specified element.

**Example:**

```css
div p {
  color: red;
}
```

### 2. Child Selector

Selects elements that are direct children of a specified element.

**Example:**

```css
div > p {
  font-weight: bold;
}
```

### 3. Adjacent Sibling Selector

Selects an element that is immediately preceded by a specified element.

**Example:**

```css
h1 + p {
  margin-top: 10px;
}
```

### 4. General Sibling Selector

Selects all elements that are siblings of a specified element.

**Example:**

```css
h1 ~ p {
  color: gray;
}
```
