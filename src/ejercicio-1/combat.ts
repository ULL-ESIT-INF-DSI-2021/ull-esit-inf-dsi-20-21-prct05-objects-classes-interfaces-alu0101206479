import {Pokemon} from '../ejercicio-1/pokemon';

/**
 * ```typescript
 * // Ejemplo de creación
 *  const combate = new Combat(Venusaur, Charizard);
 * ```
 * Clase que representa un comabte Pokemon
 */
export class Combat {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const combate = new Combat(Venusaur, Charizard);
   * ```
   * Constructor de la clase Combat
   * @param contrincante1 Pokemon 1 del combate
   * @param contrincante2 Pokemon 2 del combate
   */
  constructor(private contrincante1: Pokemon, private contrincante2: Pokemon) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.getContrincante1();
   * ```
   * Función que retorna el Pokemon 1 del combate
   * @return El atributo contrincante1
   */
  public getContrincante1() {
    return this.contrincante1;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.setContrincante1(Raichu);
   * ```
   * Función para cambiar el atributo contrincante1
   * @param contrincante1 El nuevo Pokemon 1 del combate
   */
  public setContricante1(contrincante1: Pokemon) {
    this.contrincante1 = contrincante1;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.getContrincante2();
   * ```
   * Función que retorna el Pokemon 2 del combate
   * @returns El atributo contrincante2
   */
  public getContrincante2() {
    return this.contrincante2;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.setContrincante2(Raichu);
   * ```
   * Función para cambiar el atributo contrincante2
   * @param contrincante2 El nuevo Pokemon 2 del combate
   */
  public setContricante2(contrincante2: Pokemon) {
    this.contrincante2 = contrincante2;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.dañoPokemon(1);
   * ```
   * Función que calcula el daño que causa un Pokemon a otro
   * @param pokemonAtacante Un número que indica si ataca el Pokemon 1 o el Pokemon 2
   * @returns El daño que causa un Pokemon a otro
   */
  public dañoPokemon(pokemonAtacante: number): number {
    let efectividad: number = 0;
    let daño: number = 0;

    if (this.contrincante1.getTipo() == this.contrincante2.getTipo()) {
      efectividad = 0.5;
    } else {
      switch (this.contrincante1.getTipo()) {
        case "Fuego":
          if (this.contrincante2.getTipo() == "Planta") {
            efectividad = 2;
          }
          if (this.contrincante2.getTipo() == "Eléctrico") {
            efectividad = 1;
          }
          if (this.contrincante2.getTipo() == "Agua") {
            efectividad = 0.5;
          }
          break;

        case "Planta":
          if (this.contrincante2.getTipo() == "Agua") {
            efectividad = 2;
          }
          if (this.contrincante2.getTipo() == "Eléctrico") {
            efectividad = 1;
          }
          if (this.contrincante2.getTipo() == "Fuego") {
            efectividad = 0.5;
          }
          break;

        case "Eléctrico":
          if (this.contrincante2.getTipo() == "Agua") {
            efectividad = 2;
          }
          if ((this.contrincante2.getTipo() == "Fuego") || (this.contrincante2.getTipo() == "Planta")) {
            efectividad = 1;
          }
          break;

        case "Agua":
          if (this.contrincante2.getTipo() == "Fuego") {
            efectividad = 2;
          } else {
            efectividad = 0.5;
          }
          break;
      }
    }

    if (pokemonAtacante == 1) {
      daño = 50 * (this.contrincante1.getEstadisticasBasicas().ataque / this.contrincante2.getEstadisticasBasicas().defensa) * efectividad;
    } else {
      if (efectividad == 2) {
        efectividad = 0.5;
      }
      if (efectividad == 0.5) {
        efectividad = 2;
      }
      daño = 50 * (this.contrincante2.getEstadisticasBasicas().ataque / this.contrincante1.getEstadisticasBasicas().defensa) * efectividad;
    }
    return daño;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.start();
   * ```
   * Función que simula el combate Pokemon
   */
  public start() {
    let i: number = 1;
    let daño: number = 0;
    console.log(`${this.contrincante1.getNombre()}(HP: ${this.contrincante1.getEstadisticasBasicas().hp}) vs ${this.contrincante2.getNombre()}(HP: ${this.contrincante2.getEstadisticasBasicas().hp})\n`);

    while (1) {
      if (i == 1) {
        console.log(`Ataca ${this.contrincante1.getNombre()}`);
        daño = Math.floor(this.dañoPokemon(i));
        if (this.contrincante2.getEstadisticasBasicas().hp-daño > 0) {
          this.contrincante2.setHP(this.contrincante2.getEstadisticasBasicas().hp-daño);
        } else {
          this.contrincante2.setHP(0);
        }
        console.log(`¡BOOOOOOM! ${this.contrincante1.getNombre()} hizo ${daño} de daño, dejando a ${this.contrincante2.getNombre()} con un HP de ${this.contrincante2.getEstadisticasBasicas().hp}\n`);
        i = 2;

        if (this.contrincante2.getEstadisticasBasicas().hp == 0) {
          console.log(`Ha acabado el combate, campeón ¡¡¡¡¡${this.contrincante1.getNombre()}!!!!\n`);
          break;
        }
      } else {
        console.log(`Ataca ${this.contrincante2.getNombre()}`);
        daño = Math.floor(this.dañoPokemon(i));
        if (this.contrincante1.getEstadisticasBasicas().hp-daño > 0) {
          this.contrincante1.setHP(this.contrincante1.getEstadisticasBasicas().hp-daño);
        } else {
          this.contrincante1.setHP(0);
        }
        console.log(`¡BOOOOOOM! ${this.contrincante2.getNombre()} hizo ${daño} de daño, dejando a ${this.contrincante1.getNombre()} con un HP de ${this.contrincante1.getEstadisticasBasicas().hp}\n`);
        i = 1;

        if (this.contrincante1.getEstadisticasBasicas().hp == 0) {
          console.log(`Ha acabado el combate, campeón ¡¡¡¡¡${this.contrincante2.getNombre()}!!!!\n`);
          break;
        }
      }
    }
  }
}
