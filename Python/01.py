"""
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
"""

# Operadores aritméticos
print("Operadores aritméticos")
print(2 + 3) # Suma (5)
print(2 - 3) # Resta (-1)
print(2 * 3) # Multiplicación (6)
print(2 / 3) # División (0.6666666666666666)
print(2 % 3) # Módulo (2)
print(2 ** 3) # Exponenciación (8)
print(2 // 3) # División entera (0)

# Operadores lógicos
print("Operadores lógicos") # No existen en Python

# Operadores de comparación
print("Operadores de comparación") # No existen en Python

# Operadores de asignación
print("Operadores de asignación") # No existen en Python

# Operadores de identidad
print("Operadores de identidad") # No existen en Python

# Operadores de pertenencia
print("Operadores de pertenencia") # No existen en Python

# Operadores de bits
print("Operadores de bits") # No existen en Python

# Estructuras de control
print("Estructuras de control") # No existen en Python

# Dificultad extra

# Números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3
for i in range(10, 56):
    if i % 2 == 0 and i != 16 and i % 3 != 0:
        print(i) # 10, 14, 20, 22, 26, 28, 32, 34, 38, 40, 44, 46, 50, 52