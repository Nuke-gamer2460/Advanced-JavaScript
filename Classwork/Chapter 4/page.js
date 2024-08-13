// let rain = false;
// if(rain){
// console.log("** Taking my umbrella when I need to go outside **");
// } else {
// console.log("** I can leave my umbrella at home **");
// };

// let age = Number(prompt("How old are you"))

// if(age < 18) {
//     alert("We're very sorry, but you can't get in under 18");
//     } else {
//     alert("Welcome!");
//     }

// let variableA = true;
// console.log(variableA);

// if(variableA){
//     console.log(`I cant believe It, The value is ${variableA}`);
// }else if (variableA != true){
// console.log("It is not true");
// }

//Else If//

// let age = 10;
// let cost = 0;
// let message;

// if (age < 3) {
// cost = 0;
// message = "Access is free under three.";

// } else if (age >= 3 && age < 12) {
// cost = 5;
// message ="With the child discount, the fee is 5 dollars";

// } else if (age >= 12 && age < 65) {
// cost = 10;
// message ="A regular ticket costs 10 dollars."

// }else{
//     cost = 7;
//     message = "A ticket is 7 dollars"
// }

// console.log(message);
// console.log(`Your Total cost is ${cost}`);


//Exercise 4.2
// let usersAge = Number(prompt("What is your age??"));

// let message;

// let enter = "You may enter"

// if(age => 21){
//     message = alert("You are of age to by Alcohol " + enter);
// }else if(age <= 19){
//     message = alert("You may not purchase " + enter);
// }else{
//     message = alert("You may not Enter");
// }

//TERNARY OPERATORS//

// let access = age < 18 ? "denied" : "allowed";
// age < 18 ? console.log("denied") : console.log("allowed");

//Exercise 4.3
// let valueOfID = true;
// valueOfID = false ? console.log("It is True"): console.log("It is False");

//Switch Statments//
 
// let activity = prompt("Enter one of the following: Get up, Breakfeast, Drive to work, Lunch, Drive home, Dinner");

// if(activity === "Get up") {
//     console.log("It is 6:30AM");
//     } else if(activity === "Breakfast") {
//     console.log("It is 7:00AM");
//     } else if(activity === "Drive to work") {
//     console.log("It is 8:00AM");
//     } else if(activity === "Lunch") {
//     console.log("It is 12.00PM");
//     } else if(activity === "Drive home") {
//     console.log("It is 5:00PM")
//     } else if(activity === "Dinner") {
//     console.log("It is 6:30PM");
//     }

// switch(activity) {
//         case "Get up":
//         console.log("It is 6:30AM");
//         break;

//         case "Breakfast":
//         console.log("It is 7:00AM");
//         break;
//         case "Drive to work":
//         console.log("It is 8:00AM");
//         break;

//         case "Lunch":
//         console.log("It is 12:00PM");
//         break;
        
//         case "Drive home":
//         console.log("It is 5:00PM");
//         break;

//         case "Dinner":
//         console.log("It is 6:30PM");
//         break;
    
//     default:
//         console.log("I can not determin the time");
// }

//exercise 4.4

// let randomNum = Math.random();
// randomNum = randomNum * 6 + 1;
// let RandomNum = Math.floor(randomNum);
/*

let randomNum = Math.floor(Math.random() * 6);

let userQuestion = prompt("Ask the Magic 8-Ball a yes/no question:");

let fortuneArray = [
    "A pleasant surprise is in store for you soon.",
    "You will find great success in your endeavors.",
    "An exciting opportunity will present itself to you.",
    "Good things come to those who wait patiently.",
    "Your creativity will bring you joy and fulfillment.",
    "A new friendship will bring positivity into your life.",
    ]

// let randomFortune = Math.floor[Math.random[fortuneArray] * 6];

let randomElement = [Math.floor(Math.random() * fortuneArray.length)];

// console.log(randomFortune);

switch(randomNum){
    case 0:
        console.log("Roll again");
        break;
    case 1:   
        console.log(randomElement);
        break;
    case 2:
        console.log(randomElement);
        break;
    case 3:
        console.log(randomElement);
        break;
    case 4:
        console.log(randomElement);
        break;
    case 5: 
        console.log(randomElement);
        break;
    case 6:
        console.log(randomElement);
        break;
}
*/

//Combing Cases

// switch(grade){
    // case "F":
    // case "D":
    // console.log("You've failed!");
    // break;
    // case "C":
    // case "B":
    // console.log("You've passed!");
    // break;
    // case "A":
    // console.log("Nice!");
    // break;
    // default:
    // console.log("I don't know this grade.");
    // }


    // if(grade === "F" || grade === "D") {
    //     console.log("You've failed!");
    //     } else if(grade === "C" || grade === "B") {
    //     console.log("You've passed!");
    //     } else if(grade === "A") {
    //     console.log("Nice!");
    //     } else {
    //     console.log("I don't know this grade.");
    //     }


//exersice 4.5
// let prize = Number(prompt("Enter a number between 1 and 10"));

// // let message = console.log(`My Selection is: ${prize}`);

// let message;

// switch(prize){
//     case 0:
//     message = "O no you get NO prize";
//     alert(message);
//         break; 
//     case 1:
//         message = "You get a cash prize of $1000";
//         alert(message);
//         break; 
//     case 2:
//         message = "You get a $500 amazon gift card";
//         alert(message);

//         break; 
//     case 3:
//         message = "You Won A brand new iphone 15";
//         alert(message);

//         break; 
//     case 4:
//         message = "You Won a Full paid trip to Japan";
//         alert(message);

//         break; 
//     case 5:
//         message = "You get a cash prize of $500";
//         alert(message);

//         break; 
//     case 6:
//         message = "You get a cash prize of $10";
//         alert(message);

//         break; 
//     case 7:
//         message = "You get a cash prize of $100";
//         alert(message);

//         break; 
//     case 8:
//         message = "You get a cash prize of $200";
//     alert(message);

//         break; 
//     case 9:
//         message = "You get a cash prize of $999";
//         alert(message);

//         break; 
//     case 10:
//         message = "You get a cash prize of $1";
//         alert(message);

//         break; 
// };
