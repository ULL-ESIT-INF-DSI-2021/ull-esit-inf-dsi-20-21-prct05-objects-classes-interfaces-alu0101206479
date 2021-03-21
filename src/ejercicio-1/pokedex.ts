import {Pokemon} from '../ejercicio-1/pokemon';

/**
 * ```typescript
 * // Ejemplo de creación
 *  const pokedex = new Pokedex([Venusaur, Charizard, Blastoise]);
 * ```
 * Clase que representa una Pokedex
 */
export class Pokedex {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const pokedex = new Pokedex([Venusaur, Charizard, Blastoise]);
   * ```
   * Constructor de la clase Pokedex
   * @param pokemons Pokemons que tendrá la Pokedex
   */
  constructor(private pokemons: Pokemon[]) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.getPokemons();
   * ```
   * Función que retorna los Pokemons que tiene la Pokedex
   * @return El atributo pokemons, que es el vector que contiene todos los Pokemons de la Pokedex
   */
  public getPokemons() {
    return this.pokemons;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.añadirPokemons(Charizard); // Charizard es un objeto Pokemon
   * ```
   * Función que añade un Pokemon a la Pokedex
   * @param pokemon Pokemon que se quiere añadir
   */
  public añadirPokemons(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.quitarPokemons(Venusar); // Venusar es un objeto Pokemon
   * ```
   * Función que quita un Pokemon de la Pokedex
   * @param pokemon Pokemon que se quiere quitar
   */
  public quitarPokemons(pokemon: Pokemon) {
    const indice: number = this.pokemons.indexOf(pokemon);
    this.pokemons.splice(indice, 1);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.mostrarPokemons();
   * ```
   * Función que muestra en una tabla los Pokemons de la Pokedex
   */
  public mostrarPokemons() {
    console.table(this.pokemons, ["nombre", "peso", "altura", "tipo"]);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.setPokemon(Raichu, "nombre", "Pikachu");
   * ```
   * Función para editar un atributo concreto de un Pokemon de la Pokedex
   * @param pokemon Pokemon al que se le quiere editar un atributo
   * @param atributo Atributo que se le quiere cambiar al Pokemon
   * @param valor Nuevo valor que se le quiere poner al atributo
   */
  public setPokemon(pokemon: Pokemon, atributo: string, valor: string | number) {
    const indice: number = this.pokemons.indexOf(pokemon);
    if (atributo == "nombre" && typeof(valor) === "string") this.pokemons[indice].setNombre(valor);
    if (atributo == "peso" && typeof(valor) === "number") this.pokemons[indice].setPeso(valor);
    if (atributo == "altura" && typeof(valor) === "number") this.pokemons[indice].setAltura(valor);
    if (atributo == "tipo" && typeof(valor) === "string") this.pokemons[indice].setTipo(valor);
    if (atributo == "ataque" && typeof(valor) === "number") this.pokemons[indice].setAtaque(valor);
    if (atributo == "defensa" && typeof(valor) === "number") this.pokemons[indice].setDefensa(valor);
    if (atributo == "velocidad" && typeof(valor) === "number") this.pokemons[indice].setVelocidad(valor);
    if (atributo == "hp" && typeof(valor) === "number") this.pokemons[indice].setHP(valor);
  }
}
