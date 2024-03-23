"""
 * EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido.
"""

# Clases
class Clase:
    def __init__(self, atributo1, atributo2):
        self.atributo1 = atributo1
        self.atributo2 = atributo2
    
    def imprimir(self):
        print(self.atributo1, self.atributo2)

clase = Clase(1, 2)
clase.imprimir() # 1 2
clase.atributo1 = 3
clase.atributo2 = 4
clase.imprimir() # 3 4

# Dificultad extra
# - Pila
class Pila:
    def __init__(self):
        self.lista = []
    
    def anadir(self, elemento):
        self.lista.append(elemento)
    
    def eliminar(self):
        return self.lista.pop()
    
    def tamano(self):
        return len(self.lista)
    
    def imprimir(self):
        print(self.lista)

pila = Pila()
pila.anadir(1)
pila.anadir(2)
pila.anadir(3)
pila.imprimir() # [1, 2, 3]
print(pila.eliminar()) # 3
print(pila.eliminar()) # 2
print(pila.eliminar()) # 1
print(pila.tamano()) # 0

# - Cola
class Cola:
    def __init__(self):
        self.lista = []
    
    def anadir(self, elemento):
        self.lista.append(elemento)
    
    def eliminar(self):
        return self.lista.pop(0)
    
    def tamano(self):
        return len(self.lista)
    
    def imprimir(self):
        print(self.lista)

cola = Cola()
cola.anadir(1)
cola.anadir(2)
cola.anadir(3)
cola.imprimir() # [1, 2, 3]
print(cola.eliminar()) # 1
print(cola.eliminar()) # 2
print(cola.eliminar()) # 3
print(cola.tamano()) # 0

# - Pila y Cola con listas
class Pila:
    def __init__(self):
        self.lista = []
    
    def anadir(self, elemento):
        self.lista.append(elemento)
    
    def eliminar(self):
        return self.lista.pop()
    
    def tamano(self):
        return len(self.lista)
    
    def imprimir(self):
        print(self.lista)

class Cola:
    def __init__(self):
        self.lista = []
    
    def anadir(self, elemento):
        self.lista.append(elemento)
    
    def eliminar(self):
        return self.lista.pop(0)
    
    def tamano(self):
        return len(self.lista)
    
    def imprimir(self):
        print(self.lista)

pila = Pila()
pila.anadir(1)
pila.anadir(2)
pila.anadir(3)
pila.imprimir() # [1, 2, 3]

cola = Cola()
cola.anadir(1)
cola.anadir(2)
cola.anadir(3)
cola.imprimir() # [1, 2, 3]

print(cola.eliminar()) # 1
print(cola.eliminar()) # 2
print(cola.eliminar()) # 3
print(cola.tamano()) # 0
print(pila.eliminar()) # 3
print(pila.eliminar()) # 2
print(pila.eliminar()) # 1
print(pila.tamano()) # 0
