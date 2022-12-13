from platform import python_version

print("Current Python Version-", python_version())


class Car:
    def __init__(self):
        self.__updateSoftware()

    def drive(self):
        print('driving')

    def __updateSoftware(self):
        print('updating software')


redcar = Car()
redcar.drive()
