// const words = ["apple", "banana", "orange", "strawberry", "pineapple", "watermelon", "kiwi", "grape", "peach", "mango"];

// // Main game object
// const game = {
//     currentWord: "", // Current word solution
//     solutionLetters: [], // Array of letters in the solution
//     pageElements: [], // Array to correspond with page elements
//     lettersLeft: 0, // Number of letters left to solve

// };

// // startGame(){
// //     let word = words(Math.floor[Math.random] * 10);
// //     const pageElements = word;
// //     console.log(this.pageElements);

// //     // Initialize page elements array
// //     this.pageElements = new Array(this.solutionLetters.length).fill(null);
// // }

// function start(){
    
//     let word = words[(Math.floor(Math.random() * 10))];
//     // console.log(word)
//     return word;
// }



// const scoreElement = document.querySelector('.score');
// const puzzleElement = document.querySelector('.puzzle');
// const lettersElement = document.querySelector('.letters');
// const startButton = document.querySelector("button");

// startButton.addEventListener("click", start);

//Updated
const words = ["apple", "banana", "orange", "strawberry", "pineapple", "watermelon", "kiwi", "grape", "peach", "mango"];

// Main game object
const game = {
    currentWord: "", // Current word solution
    solutionLetters: [], // Array of letters in the solution
    pageElements: [], // Array to correspond with page elements
    lettersLeft: 0, // Number of letters left to solve
};

// Function to check if the value is blank and update the game elements
function checker(element) {
    if (element.textContent === '') {
        element.style.border = '1px solid white';
    } else {
        game.lettersLeft++;
        element.classList.add('guessed');
        element.removeEventListener('click', checker);
        element.style.backgroundColor = 'lightgray';
        checkLetter(element.textContent);
    }
}

// Function to check the guessed letter against the solution
function checkLetter(letter) {
    const index = game.solutionLetters.indexOf(letter);
    if (index !== -1) {
        game.solutionLetters[index] = '';
        game.pageElements[index].textContent = letter;
        game.lettersLeft--;

        if (game.lettersLeft === 0) {
            // Game over, handle win scenario
            alert('Congratulations! You guessed the word.');
        }
    }
}

// Function to update the score and output the current number of letters left
function updateScore() {
    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = `Letters left: ${game.lettersLeft}`;
}

// Function to create alphabet buttons and add event listeners
function createAlphabetButtons() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lettersElement = document.querySelector('.letters');

    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        const letterElement = createElement('div', lettersElement, letter, 'box');
        letterElement.addEventListener('click', function() {
            checker(letterElement);
        });
    }
}

// Generate a random word and set up the game
function startGame() {
    game.currentWord = words[Math.floor(Math.random() * words.length)];
    game.solutionLetters = game.currentWord.split('');
    game.lettersLeft = game.solutionLetters.length;

    const puzzleElement = document.querySelector('.puzzle');
    game.solutionLetters.forEach(() => {
        const letterElement = createElement('div', puzzleElement, '-', 'boxE');
        game.pageElements.push(letterElement);
    });

    updateScore();
    createAlphabetButtons();
}

// Function to create elements for the game
function createElement(type, parent, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    element.classList.add(className);
    parent.appendChild(element);
    return element;
}

// Function to check the guessed letter against the solution and update game state
function checkLetter(letter) {
    const uppercaseLetter = letter.toUpperCase();
    let letterFound = false;

    for (let i = 0; i < game.solutionLetters.length; i++) {
        if (game.solutionLetters[i].toUpperCase() === uppercaseLetter) {
            letterFound = true;
            game.pageElements[i].textContent = game.solutionLetters[i];
            game.lettersLeft--;
        }
    }

    if (letterFound) {
        updateScore();
    }

    if (game.lettersLeft <= 0) {
        // Game over, handle win scenario
        alert('Congratulations! You guessed the word.');
        // Show the button for the next phrase
        document.querySelector('#startButton').style.display = 'inline-block';
    }
}


// Start the game when the Start Game button is clicked
const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startGame);
