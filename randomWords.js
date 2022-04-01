var myArray = ["rainbow", "sunshine", "water", "stars", "moon", "mountains", "clouds"];
var randomWord1 = Math.floor(Math.random() * myArray.length);
var randomWord2 = Math.floor(Math.random() * myArray.length);
var randomWord3 = Math.floor(Math.random() * myArray.length);
var randomWord4 = Math.floor(Math.random() * myArray.length);
var randomWord5 = Math.floor(Math.random() * myArray.length);

console.log("I love " + myArray[randomWord1], myArray[randomWord2], myArray[randomWord3], myArray[randomWord4], myArray[randomWord5]);
