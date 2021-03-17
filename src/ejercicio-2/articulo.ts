export class Articulo {
  constructor(private titulo: string, private autor: string | string[], private emailAutor: string | string[], private keywords: string | string[], private resumen: string, private fechaPublicacion: string, private editorial: string, private numeroCitas: number) {}

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
}