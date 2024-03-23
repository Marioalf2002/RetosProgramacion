/*
* EJERCICIO:
* Implementa los mecanismos de introducción y recuperación de elementos propios de las
* pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
* o lista (dependiendo de las posibilidades de tu lenguaje).
*
* DIFICULTAD EXTRA (opcional):
* - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
* de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
* que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
* Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
* el nombre de una nueva web.
* - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
* impresora compartida que recibe documentos y los imprime cuando así se le indica.
* La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
* interpretan como nombres de documentos.
*/

<?php

// Pilas
$pila = [];
array_push($pila, 'elemento1');
array_push($pila, 'elemento2');
array_push($pila, 'elemento3');
print_r($pila); // ['elemento1', 'elemento2', 'elemento3']
array_pop($pila);
print_r($pila); // ['elemento1', 'elemento2']

// Colas
$cola = [];
array_push($cola, 'elemento1');
array_push($cola, 'elemento2');
array_push($cola, 'elemento3');
print_r($cola); // ['elemento1', 'elemento2', 'elemento3']
array_shift($cola);
print_r($cola); // ['elemento2', 'elemento3']

// DIFICULTAD EXTRA
// Navegador web
$historial = [];
$actual = '';
do {
    echo 'Introduce la acción que quieres realizar (adelante, atrás, salir, o el nombre de una web): ';
    $accion = trim(fgets(STDIN));
    if ($accion === 'adelante') {
        if (count($historial) > 0) {
            array_push($historial, $actual);
            $actual = array_pop($historial);
            echo $actual . PHP_EOL;
        } else {
            echo 'No hay páginas para retroceder' . PHP_EOL;
        }
    } elseif ($accion === 'atrás') {
        if ($actual !== '') {
            array_push($historial, $actual);
            $actual = array_shift($historial);
            echo $actual . PHP_EOL;
        } else {
            echo 'No hay páginas para avanzar' . PHP_EOL;
        }
    } elseif ($accion !== 'salir') {
        $actual = $accion;
        echo $actual . PHP_EOL;
    }
} while ($accion !== 'salir');

// Impresora
$colaImpresora = [];
do {
    echo 'Introduce el nombre del documento que quieres imprimir (imprimir para imprimir un documento): ';
    $documento = trim(fgets(STDIN));
    if ($documento === 'imprimir') {
        if (count($colaImpresora) > 0) {
            echo array_shift($colaImpresora) . PHP_EOL;
        } else {
            echo 'No hay documentos para imprimir' . PHP_EOL;
        }
    } else {
        array_push($colaImpresora, $documento);
    }
} while ($documento !== 'salir');

?>