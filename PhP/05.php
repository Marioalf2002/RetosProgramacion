/*
* EJERCICIO:
* - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
* su tipo de dato.
* - Muestra ejemplos de funciones con variables que se les pasan "por valor" y
* "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
* (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
*
* DIFICULTAD EXTRA (opcional):
* Crea dos programas que reciban dos parámetros (cada uno) definidos como
* variables anteriormente.
* - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
* Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
* se asigna a dos variables diferentes a las originales. A continuación, imprime
* el valor de las variables originales y las nuevas, comprobando que se ha invertido
* su valor en las segundas.
* Comprueba también que se ha conservado el valor original en las primeras.
*/

<?php

// Asignación de variables
$variable = 5;
$variableReferencia = 5;
$array = [1, 2, 3, 4, 5];
$arrayReferencia = [1, 2, 3, 4, 5];

// Asignación por valor
$variable2 = $variable;
$variable2 = 10;
print_r($variable); // 5
print_r($variable2); // 10

// Asignación por referencia
$variableReferencia2 = &$variableReferencia;
$variableReferencia2 = 10;
print_r($variableReferencia); // 10
print_r($variableReferencia2); // 10

// Funciones con variables por valor
function porValor($parametro)
{
    $parametro = 10;
}
porValor($variable);
print_r($variable); // 5

// Funciones con variables por referencia
function porReferencia(&$parametro)
{
    $parametro = 10;
}
porReferencia($variableReferencia);
print_r($variableReferencia); // 10
print_r($variableReferencia2); // 10

// Programa con parámetros por valor
function porValor2($parametro1, $parametro2)
{
    $aux = $parametro1;
    $parametro1 = $parametro2;
    $parametro2 = $aux;
    return [$parametro1, $parametro2];
}
$variable1 = 5;
$variable2 = 10;
$resultado = porValor2($variable1, $variable2);
print_r($variable1); // 5
print_r($variable2); // 10
print_r($resultado); // [10, 5]

// Programa con parámetros por referencia
function porReferencia2(&$parametro1, &$parametro2)
{
    $aux = $parametro1;
    $parametro1 = $parametro2;
    $parametro2 = $aux;
}
$variable1 = 5;
$variable2 = 10;
porReferencia2($variable1, $variable2);
print_r($variable1); // 10
print_r($variable2); // 5
print_r($resultado); // [10, 5]

?>