/*
* IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
*
* EJERCICIO:
* Desarrolla un programa capaz de crear un archivo XML y JSON que guarde los
* siguientes datos (haciendo uso de la sintaxis correcta en cada caso):
* - Nombre
* - Edad
* - Fecha de nacimiento
* - Listado de lenguajes de programación
* Muestra el contenido de los archivos.
* Borra los archivos.
*
* DIFICULTAD EXTRA (opcional):
* Utilizando la lógica de creación de los archivos anteriores, crea un
* programa capaz de leer y transformar en una misma clase custom de tu
* lenguaje los datos almacenados en el XML y el JSON.
* Borra los archivos.
*/

<?php
 
 // Crear archivo XML
    $xml = new DOMDocument('1.0', 'UTF-8');
    $xml->formatOutput = true;
    $root = $xml->createElement('datos');
    $xml->appendChild($root);
    $nombre = $xml->createElement('nombre', 'Mario Hernandez');
    $root->appendChild($nombre);
    $edad = $xml->createElement('edad', '19');
    $root->appendChild($edad);
    $fechaNacimiento = $xml->createElement('fechaNacimiento', '2002-07-20');
    $root->appendChild($fechaNacimiento);
    $lenguajes = $xml->createElement('lenguajes');
    $root->appendChild($lenguajes);
    $lenguaje1 = $xml->createElement('lenguaje', 'PhP');
    $lenguajes->appendChild($lenguaje1);
    $lenguaje2 = $xml->createElement('lenguaje', 'JavaScript');
    $lenguajes->appendChild($lenguaje2);
    $lenguaje3 = $xml->createElement('lenguaje', 'Python');
    $lenguajes->appendChild($lenguaje3);
    $xml->save('datos.xml');

    // Imprimir contenido XML
    $xml = simplexml_load_file('datos.xml');
    print_r($xml);

    // Borrar archivo XML
    unlink('datos.xml');

    // Crear archivo JSON
    $datos = [
        'nombre' => 'Mario Hernandez',
        'edad' => 19,
        'fechaNacimiento' => '2002-07-20',
        'lenguajes' => ['PhP', 'JavaScript', 'Python']
    ];
    $json = json_encode($datos);
    file_put_contents('datos.json', $json);

    // Imprimir contenido JSON
    $json = file_get_contents('datos.json');
    $datos = json_decode($json, true);
    print_r($datos);
    
    // Borrar archivo JSON
    unlink('datos.json');

    // DIFICULTAD EXTRA
    class Datos
    {
        public $nombre;
        public $edad;
        public $fechaNacimiento;
        public $lenguajes;
    
        public function __construct($nombre, $edad, $fechaNacimiento, $lenguajes)
        {
            $this->nombre = $nombre;
            $this->edad = $edad;
            $this->fechaNacimiento = $fechaNacimiento;
            $this->lenguajes = $lenguajes;
        }
    
        public function imprimir()
        {
            echo $this->nombre . ' ' . $this->edad . ' ' . $this->fechaNacimiento . ' ' . implode(', ', $this->lenguajes);
        }
    }

    // Leer y transformar XML
    $xml = simplexml_load_file('datos.xml');
    $nombre = (string) $xml->nombre;
    $edad = (int) $xml->edad;
    $fechaNacimiento = (string) $xml->fechaNacimiento;
    $lenguajes = [];
    foreach ($xml->lenguajes->lenguaje as $lenguaje) {
        $lenguajes[] = (string) $lenguaje;
    }
    $datos = new Datos($nombre, $edad, $fechaNacimiento, $lenguajes);
    $datos->imprimir();

    // Leer y transformar JSON
    $json = file_get_contents('datos.json');
    $datos = json_decode($json, true);
    $datos = new Datos($datos['nombre'], $datos['edad'], $datos['fechaNacimiento'], $datos['lenguajes']);
    $datos->imprimir();
    
    // Borrar archivos
    unlink('datos.xml');
    unlink('datos.json');
 
 ?>