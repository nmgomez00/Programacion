# git flow

## git branches

- master/main : PRODUCCION: Lo que las personas ven
- release: TESTEO: integramos y probamos que tan bien esta el código
- develop: Los que los desarrolladores hacen

- hotfix
- feature

lineas horizontales ("linea de tiempo" , diferentes versiones)

Se pueden dividir las ramas por nombres y apellidos (ramas salientes de las principales)
Puede haber conflictos en el merge
Se debe tener claro la division de tareas

Se realizan tests (unitarios, integracion, QA) en release

lineas verticales : merge

## version tag

x1.x2.x3
x1: version: MAJOR VERSIONS no compatible con versiones anteriores. Cambia muy poco (el numero). Puede ser un conjunto de features.
x2: FEATURE actualizaciones compatibles dentro de la misma version general
x3: HOT FIX (patch)

### corner case

- Error especifico de desarrolo

## pull request (pr)

- Es una peticion para mergear
- Tiene su metadata
- Existe una autoridades que controlan el repositorio
  - La PR es revisada y se decide si es aceptada o no.
  - En caso que no sea aceptada, se indica por que la PR es negada

Reiteracion test: unitarios, itegracion, etc.

### ci/cd continuous integration / continuous deployment. DevOps (herramienta: github actions)

- Controla acciones automatizadas
  (paas, dominio, variables de entorno)

## Etapas de git flow

- working directory
- staging area
- local repository
- remote repository

## iaas paas saas

- SaaS (Software as a Service): Ready-to-use applications accessed over the internet (e.g., Gmail, Salesforce).
- PaaS (Platform as a Service): A platform for developing, running, and managing applications without managing the infrastructure (e.g., AWS Elastic Beanstalk, Google App Engine).
- IaaS (Infrastructure as a Service): On-demand access to fundamental computing resources like servers and storage (e.g., AWS EC2, Azure VMs).
