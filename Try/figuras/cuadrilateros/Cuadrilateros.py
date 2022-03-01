class Cuadrilateros:
    def __init__(self, lado1, lado2, lado3, lado4):
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3
        self.lado4 = lado4

    def print_sides(self):
        print("Lado 1 = " + str(self.lado1)
              + "\nLado 2 = " + str(self.lado2)
              + "\nLado 3 = " + str(self.lado3)
              + "\nLado 4 = " + str(self.lado4))
