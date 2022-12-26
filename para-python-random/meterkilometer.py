# 1 km == 1000 m
# 1 m == 0.001 km

def kmtom(kmtom_para):
    kmtom_calc = kmtom_para * 0.001
    print(f'{kmtom_para}m equals to {kmtom_calc}m')


def mtokm(mtokm_para):
    mtokm_calc = mtokm_para * 0.001
    print(f'{mtokm_para}m equals to {mtokm_calc}km')


choose = input('Choose one (1/2)\n1. Kilometer to Meter\n2. Meter to Kilometer\nInput here: ')
if choose == '1':
    kmtom_useinp = int(input('Input here (in kilometer(s)): '))
    kmtom(kmtom_useinp)
elif choose == '2':
    mtokm_useinp = int(input('Input here (in meter(s)): '))
    mtokm(mtokm_useinp)
