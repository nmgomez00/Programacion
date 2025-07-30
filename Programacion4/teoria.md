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