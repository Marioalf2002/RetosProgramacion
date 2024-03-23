"""
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la
 *   sucesión de Fibonacci (la función recibe la posición).
"""

# Recursividad
def imprimir(numero):
    if numero >= 0:
        print(numero)
        imprimir(numero - 1)

imprimir(100)

# Dificultad extra
# - Factorial
def factorial(numero):
    if numero == 0:
        return 1
    else:
        return numero * factorial(numero - 1)
    
print(factorial(5)) # 120

# - Fibonacci
def fibonacci(posicion):
    if posicion == 0:
        return 0
    elif posicion == 1:
        return 1
    else:
        return fibonacci(posicion - 1) + fibonacci(posicion - 2)
    
print(fibonacci(5)) # 5

# - Fibonacci con lista
def fibonacci(posicion, lista = [0, 1]):
    if posicion < len(lista):
        return lista[posicion]
    else:
        lista.append(lista[-1] + lista[-2])
        return fibonacci(posicion, lista)
    
print(fibonacci(5)) # 5

# - Fibonacci con lista y bucle
def fibonacci(posicion):
    lista = [0, 1]
    for i in range(2, posicion + 1):
        lista.append(lista[-1] + lista[-2])
    return lista[posicion]

print(fibonacci(5)) # 5

# - Fibonacci con bucle
def fibonacci(posicion):
    a, b = 0, 1
    for i in range(posicion):
        a, b = b, a + b
    return a

print(fibonacci(5)) # 5

# - Fibonacci con generador
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

f = fibonacci()

for i in range(6):
    print(next(f)) # 0 1 1 2 3 5

# - Fibonacci con generador y bucle
def fibonacci(posicion):
    a, b = 0, 1
    for i in range(posicion):
        a, b = b, a + b
    return a

print(fibonacci(5)) # 5
