# Descrição: Programa que lê um ângulo qualquer e exibe o seno, o cosseno e a tangente desse ãngulo
from math import radians, sin, cos, tan
a = int(input('Digite um ângulo qualquer: '))
a_rad = radians(a)
print(f'Seno: {sin(a_rad):.2f}')
print(f'Cosseno: {cos(a_rad):.2f}')
print(f'Tangente: {tan(a_rad):.2f}')
