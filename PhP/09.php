/*
* EJERCICIO:
* Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
* implemente una superclase Animal y un par de subclases Perro y Gato,
* junto con una función que sirva para imprimir el sonido que emite cada Animal.
*
* DIFICULTAD EXTRA (opcional):
* Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
* pueden ser Gerentes, Gerentes de Proyectos o Programadores.
* Cada empleado tiene un identificador y un nombre.
* Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
* actividad, y almacenan los empleados a su cargo.
*/

<?php

// Superclase
class Animal
{
    public function sonido()
    {
        echo 'Sonido de animal';
    }
}

// Subclases
class Perro extends Animal
{
    public function sonido()
    {
        echo 'Guau';
    }
}

class Gato extends Animal
{
    public function sonido()
    {
        echo 'Miau';
    }
}

// Llamadas a las clases
$animal = new Animal();
$animal->sonido(); // Sonido de animal
$perro = new Perro();
$perro->sonido(); // Guau
$gato = new Gato();
$gato->sonido(); // Miau

// DIFICULTAD EXTRA
// Empresa
class Empleado
{
    public $id;
    public $nombre;

    public function __construct($id, $nombre)
    {
        $this->id = $id;
        $this->nombre = $nombre;
    }

    public function imprimir()
    {
        echo $this->id . ' ' . $this->nombre;
    }
}

class Gerente extends Empleado
{
    public function imprimir()
    {
        echo 'Gerente: ' . $this->id . ' ' . $this->nombre;
    }
}

class GerenteProyecto extends Empleado
{
    public function imprimir()
    {
        echo 'Gerente de proyecto: ' . $this->id . ' ' . $this->nombre;
    }
}

class Programador extends Empleado
{
    public function imprimir()
    {
        echo 'Programador: ' . $this->id . ' ' . $this->nombre;
    }
}

// Llamadas a las clases
$empleado = new Empleado(1, 'Empleado');
$empleado->imprimir(); // 1 Empleado
$gerente = new Gerente(2, 'Gerente');
$gerente->imprimir(); // Gerente: 2 Gerente
$gerenteProyecto = new GerenteProyecto(3, 'Gerente de proyecto');
$gerenteProyecto->imprimir(); // Gerente de proyecto: 3 Gerente de proyecto
$programador = new Programador(4, 'Programador');
$programador->imprimir(); // Programador: 4 Programador

?>