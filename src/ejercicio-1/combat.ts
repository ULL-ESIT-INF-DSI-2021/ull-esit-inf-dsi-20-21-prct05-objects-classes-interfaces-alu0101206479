import {Pokemon} from '../ejercicio-1/pokemon';

export class Combat {
  private contrincante1: Pokemon;
  private contrincante2: Pokemon;

  constructor(contrincante1: Pokemon, contrincante2: Pokemon) {
    this.contrincante1 = contrincante1;
    this.contrincante2 = contrincante2;
  }

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
