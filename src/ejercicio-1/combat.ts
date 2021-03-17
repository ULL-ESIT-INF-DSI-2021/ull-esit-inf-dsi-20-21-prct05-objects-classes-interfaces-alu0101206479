import {Pokemon} from '../ejercicio-1/pokemon';

export class Combat {
  private contrincante1: Pokemon;
  private contrincante2: Pokemon;

  constructor(contrincante1: Pokemon, contrincante2: Pokemon) {
    this.contrincante1 = contrincante1;
    this.contrincante2 = contrincante2;
  }
}
