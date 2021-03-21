import {Vehiculo} from "./vehiculo";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const tren = new Tren(35, "MFTRAIN", 24);
 * ```
 * Clase hija de la clase Vehiculo que representa a los trenes
 */
export class Tren extends Vehiculo {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const tren = new Tren(35, "MFTRAIN", 24);
   * ```
   * Constructor de la clase Tren
   * @param velocidad Parametro heredado, velocidad a la que circula el tren
   * @param tipo Parametro heredado, Tipo de tren
   * @param ruedas Parametro heredado, Ruedas del tren
   */
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
