// let s = "Hello";
// console.log(
// s.concat(" there!")
// .toUpperCase()
// .replace("THERE", "you")
// .concat(" You're amazing!")
// );

///ENCODING AND DECODING//
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

// //Exercise 8.1
// let url = "How's%20it%20going%3F"
// let encode = encodeURIComponent(url);
// let decode = decodeURIComponent(url);

// console.log(encode);
// console.log(decode);

// const url2 = "http://www.basescripts.com? = Hello World";
// const encode2 = encodeURIComponent(url2);
// console.log(url2)

// ///PARSING NUMBERS///
// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);
// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

///Executing JavaScript with eval()//
// function go(e) {
//     eval(e.value);
//     }
    // document.body.style.backgroundColor = "pink";

///Array methodes///
//for each
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
// console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

// //filtering arrays
// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
// return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// //every()
// console.log(arr.every(checkString));

//Replacing part of an array with another part of the array
// arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(`Origanil array ${arr}`);
// arr.copyWithin(0, 3, 4);
// console.log(`New array ${arr}`);

//MAPPING VALUES
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

//Finding the last occurrence in an array
// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));


// Exercise 8.2
// let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
//     "Laurence", "Mike", "Laurence", "Mike"]

// let solvedArray = arr.filter(function(element, index, array){
//     return array.indexOf(element) === index;
// });


// console.log(solvedArray);

//Exercise 8.3
// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// function mapping(element){
//     return element * 2
// }

// let newArray = arr2.map(mapping);
// console.log(newArray);

// //single line
// let arrMapped = arr2.map(x => x * 2);
// console.log(arrMapped);

//STRING METHODES
// let s1 = "Hello ";
// let s2 = "JavaScript";
// let combined = s1.concat(s2);
// console.log(combined);

//STRINGS TO ARRAY
// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

//INDEX'S
// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);
// let indexNotFound = poem.indexOf("python");
// console.log(indexNotFound);

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// let lastIndex_re = poem.lastIndexOf("re");
// console.log(lastIndex_re);

//SUBSTRINGS
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

//REPLACING PARTS OF STRINGS
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);
// let new_hi2 = hi.replace("not there", "never there");
// console.log(new_hi2);
// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);

//UPPERCASE LOWERCASE
// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// console.log(first_capital);

//START AND END OF STRINGS
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_start3 = encouragement.toLowerCase().startsWith("you");
// console.log(bool_start3);

// let bool_end = encouragement.endsWith("Something else");
// console.log(bool_end);

//Number Methodes
// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));

// let str = "hi";
// console.log(isNaN(str));

//IS FINITE
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

//Specifying a number of decimals and Specifying precision
// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);

// let x = 1.23456;
// let newX = x.toPrecision(4);
// console.log(newX);

//MATH METHODES
// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);

// //Round
// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// //Ceil
// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// //floor
// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

//TRUNC
// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));

//Exponent and logarithm
// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);

//CREATING DATES
// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setFullYear(2010);
// console.log(d)

// d.setMonth(9);
// console.log(d);

// d.setDate(10);
// console.log(d);

// d.setHours(10);
// console.log(d);

// d.setTime(1622889770682);
// console.log(d);

// //PARSING DATES
// let d1 = Date.parse("June 5, 2021");
// console.log(d1);

// let d2 = Date.parse("6/5/2021");
// console.log(d2);

// //DATES TO STRINGS 
// console.log(d.toDateString());
// console.log(d.toLocaleDateString());

///EXERCISES///
//8.4

// const wordsArray = [
//     'aPpLe',
//     'bANanA',
//     'cARroT',
//     'dOg',
//     'eLePhaNt',
//     'fIsH',
//     'gUiTaR',
//     'hOuSe',
//     'iCe cReAm',
//     'jAzZ',
//     'kItE',
//     'lEmOn',
//     'mAnGo',
//     'nOtEbOoK',
//     'oRaNgE',
//     'pIaNo',
//     'qUeEn',
//     'rAiNbOw',
//     'sUn',
//     'tReE'
// ];

// function capitalizeWords(array) {
//     let capitalizedArray = [];
//     array.forEach(word => {
//         let capitalizedWord = word.split(' ').map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
//         capitalizedArray.push(capitalizedWord);
//     });
//     return capitalizedArray.join(' ');
// }

// let capitalizedWords = capitalizeWords(wordsArray);
// console.log(capitalizedWords);

//8.5
// const string = "I Love JavaScript";

// let fixed_lowercase = string.toLowerCase();

// console.log(fixed_lowercase);

// const vowels = ["a", "e", "i", "o", "u"]

// // for(let i = 0; i < vowels.length; i ++){
// //  let randomV = vowels[Math.floor(Math.random() * 4)];
// //  console.log(randomV);
// // }

// function loop(){
// let newString = fixed_lowercase;

//     for(let i = 0; i < string.length; i ++){
//  let randomV = vowels[Math.floor(Math.random() * 5)];
//  newString = newString.replaceAll(vowels[i], randomV);
 
// }
// console.log(newString);
// }

// loop();

//8.6
// let pi = Math.PI;
// console.log(pi);

// console.log(Math.ceil(5.7))
// console.log(Math.floor(5.7))
// console.log(Math.round(5.7))

// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10 + 1));
// console.log(Math.floor(Math.random()*100 + 1));

// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function random100() {
//     for (let i = 0; i < 100; i++) {
//         let randomNum = generateRandomNumber(1, 100);
//         console.log(randomNum);
//     }
// }

// random100();
//8.7
const myDate = new Date('2023-09-15');
console.log(myDate);

const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];


const day = myDate.getDate();
const year = myDate.getFullYear();
const monthIndex = myDate.getMonth();

const monthName = months[monthIndex];
console.log(`Day: ${day}, Year: ${year}, Month: ${monthName}`);
