from figuras.cuadrilateros import Circulo

# def ask_for_side():
#     bool1 = True
#     while bool1:
#         try:
#             inp = input("Ingrese el lado del cuadrado: ")
#             numero = int(inp)
#             if numero < 0:
#                 bool1 = indicarError()
#             else:
#                 return numero
#         except:
#             bool1 = indicarError()
#
#
# def indicarError():
#     print("\nIngrese un valor correcto\n")
#     return True
#
#
# ladito = ask_for_side()
#
# x = Cuadrado.Cuadrado(ladito)
#
# print("Este es el \u00E1rea: " + str(x.area()))
# x.print_sides()
from figuras.no_cuadrilateros import Circulo

x = Circulo.Circle
Circulo.Circle.print_pi(x)
