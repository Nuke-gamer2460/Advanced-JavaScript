"use Strict"

// let singleString = 'Hi there!';
// let doubleString = "How are you?";

// console.log(singleString);
// console.log(doubleString);

// let funActivity = "Let's learn some JavaScript";
// console.log(funActivity);

// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// let str = "Hello, what's your name? Is it \"Mike\"?";
// console.log(str);

// let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// console.log(str2);

// let str3 = "New \nline.";
// let str4 = "I'm containing a backslash: \\!";
// console.log(str3);
// console.log(str4);

let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;
// let octNr = 0o10; //decimal version would be 8
// let hexNr = 0x3E8; //decimal version would be 1000
// let binNr = 0b101; //decimal version would be 5

// console.log(intNr);
// console.log(decNr);
// console.log(expNr);
// console.log(octNr);
// console.log(hexNr);
// console.log(binNr);


// let intNr2 = 3434;
// let intNr3 = -111;
// let decNr2 = 45.78;
// let binNr2 = 0b100; //decimal version would be 4

// console.log(intNr2);
// console.log(intNr3);
// console.log(decNr2);
// console.log(binNr2);

//BIG INT//

// let bigNr = 90071992547409920n;
// let result = bigNr + intNr;
// console.log(result);

//BOOLEANS//

// let bool1 = false;
// let bool2 = true;

// let objectIsDeleted = false;
// 
// let lightIsOn = true;

// if(lightIsOn){
//     console.log("The Light Is On");
// }else{
//     console.log("The Light Is Off")
// }

//SYMBOLS//

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);

//UNDIFINED AND NULL//
// let terribleThingToDo = undefined;
// let lastName;
// console.log("Same undefined:", lastName === terribleThingToDo);
// let betterOption = null;
// console.log("Same null:", lastName === betterOption);

// TYPE OF VATIABLES //

// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;

// console.log("str", typeof (str));
// console.log("nr", typeof (nr));
// console.log("bigNr", typeof (bigNr));
// console.log("bool", typeof (bool));
// console.log("sym", typeof (sym));
// console.log("undef", typeof (undef));
// console.log("unknown", typeof (unknown));

// CONVERTING DATA TYPES//

// let nr1 = 2;
// let nr2 = Number("2");
// console.log(nr1 * nr2);

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(`nrToStr, ${typeof (nrToStr)}`);
// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(`strToNr, ${typeof (strToNr)}`);
// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(`strToBool, ${typeof (strToBool)}`);

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);
// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);
// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

//EXERCISE 2.1//

// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// console.log(`${(str1)} is a ${typeof (str1)}`);

// console.log(`${(str2)} is a ${typeof (str2)}`);

// console.log(`${(val1)} is a ${typeof (val1)}`);

// console.log(`${(val2)} is a ${typeof (val2)}`);

// console.log(`${(myNum)} is a ${typeof (myNum)}`);

//OPERATORS//

//?Exercise 2.2?//
// let myName = "Juan"
// let age = 19;
// let canCodeJS = true;

// console.log(`Hello my name is ${myName}, I am ${age} years old,`)

//Exercise 2.3

// let a = Number(prompt("Enter a whole number"));
// let b = Number(prompt("Enter a second whole number"));

// // let c2 = a**2 + b**2
// // console.log(Math.sqrt(c2))

// let c2 = a*a + b*b
// console.log(Math.sqrt(c2))
// alert(`C is = to ${a} to the power of 2 + ${b} to the power of 2, then ${c2}is round down with square root to get ${Math.sqrt(c2)}`)

//Exercise 2.4//

// let a = 1;
// let b = 2;
// let c = 3;

// a+b;
// a/c;
// c = c % b;

// console.log(`a is ${a}, b is ${b}, c is ${c}`)
//

// let x = 5;
// let y = "5";
// console.log(`x == y is ${x == y}`);
// console.log(`x === y is ${x === y}`);

// console.log(x !== y);

// let x = 5;
// let y = 6;
// console.log( x < y);
// console.log( y >= y);
// console.log( x > y);
// console.log( x <= x);

//AND(&&)//
let x = 1;
let y = 2;
let z = 3;

console.log(x < y && y < z);
console.log(x > y && y < z);
console.log(" ")

//OR(||)//

console.log(x > y || y < z);//true
console.log(x > y || y > z);//false
console.log(" ")

//NOT//
x = false;
console.log(!x);//true

x = 1;
console.log(!(x < y));
