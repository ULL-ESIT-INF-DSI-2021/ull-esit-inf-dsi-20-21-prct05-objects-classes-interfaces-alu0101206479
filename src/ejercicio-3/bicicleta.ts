import {Vehiculo} from "./vehiculo";

export class Bicicleta extends Vehiculo {
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
