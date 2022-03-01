from figuras.cuadrilateros.Cuadrilateros import Cuadrilateros


class Rectangulos(Cuadrilateros):
    def perimetro(self):
        return self.lado1 + self.lado2 + self.lado3 + self.lado4