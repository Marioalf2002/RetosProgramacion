"""
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
"""

# Herencia
class Animal:
    def sonido(self):
        pass

class Perro(Animal):
    def sonido(self):
        return "Guau"
    
class Gato(Animal):
    def sonido(self):
        return "Miau"
    
def imprimir_sonido(animal):
    print(animal.sonido())

perro = Perro()
gato = Gato()
imprimir_sonido(perro) # Guau
imprimir_sonido(gato) # Miau

# Dificultad extra
class Empleado:
    def __init__(self, identificador, nombre):
        self.identificador = identificador
        self.nombre = nombre

class Gerente(Empleado):
    def __init__(self, identificador, nombre):
        super().__init__(identificador, nombre)
        self.empleados = []

class GerenteProyectos(Gerente):
    def __init__(self, identificador, nombre):
        super().__init__(identificador, nombre)
        self.proyectos = []

class Programador(Empleado):
    def __init__(self, identificador, nombre):
        super().__init__(identificador, nombre)
        self.lenguaje = ""

gerente = Gerente(1, "Gerente")
gerente_proyectos = GerenteProyectos(2, "Gerente de proyectos")

programador = Programador(3, "Programador")
programador.lenguaje = "Python"

print(gerente.identificador, gerente.nombre) # 1 Gerente
print(gerente_proyectos.identificador, gerente_proyectos.nombre) # 2 Gerente de proyectos
print(programador.identificador, programador.nombre, programador.lenguaje) # 3 Programador Python