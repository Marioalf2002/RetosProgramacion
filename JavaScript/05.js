/*
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como
 * variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime
 *   el valor de las variables originales y las nuevas, comprobando que se ha invertido
 *   su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

// Asignación de variables por valor
let numero = 1;
let copiaNumero = numero;
copiaNumero = 2;
console.log(numero); // 1

// Asignación de variables por referencia
let objeto = { nombre: "JavaScript" };
let copiaObjeto = objeto;
copiaObjeto.nombre = "ECMAScript";
console.log(objeto.nombre); // ECMAScript

// Funciones con variables por valor
function funcionPorValor(numero) {
  numero = 2;
}

let numeroPorValor = 1;
funcionPorValor(numeroPorValor);
console.log(numeroPorValor); // 1

// Funciones con variables por referencia
function funcionPorReferencia(objeto) {
  objeto.nombre = "ECMAScript";
}

let objetoPorReferencia = { nombre: "JavaScript" };
funcionPorReferencia(objetoPorReferencia);
console.log(objetoPorReferencia.nombre); // ECMAScript

// DIFICULTAD EXTRA (opcional):
function intercambioPorValor(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

function intercambioPorReferencia(objeto) {
  let temp = objeto.a;
  objeto.a = objeto.b;
  objeto.b = temp;
  return objeto;
}

let a = 1;
let b = 2;
let objetoIntercambio = { a: 1, b: 2 };

let [aIntercambio, bIntercambio] = intercambioPorValor(a, b);
console.log(a, b, aIntercambio, bIntercambio); // 1 2 2 1

let objetoIntercambioFinal = intercambioPorReferencia(objetoIntercambio);
console.log(objetoIntercambio, objetoIntercambioFinal); // {a: 2, b: 1} {a: 2, b: 1}
