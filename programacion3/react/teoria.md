## React patterns

### Contenedor(padre) presentacional (hijo)

- El hijo cambia por la prop cambia o por que el padre cambia
- Para evitar eso se puede usar useCallBack, useMemo, Memo (aunque en la nueva verson pueden ser eliminados para ser actualizado)
## Cuando un handler tiene muchos setStates se usa un "reducer"
- Las acciones tienen un type y un value