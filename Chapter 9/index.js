
// ///HISTORY///
// console.dir(window);//whole window object

// console.dir(window.history.length);//number (history length)

// console.dir(window.history)


// ///NAVIGATOR OBJECT///
// console.dir(window.navigator)

// ///LOCATION OBJECT///
// console.dir(location);

// ///THE DOM///
// console.dir(document);

// const el = document.querySelector("h1");
// console.log(el);

// const allE = document.querySelectorAll(".output");
// console.log(allE);

////EXERCISE////
// //9.1
// console.dir(window);

// //9.2
// console.log(location.protocol) + console.log(location.href);

// //9.3
        // Select the page element
        const outputElement = document.querySelector('.output');

        // Update the textContent property
        outputElement.textContent = "New Content";

        // Add a class of "red"
        outputElement.classList.add('red');

        // Update the id property
        outputElement.id = 'tester';

        // Change background color to red
        outputElement.style.backgroundColor = 'red';

        // Get the document URL and update the text of the output element
        const docURL = document.URL;
        outputElement.textContent = docURL;

        console.log(docURL); // Log document URL to console