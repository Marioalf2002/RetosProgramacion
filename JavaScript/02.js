/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

// Función sin parámetros ni retorno
function saludo() {
  console.log("¡Hola, mundo!");
}

saludo(); // ¡Hola, mundo!

// Función con un parámetro
function saludoConNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

saludoConNombre("JavaScript"); // ¡Hola, JavaScript!

// Función con varios parámetros
function suma(a, b) {
  return a + b;
}

console.log(suma(1, 1)); // 2

// Función con retorno
function resta(a, b) {
  return a - b;
}

console.log(resta(1, 1)); // 0

// Función dentro de función
function funcionExterna() {
  function funcionInterna() {
    console.log("Función interna");
  }

  funcionInterna();
}

funcionExterna(); // Función interna

// Funciones ya creadas en el lenguaje
console.log(typeof 1); // number
console.log(typeof "a"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// Variable LOCAL y GLOBAL
let global = "global";

function funcionLocal() {
  let local = "local";
  console.log(local); // local
  console.log(global); // global
}

funcionLocal();
console.log(global); // global
// console.log(local); // ReferenceError: local no esta definido

// DIFICULTAD EXTRA (opcional)
function multiplo(a, b) {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      saludo();
    } else if (i % 3 === 0) {
      saludoConNombre("JavaScript");
    } else if (i % 5 === 0) {
      console.log(saludo() + saludoConNombre("JavaScript"));
    } else {
      console.log(i);
    }
  }

  return 100;
}

console.log(multiplo("Fizz", "Buzz")); // 100
