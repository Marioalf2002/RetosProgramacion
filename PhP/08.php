/*
* EJERCICIO:
* Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
* atributos y una función que los imprima (teniendo en cuenta las posibilidades
* de tu lenguaje).
* Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
* utilizando su función.
*
* DIFICULTAD EXTRA (opcional):
* Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
* en el ejercicio número 7 de la ruta de estudio)
* - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
* retornar el número de elementos e imprimir todo su contenido.
*/

<?php

// Clase
class Clase
{
    private $atributo1;
    private $atributo2;

    public function __construct($atributo1, $atributo2)
    {
        $this->atributo1 = $atributo1;
        $this->atributo2 = $atributo2;
    }

    public function imprimir()
    {
        echo $this->atributo1 . ' ' . $this->atributo2;
    }
}

// Llamadas a la clase
$clase = new Clase('Atributo1', 'Atributo2');
$clase->imprimir(); // Atributo1 Atributo2
$clase = new Clase('NuevoAtributo1', 'NuevoAtributo2');
$clase->imprimir(); // NuevoAtributo1 NuevoAtributo2

// DIFICULTAD EXTRA
// Pila
class Pila
{
    private $pila = [];

    public function push($elemento)
    {
        array_push($this->pila, $elemento);
    }

    public function pop()
    {
        array_pop($this->pila);
    }

    public function elementos()
    {
        return count($this->pila);
    }

    public function imprimir()
    {
        print_r($this->pila);
    }
}

// Llamadas a la clase
$pila = new Pila();
$pila->push('elemento1');
$pila->push('elemento2');
$pila->push('elemento3');
$pila->imprimir(); // ['elemento1', 'elemento2', 'elemento3']
$pila->pop();
$pila->imprimir(); // ['elemento1', 'elemento2']
echo $pila->elementos(); // 2

// Cola
class Cola
{
    private $cola = [];

    public function push($elemento)
    {
        array_push($this->cola, $elemento);
    }

    public function shift()
    {
        array_shift($this->cola);
    }

    public function elementos()
    {
        return count($this->cola);
    }

    public function imprimir()
    {
        print_r($this->cola);
    }
}

// Llamadas a la clase
$cola = new Cola();
$cola->push('elemento1');
$cola->push('elemento2');
$cola->push('elemento3');
$cola->imprimir(); // ['elemento1', 'elemento2', 'elemento3']
$cola->shift();
$cola->imprimir(); // ['elemento2', 'elemento3']
echo $cola->elementos(); // 2

?>