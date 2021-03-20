import {Pokemon} from '../ejercicio-1/pokemon';

export class Pokedex {
  constructor(private pokemons: Pokemon[]) {}

  public getPokemons() {
    return this.pokemons;
  }

  public mostrarPokemons() {
    console.table(this.pokemons, ["nombre", "peso", "altura", "tipo"]);
  }

  public añadirPokemons(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  public quitarPokemons(pokemon: Pokemon) {
    const indice: number = this.pokemons.indexOf(pokemon);
    this.pokemons.splice(indice, 1);
  }

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
