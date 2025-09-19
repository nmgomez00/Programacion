- [Three states of git](#three-states-of-git)
- [git uses a hash function to store and validate data](#git-uses-a-hash-function-to-store-and-validate-data)
- [TIPOS DE OBJETOS](#tipos-de-objetos)
- [WORKFLOW](#workflow)
- [archivo index](#archivo-index)
- [las branchs son referencias](#las-branchs-son-referencias)
- [head es un puntero que apunta a la rama actual](#head-es-un-puntero-que-apunta-a-la-rama-actual)

### Three states of git

- working directory
- staging area
- .git directory (repository)

### git uses a hash function to store and validate data

Everything in Git is checksummed before it is stored and is then referred to by that checksum. This means it’s impossible to change the contents of any file or directory without Git knowing about it. This functionality is built into Git at the lowest levels and is integral to its philosophy. You can’t lose information in transit or get file corruption without Git being able to detect it.

The mechanism that Git uses for this checksumming is called a SHA-1 hash. This is a 40-character string composed of hexadecimal characters (0–9 and a–f) and calculated based on the contents of a file or directory structure in Git. A SHA-1 hash looks something like this:

24b9da6552252987aa493b52f8696cd6d3b00373
You will see these hash v-

### TIPOS DE OBJETOS

- blob: son los archivos que git hashea individualmente
- tree: resuelve el problema de guardar archivos y te permite guardar un grupo de archivos juntos.
- commit: puede tener referencia al padre y tiene almacenado el hash del tree, mas la metadata comun.

### WORKFLOW

1. crear los blobs con git hash-object.
2. Crear los tree object con git write-tree
   Se pueden examinar el contenido con git cat-file -p 'hash'
3. Creamos el commit con el comando git commit-tree

### archivo index

es equivalente al staging area, donde se guardan los elementos

- git update-index --add --chacheinfor 100644
- git write-tree

### las branchs son referencias

### head es un puntero que apunta a la rama actual

- detached: cuando head apunta a un hash y no a una branch
