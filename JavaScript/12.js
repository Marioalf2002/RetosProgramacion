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

const fs = require("fs");
const xml2js = require("xml2js");

const datos = {
  nombre: "Juan",
  edad: 30,
  fechaNacimiento: "1990-01-01",
  lenguajes: ["JavaScript", "Python", "Java"],
};

const builder = new xml2js.Builder();
const xml = builder.buildObject(datos);

fs.writeFile("datos.xml", xml, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Archivo XML creado");
  }
});

fs.writeFile("datos.json", JSON.stringify(datos), (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Archivo JSON creado");
  }
});

fs.readFile("datos.xml", "utf-8", (error, datos) => {
  if (error) {
    console.error(error);
  } else {
    console.log(datos);
  }
});

fs.readFile("datos.json", "utf-8", (error, datos) => {
  if (error) {
    console.error(error);
  } else {
    console.log(datos);
  }
});

fs.unlink("datos.xml", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Archivo XML borrado");
  }
});

fs.unlink("datos.json", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Archivo JSON borrado");
  }
});

class Datos {
  constructor(nombre, edad, fechaNacimiento, lenguajes) {
    this.nombre = nombre;
    this.edad = edad;
    this.fechaNacimiento = fechaNacimiento;
    this.lenguajes = lenguajes;
  }
}

fs.readFile("datos.xml", "utf-8", (error, datos) => {
  if (error) {
    console.error(error);
  } else {
    xml2js.parseString(datos, (error, resultado) => {
      if (error) {
        console.error(error);
      } else {
        const datos = resultado.datos;
        const custom = new Datos(
          datos.nombre[0],
          datos.edad[0],
          datos.fechaNacimiento[0],
          datos.lenguajes[0].lenguaje
        );
        console.log(custom);
      }
    });
  }
});

fs.readFile("datos.json", "utf-8", (error, datos) => {
  if (error) {
    console.error(error);
  } else {
    const resultado = JSON.parse(datos);
    const custom = new Datos(
      resultado.nombre,
      resultado.edad,
      resultado.fechaNacimiento,
      resultado.lenguajes
    );
    console.log(custom);
  }
});

fs.unlink("datos.xml", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Archivo XML borrado");
  }
});

fs.unlink("datos.json", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Archivo JSON borrado");
  }
});
