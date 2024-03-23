/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

// Creación de un array
let array = [1, 2, 3, 4, 5];

// Inserción
array.push(6); // [1, 2, 3, 4, 5, 6]

// Borrado
array.pop(); // [1, 2, 3, 4, 5]

// Actualización
array[0] = 0; // [0, 2, 3, 4, 5]

// Ordenación
array.sort(); // [0, 2, 3, 4, 5]

// Creación de un objeto
let objeto = {
  nombre: "JavaScript",
  version: 6,
};

// Inserción
objeto["autor"] = "Brendan Eich"; // {nombre: "JavaScript", version: 6, autor
// : "Brendan Eich"}

// Borrado
delete objeto.autor; // {nombre: "JavaScript", version: 6}

// Actualización
objeto.version = 7; // {nombre: "JavaScript", version: 7}

// Ordenación
// No aplica para objetos
// Creación de un mapa
let mapa = new Map();

// Inserción
mapa.set("nombre", "JavaScript"); // Map(1) {"nombre" => "JavaScript"}

// Borrado
mapa.delete("nombre"); // Map(0) {}

// Actualización
mapa.set("version", 6); // Map(1) {"version" => 6}

// Ordenación
// No aplica para mapas
// Creación de un conjunto
let conjunto = new Set([1, 2, 3, 4, 5]);

// Inserción
conjunto.add(6); // Set(6) {1, 2, 3, 4, 5, 6}

// Borrado
conjunto.delete(6); // Set(5) {1, 2, 3, 4, 5}

// Actualización
// No aplica para conjuntos

// Ordenación
// No aplica para conjuntos
// Creación de una función
function funcion() {
  console.log("Función");
}

// Inserción
// No aplica para funciones

// Borrado
// No aplica para funciones

// Actualización
// No aplica para funciones

// Ordenación
// No aplica para funciones

// Creación de una clase
class Clase {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Inserción
// No aplica para clases

// Borrado
// No aplica para clases

// Actualización
// No aplica para clases

// Ordenación
// No aplica para clases

// DIFICULTAD EXTRA (opcional)
// Agenda de contactos por terminal
const readline = require("readline");
let agenda = new Map();

function buscarContacto(nombre) {
  if (agenda.has(nombre)) {
    console.log(agenda.get(nombre));
  } else {
    console.log("Contacto no encontrado");
  }
}

function insertarContacto(nombre, telefono) {
  if (agenda.has(nombre)) {
    console.log("Contacto ya existente");
  } else {
    agenda.set(nombre, telefono);
    console.log("Contacto insertado");
  }
}

function actualizarContacto(nombre, telefono) {
  if (agenda.has(nombre)) {
    agenda.set(nombre, telefono);
    console.log("Contacto actualizado");
  } else {
    console.log("Contacto no encontrado");
  }
}

function eliminarContacto(nombre) {
  if (agenda.has(nombre)) {
    agenda.delete(nombre);
    console.log("Contacto eliminado");
  } else {
    console.log("Contacto no encontrado");
  }
}

function mostrarAgenda() {
  console.log(agenda);
}

function programa() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function realizarOperacion() {
    rl.question(
      "¿Qué operación quieres realizar? (buscar, insertar, actualizar, eliminar, mostrar, salir)\n",
      function (operacion) {
        console.clear();

        switch (operacion) {
          case "buscar":
            rl.question("Nombre del contacto: ", function (nombreBuscar) {
              buscarContacto(nombreBuscar);
              realizarOperacion();
            });
            break;
          case "insertar":
            rl.question("Nombre del contacto: ", function (nombreInsertar) {
              rl.question("Número de teléfono: ", function (telefonoInsertar) {
                insertarContacto(nombreInsertar, telefonoInsertar);
                realizarOperacion();
              });
            });
            break;
          case "actualizar":
            rl.question("Nombre del contacto: ", function (nombreActualizar) {
              rl.question(
                "Número de teléfono: ",
                function (telefonoActualizar) {
                  actualizarContacto(nombreActualizar, telefonoActualizar);
                  realizarOperacion();
                }
              );
            });
            break;
          case "eliminar":
            rl.question("Nombre del contacto: ", function (nombreEliminar) {
              eliminarContacto(nombreEliminar);
              realizarOperacion();
            });
            break;
          case "mostrar":
            mostrarAgenda();
            realizarOperacion();
            break;
          case "salir":
            rl.close();
            return;
          default:
            console.log("Operación no válida");
            realizarOperacion();
        }
      }
    );
  }

  console.log("Agenda de contactos");
  realizarOperacion();
}

programa();
