/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

// Acceso a caracteres específicos
let cadena = "¡Hola, mundo!";
console.log(cadena[0]); // ¡
console.log(cadena.charAt(0)); // ¡
console.log(cadena[cadena.length - 1]); // !

// Subcadenas
console.log(cadena.substring(1, 5)); // Hola

// Longitud
console.log(cadena.length); // 12

// Concatenación
let cadenaConcatenada = "¡Hola, " + "mundo!";
console.log(cadenaConcatenada); // ¡Hola, mundo!

// Repetición
let cadenaRepetida = "¡Hola, ".repeat(3);
console.log(cadenaRepetida); // ¡Hola, ¡Hola, ¡Hola,

// Recorrido
for (let caracter of cadena) {
  console.log(caracter);
}

// Conversión a mayúsculas y minúsculas
console.log(cadena.toUpperCase()); // ¡HOLA, MUNDO!
console.log(cadena.toLowerCase()); // ¡hola, mundo!

// Reemplazo
console.log(cadena.replace("mundo", "JavaScript")); // ¡Hola, JavaScript!

// División
console.log(cadena.split(" ")); // ["¡Hola,", "mundo!"]

// Unión
console.log(["¡Hola,", "mundo!"].join(" ")); // ¡Hola, mundo!

// Interpolación
let nombre = "JavaScript";
console.log(`¡Hola, ${nombre}!`); // ¡Hola, JavaScript!

// Verificación
console.log(cadena.includes("mundo")); // true
console.log(cadena.startsWith("¡")); // true
console.log(cadena.endsWith("!")); // true

// DIFICULTAD EXTRA (opcional)

// Palíndromos
function esPalindromo(palabra) {
  return palabra === palabra.split("").reverse().join("");
}

console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("JavaScript")); // false

// Anagramas
function esAnagrama(palabra1, palabra2) {
  return (
    palabra1.split("").sort().join("") === palabra2.split("").sort().join("")
  );
}

console.log(esAnagrama("roma", "amor")); // true
console.log(esAnagrama("JavaScript", "Python")); // false

// Isogramas
function esIsograma(palabra) {
  return palabra.length === new Set(palabra).size;
}

console.log(esIsograma("murciélago")); // true
console.log(esIsograma("JavaScript")); // false
