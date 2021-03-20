import 'mocha';
import {expect} from 'chai';
import {Coche} from '../src/ejercicio-3/coche';
import {Moto} from '../src/ejercicio-3/moto';
import {Patinete} from '../src/ejercicio-3/patinete';
import {Tren} from '../src/ejercicio-3/tren';
import {Guagua} from '../src/ejercicio-3/guagua';
import {Bicicleta} from '../src/ejercicio-3/bicicleta';
import {Peaton} from '../src/ejercicio-3/peaton';
import {Street} from '../src/ejercicio-3/street';

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

  const calle = new Street("Manuel Machado", "Armeñime", [coche, moto, moto, coche, tren]);
  describe('Clase Street', () => {
    describe('Se pueden instanciar calles', () => {
      it('expect(calle).not.be.equal(null);', () => {
        expect(calle).not.be.equal(null);
      });
    });

    describe('Funcionando los getters y setters', () => {
      it('expect(calle.getNombre()).to.be.equal("Manuel Machado");', () => {
        expect(calle.getNombre()).to.be.equal("Manuel Machado");
      });
      it('calle.setNombre("Venenchegue");', () => {
        calle.setNombre("Venenchegue");
        expect(calle.getNombre()).to.be.equal("Venenchegue");
      });
      it('expect(calle.getLocalizacion()).to.be.equal("Armeñime");', () => {
        expect(calle.getLocalizacion()).to.deep.equal("Armeñime");
      });
      it('calle.setLocalizacion("Adeje");', () => {
        calle.setLocalizacion("Adeje");
        expect(calle.getLocalizacion()).to.deep.equal("Adeje");
      });
      it('expect(calle.getVehiculos()).to.be.equal([coche, moto, moto, coche, tren]);', () => {
        expect(calle.getVehiculos()).to.deep.equal([coche, moto, moto, coche, tren]);
      });
    });

    describe('Se debe poder mostrar la cantidad de vehículos de cada tipo circulando', () => {
      it('expect(coche.velocidad).to.be.equal(92);', () => {
        console.log(`Cantidad de vehículos de cada tipo circulando en la calle:`);
        calle.cantidadVehiculos();
      });
    });

    describe('Se debe poder añadir y quitar vehiculos de la via', () => {
      it('calle.añadirVehiculo(bicicleta);', () => {
        calle.añadirVehiculo(bicicleta);
        expect(calle.getVehiculos()).to.deep.equal([coche, moto, moto, coche, tren, bicicleta]);
      });

      it('calle.quitarVehiculo(tren);', () => {
        calle.quitarVehiculo(tren);
        expect(calle.getVehiculos()).to.deep.equal([coche, moto, moto, coche, bicicleta]);
      });
    });
  });
});
