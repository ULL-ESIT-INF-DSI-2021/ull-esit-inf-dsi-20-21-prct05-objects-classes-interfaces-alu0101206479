import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';

describe('Prueba de ejercicio 1', () => {
  const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80]);
  it('Se puede instanciar un Pokemon', () => {
    expect(Venusaur).not.be.equal(null);
  });
});
