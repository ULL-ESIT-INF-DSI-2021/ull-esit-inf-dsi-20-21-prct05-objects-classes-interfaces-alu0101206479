export class Pokemon {
  private nombre: string;
  private peso: number;
  private altura: number;
  private tipo: string;
  private estadisticasBasicas = {
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    hp: 0,
  };

  constructor(nombre: string, peso: number, altura: number, tipo: string, estadisticasBasicas: number[]) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;
    this.estadisticasBasicas.ataque = estadisticasBasicas[0];
    this.estadisticasBasicas.defensa = estadisticasBasicas[1];
    this.estadisticasBasicas.velocidad = estadisticasBasicas[2];
    this.estadisticasBasicas.hp = estadisticasBasicas[3];
  }

  public getNombre() {
    return this.nombre;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public getPeso() {
    return this.peso;
  }

  public setPeso(peso: number) {
    this.peso = peso;
  }

  public getAltura() {
    return this.altura;
  }

  public setAltura(altura: number) {
    this.altura = altura;
  }

  public getTipo() {
    return this.tipo;
  }

  public setTipo(tipo: string) {
    this.tipo = tipo;
  }

  public getEstadisticasBasicas() {
    return this.estadisticasBasicas;
  }

  public setAtaque(ataque: number) {
    this.estadisticasBasicas.ataque = ataque;
  }

  public setDefensa(defensa: number) {
    this.estadisticasBasicas.defensa = defensa;
  }

  public setVelocidad(velocidad: number) {
    this.estadisticasBasicas.velocidad = velocidad;
  }

  public setHP(hp: number) {
    this.estadisticasBasicas.hp = hp;
  }
}
