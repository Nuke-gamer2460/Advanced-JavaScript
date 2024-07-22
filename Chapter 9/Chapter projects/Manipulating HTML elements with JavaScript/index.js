// 1. Select the element with the class output.
const outputElement = document.querySelector('.output');

// 2. Create another JavaScript object called mainList and select only the ul tag within the output element. Update the ID of that ul tag to mainList.
const mainList = outputElement.querySelector('ul');
mainList.id = 'mainList';

// 3. Search for the tagName of each div and output them into the console as an array.
const divElements = outputElement.querySelectorAll('div');
const divTags = Array.from(divElements).map((div) => div.tagName);
console.log(divTags);

// 4. Using a for loop, set the ID of each div tag to id with a numeric value of the order they appear within output. Alternate the color of the contents of each element in output to be red or blue.
const divList = outputElement.querySelectorAll('div');
const colors = ['red', 'blue'];

for (let i = 0; i < divList.length; i++) {
    divList[i].id = `id${i + 1}`;
    divList[i].style.color = colors[i % 2];
}
