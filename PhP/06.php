/*
* EJERCICIO:
* Entiende el concepto de recursividad creando una función recursiva que imprima
* números del 100 al 0.
*
* DIFICULTAD EXTRA (opcional):
* Utiliza el concepto de recursividad para:
* - Calcular el factorial de un número concreto (la función recibe ese número).
* - Calcular el valor de un elemento concreto (según su posición) en la
* sucesión de Fibonacci (la función recibe la posición).
*/

<?php

// Funciones
function recursividad($numero)
{
    if ($numero >= 0) {
        echo $numero . PHP_EOL;
        recursividad($numero - 1);
    }
}

function factorial($numero)
{
    if ($numero == 0) {
        return 1;
    } else {
        return $numero * factorial($numero - 1);
    }
}

function fibonacci($posicion)
{
    if ($posicion == 0) {
        return 0;
    } elseif ($posicion == 1) {
        return 1;
    } else {
        return fibonacci($posicion - 1) + fibonacci($posicion - 2);
    }
}

// Llamadas a funciones
recursividad(100);
echo factorial(5); // 120
echo fibonacci(5); // 5

?>