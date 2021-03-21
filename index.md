# Informe
## Práctica 5 - Objetos, clases e interfaces
### Desarrollo de Sistemas Informáticos
### ACOIDAN MESA HERNANDEZ - alu0101206479@ull.edu.es

#### Introducción
Esto es un informe para poder llevar a cabo la **práctica 5 de Desarrollo de Sistemas Informáticos**, hemos vuelto a crear una estructura de directorios adecuada (algo que ya sabíamos de la práctica anterior), pero añadiendole el uso del generador de documentación [TypeDoc](https://typedoc.org/) y el uso de [Mocha](https://mochajs.org/) (Marco de pruebas rico en funciones) con [Chai](https://www.chaijs.com/) (Librería de aserciones BDD / TDD para node y el navegador que se puede combinar con cualquier marco de pruebas JS o TS, en este caso lo hemos configurado con Mocha). 

A parte, como se ha llevado a cabo la metodología **TDD**, hemos reforzado nuestros conocimientos sobre ello una vez más. Y también hemos aprendido a utilizar **objetos, clases e interfaces** entre otras muchas herramientas. En este informe se mostrarán la resolución de los ejercicios y la explicación de estas soluciónes.



#### Objetivos
Los objetivos de esta práctica han sido crear la estructura de directorios adecuada para trabajar, añadiendole el generador de documentación TypeDoc y el uso del marco de pruebas Mocha con la libreria Chai. Pero lo principal ha sido resolver los 3 ejercicios que nos planteaban en el [enunciado](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/), para así familiarizarnos más profundamente con TypeScript, en concreto con los objetos, clases e interfaces.



#### Crear la estructura básica y adecuada del proyecto, añadiendole el generador de documentación TypeDoc y el uso del marco de pruebas Mocha con la librería Chai.
Para crear la [estructura básica del proyecto](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html), lo haremos como lo hicimos en la práctica anterior (Estará el enlace al informe de esta en la bibliografía), también podemos pinchar el hiperenlace adjuntado que se encontrará disponible también en la bibliografía.

Posteriormente, para configurar y aprender a usar el generador de configuración [TypeDoc](https://typedoc.org/) y el marco de pruebas [Mocha](https://mochajs.org/) con la librería [Chai](https://www.chaijs.com/) podremos consultar la documentación o pinchar en los siguientes hiperenlaces a vídeos explicativos (Estos enlaces también se encuentran en la bibliografía):

  * [Vídeo de ejemplo de instalación y configuración de TypeDoc en un proyecto TypeScript](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view)
  * [Vídeo de ejemplo de instalación y configuración de Mocha y Chai en un proyecto TypeScript](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view?usp=sharing)

Finalmente, nos tiene que quedar algo parecido a lo siguiente (Se muestra a la izquierda la estructura y en el medio algunos archivos abiertos para que se vea su interior):

![Estructura del directorio](src/estructurafinal.png)



#### Ejercicios
En cuanto a los ejercicios que se mostrarán a continuación, podemos ver sus respectivos enunciados [en el enunciado de la práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/). El código fuente de estos ejercicios deberá estar alojado en un directorio independiente con nombre `ejercicio-n/` dentro del directorio `src/` de nuestro proyecto. Dentro del directorio correspondiente de cada ejercicio debemos incluir cada clase desarrollada en un fichero independiente.

Cabe destacar que también se debe aportar la documentación mediante el uso de TypeDoc y usar una metodología de desarrollo dirigido por pruebas/comportamiento. El código fuente de las pruebas deberá estar alojado en un fichero independiente por ejercicio (`ejercicio-n.spec.ts`) dentro del directorio `tests/`.


##### Ejercicio 1 - Pokedex
En este ejercicio deberemos de crear las siguientes clases:
  * Clase Pokemon: Es la clase que representa a los Pokemons, su código lo podremos observar en el siguiente enlace:

      [ttps://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/src/ejercicio-1/pokemon.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/src/ejercicio-1/pokemon.ts)
      
    Esta clase contendrá los siguientes atributos privados:     
      * `nombre`: Nombre del Pokemon (String) 
      * `peso`: Peso del Pokemon (Number) 
      * `altura`: Altura del Pokemon (Number) 
      * `tipo`: Tipo del Pokemon (String) 
      * `estadisticasBasicas`: Estadisticas básicas (ataque, defensa, velocidad, HP) del Pokemon (Propiedad)  

    Y contendrá las siguientes funciones públicas:
      * `getNombre()`: Función para obtener el atributo privado `nombre`
      * `setNombre(nombre: string)`: Función para cambiar el atributo privado `nombre`
      * `getPeso()`: Función para obtener el atributo privado `peso`
      * `setPeso(peso: number)`: Función para cambiar el atributo privado `peso`
      * `getAltura()`: Función para obtener el atributo privado `altura`
      * `setAltura(altura: number)`: Función para cambiar el atributo privado `altura`
      * `getTipo()`: Función para obtener el atributo privado `tipo`
      * `setTipo(tipo: string)`: Función para cambiar el atributo privado `tipo`
      * `getEstadisticasBasicas()`: Función para obtener el atributo privado `estadisticasBasicas`
      *  `setAtaque(ataque: number)`: Función para cambiar la propiedad `ataque` del atributo privado `estadisticasBasicas`
      *  `setDefensa(defensa: number)`: Función para cambiar la propiedad `defensa` del atributo privado `estadisticasBasicas`
      *  `setVelocidad(velocidad: number)`: Función para cambiar la propiedad `velocidad` del atributo privado `estadisticasBasicas`
      *  `setHP(hp: number)`: Función para cambiar la propiedad `hp` del atributo privado `estadisticasBasicas`


  * Clase Pokedex: Es la clase que representa a la Pokedex (Registro de todos los Pokemons), su código lo podremos observar en el siguiente enlace:

      [https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/src/ejercicio-1/pokedex.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/src/ejercicio-1/pokedex.ts)
      
    Esta clase contendrá el siguiente atributo privado
      * `pokemons`: Todos los Pokemons que tendrá la Pokédex (Pokemon[])

    Y contendrá las siguientes funciones públicas:
      * `getPokemons()`: Función para obtener el atributo privado `pokemons`
      * `añadirPokemons(pokemon: Pokemon)`: Función para añadir un Pokemon a la Pokedex (se añade con `push(pokemon)` un Pokemon al atributo `pokemons`.
      * `quitarPokemons(pokemon: Pokemon)`: Función para quitar un Pokemon de la Pokedex (se quita un Pokemon del atributo Pokemons).
      * `mostrarPokemons()`: Función para mostrar en una tabla los Pokemons de la Pokedex a través de `console.table`.
      * `setPokemon(pokemon: Pokemon, atributo: string, valor: string | number)`: Función para cambiar un atributo en concreto de un Pokemon en concreto (La función lo hace a través de condicionales con `typeof()`, guardianes de tipo y le entra el Pokemon al que se le quiere editar un atributo, el atributo que se le quiere cambiar al Pokemon y el nuevo valor que se le quiere poner al atrbiuto).


  * Clase Combat: Es la clase que representa un combate Pokemon, su código lo podremos observar en el siguiente enlace:

      [https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/src/ejercicio-1/combat.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/src/ejercicio-1/combat.ts)
      
    Esta clase contendrá los siguientes atributos privados:
      * `contrincante1`: Pokemon 1 del combate (Pokemon)
      * `contrincante2`: Pokemon 2 del combate (Pokemon)

    Y contendrá las siguientes funciones públicas:
      * `getContrincante1()`: Función para obtener el atributo privado `contrincante1`
      * `setContrincante1()`: Función para cambiar el atributo privado `contrincante1`
      * `getContrincante2()`: Función para obtener el atributo privado `contrincante2`
      * `setContrincante2()`: Función para cambiar el atributo privado `contrincante2`
      * `dañoPokemon(pokemonAtacante: number): number`: Función que calcula a través de un `switch` y condicionales el daño que causa un Pokemon a otro, le entra como parámetro un número que indica si ataca el Pokemon 1 o el Pokemon 2.
      * `start()`: Función que muestra por pantalla la simulación del combate primero, esto se hace a través de un bucle `while` que se va a ejecutar hasta que a uno de los dos Pokemons del combate se le acabe el hp (Primero ataca un Pokemon y después el otro).


Las pruebas de este ejercicio se pueden observar en el siguiente enlace:

  [https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/tests/ejercicio-1.spec.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/tests/ejercicio-1.spec.ts)
  
Y la salida de estas pruebas al ejecutar `npm run test` debería ser la siguiente:

  ![Salida del npm run test del ejercicio 1](src/pruebaejercicio1.png)
  


##### Ejercicio 2 - Gestor bibliográfico
En este ejercicio deberemos de crear las siguientes clases:
  * Clase Articulo: Es la clase que representa articulos, su código lo podemos observar en el siguiente enlace:

      [https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/src/ejercicio-2/articulo.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101206479/blob/master/src/ejercicio-2/articulo.ts)
      
    Esta clase contendrá los siguientes atributos privados:     
      * `titulo`: Título del artículo (String) 
      * `autor`: Autor o autores del artículo (String[]) 
      * `emailAutor`: Email del autor o emails de los autores (String[]) 
      * `keywords`: Palabra o palabras clave del artículo (String[]) 
      * `resumen`: Resumen del artículo (String)
      * `fechaPublicacion`: Fecha en la que se publico el artículo (String)
      * `editorial`: Editorial del artículo (String)
      * `numeroCitas`: Numero de veces que se ha referenciado el artículo en otros trabajos (Number)

    Y contendrá las siguientes funciones públicas:
      * `getTitulo()`: Función para obtener el atributo privado `titulo`
      * `setTitulo(titulo: string)`: Función para cambiar el atributo privado `titulo`
      * `getAutor()`: Función para obtener el atributo privado `autor`
      * `añadirAutor(autor: string)`: Función para añadir un autor al artículo (se añade con `push(autor)` un autor al atributo `autor`.
      * `quitarAutor(autor: string)`: Función para quitar un autor del artículo (se quita un autor del atributo `autor`).
      * `getEmailAutor()`: Función para obtener el atributo privado `emailAutor`
      * `añadirEmailAutor(email: string)`: Función para añadir el email de un autor al artículo (se añade con `push(email)` el email de un autor al atributo `emailAutor`.
      * `quitarEmailAutor(email: string)`: Función para quitar el email de un autor del artículo (se quita el email de un autor del atributo `emailAutor`).
      * `getKeywords()`: Función para obtener el atributo privado `keywords`
      * `añadirKeyword(keyword: string)`: Función para añadir una palabra clave al artículo (se añade con `push(keyword)` la palabra clave al atributo `keywords`.
      * `quitarKeyword(keyword: string)`: Función para quitar una palabra clave del artículo (se quita una palabra clave del atributo `keywords`).
      * `getResumen()`: Función para obtener el atributo privado `resumen`
      * `setResumen(resumen: string)`: Función para cambiar el atributo privado `resumen`
      * `getFechaPublicacion()`: Función para obtener el atributo privado `fechaPublicacion`
      * `setFechaPublicacion(fechaPublicacion: string)`: Función para cambiar el atributo privado `fechaPublicacion
      * `getEditorial()`: Función para obtener el atributo privado `editorial`
      * `setEditorial(editorial: string)`: Función para cambiar el atributo privado `editorial`
      * `getNumeroCitas()`: Función para obtener el atributo privado `numeroCitas`
      * `setNumeroCitas(numeroCitas: number)`: Función para cambiar el atributo privado `numeroCItas`
      * `referencia()`: Función que devuelve la referencia del artículo en formato [APA para revista electrónica sin DOI](https://biblioguias.uam.es/citar/estilo_apa). Este formato es el siguiente **Autor o autores, (Fecha de publicación) Título, Editorial**. Esto lo podemos conseguir creando una cadena que va a ser la que se devolverá. En esta vamos introduciendo los autores con un bucle `forEach`, posteriormente la fecha de publicación del artículo, el título y finalmente la editorial.

