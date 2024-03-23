/*
 * EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido.
 */

// Clase
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

let persona = new Persona("JavaScript", 25);
persona.imprimir(); // Nombre: JavaScript, Edad: 25
persona.nombre = "JS";
persona.imprimir(); // Nombre: JS, Edad: 25
persona.edad = 26;
persona.imprimir(); // Nombre: JS, Edad: 26

// DIFICULTAD EXTRA (opcional):

class Pila {
  constructor() {
    this.pila = [];
  }

  añadir(elemento) {
    this.pila.push(elemento);
  }

  eliminar() {
    return this.pila.pop();
  }

  tamaño() {
    return this.pila.length;
  }

  imprimir() {
    console.log(this.pila);
  }
}

let pila = new Pila();
pila.añadir(1);
pila.añadir(2);
pila.añadir(3);
pila.imprimir(); // [1, 2, 3]
pila.eliminar();
pila.imprimir(); // [1, 2]
console.log(pila.tamaño()); // 2

class Cola {
  constructor() {
    this.cola = [];
  }

  añadir(elemento) {
    this.cola.push(elemento);
  }

  eliminar() {
    return this.cola.shift();
  }

  tamaño() {
    return this.cola.length;
  }

  imprimir() {
    console.log(this.cola);
  }
}

let cola = new Cola();
cola.añadir(1);
cola.añadir(2);
cola.añadir(3);
cola.imprimir(); // [1, 2, 3]
cola.eliminar();
cola.imprimir(); // [2, 3]
console.log(cola.tamaño()); // 2
