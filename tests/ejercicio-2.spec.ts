import 'mocha';
import {expect} from 'chai';
import {Articulo} from '../src/ejercicio-2/articulo';
import {GestorBibliografico} from '../src/ejercicio-2/gestorbibliografico';

describe('Pruebas del Ejercicio 2 - Gestor Bibliográfico', () => {
  const articulo1 = new Articulo("Lionel Messi se lesiono", ["ACOIDAN MESA HERNANDEZ"], ["alu0101206479@ull.edu.es"], ["Messi", "Lesionado"], "Messi se ha lesionado en el partido contra el Real Madrid", "21.10.2000", "MiCasa", 3);
  const articulo2 = new Articulo("Cristiano Ronaldo se lesiono", ["ACOIDAN MESA HERNANDEZ", "JORGE GARCIA BORGES"], ["alu0101206479@ull.edu.es", "alu0101207489@ull.edu.es"], ["Cristiano", "Lesionado"], "Cristiano Ronaldo se ha lesionado en un partido contra el Getafe", "21.11.2001", "MiCasa", 5);
  const articulo3 = new Articulo("ElRubiusOMG en el ojo público", ["JORGE GARCIA BORGES"], ["alu0101207489@ull.edu.es"], ["Rubius", "Youtube", "Andorra"], "El youtuber más famoso de todos (ElRubiusOMG) se marcha a Andorra para no pagar tantos impuestos y es criticado por la poblaciñon española", "21.10.2000", "Scaella", 10);
  describe('Clase Articulo', () => {
    describe('Se puede instanciar un artículo', () => {
      it('expect(articulo1).not.be.equal(null);', () => {
        expect(articulo1).not.be.equal(null);
      });
      it('expect(articulo2).not.be.equal(null);', () => {
        expect(articulo2).not.be.equal(null);
      });
      it('expect(articulo3).not.be.equal(null);', () => {
        expect(articulo3).not.be.equal(null);
      });
    });

    describe('Funcionan los getters', () => {
      it('expect(articulo1.getTitulo()).to.be.equal("Lionel Messi se lesiono");', () => {
        expect(articulo1.getTitulo()).to.be.equal("Lionel Messi se lesiono");
      });
      it('expect(articulo1.getAutor()).to.be.equal(["ACOIDAN MESA HERNANDEZ"]);', () => {
        expect(articulo1.getAutor()).to.deep.equal(["ACOIDAN MESA HERNANDEZ"]);
      });
      it('expect(articulo1.getEmailAutor()).to.be.equal(["alu0101206479@ull.edu.es");', () => {
        expect(articulo1.getEmailAutor()).to.deep.equal(["alu0101206479@ull.edu.es"]);
      });
      it('expect(articulo1.getKeywords()).to.deep.equal(["Messi", "Lesionado"]);', () => {
        expect(articulo1.getKeywords()).to.deep.equal(["Messi", "Lesionado"]);
      });
      it('expect(articulo1.getResumen()).to.be.equal("Messi se ha lesionado en el partido contra el Real Madrid");', () => {
        expect(articulo1.getResumen()).to.be.equal("Messi se ha lesionado en el partido contra el Real Madrid");
      });
      it('expect(articulo1.getFechaPublicacion()).to.be.equal("21.10.2000");', () => {
        expect(articulo1.getFechaPublicacion()).to.be.equal("21.10.2000");
      });
      it('expect(articulo1.getEditorial()).to.be.equal("MiCasa");', () => {
        expect(articulo1.getEditorial()).to.be.equal("MiCasa");
      });
    });

    describe('Funciona la función de referencia de artículo en formato APA', () => {
      it(`expect(articulo2.referencia()).to.be.equal('ACOIDAN MESA HERNANDEZ y JORGE GARCIA BORGES. (21.11.2001) "Cristiano Ronaldo se lesiono", MiCasa);`, () => {
        expect(articulo2.referencia()).to.be.equal('ACOIDAN MESA HERNANDEZ y JORGE GARCIA BORGES. (21.11.2001) "Cristiano Ronaldo se lesiono", MiCasa');
      });
    });
  });

  describe('Clase GestorBibliografico', () => {
    const gestor = new GestorBibliografico([articulo1, articulo2, articulo3]);
    describe('Se puede instanciar un gestor bibliográfico', () => {
      it('expect(gestor).not.be.equal(null);', () => {
        expect(gestor).not.be.equal(null);
      });
    });

    describe('Funcionando el get del gestor', () => {
      it('expect(gestor.getArticulos).to.deep.equal([articulo1, articulo2, articulo3]);', () => {
        expect(gestor.getArticulos()).to.deep.equal([articulo1, articulo2, articulo3]);
      });
    });

    describe('Funcionando la muestra de la tabla de artículos', () => {
      gestor.mostrarArticulos();
    });

    describe('Funcionando la búsqueda de artículos', () => {
      console.log("\n\nBusqueda de artículos publicados el 21.10.2000\n");
      expect(gestor.busqueda(undefined, "21.10.2000", undefined, undefined)).to.be.equal(`${articulo1.referencia()}\n${articulo3.referencia()}\n`);

      console.log("\n\nBusqueda de artículos publicados el 21.10.2000 por JORGE GARCIA BORGES\n");
      expect(gestor.busqueda(undefined, "21.10.2000", undefined, ["JORGE GARCIA BORGES"])).to.be.equal(`${articulo3.referencia()}\n`);
    });
  });
});
