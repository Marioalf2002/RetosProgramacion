"""
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
"""

# Excepciones
# - Error forzado
try:
    print(10 / 0)
except ZeroDivisionError as e:
    print(e)

# - Error forzado
try:
    lista = [1, 2, 3]
    print(lista[3])
except IndexError as e:
    print(e)

# Dificultad extra
# - Excepciones personalizadas
class ErrorPersonalizado(Exception):
    pass

def funcion(parametro):
    if parametro == 1:
        raise ValueError("Valor incorrecto")
    elif parametro == 2:
        raise TypeError("Tipo incorrecto")
    elif parametro == 3:
        raise ErrorPersonalizado("Error personalizado")
    else:
        print("Sin errores")

try:
    funcion(1)
    funcion(2)
    funcion(3)
    funcion(4)
except Exception as e:
    print(type(e).__name__)
finally:
    print("La ejecución ha finalizado")