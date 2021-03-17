/**
 * ```typescript
 * // Ejemplo de creación
 *  const persona1 = new Persona("ACOIDAN", "MESA HERNANDEZ", "21.10.2000", "Hombre");
 * ```
 * Clase que representa a personas
 */
export class Persona {
  constructor(private nombre: string, private apellidos: string,
    private fechaNacimiento: string, private genero: string) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  persona1.getNombre();
   * ```
   * Función que retorna el nombre de la persona
   * @return El atributo nombre
   */
  public getNombre() {
    return this.nombre;
  }


  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  persona1.getApellidos();
   * ```
   * Función que retorna los apellidos de la persona
   * @return El atributo apellidos
   */
  public getApellidos() {
    return this.apellidos;
  }

  public setApellidos(apellidos: string) {
    this.apellidos = apellidos;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  persona1.getNacimiento();
   * ```
   * Función que retorna la fecha de nacimiento de la persona
   * @return El atributo fechaNacimiento
   */
  public getNacimiento() {
    return this.fechaNacimiento;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  persona1.getGenero();
   * ```
   * Función que retorna el genero de la persona
   * @return El atributo genero
   */
  public getGenero() {
    return this.genero;
  }

  public setNacimiento(genero: string) {
    this.genero = genero;
  }
}

/**
 * ```typescript
 * // Ejemplo de creación
 *  const estudiante1 = new Estudiante("ACOIDAN", "MESA HERNANDEZ", "21.10.2000", "Hombre", "alu0101206479@ull.edu.es", "Ingeniería Informática");
 * ```
 * Clase que representa a estudiantes
 */
export class Estudiante extends Persona {
  constructor(nombre: string, apellidos: string, fechaNacimiento: string, genero: string, private correoInstitucional: string, private carrera: string) {
    super(nombre, apellidos, fechaNacimiento, genero);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  estudiante1.getCorreo();
   * ```
   * Función que retorna el correo institucional del estudiante
   * @return El atributo correoInstitucional
   */
  public getCorreo() {
    return this.correoInstitucional;
  }

  public setCorreo(correoInstitucional: string) {
    this.correoInstitucional = correoInstitucional;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  estudiante1.getCarrera();
   * ```
   * Función que retorna la carrera que esta estudiando del estudiante
   * @return El atributo carrera
   */
  public getCarrera() {
    return this.carrera;
  }

  public setCarrera(carrera: string) {
    this.carrera = carrera;
  }
}

/**
 * ```typescript
 * // Ejemplo de creación
 *  const profesor1 = new Profesor("ACOIDAN", "MESA HERNANDEZ", "21.10.2000", "Hombre", "alu0101206479@ull.edu.es", "Ingeniería Informática");
 * ```
 * Clase que representa a los profesores
 */
export class Profesor extends Persona {
  constructor(nombre: string, apellidos: string, fechaNacimiento: string, genero: string, private correoInstitucional: string, private departamento: string) {
    super(nombre, apellidos, fechaNacimiento, genero);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  profesor1.getCorreo();
   * ```
   * Función que retorna el correo institucional del profesor
   * @return El atributo correoInstitucional
   */
  public getCorreo() {
    return this.correoInstitucional;
  }

  public setCorreo(correoInstitucional: string) {
    this.correoInstitucional = correoInstitucional;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  profesor1.getDepartamento();
   * ```
   * Función que retorna el departamento del profesor
   * @return El atributo departamento
   */
  public getDepartamento() {
    return this.departamento;
  }

  public setDepartamento(departamento: string) {
    this.departamento = departamento;
  }
}

/**
 * ```typescript
 * // Ejemplo de creación
 *  const asignatura = new Asignatura("Desarrollo de Sistemas Informáticos", [profesor1, profesor2], [estudiante1, estudiante2]);
 * ```
 * Clase que representa a las asignaturas
 */
export class Asignatura {
  constructor(private nombre: string, private profesores: Profesor[], private estudiantes: Estudiante[]) {}


  /**
   * ```typescript
   * // Ejemplo de llamada
   *  asignatura1.getNombre();
   * ```
   * Función que retorna el nombre de la asignatura
   * @return El atributo asignatura
   */
  public getNombre() {
    return this.nombre;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  asignatura1.getProfesores();
   * ```
   * Función que a través de un forEach devuelve un listado de los profesores
   * @return El atributo profesores
   */
  public getProfesores() {
    return this.profesores;
  }

  public setProfesores(profesor: Profesor, posicion: number) {
    this.profesores[posicion] = profesor;
  }

  public getEstudiantes() {
    return this.estudiantes;
  }

  public setEstudiantes(estudiante: Estudiante, posicion: number) {
    this.estudiantes[posicion] = estudiante;
  }
}
