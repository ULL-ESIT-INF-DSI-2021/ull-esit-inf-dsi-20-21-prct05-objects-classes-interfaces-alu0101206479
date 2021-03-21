/**
 * ```typescript
 * // Ejemplo de creación
 *  const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80]);
 * ```
 * Clase que representa a pokemons
 */
export class Pokemon {
  /**
   * Atributo que representa las estadisticas básicas (ataque, defensa, velocidad, HP) del Pokemon
   */
  private estadisticasBasicas = {
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    hp: 0,
  };

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80]);
   * ```
   * Constructor de la clase Pokemon
   * @param nombre Nombre del Pokemon
   * @param peso Peso del Pokemon
   * @param altura Altura del Pokemon
   * @param tipo Tipo del Pokemon
   * @param estadisticasBasicas Vector de estadisticas básicas del Pokemon, primera posicion representa ataque, segunda defensa, tercera velocidad y cuarta HP
   */
  constructor(private nombre: string, private peso: number, private altura: number, private tipo: string, estadisticasBasicas: number[]) {
    this.estadisticasBasicas.ataque = estadisticasBasicas[0];
    this.estadisticasBasicas.defensa = estadisticasBasicas[1];
    this.estadisticasBasicas.velocidad = estadisticasBasicas[2];
    this.estadisticasBasicas.hp = estadisticasBasicas[3];
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.getNombre();
   * ```
   * Función que retorna el nombre del Pokemon
   * @return El atributo nombre
   */
  public getNombre() {
    return this.nombre;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.setNombre("Charizard");
   * ```
   * Función para cambiar el nombre del Pokemon
   * @param nombre El nuevo nombre que tendrá el Pokemon
   */
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.getPeso();
   * ```
   * Función que retorna el peso del Pokemon
   * @return El atributo peso
   */
  public getPeso() {
    return this.peso;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.setPeso(75);
   * ```
   * Función para cambiar el peso del Pokemon
   * @param peso El nuevo peso que tendrá el Pokemon
   */
  public setPeso(peso: number) {
    this.peso = peso;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.getAltura();
   * ```
   * Función que retorna la altura del Pokemon
   * @return El atributo altura
   */
  public getAltura() {
    return this.altura;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.setAltura(1.78);
   * ```
   * Función para cambiar la altura del Pokemon
   * @param altura La nueva altura que tendrá el Pokemon
   */
  public setAltura(altura: number) {
    this.altura = altura;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.getTipo();
   * ```
   * Función que retorna el tipo del Pokemon
   * @return El atributo tipo
   */
  public getTipo() {
    return this.tipo;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.setTIpo("Fuego");
   * ```
   * Función para cambiar el tipo del Pokemon
   * @param tipo El nuevo tipo del Pokemon
   */
  public setTipo(tipo: string) {
    this.tipo = tipo;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.getEstadisticasBasicas();
   * ```
   * Función que retorna las estadisticas básicas (ataque, defensa, velocidad, HP) del Pokemon
   * @return El atributo estadisticasBasicas
   */
  public getEstadisticasBasicas() {
    return this.estadisticasBasicas;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.setAtaque(80);
   * ```
   * Función para cambiar el ataque del Pokemon
   * @param ataque El nuevo ataque que tendrá el Pokemon
   */
  public setAtaque(ataque: number) {
    this.estadisticasBasicas.ataque = ataque;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.setDefensa(70);
   * ```
   * Función para cambiar la defensa del Pokemon
   * @param defensa La nueva defensa que tendrá el Pokemon
   */
  public setDefensa(defensa: number) {
    this.estadisticasBasicas.defensa = defensa;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.setVelocidad(80);
   * ```
   * Función para cambiar la velocidad del Pokemon
   * @param velocidad La nueva velocidad que tendrá el Pokemon
   */
  public setVelocidad(velocidad: number) {
    this.estadisticasBasicas.velocidad = velocidad;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.setHP(90);
   * ```
   * Función para cambiar el hp del Pokemon
   * @param hp El nuevo HP que tendrá el Pokemon
   */
  public setHP(hp: number) {
    this.estadisticasBasicas.hp = hp;
  }
}
