// let dynamicNum = Math.floor(Math.random() * 100);// Gives the dynamic number between 1 and 100
let setdynamicNum = 50;

let usersNum = Number(prompt("Enter A Number:"));

if(usersNum < setdynamicNum){
    console.log(`The dynamic number is greater: ${usersNum}`);
}else if (usersNum > setdynamicNum){
    console.log(`The dynamic number is less than: ${usersNum}`);
}else if (usersNum = setdynamicNum){
    console.log(`You are correct the dynamic num was: ${setdynamicNum}` )
}

console.log("Refresh to try again. The Number does not change");