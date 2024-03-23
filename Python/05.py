"""
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como
 * variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime
 *   el valor de las variables originales y las nuevas, comprobando que se ha invertido
 *   su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
"""

# Asignación de variables
# - Por valor
a = 1
b = a
b = 2
print(a) # 1

# - Por referencia
lista1 = [1, 2, 3]
lista2 = lista1
lista2[0] = 4
print(lista1) # [4, 2, 3]

# Funciones
# - Parámetros por valor
def funcion(parametro):
    parametro = 2

a = 1
funcion(a)
print(a) # 1

# - Parámetros por referencia
def funcion(parametro):
    parametro[0] = 4

lista = [1, 2, 3]
funcion(lista)
print(lista) # [4, 2, 3]

# Dificultad extra
# - Parámetros por valor
def funcion(parametro1, parametro2):
    return parametro2, parametro1

a = 1
b = 2
a, b = funcion(a, b)
print(a) # 2
print(b) # 1

# - Parámetros por referencia
def funcion(parametro1, parametro2):
    return parametro2, parametro1

lista1 = [1, 2, 3]
lista2 = [4, 5, 6]
lista1, lista2 = funcion(lista1, lista2)
print(lista1) # [4, 5, 6]

