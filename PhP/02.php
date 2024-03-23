/*
* EJERCICIO:
* - Crea ejemplos de funciones básicas que representen las diferentes
* posibilidades del lenguaje:
* Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
* - Comprueba si puedes crear funciones dentro de funciones.
* - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
* - Pon a prueba el concepto de variable LOCAL y GLOBAL.
* - Debes hacer print por consola del resultado de todos los ejemplos.
* (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
*
* DIFICULTAD EXTRA (opcional):
* Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
* - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
* - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
* - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
* - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
* - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
*
* Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
* Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
*/

<?php

// Funciones
// Sin parámetros ni retorno
function sinParametrosNiRetorno()
{
    echo 'Sin parámetros ni retorno';
}

// Con uno o varios parámetros
function conParametros($parametro1, $parametro2)
{
    echo $parametro1 . ' ' . $parametro2;
}

// Con retorno
function conRetorno()
{
    return 'Con retorno';
}

// Funciones dentro de funciones
function funcionExterna()
{
    function funcionInterna()
    {
        echo 'Función interna';
    }
    funcionInterna();
}

// Funciones ya creadas
echo strlen('Cadena de texto'); // 15

// Variable LOCAL y GLOBAL
$variableGlobal = 'Variable global';
function variableLocal()
{
    $variableLocal = 'Variable local';
    echo $variableLocal;
}

// Llamadas a funciones
sinParametrosNiRetorno(); // Sin parámetros ni retorno
conParametros('Parámetro', '1'); // Parámetro 1
echo conRetorno(); // Con retorno
funcionExterna(); // Función interna
echo $variableGlobal; // Variable global
variableLocal(); // Variable local

// DIFICULTAD EXTRA
function multiplos($cadena1, $cadena2)
{
    $contador = 0;
    for ($i = 1; $i <= 100; $i++) {
        if ($i % 3 === 0) {
            echo $cadena1;
            $contador++;
        }
        if ($i % 5 === 0) {
            echo $cadena2;
            $contador++;
        }
    }
    return $contador;
}

echo multiplos('Múltiplo de 3', 'Múltiplo de 5'); // 47

?>