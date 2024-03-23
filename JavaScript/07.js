/*
 * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje).
 *
 * DIFICULTAD EXTRA (opcional):
 * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
 *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
 *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
 *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
 *   el nombre de una nueva web.
 * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
 *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
 *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
 *   interpretan como nombres de documentos.
 */

// Implementación de pila
let pila = [];
pila.push(1);
pila.push(2);
pila.push(3);
console.log(pila.pop()); // 3
console.log(pila.pop()); // 2
console.log(pila.pop()); // 1

// Implementación de cola
let cola = [];
cola.push(1);
cola.push(2);
cola.push(3);
console.log(cola.shift()); // 1
console.log(cola.shift()); // 2
console.log(cola.shift()); // 3

// DIFICULTAD EXTRA (opcional):

let historial = [];
let posicion = -1;

function navegarWeb(accion, web) {
  if (accion === "atrás") {
    if (posicion > 0) {
      posicion--;
    }
  } else if (accion === "adelante") {
    if (posicion < historial.length - 1) {
      posicion++;
    }
  } else {
    historial = historial.slice(0, posicion + 1);
    historial.push(web);
    posicion++;
  }

  console.log("Navegando a:", historial[posicion]);
}

navegarWeb("nueva", "Google");
navegarWeb("nueva", "Facebook");
navegarWeb("nueva", "Twitter");
navegarWeb("atrás");
navegarWeb("adelante");
navegarWeb("adelante");

let impresora = [];

function imprimirDocumento(documento) {
  if (documento === "imprimir") {
    const documentoImpreso = impresora.shift();
    console.log("Imprimiendo documento:", documentoImpreso);
  } else {
    impresora.push(documento);
    console.log("Añadiendo documento a la cola de impresión:", documento);
  }
}

imprimirDocumento("documento1");
imprimirDocumento("documento2");
imprimirDocumento("imprimir");
imprimirDocumento("documento3");
imprimirDocumento("imprimir");
imprimirDocumento("imprimir");
imprimirDocumento("imprimir");
imprimirDocumento("documento4");
imprimirDocumento("imprimir");
imprimirDocumento("imprimir");
imprimirDocumento("imprimir");
