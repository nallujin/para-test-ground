def confirmation():
    while True:
        yn = input("Do you wish to use the calculator again? (Y/N): ")
        yn = yn.upper()
        if yn == "Y":
            print("--------------------------------------------------\n")
            main()
        elif yn == "N":
            print("Thank you for using our calculator, have a good day!")
            break


def tambah():
    while True:
        in1 = input("Please input the first number: ")
        in2 = input("Please input the second number: ")
        if not (in1.isdigit() and in2.isdigit()):
            print("Both inputs aren't numbers, please enter valid numbers.\n")
        elif not in1.isdigit():
            print("The first number isn't a number, please enter a valid number.\n")
        elif not in2.isdigit():
            print("The second number isn't a number, please enter a valid number.\n")
        else:
            in1 = int(in1)
            in2 = int(in2)
            resu = in1 + in2
            print(f"{in1} + {in2} is {resu}.")
            confirmation()
            break


def kurang():
    while True:
        in1 = input("Please input the first number: ")
        in2 = input("Please input the second number: ")
        if not (in1.isdigit() and in2.isdigit()):
            print("Both inputs aren't numbers, please enter valid numbers.\n")
        elif not in1.isdigit():
            print("The first number isn't a number, please enter a valid number.\n")
        elif not in2.isdigit():
            print("The second number isn't a number, please enter a valid number.\n")
        else:
            in1 = int(in1)
            in2 = int(in2)
            resu = in1 - in2
            print(f"{in1} - {in2} is {resu}.")
            confirmation()
            break


def kali():
    while True:
        in1 = input("Please input the first number: ")
        in2 = input("Please input the second number: ")
        if not (in1.isdigit() and in2.isdigit()):
            print("Both inputs aren't numbers, please enter valid numbers.\n")
        elif not in1.isdigit():
            print("The first number isn't a number, please enter a valid number.\n")
        elif not in2.isdigit():
            print("The second number isn't a number, please enter a valid number.\n")
        else:
            in1 = int(in1)
            in2 = int(in2)
            resu = in1 * in2
            print(f"{in1} × {in2} is {resu}.")
            confirmation()
            break


def bagi():
    while True:
        in1 = input("Please input the first number: ")
        in2 = input("Please input the second number: ")
        if not (in1.isdigit() and in2.isdigit()):
            print("Both inputs aren't numbers, please enter valid numbers.\n")
        elif not in1.isdigit():
            print("The first number isn't a number, please enter a valid number.\n")
        elif not in2.isdigit():
            print("The second number isn't a number, please enter a valid number.\n")
        else:
            in1 = int(in1)
            in2 = int(in2)
            resu = in1 / in2
            resu = round(resu, 5)
            print(f"{in1} / {in2} is {resu}.")
            confirmation()
            break


def main():
    while True:
        op = input("Select (1-4):"
                   "\n1. Addition"
                   "\n2. Subtraction"
                   "\n3. Multiplication"
                   "\n4. Division"
                   "\nInput here: ")
        if op.isdigit():
            op = int(op)
            if op == 1:
                print("Addition selected")
                tambah()
                break
            elif op == 2:
                print("Subtraction selected")
                kurang()
                break
            elif op == 3:
                print("Multiplication selected")
                kali()
                break
            elif op == 4:
                print("Division selected")
                bagi()
                break
            else:
                print("\nPlease enter a valid number.")
        else:
            print("\nPlease enter a number")


main()
