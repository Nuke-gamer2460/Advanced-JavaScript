const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
    {test: 'one', score: 55}, ['one', 'two']];

console.log(theList);

console.log(" ")

theList.pop();
theList.shift();
console.log(theList);

console.log(" ")

theList.unshift("FIRST")
console.log(theList);

console.log(" ")

theList.splice(4, 1, "hello World");
console.log(theList);

console.log(" ")

theList.push("LAST");
console.log(theList);
