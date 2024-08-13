"use strict"


//USING JS
// document.getElementById("unique").onclick = function() { magic(); };
// function magic() {
//     alert("abra cadabra");
// }

//EVENT LISTENERS
// document.getElementById("unique").addEventListener("click", magic);
// function magic() {
//     alert("abra cadabra");
// }

//ONLOAD EVENT HANDLER

// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log(e);
//     });

// window.onload = function unique() {
//     document.addEventListener("DOMContentLoaded", (e) => {
//         console.log(e);
//         });
// }

//Mouse events
// function changeColor() {
//     document.getElementById("divvy").style.backgroundColor =
//     "blue";
//     }

// window.onload = function donenow() {

//     console.log("hi");
//     document.getElementById("divvy").addEventListener("mousedown",function () { changeColor(this, "green"); });

//     document.getElementById("divvy").addEventListener("mouseup",function () { changeColor(this, "yellow"); });

//     document.getElementById("divvy").addEventListener("dblclick",function () { changeColor(this, "black"); });

//     document.getElementById("divvy").addEventListener("mouseout",function () { changeColor(this, "blue"); });

// }
// console.log("hi2");
// function changeColor(el, color) {
//     el.style.backgroundColor = color;
// }

//EVENT TARGET PROPERTY
// function  triggerSomething(){
//     console.dir(event.target);
// }

// function sendInfo() {
//     let p = event.target.parentElement;
//     message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }
// function message(m) {
//     document.getElementById("welcome").innerHTML = m;
// }

//EVENT BUBBLING and EVENT DELEGATION
// function bubble() {
//     console.log(this.innerText);
// }
// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener("click", bubble);
// }

//ON CHANGE AND ON BLUR
// function logEvent() {
//     let p = event.target;
//     if (p.name == "firstname") {
//         message("First Name Changed to " + p.value);
//     } else {
//         message("Last Name Changed to " + p.value);
//     }
// }
// function sendInfo() {
//     let p = event.target.parentElement;
//     message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }

// function message(m) {
//         document.getElementById("welcome").innerHTML = m;
//     }

//KEY EVENT HANDLERS
// function numCheck() {
//     message("Number: " + !isNaN(event.key));//check if the input is a number
//     return !isNaN(event.key);
// }
// function numCheck2() {
//     message("Not a number: " + isNaN(event.key));//check if the input is not a number;
//     return isNaN(event.key);
// }
// function message(m) {
//     document.getElementById('wrapper').innerHTML = m;
// }

//Drag and Drop Events
// let holderItem;
// function dStart() {
//     holderItem = event.target;
// }
// function nDrop() {
//     event.preventDefault();
// }
// function dDrop() {
//     event.preventDefault();
//     if (event.target.className == "box") {
//         event.target.appendChild(holderItem);
//     }
// }

//FORM SUBMISSION
// function valForm() {
//     var p = event.target.children;
//     if (p.firstName.value == "") {
//         message("Need a first name!!");
//         return false;
//     }
//     if (p.lastName.value == "") {
//         message("Need a last name!!");
//         return false;
//     }
//     if (p.age.value == "") {
//         message("Need an age!!");
//         return false;
//     }
//     return true;
// }
// function message(m) {
//     document.getElementById("wrapper").innerHTML = m;
// }

//Animating elements
// function toTheRight() {
//     let b = document.getElementById("block");
//     let x = 0;
//     setInterval(function () {
//         if (x === 600) {
//             clearInterval();
//         } else {
//             x++;
//             b.style.left = x + "px";
//         }
//     }, 2);
// }

// function toTheLeft() {
//     let b = document.getElementById("block");
//     let x = 600;
//     setInterval(function () {
//         if (x === 8) {
//             clearInterval();
//         } else {
//             x--;
//             b.style.left = x + "px";
//         }
//     }, 2);
// }

//EXERCISES
//11.1

// function darkMode() {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "#FFFFFF";
// };

// window.onclick = function isItTrue() {
//     function lightMode() {
//         document.body.style.backgroundColor = "#FFFFFF";
//         document.body.style.color = "black";
//     }

//     function darkMode() {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "#FFFFFF";
//     };

//     if (darkMode === false) {
//         return darkMode;
//     }else{
//         return lightMode;
//     }

// }

//11.2
// const colorDiv1 = document.getElementById("colorDiv1");
// const colorDiv2 = document.getElementById("colorDiv2");
// const colorDiv3 = document.getElementById("colorDiv3");

// // Add click event listeners to each color div
// colorDiv1.addEventListener("click", function() {
//     document.body.style.backgroundColor = "red";
// });

// colorDiv2.addEventListener("click", function() {
//     document.body.style.backgroundColor = "blue";
// });

// colorDiv3.addEventListener("click", function() {
//     document.body.style.backgroundColor = "green";
// });

// //11.3
//         // Define the message function to log the event and message
//         function message(msg, event) {
//             console.log(event);
//             console.log(msg);
//         }

//         // Attach an onload function to the window object
//         window.onload = function(event) {
//             message("Window Ready", event);
//         }

//         // Add an event listener for DOMContentLoaded
//         document.addEventListener("DOMContentLoaded", function(event) {
//             message("Document Ready", event);
//         });

//11.4

// const element = document.querySelector('.color-change-element');
// element.textContent = 'Hello World';

// element.style.height = '100px';
// element.style.width = '200px';
// element.style.backgroundColor = 'grey';

// function handleColorChange(color, event) {
//     console.log(color);
//     console.log(event.type);
// }

// element.addEventListener('mousedown', (event) => {
//     element.style.backgroundColor = 'green';
//     handleColorChange('green', event);
// });

// element.addEventListener('mouseover', (event) => {
//     element.style.backgroundColor = 'red';
//     handleColorChange('red', event);
// });

// element.addEventListener('mouseout', (event) => {
//     element.style.backgroundColor = 'yellow';
//     handleColorChange('yellow', event);
// });

// element.addEventListener('mouseup', (event) => {
//     element.style.backgroundColor = 'blue';
//     handleColorChange('blue', event);
// });
//11.5
// const outputDiv = document.querySelector('.output');
// const inputField = document.querySelector('input');
// const button1 = document.querySelector('.btn1');
// const button2 = document.querySelector('.btn2');
// const buttonLog = document.querySelector('.btn3');
// const log = [];

// function trackEvent(event) {
//     const eventDetails = {
//         value: inputField.value,
//         eventType: event.type,
//         className: event.target.className,
//         tagName: event.target.tagName
//     };
//     log.push(eventDetails);
//     outputDiv.textContent = inputField.value;
// }

// button1.addEventListener('click', trackEvent);
// button2.addEventListener('click', trackEvent);

// buttonLog.addEventListener('click', () => {
//     console.log(log);
// });

//11.6

const boxes = document.querySelectorAll('.box');
const container = document.querySelector('.container');

function logEvent(event, useCaptureValue) {
    console.log(`Event Capturing: ${useCaptureValue}, Event Type: ${event.type}, Target Text: ${event.target.textContent}`);
}

container.addEventListener('click', (event) => {
    logEvent(event, true);
}, true);

container.addEventListener('click', (event) => {
    logEvent(event, false);
}, false);

boxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        logEvent(event, true);
    }, true);

    box.addEventListener('click', (event) => {
        logEvent(event, false);
    }, false);
});

//11.7

        const outputElement = document.querySelector('.output1');
        const firstNameInput = document.querySelector("input[name='first']");
        const lastNameInput = document.querySelector("input[name='last']");
        
        function updateOutput() {
            outputElement.textContent = `${firstNameInput.value} ${lastNameInput.value}`;
        }
        
        firstNameInput.addEventListener('change', updateOutput);
        lastNameInput.addEventListener('change', updateOutput);
        
        function logEventType(event) {
            console.log(`Event Type: ${event.type}`);
        }
        
        firstNameInput.addEventListener('blur', logEventType);
        firstNameInput.addEventListener('focus', logEventType);
        lastNameInput.addEventListener('blur', logEventType);
        lastNameInput.addEventListener('focus', logEventType);


//11.8
/*To detect key presses, paste events, and output key values in input fields in the provided HTML template, you can follow these steps:

1. **HTML Structure**: Create a simple HTML file with two input fields and an output element.

```html
<!DOCTYPE html>
<html>
<head>
    <title>JS Tester</title>
</head>
<body>
    <div class="output"></div>
    <input type="text" placeholder="Input 1">
    <input type="text" placeholder="Input 2">
    <script>
        const output = document.querySelector('.output');
        const eles = document.querySelectorAll('input');

        eles.forEach((el) => {
            el.addEventListener('keydown', (event) => {
                if (event.key >= '0' && event.key <= '9') {
                    output.textContent += event.key;
                }
            });

            el.addEventListener('keyup', (event) => {
                console.log(`Key up: ${event.key}`);
            });

            el.addEventListener('paste', () => {
                console.log('Paste event detected');
            });
        });
    </script>
</body>
</html>
```


```html
<!DOCTYPE html>
<html>
<head>
    <title>JS Tester</title>
</head>
<body>
    <div class="output"></div>
    <input type="text" name="input1">
    <input type="text" name="input2">
    <script>
        const output = document.querySelector('.output');
        const eles = document.querySelectorAll('input');

        eles.forEach((ele) => {
            ele.addEventListener('keydown', (event) => {
                if (event.key >= '0' && event.key <= '9') {
                    output.textContent += event.key;
                }
            });

            ele.addEventListener('keyup', (event) => {
                console.log(`Key pressed: ${event.key}`);
            });

            ele.addEventListener('paste', () => {
                console.log('Pasted content detected.');
            });
        });
    </script>
</body>
</html>*/

//11.9
/*<!DOCTYPE html>
<html>
<head>
    <title>JS Tester</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            border: 1px solid black;
            background-color: white;
        }
        .red {
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="box" id="dragContainer">
        <div id="dragme" draggable="true">
            Drag Me Please!
        </div>
    </div>
    <div class="box">Drop Zone 1</div>
    <div class="box">Drop Zone 2</div>
    <script>
        const dragElement = document.getElementById('dragme');
        dragElement.addEventListener('dragstart', (event) => {
            event.target.style.opacity = '0.5';
        });

        dragElement.addEventListener('dragend', (event) => {
            event.target.style.opacity = '';
        });

        const dropZones = document.querySelectorAll('.box');
        dropZones.forEach((zone) => {
            zone.addEventListener('dragenter', () => {
                zone.classList.add('red');
            });

            zone.addEventListener('dragover', (event) => {
                event.preventDefault();
            });

            zone.addEventListener('dragleave', () => {
                zone.classList.remove('red');
            });

            zone.addEventListener('drop', (event) => {
                event.preventDefault();
                event.target.appendChild(dragElement);
            });
        });
    </script>
</body>
</html>*/

//11.10
/*<!DOCTYPE html>
<html>
<head>
    <title>Form Validation</title>
</head>
<body>
    <form id="myForm">
        <input type="text" name="firstName" placeholder="First Name" required>
        <input type="text" name="lastName" placeholder="Last Name" required>
        <input type="number" name="age" placeholder="Age" required>
        <button type="submit">Submit</button>
    </form>
    <script>
        const form = document.getElementById('myForm');
        form.addEventListener('submit', (event) => {
            let error = false;

            const checker = (value, fieldName) => {
                if (!value) {
                    console.log(`Error: ${fieldName} is required.`);
                    error = true;
                } else {
                    console.log(`${fieldName} length: ${value.length}`);
                }
            };

            const firstName = form.elements['firstName'].value.trim();
            const lastName = form.elements['lastName'].value.trim();
            const age = form.elements['age'].value;

            checker(firstName, 'First Name');
            checker(lastName, 'Last Name');

            if (age < 19) {
                console.log('Error: Age must be 19 or over.');
                error = true;
            }

            if (error) {
                event.preventDefault();
                console.log('Form submission prevented due to errors.');
            }
        });
    </script>
</body>
</html>
*/


//11.11
/*<!DOCTYPE html>
<html>
<head>
    <title>Moving Purple Square</title>
    <style>
        .square {
            width: 50px;
            height: 50px;
            background-color: purple;
            position: absolute;
            top: 50px;
            left: 50px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="square"></div>
    <script>
        const square = document.querySelector('.square');
        let position = 50;
        let direction = 1;
        let speed = 10;
        let counter = 30;

        const moveSquare = () => {
            if (counter < 1) {
                clearInterval(interval);
            } else {
                if (position >= 800 || position <= 0) {
                    direction *= -1;
                }
                position += speed * direction;
                square.style.left = position + 'px';
                console.log('Square position:', position);
                counter--;
            }
        };

        let interval = null;
        square.addEventListener('click', () => {
            interval = setInterval(moveSquare, 100);
        });
    </script>
</body>
</html>*/
