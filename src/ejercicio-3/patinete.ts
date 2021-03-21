import {Vehiculo} from "./vehiculo";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const patinete = new Patinete(23, "QUEENS", 2);
 * ```
 * Clase hija de la clase Vehiculo que representa a los patinetes
 */
export class Patinete extends Vehiculo {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const patinete = new Patinete(23, "QUEENS", 2);
   * ```
   * Constructor de la clase Patinete
   * @param velocidad Parametro heredado, velocidad a la que circula el patinete
   * @param tipo Parametro heredado, Tipo de patinete
   * @param ruedas Parametro heredado, Ruedas del patinete
   */
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
