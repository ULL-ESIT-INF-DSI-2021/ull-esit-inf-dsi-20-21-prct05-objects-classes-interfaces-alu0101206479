import {Vehiculo} from "./vehiculo";

export class Coche extends Vehiculo {
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
