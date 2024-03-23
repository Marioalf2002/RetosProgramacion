/*
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la
 *   sucesión de Fibonacci (la función recibe la posición).
 */

// Función recursiva
function imprimirNumero(numero) {
  if (numero >= 0) {
    console.log(numero);
    imprimirNumero(numero - 1);
  }
}

imprimirNumero(100);

// Factorial
function factorial(numero) {
  if (numero === 0) {
    return 1;
  }

  return numero * factorial(numero - 1);
}

console.log(factorial(5)); // 120

// Fibonacci
function fibonacci(posicion) {
  if (posicion === 0 || posicion === 1) {
    return posicion;
  }

  return fibonacci(posicion - 1) + fibonacci(posicion - 2);
}

for (let i = 5; i <= 110; i += 5) {
  console.log(fibonacci(i));
}
