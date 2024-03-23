"""
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
"""

# Creación de ficheros
import json
import xml.etree.ElementTree as ET

# XML
root = ET.Element("persona")
nombre = ET.SubElement(root, "nombre")
nombre.text = "Mario"
edad = ET.SubElement(root, "edad")
edad.text = "19"
fecha_nacimiento = ET.SubElement(root, "fecha_nacimiento")
fecha_nacimiento.text = "2002-06-20"
lenguajes = ET.SubElement(root, "lenguajes")
lenguaje = ET.SubElement(lenguajes, "lenguaje")
lenguaje.text = "Python"
lenguaje = ET.SubElement(lenguajes, "lenguaje")
lenguaje.text = "Java"
lenguaje = ET.SubElement(lenguajes, "lenguaje")
lenguaje.text = "JavaScript"
tree = ET.ElementTree(root)
tree.write("persona.xml")

# JSON
datos = {
    "nombre": "Mario",
    "edad": 19,
    "fecha_nacimiento": "2002-06-20",
    "lenguajes": ["Python", "Java", "JavaScript"]
}
with open("persona.json", "w") as fichero:
    json.dump(datos, fichero)

# Lectura de ficheros
# XML
tree = ET.parse("persona.xml")
root = tree.getroot()
print(ET.tostring(root, encoding="utf-8").decode("utf-8"))

# JSON
with open("persona.json", "r") as fichero:
    print(json.load(fichero))

# Borrado de ficheros
import os
os.remove("persona.xml")
os.remove("persona.json")

# Dificultad extra
# - Lectura de ficheros

# XML
class Persona:
    def __init__(self, nombre, edad, fecha_nacimiento, lenguajes):
        self.nombre = nombre
        self.edad = edad
        self.fecha_nacimiento = fecha_nacimiento
        self.lenguajes = lenguajes

    def __str__(self):
        return f"{self.nombre}, {self.edad}, {self.fecha_nacimiento}, {self.lenguajes}"
    
tree = ET.parse("persona.xml")
root = tree.getroot()
persona = Persona(
    root.find("nombre").text,
    int(root.find("edad").text),
    root.find("fecha_nacimiento").text,
    [lenguaje.text for lenguaje in root.find("lenguajes")]
)
print(persona)

# JSON
class Persona:
    def __init__(self, nombre, edad, fecha_nacimiento, lenguajes):
        self.nombre = nombre
        self.edad = edad
        self.fecha_nacimiento = fecha_nacimiento
        self.lenguajes = lenguajes

    def __str__(self):
        return f"{self.nombre}, {self.edad}, {self.fecha_nacimiento}, {self.lenguajes}"
    
with open("persona.json", "r") as fichero:
    datos = json.load(fichero)
    persona = Persona(
        datos["nombre"],
        datos["edad"],
        datos["fecha_nacimiento"],
        datos["lenguajes"]
    )
    print(persona)

# Borrado de ficheros
os.remove("persona.xml")
os.remove("persona.json")