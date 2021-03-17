export class Articulo {
  constructor(private titulo: string, private autor: string | string[], private emailAutor: string | string[], private keywords: string | string[], private resumen: string, private fechaPublicacion: string, private editorial: string, private numeroCitas: number) {}
}
