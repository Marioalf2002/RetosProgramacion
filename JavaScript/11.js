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
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
 */

const fs = require("fs");

// Crear un archivo con el nombre de usuario de GitHub
fs.writeFileSync("Marioalf2002.txt", "Mario Hernandez\n17\nJavaScript");

// Leer el contenido del archivo
console.log(fs.readFileSync("Marioalf2002.txt", "utf-8"));

// Borrar el archivo
fs.unlinkSync("Marioalf2002.txt");

// DIFICULTAD EXTRA (opcional):

class GestionVentas {
  constructor() {
    this.productos = [];
  }

  agregarProducto(nombre, cantidad, precio) {
    this.productos.push({ nombre, cantidad, precio });
  }

  consultarProducto(nombre) {
    return this.productos.find((producto) => producto.nombre === nombre);
  }

  actualizarProducto(nombre, cantidad, precio) {
    const producto = this.consultarProducto(nombre);
    if (producto) {
      producto.cantidad = cantidad;
      producto.precio = precio;
    }
  }

  eliminarProducto(nombre) {
    this.productos = this.productos.filter(
      (producto) => producto.nombre !== nombre
    );
  }

  calcularVentaTotal() {
    return this.productos.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
  }

  calcularVentaProducto(nombre) {
    const producto = this.consultarProducto(nombre);
    return producto ? producto.cantidad * producto.precio : 0;
  }
}

const gestionVentas = new GestionVentas();

gestionVentas.agregarProducto("Producto 1", 10, 100);
gestionVentas.agregarProducto("Producto 2", 20, 200);
gestionVentas.agregarProducto("Producto 3", 30, 300);
gestionVentas.agregarProducto("Producto 4", 40, 400);

console.log(gestionVentas.consultarProducto("Producto 1"));
gestionVentas.actualizarProducto("Producto 1", 5, 50);
console.log(gestionVentas.consultarProducto("Producto 2"));
gestionVentas.eliminarProducto("Producto 2");
console.log(gestionVentas.consultarProducto("Producto 3"));
gestionVentas.eliminarProducto("Producto 3");

console.log(gestionVentas.calcularVentaTotal());
console.log(gestionVentas.calcularVentaProducto("Producto 2"));
console.log(gestionVentas.calcularVentaProducto("Producto 3"));
console.log(gestionVentas.calcularVentaProducto("Producto 4"));
