/*
* IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
*
* EJERCICIO:
* Desarrolla un programa capaz de crear un archivo que se llame como
* tu usuario de GitHub (Marioalf2002) y tenga la extensión .txt.
* Añade varias líneas en ese fichero:
* - Tu nombre.
* - Edad.
* - Lenguaje de programación favorito.
* Imprime el contenido.
* Borra el fichero.
*
* DIFICULTAD EXTRA (opcional):
* Desarrolla un programa de gestión de ventas que almacena sus datos en un
* archivo .txt.
* - Cada producto se guarda en una línea del archivo de la siguiente manera:
* [nombre_producto], [cantidad_vendida], [precio].
* - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
* actualizar, eliminar productos y salir.
* - También debe poseer opciones para calcular la venta total y por producto.
* - La opción salir borra el .txt.
*/

<?php

// Crear archivo
$archivo = fopen('Marioalf2002.txt', 'w');
fwrite($archivo, "Mario Alfredo\n");
fwrite($archivo, "19\n");
fwrite($archivo, "PhP\n");
fclose($archivo);

// Imprimir contenido
$archivo = fopen('Marioalf2002.txt', 'r');
while (!feof($archivo)) {
    echo fgets($archivo);
}
fclose($archivo);

// Borrar archivo
unlink('Marioalf2002.txt');

// DIFICULTAD EXTRA
function agregarProducto($nombre, $cantidad, $precio)
{
    $archivo = fopen('ventas.txt', 'a+');
    fwrite($archivo, "$nombre, $cantidad, $precio\n");
    fclose($archivo);
}

function consultarProductos()
{
    $archivo = fopen('ventas.txt', 'r');
    while (!feof($archivo)) {
        echo fgets($archivo);
    }
    fclose($archivo);
}

function actualizarProducto($nombre, $cantidad, $precio)
{
    $archivo = fopen('ventas.txt', 'r');
    $lineas = [];
    while (!feof($archivo)) {
        $lineas[] = fgets($archivo);
    }
    foreach ($lineas as &$linea) {
        $datos = explode(', ', $linea);
        if ($datos[0] === $nombre) {
            $linea = "$nombre, $cantidad, $precio\n";
            break;
        }
    }
    fclose($archivo);
    $archivo = fopen('ventas.txt', 'w');
    foreach ($lineas as $linea) {
        fwrite($archivo, $linea);
    }
    fclose($archivo);
}

function eliminarProducto($nombre)
{
    $archivo = fopen('ventas.txt', 'r');
    $lineas = [];
    while (!feof($archivo)) {
        $lineas[] = fgets($archivo);
    }
    foreach ($lineas as $indice => $linea) {
        $datos = explode(', ', $linea);
        if ($datos[0] === $nombre) {
            unset($lineas[$indice]);
            break;
        }
    }
    fclose($archivo);
    $archivo = fopen('ventas.txt', 'w');
    foreach ($lineas as $linea) {
        fwrite($archivo, $linea);
    }
    fclose($archivo);
}

function calcularVentaTotal()
{
    $archivo = fopen('ventas.txt', 'r');
    $ventaTotal = 0;
    while (!feof($archivo)) {
        $linea = fgets($archivo);
        $datos = explode(', ', $linea);
        $cantidad = intval($datos[1]);
        $precio = intval($datos[2]);
        $ventaTotal += $cantidad * $precio;
    }
    fclose($archivo);
    return $ventaTotal;
}

function calcularVentaPorProducto($nombre)
{
    $archivo = fopen('ventas.txt', 'r');
    $ventaProducto = 0;
    while (!feof($archivo)) {
        $linea = fgets($archivo);
        $datos = explode(', ', $linea);
        if ($datos[0] === $nombre) {
            $cantidad = intval($datos[1]);
            $precio = intval($datos[2]);
            $ventaProducto = $cantidad * $precio;
            break;
        }
    }
    fclose($archivo);
    return $ventaProducto;
}

// Ejemplo de uso
agregarProducto("Producto1", 10, 100);
agregarProducto("Producto2", 20, 200);
agregarProducto("Producto3", 30, 300);
consultarProductos();
actualizarProducto("Producto1", 20, 100);
eliminarProducto("Producto2");
consultarProductos();
$ventaTotal = calcularVentaTotal();
$ventaProducto = calcularVentaPorProducto("Producto3");
echo "Venta total: $ventaTotal\n";
echo "Venta del Producto3: $ventaProducto\n";

?>