import {Vehiculo} from "./vehiculo";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const coche = new Coche(92, "Alfa Romeo", 4);
 * ```
 * Clase hija de la clase Vehiculo que representa a los coches
 */
export class Coche extends Vehiculo {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const coche = new Coche(92, "Alfa Romeo", 4);
   * ```
   * Constructor de la clase Coche
   * @param velocidad Parametro heredado, velocidad a la que circula el coche
   * @param tipo Parametro heredado, Tipo de coche
   * @param ruedas Parametro heredado, Ruedas del coche
   */
  constructor(velocidad: number, tipo: string, ruedas: number) {
    super(velocidad, tipo, ruedas);
  }
}
