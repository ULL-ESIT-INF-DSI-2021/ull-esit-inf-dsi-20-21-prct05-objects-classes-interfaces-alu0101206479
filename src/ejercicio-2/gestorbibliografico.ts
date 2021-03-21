import {Articulo} from './articulo';

/**
 * ```typescript
 * // Ejemplo de creación
 *  const gestor = new GestorBibliografico([articulo1, articulo2, articulo3]);
 * ```
 * Clase que representa un gestor bibliografico
 */
export class GestorBibliografico {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const gestor = new GestorBibliografico([articulo1, articulo2, articulo3]);
   * ```
   * Constructor de la clase GestorBibliografico
   * @param articulos Articulos que tendrá el gestor
   */
  constructor(private articulos: Articulo[]) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  gestor.getArticulos()
   * ```
   * Función que retorna los artículos del gestor bibliográfico
   * @returns El atributo articulos
   */
  public getArticulos() {
    return this.articulos;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  gestor.añadirArtículos(articulo); // articulo es un objeto Articulo
   * ```
   * Función que añade un artículo al gestor bibliográfico
   * @param articulo Artículo que se quiere añadir al gestor bibliográfico
   */
  public añadirArticulos(articulo: Articulo) {
    this.articulos.push(articulo);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  gestor.quitarArtículos(articulo); // articulo es un objeto Articulo
   * ```
   * Función que quita un artículo del gestor bibliográfico
   * @param articulo Artículo que se quiere quitar del gestor bibliográfico
   */
  public quitarArticulos(articulo: Articulo) {
    const indice: number = this.articulos.indexOf(articulo);
    this.articulos.splice(indice, 1);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  gestor.mostrarArtículos();
   * ```
   * Función que muestra los artículos en formato tabla
   */
  public mostrarArticulos() {
    console.table(this.articulos);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  gestor.busqueda(["Cristiano"], "21.10.2000", undefined, undefined);
   * ```
   * Función que permite buscar artículos en el gestor por diversos parametros, muestra en formato tabla los artículos exportados y devuelve estos en formato de cita APA
   * @param palabraClave Parametro opcional, palabra o palabras claves con las que se realizaran la búsqueda
   * @param fechaPublicacion Parametro opcional, fecha de publicacion con la que se quiere buscar el articulo
   * @param editorial Parametro opcional, editorial con la que se quiere buscar el artículo
   * @param nombreAutor Autor o autores con los ue se quieren buscar el articulo
   * @returns Los resultados de una búsqueda en formato de cita APA.
   */
  public busqueda(palabraClave?: string[], fechaPublicacion?: string, editorial?: string, nombreAutor?: string[]) {
    const salida: Articulo[] = [];
    let apa: string = "";
    let i: number = 0;
    let parametrosAcertados: number = 0;
    let parametrosIntroducidos: number = 0;

    if (typeof(palabraClave) !== "undefined") parametrosIntroducidos++;
    if (typeof(fechaPublicacion) !== "undefined") parametrosIntroducidos++;
    if (typeof(editorial) !== "undefined") parametrosIntroducidos++;
    if (typeof(nombreAutor) !== "undefined") parametrosIntroducidos++;

    this.articulos.forEach((articulo) => {
      parametrosAcertados = 0;
      if (typeof(palabraClave) !== "undefined") {
        palabraClave.forEach((palabra) => {
          while (i < articulo.getKeywords().length) {
            if (articulo.getKeywords()[i] == palabra) {
              parametrosAcertados++;
              i = articulo.getKeywords().length;
            } else {
              i++;
            }
          }
        });

        i = 0;
      }

      if (typeof(fechaPublicacion) !== "undefined") {
        if (articulo.getFechaPublicacion() == fechaPublicacion) {
          parametrosAcertados++;
        }
      }

      if (typeof(editorial) !== "undefined") {
        if (articulo.getEditorial() == editorial) {
          parametrosAcertados++;
        }
      }

      if (typeof(nombreAutor) !== "undefined") {
        nombreAutor.forEach((autor) => {
          while (i < articulo.getAutor().length) {
            if (articulo.getAutor()[i] == autor) {
              parametrosAcertados++;
              i = articulo.getAutor().length;
            } else {
              i++;
            }
          }
        });

        i = 0;
      }

      if (parametrosAcertados == parametrosIntroducidos) {
        apa = apa + `${articulo.referencia()}\n`;
        salida.push(articulo);
      }
    });

    console.table(salida);
    return apa;
  }
}
