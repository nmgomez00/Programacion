# CSS Topics Index

This document serves as an index to various CSS topics covered in this repository. Click on the links below to navigate to the respective topics.

## Topics

1. [Box Model](./box-model/box-model.md)
2. [Box Sizing](./box-sizing/box-sizing.md)
3. [Flexbox](./flexbox/flexbox.md)
4. [Positioning](./position/position.md)
5. [Pseudo-Classes](./pseudo-classes/pseudo-classes.md)
6. [Selectors](./selectores/selectors.md)
7. [Transitions and Transforms](./transition-transform/transition-transform.md)

---

# css - cascade style sheets

## inline styles

propiedad value/medida/funcion ;
key value

---

shorthand (instead of #fffffff, #ffffff)

### opacidad (transparencia)

### contraste

1. chequear la combinacion de colores

## selectores

```
selector {
propiedadad: value;
propiedad: value;
...
}
```

### Especificidad del selector

- (x, x, x)

- mismo selector (misma especificidad gana el ultimo,
  eso es por lo cual se llama `cascade` style sheets)
- Los estilos en linea tienen mas especificacion que los estilos del mismo documento y externo

### Tipos de selectores

- tag name `tagname`
  - Especificidad (0,0,1)
- class `.classname`
  - Especificidad (0,1,0)
  - Se pueden repetir
- id `#idname`
  - Especificidad (1,0,0)
  - NO se pueden repetir

## box model

- content
- padding
- border
  - Puedo cambiarle sus estilos
- margin
- outline

### Medidas

- Medidas relativas (responsive design)
  - porcentaje
  - vw
  - vh
- Medidad absolutas (medidas reales)
  - px (pixeles)

### propiedades varias

- overflow-(x,y)

- margin: top right bottom left o top|bottom right|left o uno solo para todos
- border (solo aparece cuando le damos estilo)
  - ancho estilo color (no importa el orden)
- Minimos y Maximos

### Propiedad box-sizing

#### Valores:

- content-box
- border-box
- auto
- inherit (hereda del padre)

### position

#### valores

- relative : posicion relativa al contenedor. si no hay contenefdor se busca el ancestro mas cercano (body es el padre de todos)

- static (por defecto)

- fixed: queda fijo en la pantalla
- absolute: sale del "arbol" de elementos Una "ruta/rama flotante", no se sostiene con nada

- sticky: lo mismo que fixed hasta que conlisione con un borde de la pantalla (se pega deacuerdo si esta en top bottom right left )

Se usan con top, down, left, bottom (creo)

todos los elementos posicionados estan por encima que no lo estan(?)

El orden de los objetos altera la "capa" de los mismos. Esto se cambia con z-index

---

## Selectores

- (+) hermanos
- attribute something else
- > hijo directo

---

## pseudo clases

representan estados de los elementos
