/*
* EJERCICIO:
* Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
* en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
* - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
* recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
* interpolación, verificación...
*
* DIFICULTAD EXTRA (opcional):
* Crea un programa que analice dos palabras diferentes y realice comprobaciones
* para descubrir si son:
* - Palíndromos
* - Anagramas
* - Isogramas
*/


<?php

// Operaciones con cadenas de caracteres
// Acceso a caracteres específicos
$cadena = 'Cadena de texto';
echo $cadena[0]; // C
// Subcadenas
echo substr($cadena, 0, 6); // Cadena
// Longitud
echo strlen($cadena); // 15
// Concatenación
echo $cadena . ' concatenada'; // Cadena de texto concatenada
// Repetición
echo str_repeat($cadena, 3); // Cadena de textoCadena de textoCadena de texto
// Recorrido
for ($i = 0; $i < strlen($cadena); $i++) {
    echo $cadena[$i];
}
// Conversión a mayúsculas y minúsculas
echo strtoupper($cadena); // CADENA DE TEXTO
echo strtolower($cadena); // cadena de texto
// Reemplazo
echo str_replace('Cadena', 'Frase', $cadena); // Frase de texto
// División
print_r(explode(' ', $cadena)); // Array ( [0] => Cadena [1] => de [2] => texto )
// Unión
echo implode(' ', ['Cadena', 'de', 'texto']); // Cadena de texto
// Interpolación
echo "La $cadena"; // La Cadena de texto
// Verificación
echo strpos($cadena, 'de'); // 7
echo strrev($cadena); // otxet ed anedaC
// Palíndromos
$palabra = 'reconocer';
if ($palabra === strrev($palabra)) {
    echo 'Es palíndromo';
} else {
    echo 'No es palíndromo';
}
// Anagramas
$palabra1 = 'roma';
$palabra2 = 'amor';
if (count_chars($palabra1, 1) === count_chars($palabra2, 1)) {
    echo 'Es anagrama';
} else {
    echo 'No es anagrama';
}
// Isogramas
$palabra = 'murciélago';
if (count_chars($palabra, 3) === count_chars($palabra, 1)) {
    echo 'Es isograma';
} else {
    echo 'No es isograma';
}

?>