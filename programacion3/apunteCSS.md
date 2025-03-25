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
