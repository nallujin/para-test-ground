// Define a constructor function for a Person object with properties name and age. Create instances of Person and print their information.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const kevin = new Person("Kevin", 19);
console.log(`Name: ${kevin.name}, ${kevin.age} years old.`);