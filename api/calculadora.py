import math


def calcularPitagoras(cateto1, cateto2):
    if type(cateto1) not in (int, float) or type(cateto2) not in (int, float):
        return False
    else:
        hiputenusa = math.sqrt(math.pow(cateto1, 2) + math.pow(cateto2, 2))
        return hiputenusa
