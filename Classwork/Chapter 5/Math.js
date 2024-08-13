// let tableTotal = [];

// let input = Number(prompt("Enter a Number to show its multiplication table"))

// let multitable = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12]

// for(let i = 0; i < multitable.length; i++){
//     value = input * multitable[i];//Does not store the values
//     if(i === 12)
//         break;
// }

// console.log(value);//Is outside the loop and only display the last value

//Updated code
// let finalTable = [];

// let input = Number(prompt("Enter a Number to show its multiplication table"));

// let multitable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for (let i = 0; i < multitable.length; i++) {
//     add a tempArry[]

//add a for loop to .push the new values to the tempArray[] 
//     let value = input * multitable[i];//remove and use for later
//     document.write(`${input} x ${multitable[i]} = ${value}; `);//same as above
// }

//add a final for loop to ouput the results

//Final code

let finalTable = []; // Step 1: Set up a blank array to contain the final multiplication table.

let valueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let userInput = Number(prompt("Enter a Number"))

for(let i = 0; i < valueArray.length; i++){
    let emptyArray = [];

 for(let j = 0; j < valueArray.length; j++){
    emptyArray.push(userInput * valueArray[j]);//need to be j
    
 }
   finalTable = emptyArray
//    console.log(finalTable);
//    console.log(emptyArray);
   if(i === 1) break;
}

for(let i = 0; i < finalTable.length; i ++){
document.write(`${valueArray[i]} x ${userInput} = ${finalTable[i]}`, "<br>");
}




