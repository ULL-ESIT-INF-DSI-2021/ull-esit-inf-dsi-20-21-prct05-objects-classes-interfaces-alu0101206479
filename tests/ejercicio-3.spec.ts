import 'mocha';
import {expect} from 'chai';
import {Coche} from '../src/ejercicio-3/coche';
import {Moto} from '../src/ejercicio-3/moto';
import {Patinete} from '../src/ejercicio-3/patinete';
import {Tren} from '../src/ejercicio-3/tren';
import {Guagua} from '../src/ejercicio-3/guagua';
import {Bicicleta} from '../src/ejercicio-3/bicicleta';
import {Peaton} from '../src/ejercicio-3/peaton';

describe('Pruebas del Ejercicio 3 - Medios de transporte', () => {
  const coche = new Coche(92, "Alfa Romeo", 4);
  const moto = new Moto(43, "Yamaha", 2);
  const patinete = new Patinete(23, "QUEENS", 2);
  const tren = new Tren(35, "MFTRAIN", 24);
  const guagua = new Guagua(20, "Titsa", 8);
  const bicicleta = new Bicicleta(14, "Specialized", 2);
  const peaton = new Peaton(4, "Hombre", 0);
  describe('Clase Vehículo (Coche, Moto...)', () => {
    describe('Se pueden instanciar vehículos', () => {
      it('expect(coche).not.be.equal(null);', () => {
        expect(coche).not.be.equal(null);
      });
      it('expect(moto.not.be.equal(null);', () => {
        expect(moto).not.be.equal(null);
      });
      it('expect(patinete).not.be.equal(null);', () => {
        expect(patinete).not.be.equal(null);
      });
      it('expect(tren).not.be.equal(null);', () => {
        expect(tren).not.be.equal(null);
      });
      it('expect(guagua).not.be.equal(null);', () => {
        expect(guagua).not.be.equal(null);
      });
      it('expect(bicicleta).not.be.equal(null);', () => {
        expect(bicicleta).not.be.equal(null);
      });
      it('expect(peaton).not.be.equal(null);', () => {
        expect(peaton).not.be.equal(null);
      });
    });

    describe('Funcionando los getters', () => {
      it('expect(coche.velocidad).to.be.equal(92);', () => {
        expect(coche.velocidad).to.be.equal(92);
      });
      it('expect(tren.tipo).to.be.equal("MFTRAIN");', () => {
        expect(tren.tipo).to.be.equal("MFTRAIN");
      });
      it('expect(peaton.ruedas).to.be.equal(0);', () => {
        expect(peaton.ruedas).to.be.equal(0);
      });
    });
  });
});
