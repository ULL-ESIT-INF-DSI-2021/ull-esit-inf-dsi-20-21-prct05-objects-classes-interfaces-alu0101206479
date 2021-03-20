import {Movable} from "./movable";

export class Vehiculo implements Movable {
  constructor(public velocidad: number, public tipo: string, public ruedas: number) {}
}
