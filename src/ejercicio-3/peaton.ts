import {Vehiculo} from "./vehiculo";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const peaton = new Peaton(4, "Hombre", 0);
 * ```
 * Clase hija de la clase Vehiculo que representa a los peatones
 */
export class Peaton extends Vehiculo {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const peaton = new Peaton(4, "Hombre", 0);
   * ```
   * Constructor de la clase Peaton
   * @param velocidad Parametro heredado, velocidad a la que circula el peatón
   * @param tipo Parametro heredado, Tipo de peatón
   * @param ruedas Parametro heredado, Ruedas del peatón
   */
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
