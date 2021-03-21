import {Vehiculo} from "./vehiculo";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const moto = new Moto(43, "Yamaha", 2);
 * ```
 * Clase hija de la clase Vehiculo que representa a las motos
 */
export class Moto extends Vehiculo {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const moto = new Moto(43, "Yamaha", 2);
   * ```
   * Constructor de la clase Moto
   * @param velocidad Parametro heredado, velocidad a la que circula la moto
   * @param tipo Parametro heredado, Tipo de moto
   * @param ruedas Parametro heredado, Ruedas de la moto
   */
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
