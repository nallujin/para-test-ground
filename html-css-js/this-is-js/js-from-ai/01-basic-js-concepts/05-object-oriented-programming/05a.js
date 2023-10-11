// Create an object representing a car with properties like make, model, and year. Print these properties to the console.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    selfHonk() {
        console.log(`Car make: ${this.make}\nCar model: ${this.model}\nCar year: ${this.year}`);
    }
}

creta = new Car("Hyundai", "Creta", 2022);
creta.selfHonk();