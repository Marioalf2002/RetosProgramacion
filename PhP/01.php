/*
* EJERCICIO:
* - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
* Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
* (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
* - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
* que representen todos los tipos de estructuras de control que existan
* en tu lenguaje:
* Condicionales, iterativas, excepciones...
* - Debes hacer print por consola del resultado de todos los ejemplos.
*
* DIFICULTAD EXTRA (opcional):
* Crea un programa que imprima por consola todos los números comprendidos
* entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
*
* Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
*/

<?php

// Operadores
// Aritméticos
echo 5 + 3; // 8
echo 5 - 3; // 2
echo 5 * 3; // 15
echo 5 / 3; // 1.6666666666667
echo 5 % 3; // 2
echo 5 ** 3; // 125

// Lógicos
echo true && false; // false
echo true || false; // true
echo !true; // false

// Comparación
echo 5 == 3; // false
echo 5 != 3; // true
echo 5 > 3; // true
echo 5 < 3; // false
echo 5 >= 3; // true
echo 5 <= 3; // false

// Asignación
$variable = 5;

// Identidad
echo 5 === 3; // false
echo 5 !== 3; // true

// Pertenencia
echo in_array(5, [1, 2, 3, 4, 5]); // true

// Bits
echo 5 & 3; // 1
echo 5 | 3; // 7
echo 5 ^ 3; // 6
echo ~5; // -6
echo 5 << 3; // 40
echo 5 >> 3; // 0

// Estructuras de control
// Condicionales
if (5 > 3) {
    echo '5 es mayor que 3';
} elseif (5 < 3) {
    echo '5 es menor que 3';
} else {
    echo '5 es igual a 3';
}

// Iterativas
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

$i = 0;
while ($i < 5) {
    echo $i;
    $i++;
}

$i = 0;
do {
    echo $i;
    $i++;
} while ($i < 5);

// Excepciones
try {
    throw new Exception('Error');
} catch (Exception $e) {
    echo $e->getMessage();
}

// Números entre 10 y 55, pares, y que no son ni el 16 ni múltiplos de 3
for ($i = 10; $i <= 55; $i++) {
    if ($i % 2 === 0 && $i !== 16 && $i % 3 !== 0) {
        echo $i;
    }
}

?>