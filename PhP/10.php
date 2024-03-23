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

<?php

// Manejo de excepciones
try {
    // Error forzado
    $division = 10 / 0;
} catch (Exception $e) {
    echo $e->getMessage();
}

try {
    // Error forzado
    $array = [1, 2, 3];
    echo $array[3];
} catch (Exception $e) {
    echo $e->getMessage();
}

// DIFICULTAD EXTRA
function procesar($parametro)
{
    if ($parametro === 0) {
        throw new Exception('Error personalizado');
    }
    if ($parametro === 1) {
        throw new InvalidArgumentException('Error de argumento');
    }
    if ($parametro === 2) {
        throw new RuntimeException('Error de ejecución');
    }
}

try {
    procesar(0);
    procesar(1);
    procesar(2);
    echo 'No se ha producido ningún error';
} catch (Exception $e) {
    echo $e->getMessage();
} finally {
    echo 'La ejecución ha finalizado';
}

?>