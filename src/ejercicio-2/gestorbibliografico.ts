import {Articulo} from './articulo';

export class GestorBibliografico {
  constructor(private articulos: Articulo[]) {}

  public getArticulos() {
    return this.articulos;
  }
}
