let loopEmperor = true;
while(loopEmperor){
    let theAnswer = Math.floor((Math.random() * 10) + 1);
    let theHearts = 3;
    let loopGranter = true;
    while(loopGranter) {
        if (theHearts === 0) {
            alert("Your chances are up! The answer is " + theAnswer);
            break;
        } else {
            // Pass
        }
        let urAnswer = prompt("Guess number! (1-10)\nYour chances: " + theHearts);
        let parsedAnswer = parseInt(urAnswer);
        if (parsedAnswer === theAnswer){
            alert("Congratulations! your answer is correct ("+ theAnswer +")!");
            break;
        } else if (parsedAnswer < 1 || parsedAnswer > 10){
            alert("Please follow the instructions!");
        }else if (parsedAnswer < theAnswer) {
            alert("Incorrect. The answer is higher.");
            theHearts -= 1;
        } else if (parsedAnswer > theAnswer) {
            alert("Incorrect. The answer is lower.");
            theHearts -= 1;
        } else {
            alert("Please enter a valid number!");
        }
    }
    let justConfirm = confirm("Play again?");
    if (justConfirm) {
        theHearts = 3;
        loopEmperor = true;
    } else {
        loopEmperor = false;
    }
}
alert("Thank you for playing!");
