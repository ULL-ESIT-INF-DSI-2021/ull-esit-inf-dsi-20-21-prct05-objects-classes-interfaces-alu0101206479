import {Vehiculo} from "./vehiculo";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const bicicleta = new Bicicleta(14, "Specialized", 2);
 * ```
 * Clase hija de la clase Vehiculo que representa a las bicicletas
 */
export class Bicicleta extends Vehiculo {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const bicicleta = new Bicicleta(14, "Specialized", 2);
   * ```
   * Constructor de la clase Bicicleta
   * @param velocidad Parametro heredado, velocidad a la que circula la bicicleta
   * @param tipo Parametro heredado, Tipo de bicicleta
   * @param ruedas Parametro heredado, Ruedas de la bicicleta
   */
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
