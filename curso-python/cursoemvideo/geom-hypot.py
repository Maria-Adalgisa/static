from math import hypot
co = float(input('Comprimento do cateto oposto: '))
ca = float(input('comprimento do cateto adjacente: '))
# h1 = (co ** 2 + ca ** 2) ** (1/2) Forma matemática normal
hi = hypot(co, ca)
print('A hipotenusa vai medir {:.2}' .format(hi))
