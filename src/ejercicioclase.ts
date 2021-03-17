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


export class Estudiante extends Persona {
  constructor(nombre: string, apellidos: string, fechaNacimiento: string, genero: string, private correoInstitucional: string, private carrera: string) {
    super(nombre, apellidos, fechaNacimiento, genero);
  }

  public getCorreo() {
    return this.correoInstitucional;
  }

  public setCorreo(correoInstitucional: string) {
    this.correoInstitucional = correoInstitucional;
  }

  public getCarrera() {
    return this.carrera;
  }

  public setCarrera(carrera: string) {
    this.carrera = carrera;
  }
}

export class Profesor extends Persona {
  constructor(nombre: string, apellidos: string, fechaNacimiento: string, genero: string, private correoInstitucional: string, private departamento: string) {
    super(nombre, apellidos, fechaNacimiento, genero);
  }

  public getCorreo() {
    return this.correoInstitucional;
  }

  public setCorreo(correoInstitucional: string) {
    this.correoInstitucional = correoInstitucional;
  }

  public getDepartamento() {
    return this.departamento;
  }

  public setDepartamento(departamento: string) {
    this.departamento = departamento;
  }
}
