import {Articulo} from './articulo';

export class GestorBibliografico {
  constructor(private articulos: Articulo[]) {}

  public getArticulos() {
    return this.articulos;
  }

  public mostrarArticulos() {
    console.table(this.articulos);
  }

  public busqueda(palabraClave?: string[], fechaPublicacion?: string, editorial?: string, nombreAutor?: string[]) {
    const salida: Articulo[] = [];
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
        salida.push(articulo);
      }
    });

    console.table(salida);
    return salida;
  }
}
