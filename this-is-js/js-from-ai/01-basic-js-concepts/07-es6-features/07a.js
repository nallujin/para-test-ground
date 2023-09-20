// Rewrite a function from one of the previous exercises using arrow function syntax.
// Answer: Picking a random menu from an array
let myFoods = ["Barbeque", "French Fries", "Ramen", "Takoyaki", "Hamburger"];
let x = Math.floor((Math.random()*10) + 1);
let theFood = "";
switch (x) {
    case 1:
    case 2:
        theFood = myFoods[0];
        break;
    case 3:
    case 4:
        theFood = myFoods[1];
        break;
    case 5:
    case 6:
        theFood = myFoods[2];
        break;
    case 7:
    case 8:
        theFood = myFoods[3];
        break;
    case 9:
    case 10:
        theFood = myFoods[4];
        break;
    default:
        theFood = "I don't even know why this default form can be shown on the console.";
        break;
}
const pickRandomFood = () => theFood;
console.log(pickRandomFood());
