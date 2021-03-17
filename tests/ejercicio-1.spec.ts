import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Combat} from '../src/ejercicio-1/combat';

describe('Pruebas del Ejercicio 1 - Pokedex', () => {
  const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80]);
  const Charizard = new Pokemon("Charizard", 90.5, 1.7, "Fuego", [84, 78, 100, 78]);
  const Blastoise = new Pokemon("Blastoise", 85.5, 1.6, "Agua", [83, 100, 78, 79]);
  const Raichu = new Pokemon("Raichu", 30.0, 0.8, "Eléctrico", [90, 55, 110, 60]);
  describe('Clase Pokemon', () => {
    describe('Se puede instanciar un Pokemon', () => {
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

    describe('Funcionan los getters', () => {
      it('expect(Venusaur.getNombre()).to.be.equal("Venusaur");', () => {
        expect(Venusaur.getNombre()).to.be.equal("Venusaur");
      });
      it('expect(Venusaur.getPeso()).to.be.equal(100);', () => {
        expect(Venusaur.getPeso()).to.be.equal(100);
      });
      it('expect(Venusaur.getAltura()).to.be.equal(2);', () => {
        expect(Venusaur.getAltura()).to.be.equal(2);
      });
      it('expect(Venusaur.getTipo()).to.be.equal("Planta");', () => {
        expect(Venusaur.getTipo()).to.be.equal("Planta");
      });
      it('expect(expect(Venusaur.getEstadisticasBasicas().ataque).to.be.equal(82);', () => {
        expect(Venusaur.getEstadisticasBasicas().ataque).to.be.equal(82);
      });
      it('expect(expect(Venusaur.getEstadisticasBasicas().defensa).to.be.equal(83);', () => {
        expect(Venusaur.getEstadisticasBasicas().defensa).to.be.equal(83);
      });
      it('expect(expect(Venusaur.getEstadisticasBasicas().velocidad).to.be.equal(80);', () => {
        expect(Venusaur.getEstadisticasBasicas().velocidad).to.be.equal(80);
      });
      it('expect(expect(Venusaur.getEstadisticasBasicas().hp).to.be.equal(80);', () => {
        expect(Venusaur.getEstadisticasBasicas().hp).to.be.equal(80);
      });
    });

    describe('Funcionan el setHP', () => {
      it('expect(expect(Venusaur.getEstadisticasBasicas().hp).to.be.equal(15);', () => {
        Venusaur.setHP(15);
        expect(Venusaur.getEstadisticasBasicas().hp).to.be.equal(15);
      });
      Venusaur.setHP(80);
    });
  });

  const combate1 = new Combat(Venusaur, Charizard);
  describe('Clase Combat', () => {
    describe('Se puede instanciar un objeto Combat', () => {
      it('expect(combate1).not.be.equal(null);', () => {
        expect(combate1).not.be.equal(null);
      });
    });

    describe('Funciona la funcion dañoPokemon(pokemonAtacante)', () => {
      it('expect(Math.trunc(combate1.dañoPokemon(1))).to.be.equal(26);', () => {
        expect(Math.trunc(combate1.dañoPokemon(1))).to.be.equal(26);
      });
      it('expect(Math.trunc(combate1.dañoPokemon(2))).to.be.equal(101);', () => {
        expect(Math.trunc(combate1.dañoPokemon(2))).to.be.equal(101);
      });
    });
  });
});
