## Dom explicacion

- A veces es más fácil desctruir y contruir el DOM de nuevo
- Se crea un a copia del DOM, llamado virtual DOM
- Se recorre ambos arboles y se actualiza directamente sin refrescar todo

## SPA (Single page applicaton)

- Es una pagina que no recarga nunca

## HOOKS

- Los hooks son esencialmente funciones que le permiten "engancharse" (hook) al estado de React y a las características del ciclo de vida desde componentes funcionales.
- Tiene no tiene un use no es un hook

### useState

- useState(initialState)
- devuelve el estado, state y una funcion setState(). [state, setState]
- Los estados son asincronos y cada vez que cambia refresca los componentes
- Como es asincrono hay un delay por lo que se debe usar uso del call stack.

## Paradigma funcional

- Evento (onSomething)
- Handler (La funcion que recibe el evento, el cual es un Callback)
