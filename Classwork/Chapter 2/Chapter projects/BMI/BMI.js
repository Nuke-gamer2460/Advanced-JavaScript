//prompt user
let heightInch = Number(prompt("Enter your height in inch"))
let weightPounds = Number(prompt("Enter weight in pounds"))

//convert
let inchToCm = heightInch * 2.54;
let poundsToKG = weightPounds/2.2046;

// console.log(inchToCm);
// console.log(poundsToKG);

let meters = inchToCm/100;

//BMI
let bmi = poundsToKG / (meters * meters);
console.log(bmi.toFixed(2));