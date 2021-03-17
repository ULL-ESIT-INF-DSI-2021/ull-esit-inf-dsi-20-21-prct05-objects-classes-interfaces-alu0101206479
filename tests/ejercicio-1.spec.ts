import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';


describe('Pruebas del Ejercicio 1 - Pokedex', () => {
  describe('Se puede instanciar un Pokemon', () => {
    const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80]);
    const Charizard = new Pokemon("Charizard", 90.5, 1.7, "Fuego", [84, 78, 100, 78]);
    const Blastoise = new Pokemon("Blastoise", 85.5, 1.6, "Agua", [83, 100, 78, 79]);
    const Raichu = new Pokemon("Raichu", 30.0, 0.8, "Eléctrico", [90, 55, 110, 60]);

    it('expect(Venusaur).not.be.equal(null);', () => {
      expect(Venusaur).not.be.equal(null);
    });
    it('expect(Charizard).not.be.equal(null);', () => {
      expect(Charizard).not.be.equal(null);
    });
    it('expect(Blastoise).not.be.equal(null);', () => {
      expect(Blastoise).not.be.equal(null);
    });
    it('expect(Raichu).not.be.equal(null);', () => {
      expect(Raichu).not.be.equal(null);
    });
  });
});
