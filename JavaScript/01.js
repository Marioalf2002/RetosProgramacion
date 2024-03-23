/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

// Aritméticos
let suma = 1 + 1; // 2
let resta = 1 - 1; // 0
let multiplicacion = 1 * 1; // 1
let division = 1 / 1; // 1
let modulo = 1 % 1; // 0
let incremento = 1; // 1
incremento++; // 2
let decremento = 1; // 1
decremento--; // 0

// Lógicos
let and = true && true; // true
let or = true || false; // true
let not = !true; // false

// De comparación
let igual = 1 === 1; // true
let distinto = 1 !== 2; // true
let mayor = 2 > 1; // true
let menor = 1 < 2; // true
let mayorIgual = 2 >= 1; // true
let menorIgual = 1 <= 2; // true

// De asignación
let asignacion = 1; // 1
asignacion += 1; // 2
asignacion -= 1; // 1
asignacion *= 1; // 1
asignacion /= 1; // 1
asignacion %= 1; // 0

// De identidad
let identidad = 1 === 1; // true
let noIdentidad = 1 !== 2; // true

// De pertenencia
let pertenencia = "a" in "abc"; // true
let noPertenencia = "d" in "abc"; // false

// De bits
let bits = 1 & 1; // 1
let bitsOr = 1 | 1; // 1
let bitsXor = 1 ^ 1; // 0
let bitsDesplazamientoIzquierda = 1 << 1; // 2
let bitsDesplazamientoDerecha = 1 >> 1; // 0
let bitsDesplazamientoDerechaSinSigno = 1 >>> 1; // 0

// Condicionales
if (true) {
  console.log("Condición verdadera"); // Condición verdadera
}

// Iterativas
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// Excepciones
try {
  throw new Error("Error"); // Error
} catch (error) {
  console.log(error.message); // Error
}

// DIFICULTAD EXTRA (opcional)
for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
    console.log(i); // 10, 12, 14, 20, 22, 26, 28, 32, 34, 38, 40, 44, 46, 50, 52, 54
  }
}
