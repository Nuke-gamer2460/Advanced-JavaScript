// console.dir(document.body);

// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);

// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].
// children.treasure);

// console.dir(document.body.children.forest.children.tree2.parentElement);//moving up

// console.dir(document.body.children.forest.children.tree2);//moving sideways

// console.dir(document.body.children.forest.children.tree2.previousElementSibling);

// console.dir(document.body.children.forest.children.tree1.nextElementSibling);

// console.dir(document.body.children.greeting);

// //Chancing of Inner Text
// document.body.children.greeting.innerText = "Bye!";

// document.body.children.greeting.innerText = "<p>Bye!</p>";

// document.body.children.greeting.innerText = "<b>Bye!</b>";

////Accrssing Elements////
//ID...
// let item1 = document.getElementById("two");
// item1.innerHTML = "<i>HEY!</i>";
// console.log(item1);

//By Tag Names...
// let tags = document.getElementsByTagName("div");
// console.log(tags);
// let tag2 = document.getElementsByTagName("div").item(3);
// console.log(tag2);

// let heading = document.getElementsByTagName("h1");
// console.log(heading);

// //By Class Name...
// let ex = document.getElementsByClassName("example");
// console.log(ex);

// //By CSS Selector...

// let para = document.querySelector("p");
// console.log(para);

// //Query Selector And Query Selector ALL...
// let firstDiv = document.querySelector("div");
// console.log(firstDiv);

// let smth = document.querySelector(".something");
// console.log(smth);

// let some = document.querySelectorAll("div");
// console.log(some);

//EVENT CLICKER HANDLER...

// document.getElementById("one").onclick = function stop(){
//     alert("Ouch! Stop it!");
//     }

//THE AND THE DOM...
// function reveal(el) {
//     console.log(el.parentElement);
// }

//MANIPULATING THE ELEMENT STYLE
// function toggleDisplay(){
//     let p = document.getElementById("magic");
//     if(p.style.display === "none") {
//     p.style.display = "block";
//     } else {
//     p.style.display = "none";
//     }
//     }

// function rainbowify(){
//  let divs = document.getElementsByTagName("div");

//  for(let i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = divs[i].id;
//     }
// }

// //CHANGING ELEMENT CLASSES...
// //ADDING
// function disappear(){
//     document.getElementById("shape").classList.add("hide");
//     }

// //REMOVING
// function change(){
//     document.getElementById("shape").classList.remove("blue");
//     }

// // TOGGELING CLASSES
// function changeVisibility(){
//     document.getElementById("shape").classList.toggle("hide");
//     }

///Manipulating attributes...
// function changeAttr(){
// let el = document.getElementById("shape");
// el.setAttribute("style", "background-color:red;border:1px solid black");
// el.setAttribute("id", "new");
// el.setAttribute("class", "circle");
// }

//EVENTS...
// window.onload = function () {
//     document.getElementById("square").addEventListener("click",
//         changeColor);
// }
// function changeColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }


// //CREATING ELEMENTS...
// let el = document.createElement("p");
// el.innerText = Math.floor(Math.random() * 100);
// document.body.appendChild(el);

// function addRandomNumber(){
//     let el = document.createElement("p");
//     el.innerText = Math.floor(Math.random() * 100);
//     document.body.appendChild(el);
// }

//EXECRISES...
//10.1
// console.dir(document.body.children);

//10.2
// let num2 = document.getElementById("Num2")
// console.log(num2);

//10.3
// let arr = [];

// arr.push(document.getElementsByTagName("div"));

// console.log(arr);

// console.log(arr.indexOf(2))

//10.4
// let classNames = document.getElementsByClassName("RGB");
// console.log(classNames);
// console.log(classNames[3]);

//10.5
// console.log(document.querySelector(".list"))

//10.6
// console.log(document.querySelectorAll("li"));

//10.7
// function message(el){
//     console.log(el)
//     // alert("You Pressed a One")
//     console.dir(el)
// }

// function message2(el){
// console.dir(el)
// }

//10.8
// const names = [
//     "Alice", 
//     "Bob", 
//     "Charlie", 
//     "David", 
//     "Eve", 
//     "Frank", 
//     "Grace", 
//     "Hannah", 
//     "Ivy", 
//     "Jack"
// ];

// function build() {
//     const table = document.createElement("table");

//     names.forEach((name, index) => {
//         const row = table.insertRow();
//         const cell = row.insertCell();
//         const text = document.createTextNode(name);
//         cell.appendChild(text);

//         row.setAttribute("data-row", index);
//         row.setAttribute("data-name", name);
//         row.classList.add("box");
//         row.onclick = function() {
//             getData(this);
//         };
//     });

//     document.body.appendChild(table);
// }

// function getData(element) {
//     const rowValue = element.getAttribute("data-row");
//     const nameValue = element.getAttribute("data-name");
//     document.getElementById("message").innerText = `Row: ${rowValue}, Name: ${nameValue}`;
// }

// build();

//10.9
// let button = document.getElementsByTagName("button");

// for(let i = 0; i < 3; i++){
//  button[i].addEventListener("click", function output(){
//     console.log(this);
//  })
// }

//10.10

let button = document.getElementById("addNew");


button.addEventListener("click", function addOne() {
    let el = document.createElement("li");
    let inputValue = document.getElementById("addItem").value; // Get the current value of the input field

    let textNode = document.createTextNode(inputValue); // Create a text node with the input field value
    el.appendChild(textNode); // Append the text node to the list item

    document.body.appendChild(el); // Append the list item to the document body
});
