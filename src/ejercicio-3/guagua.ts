import {Vehiculo} from "./vehiculo";

export class Guagua extends Vehiculo {
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
