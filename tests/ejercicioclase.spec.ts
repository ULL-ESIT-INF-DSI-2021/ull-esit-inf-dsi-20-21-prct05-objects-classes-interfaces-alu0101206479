import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/ejercicioclase';
import {Estudiante} from '../src/ejercicioclase';
import {Profesor} from '../src/ejercicioclase';

describe('Pruebas del ejercicio de clase', () => {
  const persona1 = new Persona("ACOIDAN", "MESA HERNANDEZ", "21.10.2000", "Hombre");
  describe('Funcionando la clase Persona', () => {
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

  const estudiante1 = new Estudiante("ACOIDAN", "MESA HERNANDEZ", "21.10.2000", "Hombre", "alu0101206479@ull.edu.es", "Ingeniería Informática");
  describe('Funcionando la clase Estudiante', () => {
    it('expect(persona1.getNombre()).to.be.equal("ACOIDAN");', () => {
      expect(estudiante1.getNombre()).to.be.equal("ACOIDAN");
    });
    it('expect(estudiante1.getApellidos()).to.be.equal("MESA HERNANDEZ");', () => {
      expect(estudiante1.getApellidos()).to.be.equal("MESA HERNANDEZ");
    });
    it('expect(estudiante1.getNacimiento()).to.be.equal("21.10.2000");', () => {
      expect(estudiante1.getNacimiento()).to.be.equal("21.10.2000");
    });
    it('expect(estudiante1.getGenero()).to.be.equal("Hombre");', () => {
      expect(estudiante1.getGenero()).to.be.equal("Hombre");
    });
    it('expect(estudiante1.getCorreo()).to.be.equal("alu0101206479@ull.edu.es");', () => {
      expect(estudiante1.getCorreo()).to.be.equal("alu0101206479@ull.edu.es");
    });
    it('expect(estudiante1.getCarrera()).to.be.equal("Ingeniería Informática");', () => {
      expect(estudiante1.getCarrera()).to.be.equal("Ingeniería Informática");
    });
  });

  const profesor1 = new Profesor("ACOIDAN", "MESA HERNANDEZ", "21.10.2000", "Hombre", "alu0101206479@ull.edu.es", "Ingeniería Informática");
  describe('Funcionando la clase Profesor', () => {
    it('expect(persona1.getNombre()).to.be.equal("ACOIDAN");', () => {
      expect(profesor1.getNombre()).to.be.equal("ACOIDAN");
    });
    it('expect(profesor1.getApellidos()).to.be.equal("MESA HERNANDEZ");', () => {
      expect(profesor1.getApellidos()).to.be.equal("MESA HERNANDEZ");
    });
    it('expect(profesor1.getNacimiento()).to.be.equal("21.10.2000");', () => {
      expect(profesor1.getNacimiento()).to.be.equal("21.10.2000");
    });
    it('expect(profesor1.getGenero()).to.be.equal("Hombre");', () => {
      expect(profesor1.getGenero()).to.be.equal("Hombre");
    });
    it('expect(profesor1.getCorreo()).to.be.equal("alu0101206479@ull.edu.es");', () => {
      expect(profesor1.getCorreo()).to.be.equal("alu0101206479@ull.edu.es");
    });
    it('expect(profesor1.getDepartamento()).to.be.equal("Ingeniería Informática");', () => {
      expect(profesor1.getDepartamento()).to.be.equal("Ingeniería Informática");
    });
  });
});
