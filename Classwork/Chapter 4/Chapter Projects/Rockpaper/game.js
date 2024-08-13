// let mainComp = ["Rock", "Paper", "Scissors"]

// let userNum = Math.floor[Math.random[mainComp] * 2];
// let compNum = Math.floor[Math.random[mainComp] * 2];

// console.log(userNum);
// console.log(compNum);

// let mainComp = ["Rock", "Paper", "Scissors"];

// let userNum = Math.floor(Math.random() * mainComp.length);
// let compNum = Math.floor(Math.random() * mainComp.length);

// console.log(userNum);
// console.log(compNum);

let mainComp = ["Rock", "Paper", "Scissors"];

let userNum = Math.floor(Math.random() * mainComp.length);
let compNum = Math.floor(Math.random() * mainComp.length);

let userChoice = mainComp[userNum];
let compChoice = mainComp[compNum];

// console.log("User's choice: " + userChoice);
// console.log("Computer's choice: " + compChoice);

let message = alert(`Your threw a: ${userChoice}; Computer threw: ${compChoice}`);

if(userChoice === compChoice){
    alert("Oops It is a Tie");


// if(userChoice && compChoice){//Rock and Rock
//     alert("Try Again");

// }else if("Paper" && "Paper"){//Paper and Paper
//     alert("Try Again");

// }else if("Scissors" && "Scissors"){//Scissors and Scissors
//     alert("Try Again");

}else if(userChoice === "Paper" && compChoice === "Rock"){//Paper vs Rock
    alert("Paper Wins");

}else if(userChoice === "Paper" && compChoice === "Scissors"){//Paper vs Scissors
    alert("Scissors Wins");

}else if(userChoice === "Rock" && compChoice === "Scissors"){//Rock vs Scissors
    alert("Rock wins")
    
}
