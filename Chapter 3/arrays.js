// arr1 = new Array("purple", "green", "yellow");
// arr2 = ["black", "orange", "pink"];

// arr3 = new Array(10);//determins the capacity
// arr4 = [10];// only adds 10 as a value

// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

// const arr = ["Hi there"];
// arr[0] = "new value";
// console.log(arr[0]);
//arr = ["nope, now you are overwriting the arry"];//throws out an error as a value has already been assined at line 15

// cars = ["Toyota", "Renault", "Volkswagen"];

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);//it does not exist result is then undifiend
// console.log(cars[-1]);

// cars[0] = "Tesla";
// console.log(`Overwtitten index 0 = ${cars[0]}`);
// console.log(cars);

// cars[3] = "Kia";
// cars[-1] = "Fiat";

/*
let colors = ["black", "orange", "pink"];
let booleans = [true, false, false, true];
let emptyArray = [];

console.log(`The length of colors :${colors.length}`);
console.log(`The length of booleans: ${booleans.length}`);
console.log(`Length of empty array:, ${emptyArray.length}`);

let lastElement = colors[colors.length - 1];

console.log(lastElement);
*/

// let numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(`Numbers: ${numbers}`);
// console.log(numbers);
// console.log(`Elements in array: ${numbers.length}`);


//Exercise 3.1
// let shoppingList = ["Milk", "Bread" , "Milk"];


// console.log(shoppingList);
// console.log(`Length of shopping list: ${shoppingList.length}`);
//  shoppingList[1] = "Bannanas";
//  console.log(shoppingList);

//Array Methods//

//PUSH
// let favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");
// console.log(favoriteFruits);
// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(favoriteFruits);
// console.log(favoriteFruits.length);

//SPLICE
// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);
// arrOfShapes.unshift("oval");
// console.log(arrOfShapes);

//CONCAT
// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);

// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);
// arr8.shift();
// console.log(arr8);
// arr8.splice(1, 3);
// console.log(arr8);
//delete arr8[0];

//FIND
// let arr8 = [ 2, 6, 7, 8 ];
// let findValue = arr8.find(function(e) { return e === 6});//finds the actual value not the value at a certain index
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, findValue2);

// //Finding using of INDEXOF()
// let findValue3 = arr8.indexOf(6); 
// let findValue4 = arr8.indexOf(10);
// console.log(findValue3, findValue4); 

//Sorting
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log(names);
// names.sort();//Acending order
// console.log(names);
// names.reverse(names)//decending order OR just reversing the order
// console.log(names)

//Exercise 3.2
// let shoppingList = ["Milk", "Bread", "Apples"];
// shoppingList.splice(1 , 1, "Bananas", "Eggs");
// console.log(shoppingList);

// shoppingList.pop();
// console.log(shoppingList);

// shoppingList.sort();
// console.log(shoppingList);

// let index = shoppingList.indexOf("Milk");
// console.log(index);

// shoppingList.splice(1, 0, "Carrots", "Lettuce");
// console.log(shoppingList);

// let newList = ["Juice", "Pop"];
// let combinedList = shoppingList.concat(newList).concat(newList);
// console.log(combinedList);

// let index1 = combinedList.indexOf("Pop");
// console.log(index1);

//Two Dimensional arrays//
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(`arrOfArrays: ${arrOfArrays}`);

// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arrOfArrays2);

// console.log(arrOfArrays[1][2]);

// arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// console.log(`Multidimentional Arry: ${arrOfArraysOfArrays}`);
// let middleValue = arrOfArraysOfArrays[1][1][1];
// console.log(middleValue);

//Exercise 3.3
// let arr1 = [1, 2, 3];
// let multiArray = [arr1, arr1, arr1];
// console.log(multiArray[1][1]);

//Objects//
// let dog = { dogName: "JavaScript",
//     weight: 2.4,
//     color: "brown",
//     breed: "chihuahua",
//     age: 3,
//     burglarBiter: true
//     };
//     console.log(dog);

// let dogColor = dog["color"];
// let dogColor2 = dog.color;

// console.log(dogColor);
// console.log(dogColor2);

// dog.color = "blue"
// dog.weight = 2.3;
// console.log(dog);

// dog.age = "three";
// let variable = "age";
// console.log(dog[variable])

// variable = "breed";
// console.log(dog[variable]);

// dog[variable] = "dachshund";
// console.log(dog["breed"]);

//Exercise 3.4
// let myCar = {
//     make:"Lamborghini",
//     model: "Countach",
//     price: 450000, 
//     year: "1985",
//     color: "Maroon"
// }

// let variableC = "color";
// myCar[variableC] = "Black"
// console.log(myCar["color"]);

// let variableForSale = "forSale";
// myCar[variableForSale] = "yes";

// console.log(myCar);

// console.log(myCar.make + " " + myCar.model);
// console.log(`Is it for sale: ${myCar.forSale}`);

//Object in a Object//
// let company = { companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     yearOfEstablishment: 2021
//     };

// console.log(company);

//Arrays in Object//
// company = { companyName: "Healthy Candy",
//     activities: ["food manufacturing",
//     "improving kids' health", "manufacturing toys"],
//     address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     yearOfEstablishment: 2021
//     };
    // console.log(company);

//Objects in Arrays
// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
//     }];
// console.log(addresses);

// let streetName = addresses[0].street;

//  let company = { companyName: "Healthy Candy",
//     activities: [ "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys"],
//     address: [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
//     }],
//     yearOfEstablishment: 2021
//     }
//     let streetName = company.address[0].street;
//     console.log(company)

//Exercise 3.5
let people = {
    friends:{
        firstName:["Caral", "Johan", "Piet"],
        lastName:["Van der Walt", "Botha", "Richards"],
        id:[1, 2, 3],
    }
}

console.log(people)

let fullnames = {
    fullname1: people.friends.firstName[0] + " " + people.friends.lastName[0],
    fullname2: people.friends.firstName[1] + " " + people.friends.lastName[1],
    fullname3: people.friends.firstName[2] + " " + people.friends.lastName[2],
}

console.log(fullnames);