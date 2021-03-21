import {Vehiculo} from "./vehiculo";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const guagua = new Guagua(20, "Titsa", 8);
 * ```
 * Clase hija de la clase Vehiculo que representa a las guaguas
 */
export class Guagua extends Vehiculo {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const guagua = new Guagua(20, "Titsa", 8);
   * ```
   * Constructor de la clase Guagua
   * @param velocidad Parametro heredado, velocidad a la que circula la guagua
   * @param tipo Parametro heredado, Tipo de guagua
   * @param ruedas Parametro heredado, Ruedas de la guagua
   */
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
