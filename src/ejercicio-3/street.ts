import {Vehiculo} from "./vehiculo";
import {Coche} from '../ejercicio-3/coche';
import {Moto} from '../ejercicio-3/moto';
import {Patinete} from '../ejercicio-3/patinete';
import {Tren} from '../ejercicio-3/tren';
import {Guagua} from '../ejercicio-3/guagua';
import {Bicicleta} from '../ejercicio-3/bicicleta';
import {Peaton} from '../ejercicio-3/peaton';


export class Street {
  constructor(private nombre: string, private localizacion: string, private vehiculosCirculando: Vehiculo[]) {}

  public getNombre() {
    return this.nombre;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public getLocalizacion() {
    return this.localizacion;
  }

  public setLocalizacion(localizacion: string) {
    this.localizacion = localizacion;
  }

  public getVehiculos() {
    return this.vehiculosCirculando;
  }

  public añadirVehiculo(vehiculo: Vehiculo) {
    this.vehiculosCirculando.push(vehiculo);
  }

  public quitarVehiculo(vehiculo: Vehiculo) {
    const indice: number = this.vehiculosCirculando.indexOf(vehiculo);
    this.vehiculosCirculando.splice(indice, 1);
  }

  public cantidadVehiculos() {
    const cantidadVehiculos: [["Coches", number], ["Motos", number], ["Patinetes", number], ["Trenes", number], ["Guaguas", number], ["Bicicletas", number], ["Peatones", number]] = [["Coches", 0], ["Motos", 0], ["Patinetes", 0], ["Trenes", 0], ["Guaguas", 0], ["Bicicletas", 0], ["Peatones", 0]];

    this.vehiculosCirculando.forEach((vehiculo) => {
      if (vehiculo instanceof Coche) cantidadVehiculos[0][1]++;
      if (vehiculo instanceof Moto) cantidadVehiculos[1][1]++;
      if (vehiculo instanceof Patinete) cantidadVehiculos[2][1]++;
      if (vehiculo instanceof Tren) cantidadVehiculos[3][1]++;
      if (vehiculo instanceof Guagua) cantidadVehiculos[4][1]++;
      if (vehiculo instanceof Bicicleta) cantidadVehiculos[5][1]++;
      if (vehiculo instanceof Peaton) cantidadVehiculos[6][1]++;
    });

    console.table(cantidadVehiculos);
  }

  public velocidad() {
    console.table(this.vehiculosCirculando.sort(((a, b) => b.velocidad - a.velocidad)));
  }
}
