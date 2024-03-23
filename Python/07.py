"""
 * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje).
 *
 * DIFICULTAD EXTRA (opcional):
 * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
 *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
 *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
 *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
 *   el nombre de una nueva web.
 * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
 *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
 *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
 *   interpretan como nombres de documentos.
"""

# Pilas
# - Introducción
pila = []
pila.append(1)
pila.append(2)
pila.append(3)
print(pila) # [1, 2, 3]

# - Recuperación
print(pila.pop()) # 3
print(pila.pop()) # 2
print(pila.pop()) # 1
print(pila) # []

# Colas
# - Introducción
cola = []
cola.append(1)
cola.append(2)
cola.append(3)
print(cola) # [1, 2, 3]

# - Recuperación
print(cola.pop(0)) # 1
print(cola.pop(0)) # 2
print(cola.pop(0)) # 3
print(cola) # []

# Dificultad extra
# - Navegador web
pila = []
pila.append("www.google.es")
pila.append("www.youtube.com")
pila.append("www.facebook.com")
print(pila.pop()) # www.facebook.com
print(pila.pop()) # www.youtube.com
print(pila.pop()) # www.google.es
print(pila) # []

# - Impresora compartida
cola = []
cola.append("documento1")
cola.append("documento2")
cola.append("documento3")
print(cola.pop(0)) # documento1
print(cola.pop(0)) # documento2
print(cola.pop(0)) # documento3
print(cola) # []