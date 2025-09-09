- Onion architecture
Una de ellas es el modelo de presentacion MVC  
## Arquitectura MVC
## MODEL VIEW CONTROLLER
## SSR (server side rendering) mejor para el SEO.
## CSR (Client side rendering)

## react server components

pero ahora vamos a usar model controller ya que la view te la genera el servidor
- El controlador se comunica con el modelo, que se comunica con la base de datos y este envia una respuesta al modelo y este a su vez al controlador
- La capa controlador recibe las peticiones y las maneja (es importante el auth).
- En el modelo esta la logica de negocio (filtrar, buscar, agrupar etc..)
## Capas intermedias 
- Services (entre el controlador y el modelo)
- ORM (object relational mapping) (entre el modelo y la base de datos)

## Formas de escribir la base de datos
- Code first: tengo objetos y lo traduzco a bases de datos
- Database first: tengo la base de datos y lo transformo en objetos
## Patrones de diseño
- DTO (data transfer protocol) para comunicar capas
- DI (Dependency injection)
- Repository
(ver handlers)

- dependencias -> package.json
## decorador [name]
Un decorador se aplica una clase, una propiedad de una clase, un metodo dentro una clase o a un parametro dentro de una clase una clase.En un paramtro se pone a la izquierda del mismo como un tipo.
Un decorador puede recibir parametros, no deja de ser una funcion.

## SWAGGER
Es una biblioteca para documentar codigo y muchas mas utilidades

## error de permisos
- Haces click en el mensaje de error
- Escribis "thisisunsafe"
