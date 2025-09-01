## cliente servidor
## pwa 
# use effect
    - Todos los componentes nacen, viven y mueren

   ## efecto 
    - Ejecutar código arbitrario: No tiene que ver con la físolofia de React.
- El primer parametro es un callback y el segundo es un array de dependencias (relacion de uso).
- El array de dependencia si es vacio el efecto se ejecuta una vez 
- Cuando el componente muere lo que este se ejecuta lo que retorna la funcion (closure) del callback.
- Cuando alguna de las variables en el array de dependencias cambia entre renderizados, entonces y solo entonces, el efecto se vuelve a ejecutar. Si el array está vacío ([]), el efecto se ejecuta solo una vez después del renderizado inicial, ya que no "depende" de ninguna variable que pueda cambiar.

- Cuando un componente de rerenderiza "renace", muere y vuelve a vivir


- prop drilling 
- handler
- eventos=> callbacks

## regex
Las expresiones regulares son muy utiles a la hora de buscar patrones en los textos. Una utilidad muy importante es hacer patrones de validaciones para los inputs que usamos en nuestros formularios.

### Caracteristica claves
Los patrones suelen envolverse dentro de dos barras //, al finalizar la ultima barra se pueden asignar banderas (flags).
flags importantes:
- i: sirve para buscar patrones case insensitive, lo que significa que no distingue entre mayúsculas y minúsculas (ej. /a/i encontrará 'a' y 'A').

- g: sirve para buscar más de una vez el patrón dentro de una cadena de texto. Si no se usa, solo se encontrará la primera coincidencia (ej. /o/g en "hello world" encontrará ambas 'o').

- m: multiline, permite que los caracteres de anclaje ^ y $ coincidan con el inicio y el final de cada línea, en lugar de solo con el inicio y el final de toda la cadena de texto. Esto es útil para buscar coincidencias en documentos con múltiples líneas.