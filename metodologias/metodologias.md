## tipos de software

1. software de sistema (no interactuas)
2. software de aplicacion
3. software orientado a administracion de clientes
4. software embebido (muy preciso)

## Codigo de ética

## series de pasos para crear softeware profesional

1. especificacion del software -> productos
2. diseño e implementacion
3. validacion del software
4. Evolucion del software

   De cada una de ellas:

5. productos
6. roles
7. pre condiciones y post condiciones (condiciones que tienen que pasar para arrancar la actividad o empezar otra)

- hay que seguir un plan y estandar
- Existen procesos mas y menos estructurados.
- no hay procesos ideales
- scrum y agile
- todos los equipos deben saber diagramas de uso, UML, metodologias

# tipos de modelos

Existen modelos genericos y especificos

## modelos genericos

- son frameworks para lograr un objetivo
  tipos:
  (en la practica se pueden en conjunto)

## modelos de cascada (waterfall)

- Saber que hacer, especificion, hacerlo, validacion, evolucion (actividades secuenciales)
- condiciones y precondiciones se debes cumplir
- Se habla de etapas, aqui influye el tiempo.
- cambios muy costosos
- cada etapa se tiene que terminar para empiece la otra. (esto involucra tiempo)
- Debemos dener un listado completo de requisitos para pasar a otra etapa.

### Mas en detalle

- Etapa 1: Definicion de requerimientos: analisis de requerimientos, terminanos con la lista de requerimeintos (definida y aprobada)
- Etapa 2: Diseño del sistema y software
- Etapa 3: Implementacion y prueba de unidad: Testeo
- Etapa 4: Integracion y prueba de sistema
- Etapa 5: Operacion y mantenimiento

## modelos de desarrolo incremental

- En vez de respetar estrictamente una actividad despues de la otra y al final entregar al cliente
- Entregamos software productivo incrementalmente al cliente
- Las etapas (especificacion, diseño e implementacion y validacion) interactuan entre sí
- Existe un bosquejo de descripcion
- Ejemplo:
  - Se genera una version inicial
  - sacamos una version 10 features, pasamos por las etapas y luego agregamos 15, y luego se saca otra version "version intermedia"
  - Este proceso se repite las veces que sea necesario (todo el tiempo interactuando con las etapas anteriormente mencionadas)
  - Por ultimo se genera la version final
- Puede haber deuda tecnica.

3. Modelo orientado a la reutilizacion de componentes

- Especificacion

  Realizar la ingenieria de requisitos

  - Estudio de la factibilidad: De esto obtenemos el informe de factibilidad, analisis financiero (cotizacion), estimaciones de tiempo
  - Obtencion y analisis de los requerimientos. Esto se logra a través de preguntas, ejemplos funcionales, encuesta a los usuarios, observacion de los usuarios (trabajo de campo), conocer a los proveedores, ver sus sistemas, y adaptase a ellos.
  - Generamos un modelo de sistema: A atraves de diagramas, por ejemplo, de caso de uso, dfd, diagrama de actividades o estado, etc.
  - Con todo esto, realizamos la especificacion de requerimientos, haciendo un ida y vuelta con la Obtencion y analisis de los requerimientos
  - Validacion: hay que validar todo el proceso.

  - requisitos de usuarios y sistema: Se realiza a través de la especificacion de requerimientos.
  - documentacion de requerimientos: El objetivo de la epecificacion en esto modelo de reutilizacion a trevés de la ingenieria de requerimientos

- Diseño e implementacion (Se retroalimentan):

  - Entrada de diseño
    - especificacion de requerimientos
    - Descripcion de los datos
    - Plataforma de informacion (informacion del relevante al sistema, que tecnologias prefiere, todo el software circundante)
  - Actividades de diseño
    - Diseño arquitectonico
    - Diseño interfaz
    - Diseño de componentes
    - Diseño de bases de datos
  - salida de diseño

    - Arquitectura del sistema
    - Especificacion de bases de datos
    - Especificacion de la interfaz
    - Especificacion de componentes
      offtopic (vercel v0)

- Validacion:
  - Especificacion de requisitos
  - Especificacion del sistema
  - Diseño del sistema
  - Diseño detallado
  - programacion y prueba de unidad
  - Prueba de integracion a nivel subsistema
  - Prueba de integracion del sistema
  - Prueba de aceptacion
  - servicio
    Se establecen plan de pruebas de subsistemas (con el diseño del sistema), sistema, aceptacion (con especificacion).

---

CORREGIR ESTA PARTE

- Etapa 2: Analisis de componentes
- Etapa 3: Modificar los requisitos
- Etapa 4: Diseño de sistema de reutilizacion
- Etapa 5: Desarrollo e integracion
- Etapa 6: Validacion

---

## Espiral:

- Se desarrollan prototipos para lograr adquirir mas especificaciones
  (especificacion - desarrolo e implementacion - validacion - Evaluacion )

- Revision
- analisis de riesgo
- Desarrolo y validacion
- planificacion

## Rup (Rational Unified Process)

- (especificacion - desarrolo e implementacion - validacion - Evaluacion )
  RUP por lo general se describe desde tres perspectivas:

1. Una perspectiva dinámica que muestra las fases del modelo a través del tiempo.
2. Una perspectiva estática que presenta las actividades del proceso que se establecen.
3. Una perspectiva práctica que sugiere buenas prácticas a usar durante el proceso.

- Posee una fase Concepcion, Elaboracion, contruccion y transicion

  - Concepcion:
  - Elaboracion:
  - Contruccion:
  - transicion:
    Todos estos procesos pueden ser iterativos en un desarrollo incremental

- Describe buenas practicas
  - Desarrollo de software de manera iterativa
  - Gestión de requerimientos
  - Usar arquitecturas basadas en componentes
  - Software modelado visualmente
  - Verificar la calidad del software
  - Controlar los cambios al software

## Ingenieria de requerimientos

- Es un enunciado en lenguaje natural el cual describe la funcionalidad que necesitamos para un sistema mas grande. Se suele acompañar con diagramas, de caso de usos.

### tipos de requerimientos

Dentro de los requerimientos tenenos los de **Usuario** (Lo que queremos), y los de **sistema** (Como lo hacemos).

- Otros tipos:

  - Funcionales: Que es lo que tiene que hacer el sistema y lo que no tiene que hacer
  - No funcionales: son restricciones, actividad de soporte a la funcionalidad. Requisitos que no añaden a la funcionalidad pero añaden limitaciones s sobre servicios o funciones que ofrece el sistema.
    (Tienen que estar bien descriptas)

    ***

    next: diagramas de caso de uso, documentos de requisitos

    ## documento de requerimientos
