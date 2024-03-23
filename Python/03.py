"""
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
"""

# Estructuras
# - Listas
lista = [1, 2, 3]
lista.append(4) # [1, 2, 3, 4]
lista.remove(2) # [1, 3, 4]
lista[0] = 0 # [0, 3, 4]
lista.sort() # [0, 3, 4]

# - Tuplas
tupla = (1, 2, 3) # (1, 2, 3)

# - Diccionarios
diccionario = {"clave1": "valor1", "clave2": "valor2"} # {'clave1': 'valor1', 'clave2': 'valor2'}
diccionario["clave3"] = "valor3" # {'clave1': 'valor1', 'clave2': 'valor2', 'clave3': 'valor3'}
del diccionario["clave2"] # {'clave1': 'valor1', 'clave3': 'valor3'}
diccionario["clave1"] = "valor1.1" # {'clave1': 'valor1.1', 'clave3': 'valor3'}
print(diccionario) # {'clave1': 'valor1.1', 'clave3': 'valor3'}

# Dificultad extra
# Agenda de contactos
agenda = {}

def buscar():
    nombre = input("Nombre: ")
    if nombre in agenda:
        print(f"Nombre: {nombre}, Teléfono: {agenda[nombre]}")
    else:
        print("No se ha encontrado el contacto")

def insertar():
    nombre = input("Nombre: ")
    telefono = input("Teléfono: ")
    if telefono.isdigit() and len(telefono) <= 11:
        agenda[nombre] = telefono
    else:
        print("El teléfono no es válido")

def actualizar():
    nombre = input("Nombre: ")
    telefono = input("Teléfono: ")
    if telefono.isdigit() and len(telefono) <= 11:
        agenda[nombre] = telefono
    else:
        print("El teléfono no es válido")

def eliminar():
    nombre = input("Nombre: ")
    if nombre in agenda:
        del agenda[nombre]
    else:
        print("No se ha encontrado el contacto")

while True:
    print("1. Buscar")
    print("2. Insertar")
    print("3. Actualizar")
    print("4. Eliminar")
    print("5. Salir")
    opcion = input("Opción: ")
    if opcion == "1":
        buscar()
    elif opcion == "2":
        insertar()
    elif opcion == "3":
        actualizar()
    elif opcion == "4":
        eliminar()
    elif opcion == "5":
        break
    else:
        print("Opción no válida")

print(agenda) # {'nombre1': 'telefono1', 'nombre2': 'telefono2'}