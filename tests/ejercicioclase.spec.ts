import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/ejercicioclase';

describe('Pruebas del ejercicio de clase', () => {
  const persona1 = new Persona("ACOIDAN", "MESA HERNANDEZ", "21.10.2000", "Hombre");
  describe('Funcionan los getters', () => {
    it('expect(persona1.getNombre()).to.be.equal("ACOIDAN");', () => {
      expect(persona1.getNombre()).to.be.equal("ACOIDAN");
    });
    it('expect(persona1.getApellidos()).to.be.equal("MESA HERNANDEZ");', () => {
      expect(persona1.getApellidos()).to.be.equal("MESA HERNANDEZ");
    });
    it('expect(persona1.getNacimiento()).to.be.equal("21.10.2000");', () => {
      expect(persona1.getNacimiento()).to.be.equal("21.10.2000");
    });
    it('expect(persona1.getGenero()).to.be.equal("Hombre");', () => {
      expect(persona1.getGenero()).to.be.equal("Hombre");
    });
  });
});
