/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

// Herencia
class Animal {
  sonido() {
    console.log("Sonido de animal");
  }
}

class Perro extends Animal {
  sonido() {
    console.log("Guau");
  }
}

class Gato extends Animal {
  sonido() {
    console.log("Miau");
  }
}

let animal = new Animal();
let perro = new Perro();
let gato = new Gato();

animal.sonido(); // Sonido de animal
perro.sonido(); // Guau
gato.sonido(); // Miau

// DIFICULTAD EXTRA (opcional):

class Empleado {
  constructor(identificador, nombre) {
    this.identificador = identificador;
    this.nombre = nombre;
  }
}

class Gerente extends Empleado {
  constructor(identificador, nombre, departamento) {
    super(identificador, nombre);
    this.departamento = departamento;
  }
}

class GerenteProyectos extends Gerente {
  constructor(identificador, nombre, departamento) {
    super(identificador, nombre, departamento);
  }
}

class Programador extends Empleado {
  constructor(identificador, nombre, lenguaje) {
    super(identificador, nombre);
    this.lenguaje = lenguaje;
  }
}

let empleado = new Empleado(1, "Empleado");
let gerente = new Gerente(2, "Gerente", "Desarrollo");
let gerenteProyectos = new GerenteProyectos(
  3,
  "Gerente de Proyectos",
  "Desarrollo"
);
let programador = new Programador(4, "Programador", "JavaScript");

console.log(empleado); // Empleado { identificador: 1, nombre: 'Empleado' }
console.log(gerente); // Gerente { identificador: 2, nombre: 'Gerente', departamento: 'Desarrollo' }
console.log(gerenteProyectos); // GerenteProyectos { identificador: 3, nombre: 'Gerente de Proyectos', departamento: 'Desarrollo' }
console.log(programador); // Programador { identificador: 4, nombre: 'Programador', lenguaje: 'JavaScript' }

// Implementación de herencia con empleados a cargo

class EmpleadoConSubordinados {
  constructor(identificador, nombre) {
    this.identificador = identificador;
    this.nombre = nombre;
    this.subordinados = [];
  }

  agregarSubordinado(subordinado) {
    this.subordinados.push(subordinado);
  }
}

class GerenteConSubordinados extends EmpleadoConSubordinados {
  constructor(identificador, nombre, departamento) {
    super(identificador, nombre);
    this.departamento = departamento;
  }
}

class GerenteProyectosConSubordinados extends GerenteConSubordinados {
  constructor(identificador, nombre, departamento) {
    super(identificador, nombre, departamento);
  }
}

class ProgramadorConSubordinados extends EmpleadoConSubordinados {
  constructor(identificador, nombre, lenguaje) {
    super(identificador, nombre);
    this.lenguaje = lenguaje;
  }
}

let empleadoConSubordinados = new EmpleadoConSubordinados(1, "Empleado");
let gerenteConSubordinados = new GerenteConSubordinados(
  2,
  "Gerente",
  "Desarrollo"
);
let gerenteProyectosConSubordinados = new GerenteProyectosConSubordinados(
  3,
  "Gerente de Proyectos",
  "Desarrollo"
);
let programadorConSubordinados = new ProgramadorConSubordinados(
  4,
  "Programador",
  "JavaScript"
);

gerenteConSubordinados.agregarSubordinado(empleadoConSubordinados);
gerenteProyectosConSubordinados.agregarSubordinado(gerenteConSubordinados);
gerenteProyectosConSubordinados.agregarSubordinado(programadorConSubordinados);

console.log(empleadoConSubordinados); // EmpleadoConSubordinados { identificador: 1, nombre: 'Empleado', subordinados: [] }
console.log(gerenteConSubordinados); // GerenteConSubordinados { identificador: 2, nombre: 'Gerente', departamento: 'Desarrollo', subordinados: [ EmpleadoConSubordinados { identificador: 1, nombre: 'Empleado', subordinados: [] } ] }
console.log(gerenteProyectosConSubordinados); // GerenteProyectosConSubordinados { identificador: 3, nombre: 'Gerente de Proyectos', departamento: 'Desarrollo', subordinados: [ GerenteConSubordinados { identificador: 2, nombre: 'Gerente', departamento: 'Desarrollo', subordinados: [ [EmpleadoConSubordinados] ] }, ProgramadorConSubordinados { identificador: 4, nombre: 'Programador', lenguaje: 'JavaScript', subordinados: [] } ] }
console.log(programadorConSubordinados); // ProgramadorConSubordinados { identificador: 4, nombre: 'Programador', lenguaje: 'JavaScript', subordinados: [] }
