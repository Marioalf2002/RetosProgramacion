/*
* EJERCICIO:
* - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
* en tu lenguaje.
* - Utiliza operaciones de inserción, borrado, actualización y ordenación.
*
* DIFICULTAD EXTRA (opcional):
* Crea una agenda de contactos por terminal.
* - Debes implementar funcionalidades de búsqueda, inserción, actualización
* y eliminación de contactos.
* - Cada contacto debe tener un nombre y un número de teléfono.
* - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
* y a continuación los datos necesarios para llevarla a cabo.
* - El programa no puede dejar introducir números de teléfono no númericos y con más
* de 11 dígitos (o el número de dígitos que quieras).
* - También se debe proponer una operación de finalización del programa.
*/

<?php

// Estructuras
// Array
$array = [1, 2, 3, 4, 5];
// Inserción
array_push($array, 6);
// Borrado
array_pop($array);
// Actualización
$array[0] = 0;
// Ordenación
sort($array);

// Agenda de contactos
$agenda = [];
do {
    echo '¿Qué operación quieres realizar? (buscar, insertar, actualizar, eliminar, salir): ';
    $operacion = trim(fgets(STDIN));
    switch ($operacion) {
        case 'buscar':
            echo 'Introduce el nombre del contacto: ';
            $nombre = trim(fgets(STDIN));
            if (array_key_exists($nombre, $agenda)) {
                echo $nombre . ': ' . $agenda[$nombre] . PHP_EOL;
            } else {
                echo 'El contacto no existe' . PHP_EOL;
            }
            break;
        case 'insertar':
            echo 'Introduce el nombre del contacto: ';
            $nombre = trim(fgets(STDIN));
            echo 'Introduce el número de teléfono: ';
            $telefono = trim(fgets(STDIN));
            if (is_numeric($telefono) && strlen($telefono) <= 11) {
                $agenda[$nombre] = $telefono;
            } else {
                echo 'Número de teléfono no válido' . PHP_EOL;
            }
            break;
        case 'actualizar':
            echo 'Introduce el nombre del contacto: ';
            $nombre = trim(fgets(STDIN));
            if (array_key_exists($nombre, $agenda)) {
                echo 'Introduce el nuevo número de teléfono: ';
                $telefono = trim(fgets(STDIN));
                if (is_numeric($telefono) && strlen($telefono) <= 11) {
                    $agenda[$nombre] = $telefono;
                } else {
                    echo 'Número de teléfono no válido' . PHP_EOL;
                }
            } else {
                echo 'El contacto no existe' . PHP_EOL;
            }
            break;
        case 'eliminar':
            echo 'Introduce el nombre del contacto: ';
            $nombre = trim(fgets(STDIN));
            if (array_key_exists($nombre, $agenda)) {
                unset($agenda[$nombre]);
            } else {
                echo 'El contacto no existe' . PHP_EOL;
            }
            break;
        case 'salir':
            break;
        default:
            echo 'Operación no válida' . PHP_EOL;
    }
} while ($operacion !== 'salir');

?>