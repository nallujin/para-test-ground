def calcu():
    add1 = int(input('Input your first number: '))
    add2 = int(input('Input your second number: '))
    this = add1 * add2
    sums = add1 + add2
    if this >= 1000:
        print(f'The result is {sums}')
    else:
        print(f'The result is {this}')

calcu()