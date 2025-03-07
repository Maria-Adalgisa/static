medida = float(input('Uma distância em metros: '))

# Conversões
cm = medida * 100
mm = medida * 1000
dam = medida / 10
hm = medida / 100
km = medida / 1000

print('A medida de {}m corresponde a:'.format(medida))
print('{:.0f} cm'.format(cm))
print('{:.0f} mm'.format(mm))
print('{:.2f} dam'.format(dam))
print('{:.2f} hm'.format(hm))
print('{:.2f} km'.format(km))


# Está funcionando: curso em vídeo
# medida = float(input('Uma distancia em metros: '))
# cm = medida * 100
# mm = medida * 1000
# print('A medida de {}m corresponde a {:.0f}cm e {:.0f}mm' .format(medida, cm, mm))
# conversor de medidas
