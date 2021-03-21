export class Articulo {
  constructor(private titulo: string, private autor: string[], private emailAutor: string[], private keywords: string[], private resumen: string, private fechaPublicacion: string, private editorial: string, private numeroCitas: number) {}

  public getTitulo() {
    return this.titulo;
  }

  public setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  public getAutor() {
    return this.autor;
  }

  public añadirAutor(autor: string) {
    this.autor.push(autor);
  }

  public quitarAutor(autor: string) {
    const indice: number = this.autor.indexOf(autor);
    this.autor.splice(indice, 1);
  }

  public getEmailAutor() {
    return this.emailAutor;
  }

  public añadirEmailAutor(email: string) {
    this.emailAutor.push(email);
  }

  public quitarEmailAutor(email: string) {
    const indice: number = this.emailAutor.indexOf(email);
    this.emailAutor.splice(indice, 1);
  }

  public getKeywords() {
    return this.keywords;
  }

  public añadirKeyword(keyword: string) {
    this.keywords.push(keyword);
  }

  public quitarKeyword(keyword: string) {
    const indice: number = this.keywords.indexOf(keyword);
    this.keywords.splice(indice, 1);
  }

  public getResumen() {
    return this.resumen;
  }

  public setResumen(resumen: string) {
    this.resumen = resumen;
  }

  public getFechaPublicacion() {
    return this.fechaPublicacion;
  }

  public setFechaPublicacion(fechaPublicacion: string) {
    this.fechaPublicacion = fechaPublicacion;
  }

  public getEditorial() {
    return this.editorial;
  }

  public setEditorial(editorial: string) {
    this.editorial = editorial;
  }

  public getNumeroCitas() {
    return this.numeroCitas;
  }

  public setNumeroCitas(numeroCitas: number) {
    this.numeroCitas = numeroCitas;
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
