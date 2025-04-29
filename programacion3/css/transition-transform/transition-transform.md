# CSS Transitions and Transforms

## Transitions

CSS transitions allow you to change property values smoothly (over a given duration). For example:

```css
button {
  background-color: blue;
  transition: background-color 0.5s ease;
}

button:hover {
  background-color: red;
}
```

### Transition Properties

- `transition-property`: Specifies the name of the CSS property to which the transition is applied (e.g., `background-color`, `transform`).
- `transition-duration`: Specifies the duration of the transition (e.g., `0.5s`, `2s`).
- `transition-timing-function`: Specifies the speed curve of the transition (e.g., `ease`, `linear`, `ease-in-out`).
- `transition-delay`: Specifies a delay before the transition starts (e.g., `0s`, `1s`).

### Example with Multiple Properties

```css
.box {
  width: 100px;
  height: 100px;
  background-color: green;
  transition: width 1s ease, background-color 0.5s ease-in-out;
}

.box:hover {
  width: 200px;
  background-color: yellow;
}
```

## Transforms

CSS transforms allow you to rotate, scale, skew, or translate an element. For example:

```css
div {
  transform: rotate(45deg);
}
```

### Transform Functions

- `rotate(angle)`: Rotates the element by the specified angle (e.g., `rotate(45deg)`).
- `scale(x, y)`: Scales the element by the specified factors along the X and Y axes (e.g., `scale(1.5, 2)`).
- `translate(x, y)`: Moves the element by the specified distances along the X and Y axes (e.g., `translate(50px, 100px)`).
- `skew(x-angle, y-angle)`: Skews the element by the specified angles along the X and Y axes (e.g., `skew(30deg, 20deg)`).

### Example with Multiple Transforms

```css
.box {
  width: 100px;
  height: 100px;
  background-color: purple;
  transform: rotate(30deg) scale(1.2) translate(20px, 10px);
}
```

### Combining Transitions and Transforms

You can combine transitions and transforms to create smooth animations. For example:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: orange;
  transition: transform 0.5s ease;
}

.box:hover {
  transform: rotate(45deg) scale(1.5);
}
```
