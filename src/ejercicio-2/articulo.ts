export class Articulo {
  constructor(private titulo: string, private autor: string[], private emailAutor: string[], private keywords: string[], private resumen: string, private fechaPublicacion: string, private editorial: string, private numeroCitas: number) {}

  public getTitulo() {
    return this.titulo;
  }

  public getAutor() {
    return this.autor;
  }

  public getEmailAutor() {
    return this.emailAutor;
  }

  public getKeywords() {
    return this.keywords;
  }

  public getResumen() {
    return this.resumen;
  }

  public getFechaPublicacion() {
    return this.fechaPublicacion;
  }

  public getEditorial() {
    return this.editorial;
  }

  public getNumeroCitas() {
    return this.numeroCitas;
  }

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
