"""
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
"""

# Cadenas de caracteres
# - Acceso a caracteres específicos
cadena = "Hola"
print(cadena[0]) # H

# - Subcadenas
print(cadena[0:2]) # Ho

# - Longitud
print(len(cadena)) # 4

# - Concatenación
print(cadena + " mundo") # Hola mundo

# - Repetición
print(cadena * 3) # HolaHolaHola

# - Recorrido
for letra in cadena:
    print(letra) # H o l a

# - Conversión a mayúsculas y minúsculas
print(cadena.upper()) # HOLA
print(cadena.lower()) # hola

# - Reemplazo
print(cadena.replace("o", "0")) # H0la

# - División
print(cadena.split("o")) # ['H', 'la']

# - Unión
print("-".join(cadena)) # H-o-l-a

# - Interpolación
print(f"{cadena} mundo") # Hola mundo

# - Verificación
print("H" in cadena) # True

# Dificultad extra
# - Palíndromos
palabra = "reconocer"
print(palabra == palabra[::-1]) # True

# - Anagramas
palabra1 = "roma"
palabra2 = "amor"
print(sorted(palabra1) == sorted(palabra2)) # True

# - Isogramas
palabra = "murciélago"
print(len(palabra) == len(set(palabra))) # True

