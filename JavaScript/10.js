/*
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
 */

// Manejo de excepciones
try {
  throw new Error("Error personalizado");
} catch (error) {
  console.log(error);
}

try {
  let resultado = 10 / 0;
  console.log(resultado);
} catch (error) {
  console.log(error);
}

try {
  let lista = [1, 2, 3];
  console.log(lista[3]);
} catch (error) {
  console.log(error);
}

// DIFICULTAD EXTRA (opcional):

function procesarParametros(parametro) {
  if (parametro === 1) {
    throw new Error("Error de parámetro");
  } else if (parametro === 2) {
    throw "Error de parámetro";
  } else if (parametro === 3) {
    throw "Error personalizado";
  }
}

try {
  procesarParametros(1);
  console.log("Sin errores");
} catch (error) {
  console.log(error);
} finally {
  console.log("Ejecución finalizada");
}
