"""
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
"""

# Creación de fichero
fichero = open("Marioalf2002.txt", "w")
fichero.write("Mario\n")
fichero.write("19\n")
fichero.write("Python\n")
fichero.close()

# Lectura de fichero
fichero = open("Marioalf2002.txt", "r")
print(fichero.read())
fichero.close()

# Borrado de fichero
import os
os.remove("Marioalf2002.txt")

# Dificultad extra
def anadir_producto(nombre, cantidad, precio):
    fichero = open("ventas.txt", "a")
    fichero.write(f"{nombre}, {cantidad}, {precio}\n")
    fichero.close()

def consultar_producto(nombre):
    fichero = open("ventas.txt", "r")
    for linea in fichero:
        if nombre in linea:
            print(linea)
    fichero.close()

def actualizar_producto(nombre, cantidad, precio):
    fichero = open("ventas.txt", "r")
    lineas = fichero.readlines()
    fichero.close()
    fichero = open("ventas.txt", "w")
    for linea in lineas:
        if nombre in linea:
            fichero.write(f"{nombre}, {cantidad}, {precio}\n")
        else:
            fichero.write(linea)
    fichero.close()

def eliminar_producto(nombre):
    fichero = open("ventas.txt", "r")
    lineas = fichero.readlines()
    fichero.close()
    fichero = open("ventas.txt", "w")
    for linea in lineas:
        if nombre not in linea:
            fichero.write(linea)
    fichero.close()

def venta_total():
    fichero = open("ventas.txt", "r")
    total = 0
    for linea in fichero:
        total += int(linea.split(", ")[1]) * float(linea.split(", ")[2])
    fichero.close()
    return total

def venta_producto(nombre):
    fichero = open("ventas.txt", "r")
    for linea in fichero:
        if nombre in linea:
            return int(linea.split(", ")[1]) * float(linea.split(", ")[2])
    fichero.close()

while True:
    print("1. Añadir producto")
    print("2. Consultar producto")
    print("3. Actualizar producto")
    print("4. Eliminar producto")
    print("5. Venta total")
    print("6. Venta por producto")
    print("7. Salir")
    opcion = int(input("Opción: "))

    if opcion == 1:
        nombre = input("Nombre: ")
        cantidad = int(input("Cantidad: "))
        precio = float(input("Precio: "))
        anadir_producto(nombre, cantidad, precio)
    elif opcion == 2:
        nombre = input("Nombre: ")
        consultar_producto(nombre)
    elif opcion == 3:
        nombre = input("Nombre: ")
        cantidad = int(input("Cantidad: "))
        precio = float(input("Precio: "))
        actualizar_producto(nombre, cantidad, precio)
    elif opcion == 4:
        nombre = input("Nombre: ")
        eliminar_producto(nombre)
    elif opcion == 5:
        print(venta_total())
    elif opcion == 6:
        nombre = input("Nombre: ")
        print(venta_producto(nombre))
    elif opcion == 7:
        os.remove("ventas.txt")
        break
    else:
        print("Opción no válida")