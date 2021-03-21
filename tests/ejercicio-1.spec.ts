import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Pokedex} from '../src/ejercicio-1/pokedex';
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

    describe('Funcionan los getters y setters', () => {
      it('expect(Venusaur.getNombre()).to.be.equal("Venusaur");', () => {
        expect(Venusaur.getNombre()).to.be.equal("Venusaur");
      });
      it('expect(Venusaur.getPeso()).to.be.equal(100);', () => {
        expect(Venusaur.getPeso()).to.be.equal(100);
      });
      it('Venusaur.setPeso(50);', () => {
        Venusaur.setPeso(50);
        expect(Venusaur.getPeso()).to.be.equal(50);
        Venusaur.setPeso(100);
      });
      it('expect(Venusaur.getAltura()).to.be.equal(2);', () => {
        expect(Venusaur.getAltura()).to.be.equal(2);
      });
      it('expect(Venusaur.getTipo()).to.be.equal("Planta");', () => {
        expect(Venusaur.getTipo()).to.be.equal("Planta");
      });
      it('Venusaur.setTipo("Fuego");', () => {
        Venusaur.setTipo("Fuego");
        expect(Venusaur.getTipo()).to.be.equal("Fuego");
        Venusaur.setTipo("Planta");
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

  const pokedex = new Pokedex([Venusaur, Charizard, Blastoise]);
  describe('Clase Pokedex', () => {
    describe('Se puede instanciar un objeto Pokedex', () => {
      it('expect(pokedex).not.be.equal(null);', () => {
        expect(pokedex).not.be.equal(null);
      });
    });

    describe('Funciona el get de el contenido de la pokedex', () => {
      it('expect(pokedex.getPokemons()).to.be.equal([Venusaur, Charizard, Blastoise]);', () => {
        expect(pokedex.getPokemons()).to.deep.equal([Venusaur, Charizard, Blastoise]);
      });
    });

    describe('Se muestra la pokedex en forma de tabla', () => {
      it('pokedex.mostrarPokemons();', () => {
        console.log("Pokedex\n");
        pokedex.mostrarPokemons();
      });
    });

    describe('Funciona añadir, quitar y editar un atributo', () => {
      it('pokedex.añadirPokemons(Raichu);', () => {
        pokedex.añadirPokemons(Raichu);
        expect(pokedex.getPokemons()).to.deep.equal([Venusaur, Charizard, Blastoise, Raichu]);
      });

      it('pokedex.quitarPokemons(Charizard);', () => {
        pokedex.quitarPokemons(Charizard);
        expect(pokedex.getPokemons()).to.deep.equal([Venusaur, Blastoise, Raichu]);
      });

      it('pokedex.setPokemon(Raichu, "nombre", "Pikachu");', () => {
        pokedex.setPokemon(Raichu, "nombre", "Pikachu");
        expect(pokedex.getPokemons()[2].getNombre()).to.be.equal("Pikachu");
        pokedex.setPokemon(Raichu, "nombre", "Raichu");
      });

      it('pokedex.setPokemon(Raichu, "ataque", 50);', () => {
        pokedex.setPokemon(Raichu, "ataque", 50);
        expect(pokedex.getPokemons()[2].getEstadisticasBasicas().ataque).to.be.equal(50);
        pokedex.setPokemon(Raichu, "ataque", 90);
      });
    });
  });

  const combate = new Combat(Venusaur, Charizard);
  describe('Clase Combat', () => {
    describe('Se puede instanciar un objeto Combat', () => {
      it('expect(combate).not.be.equal(null);', () => {
        expect(combate).not.be.equal(null);
      });
    });

    describe('Funcionan los getters y setters', () => {
      it('expect(combate.getContrincante1()).to.be.equal(Venusaur);', () => {
        expect(combate.getContrincante1()).to.be.equal(Venusaur);
      });
      it('combate.setContricante1(Raichu);', () => {
        combate.setContricante1(Raichu);
        expect(combate.getContrincante1()).to.be.equal(Raichu);
        combate.setContricante1(Venusaur);
      });
      it('expect(combate.getContrincante2()).to.be.equal(Charizard);', () => {
        expect(combate.getContrincante2()).to.be.equal(Charizard);
      });
      it('combate.setContricante2(Blastoise);', () => {
        combate.setContricante2(Blastoise);
        expect(combate.getContrincante2()).to.be.equal(Blastoise);
        combate.setContricante2(Charizard);
      });
    });


    describe('Funciona la funcion dañoPokemon(pokemonAtacante)', () => {
      it('expect(Math.trunc(combate.dañoPokemon(1))).to.be.equal(26);', () => {
        expect(Math.trunc(combate.dañoPokemon(1))).to.be.equal(26);
      });
      it('expect(Math.trunc(combate.dañoPokemon(2))).to.be.equal(101);', () => {
        expect(Math.trunc(combate.dañoPokemon(2))).to.be.equal(101);
      });
    });

    describe('Funciona la funcion start()', () => {
      it('combate.start();', () => {
        console.log("Simulación del combate\n\n");
        combate.start();
      });
    });
  });
});
