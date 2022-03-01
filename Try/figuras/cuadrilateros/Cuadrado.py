from figuras.cuadrilateros.Cuadrilateros import Cuadrilateros


class Cuadrado(Cuadrilateros):
    def __init__(self, lado):
        Cuadrilateros.__init__(self, lado, lado, lado, lado)

    def area(self):
        return self.lado1 * self.lado1