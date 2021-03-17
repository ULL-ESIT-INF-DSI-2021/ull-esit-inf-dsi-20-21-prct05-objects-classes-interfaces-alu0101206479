export class Persona {
  constructor(private nombre: string, private apellidos: string,
    private fechaNacimiento: string, private genero: string) {}

  public getNombre() {
    return this.nombre;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public getApellidos() {
    return this.apellidos;
  }

  public setApellidos(apellidos: string) {
    this.apellidos = apellidos;
  }

  public getNacimiento() {
    return this.fechaNacimiento;
  }

  public getGenero() {
    return this.genero;
  }

  public setNacimiento(genero: string) {
    this.genero = genero;
  }
}
