"""
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
"""

# Funciones
# - Sin parámetros ni retorno
def funcion():
    print("Hola")

funcion() # Hola

# - Con un parámetro
def funcion(parametro):
    print(parametro)

funcion("Hola") # Hola

# - Con varios parámetros
def funcion(parametro1, parametro2):
    print(parametro1 + parametro2)

funcion("Hola, ", "mundo") # Hola, mundo

# - Con retorno
def funcion():
    return "Hola"

print(funcion()) # Hola

# - Funciones dentro de funciones
def funcion():
    def funcion_interna():
        print("Hola")
    funcion_interna()

funcion() # Hola

# - Funciones ya creadas
print(len("Hola")) # 4

# - Variable LOCAL y GLOBAL
variable = 1
CONSTANTE = 2

def funcion():
    global variable
    variable = 2
    print(variable) # 2

funcion()
print(variable) # 2S

# Dificultad extra

# Función que recibe dos parámetros de tipo cadena de texto y retorna un número
def funcion(cadena1, cadena2):
    contador = 0
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print(cadena1 + cadena2)
            contador += 1
        elif i % 3 == 0:
            print(cadena1)
            contador += 1
        elif i % 5 == 0:
            print(cadena2)
            contador += 1
        else:
            print(i)
    return contador

print(funcion("Fizz", "Buzz")) # 27