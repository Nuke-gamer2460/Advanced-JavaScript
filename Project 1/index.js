let inputGame = document.querySelector("input");
let output = document.querySelector("#output");
let gameArry = JSON.parse(localStorage.getItem('gamelist')) || [];
let popupText = document.getElementById('gameR')

let addButton = document.getElementById('addGame_ToList')

//Update the display / Local storage
function updateDisplay() {
    output.innerHTML = '';

    gameArry.forEach(game => {
        const newEl = document.createElement("li");
        newEl.textContent = game;
        output.appendChild(newEl);
    });
    localStorage.setItem('gamelist', JSON.stringify(gameArry));
};


addButton.addEventListener("click", function () {
    // const newEl = document.createElement("li");
    // newEl.textContent = inputGame.value;
    // output.appendChild(newEl);
    // //Push to arry
    // gameArry.push(inputGame.value)
    // //set the local storage
    // localStorage.setItem("game", inputGame.value)

    //LOCAL STORAGE
    const gameName = inputGame.value.trim()
    if (gameName) {
        gameArry.push(gameName);
        updateDisplay();//Updates The dispaly and Local Storage
        inputGame.value = '';
    } else {
        alert("Please Enter a Game");
    }

})

//Remove Button

let removeButton = document.getElementById('removeGame');

removeButton.addEventListener('click', function () {
    // let items = document.querySelectorAll("#output li");

    // // Check if there are items in the list
    // if (items.length > 0) {
    //     // Remove the last item from the list
    //     let lastItem = items[items.length - 1];
    //     lastItem.parentNode.removeChild(lastItem);
    // } else {
    //     alert("No items to remove.");
    // }
    // //Remove from array the last input into the array

    // gameArry.pop(lastItem);

    //Local Storage
    if (gameArry.length > 0) {
        gameArry.pop();
        updateDisplay();//Updates The dispaly and Local Storage
    } else {
        alert("No Item To Remove")
    }
});

// Load existing games from local storage on page load
window.addEventListener('load', function () {
    updateDisplay(); // Display the games
});

//Random game picker
let randomButton = document.getElementById('popupButton'); // Ensure this button exists in your HTML

randomButton.addEventListener('click', function () {
    if (gameArry.length > 0) {
        const randomIndex = Math.floor(Math.random() * gameArry.length); // Get a random index
        const randomGame = gameArry[randomIndex]; // Pick a random game
        //alert("Your random game is: " + randomGame); // Show in an alert
        // display in popup

        popupText.innerHTML = "Your Random Game is: " + randomGame;
    } else {
        //alert("No games available to pick from.");
        popupText.innerHTML = "No games available to pick from.";
    }
});

//Pop Up Display a random game
function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
}


