import {Vehiculo} from "./vehiculo";
import {Coche} from '../ejercicio-3/coche';
import {Moto} from '../ejercicio-3/moto';
import {Patinete} from '../ejercicio-3/patinete';
import {Tren} from '../ejercicio-3/tren';
import {Guagua} from '../ejercicio-3/guagua';
import {Bicicleta} from '../ejercicio-3/bicicleta';
import {Peaton} from '../ejercicio-3/peaton';

/**
 * ```typescript
 * // Ejemplo de creación
 *  const calle = new Street("Manuel Machado", "Armeñime", [coche1, moto1, moto2, coche2, tren]);
 * ```
 * Clase que representa una calle
 */
export class Street {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const calle = new Street("Manuel Machado", "Armeñime", [coche1, moto1, moto2, coche2, tren]);
   * ```
   * Constructor de la clase calle
   * @param nombre Nombre de la calle
   * @param localizacion Localización de la calle
   * @param vehiculosCirculando Vehículos circulando en la calle
   */
  constructor(private nombre: string, private localizacion: string, private vehiculosCirculando: Vehiculo[]) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  calle.getNombre();
   * ```
   * Función que retorna el nombre de la calle
   * @returns El atributo nombre
   */
  public getNombre() {
    return this.nombre;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  calle.setNombre("Antonio Machado");
   * ```
   * Función para cambiar el nombre de la calle
   * @param nombre El nuevo nombre que tendrá la calle
   */
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  calle.getLocalizacion();
   * ```
   * Función que retorna la localización de la calle
   * @returns El atributo localizacion
   */
  public getLocalizacion() {
    return this.localizacion;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  calle.setLocalizacion("Adeje");
   * ```
   * Función para cambiar la localizacion de la calle
   * @param localizacion La  nueva localización que tendrá la calle
   */
  public setLocalizacion(localizacion: string) {
    this.localizacion = localizacion;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  calle.getVehiculos();
   * ```
   * Función que retorna la localización de la callelos vehículos circulando en la calle
   * @returns El atributo vehiculosCirculando
   */
  public getVehiculos() {
    return this.vehiculosCirculando;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.añadirVehiculo(tren); // tren es un objeto de la clase Tren
   * ```
   * Función que añade un vehículo a la calle
   * @param vehiculo Vehiculo que se quiere añadir a la calle
   */
  public añadirVehiculo(vehiculo: Vehiculo) {
    this.vehiculosCirculando.push(vehiculo);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.quitarVehiculo(tren); // tren es un objeto de la clase Tren
   * ```
   * Función que quita un vehículo de la calle
   * @param vehiculo Vehiculo que se quiere quitar de la calle
   */
  public quitarVehiculo(vehiculo: Vehiculo) {
    const indice: number = this.vehiculosCirculando.indexOf(vehiculo);
    this.vehiculosCirculando.splice(indice, 1);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.cantidadVehiculos();
   * ```
   * Función que muestra la cantidad de vehículos de cada tipo que hay en la calle en cada momento
   */
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

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  articulo.velocidad();
   * ```
   * Función que muestra los vehiculos de la calle ordenados por la velocidad a la que circulan
   */
  public velocidad() {
    console.table(this.vehiculosCirculando.sort(((a, b) => b.velocidad - a.velocidad)));
  }
}
