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

  public getPeso() {
    return this.peso;
  }

  public getAltura() {
    return this.altura;
  }

  public getTipo() {
    return this.tipo;
  }

  public getEstadisticasBasicas() {
    return this.estadisticasBasicas;
  }

  public setHP(hp: number) {
    this.estadisticasBasicas.hp = hp;
  }
}
