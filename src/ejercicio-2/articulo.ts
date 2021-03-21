/**
 * ```typescript
 * // Ejemplo de creación
 *  const articulo1 = new Articulo("Lionel Messi se lesiono", ["ACOIDAN MESA HERNANDEZ"], ["alu0101206479@ull.edu.es"], ["Messi", "Lesionado"], "Messi se ha lesionado en el partido contra el Real Madrid", "21.10.2000", "MiCasa", 3);
 * ```
 * Clase que representa artículos
 */
export class Articulo {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const articulo1 = new Articulo("Lionel Messi se lesiono", ["ACOIDAN MESA HERNANDEZ"], ["alu0101206479@ull.edu.es"], ["Messi", "Lesionado"], "Messi se ha lesionado en el partido contra el Real Madrid", "21.10.2000", "MiCasa", 3);
   * ```
   * Constructor de la clase Articulo
   * @param titulo Titulo del artículo
   * @param autor Autor o autores del artículo
   * @param emailAutor Email del autor o emails de los autores
   * @param keywords Palabra o palabras clave
   * @param resumen Resumen del artículo
   * @param fechaPublicacion Fecha en la que se publico el artículo
   * @param editorial Editorial del artículo
   * @param numeroCitas Numero de veces que se ha referenciado el artículo en otros trabajos
   */
  constructor(private titulo: string, private autor: string[], private emailAutor: string[], private keywords: string[], private resumen: string, private fechaPublicacion: string, private editorial: string, private numeroCitas: number) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.getTitulo();
   * ```
   * Función que retorna el titulo del artículo
   * @returns El atributo titulo
   */
  public getTitulo() {
    return this.titulo;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.setTitulo("El cuento de nunca acabar");
   * ```
   * Función que cambia el título del artículo
   * @param titulo Nuevo título que tendra el artículo
   */
  public setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.getAutor();
   * ```
   * Función que retorna el autor o los autores del artículo
   * @returns El atributo autor
   */
  public getAutor() {
    return this.autor;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.añadirAutor("DIANA KAREN ALONSO DE MARTIN");
   * ```
   * Función que añade un autor al artículo
   * @param autor Autor que se quiere añadir al artículo
   */
  public añadirAutor(autor: string) {
    this.autor.push(autor);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.quitarAutor("DIANA KAREN ALONSO DE MARTIN");
   * ```
   * Función que quita un autor del artículo
   * @param autor Autor que se quiere quitar del artículo
   */
  public quitarAutor(autor: string) {
    const indice: number = this.autor.indexOf(autor);
    this.autor.splice(indice, 1);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.getEmailAutor();
   * ```
   * Función que retorna el email del autor o los emails de los autores del artículo
   * @returns El atributo emailAutor
   */
  public getEmailAutor() {
    return this.emailAutor;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.añadirEmailAutor("dianaalonsomartin99@gmail.com");
   * ```
   * Función que añade un email de un autor al artículo
   * @param email Email que se quiere añadir al artículo
   */
  public añadirEmailAutor(email: string) {
    this.emailAutor.push(email);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.quitarEmailAutor("dianaalonsomartin99@gmail.com");
   * ```
   * Función que quita un email de un autor del artículo
   * @param email Email que se quiere quitar del artículo
   */
  public quitarEmailAutor(email: string) {
    const indice: number = this.emailAutor.indexOf(email);
    this.emailAutor.splice(indice, 1);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.getKeywords();
   * ```
   * Función que retorna la palabra o las palabras clave del artículo
   * @returns El atributo keywords
   */
  public getKeywords() {
    return this.keywords;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.añadirKeyword("Realidad");
   * ```
   * Función que añade una palabra clave al artículo
   * @param keyword Palabra clave que se quiere añadir al artículo artículo
   */
  public añadirKeyword(keyword: string) {
    this.keywords.push(keyword);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.quitarKeyword("Realidad");
   * ```
   * Función que quita una palabra clave del artículo
   * @param keyword Palabra clave que se quiere quitar del artículo
   */
  public quitarKeyword(keyword: string) {
    const indice: number = this.keywords.indexOf(keyword);
    this.keywords.splice(indice, 1);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.getResumen();
   * ```
   * Función que retorna resumen del artículo
   * @returns El atributo resumen
   */
  public getResumen() {
    return this.resumen;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.setResumen("El euro se devalua debido a la gran inflación");
   * ```
   * Función que cambia el resumen del artículo
   * @param resumen Nuevo resumen que tendra el artículo
   */
  public setResumen(resumen: string) {
    this.resumen = resumen;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.getFechaPublicacion();
   * ```
   * Función que retorna la fecha en la que se publico el artículo
   * @returns El atributo fechaPublicacion
   */
  public getFechaPublicacion() {
    return this.fechaPublicacion;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.setFechaPublicacion("27.03.1999");
   * ```
   * Función que cambia la fecha en la que se publicó el artículo
   * @param fechaPublicacion Nueva fecha de publicación que tendrá el artículo
   */
  public setFechaPublicacion(fechaPublicacion: string) {
    this.fechaPublicacion = fechaPublicacion;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.getEditorial();
   * ```
   * Función que retorna la editorial del artículo
   * @returns El atributo editorial
   */
  public getEditorial() {
    return this.editorial;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.setEditorial("El País");
   * ```
   * Función que cambia la editorial del artículo
   * @param editorial Nueva editorial que tendrá el artículo
   */
  public setEditorial(editorial: string) {
    this.editorial = editorial;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.getNumeroCitas();
   * ```
   * Función que retorna el numero de veces que se ha referenciado el artículo en otros trabajos
   * @returns El atributo numeroCitas
   */
  public getNumeroCitas() {
    return this.numeroCitas;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.setNumeroCitas(5);
   * ```
   * Función que cambia el numero de veces que se ha referenciado el artículo en otros trabajos
   * @param numeroCitas Nuevo el numero de veces que se ha referenciado el artículo en otros trabajos
   */
  public setNumeroCitas(numeroCitas: number) {
    this.numeroCitas = numeroCitas;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.referencia();
   * ```
   * Función que que devuelve la referencia del artículo en formato APA para revista electrónica sin DOI
   * @returns La referencia del artículo en formato APA para revista electrónica sin DOI
   */
  public referencia() {
    let salida: string = "";
    let i = 0;
    this.autor.forEach((autor) => {
      if (i == 0) {
        salida = autor;
      }
      if (i > 0) {
        if (i == this.autor.length-1) {
          salida = salida + ` y ${autor}. `;
        } else {
          salida = salida + `, ${autor}.`;
        }
      }
      i++;
    });

    salida = salida + `(${this.fechaPublicacion}) "${this.titulo}", ${this.editorial}`;

    return salida;
  }
}
