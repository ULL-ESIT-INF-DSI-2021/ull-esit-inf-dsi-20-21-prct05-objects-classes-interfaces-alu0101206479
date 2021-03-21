import {Movable} from "./movable";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const vehiculo = new Vehiculo(120, "Coche", 4);
 * ```
 * Clase que representa a los vehiculos y será la clase padre padre de todo tipo de ellos
 */
export class Vehiculo implements Movable {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const vehiculo = new Vehiculo(120, "Coche", 4);
   * ```
   * Constructor de la clase Vehiculo
   * @param velocidad Velocidad a la que circula el vehículo
   * @param tipo Tipo de vehículo
   * @param ruedas Ruedas del vehículo
   */
  constructor(public velocidad: number, public tipo: string, public ruedas: number) {}
}
