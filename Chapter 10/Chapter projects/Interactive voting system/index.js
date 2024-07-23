const myArray = [];

let page = document.getElementById("output");

const addButton = document.getElementById("addNew");

addButton.addEventListener("click", addFriend);

function addFriend() {
    const userInput = document.getElementById("addFriend").value;
    
    myArray.push({ name: userInput, votes: 0 });
    
    buildContent();
}

function buildContent() {
    page.innerHTML = "";
    
    myArray.forEach((person, index) => {
        const row = document.createElement("tr");
        
        const indexCell = document.createElement("td");
        indexCell.textContent = index + 1;
        
        const nameCell = document.createElement("td");
        nameCell.textContent = person.name;
        
        const voteCell = document.createElement("td");
        voteCell.textContent = person.votes;
        voteCell.addEventListener("click", () => increaseVotes(index));
        
        row.appendChild(indexCell);
        row.appendChild(nameCell);
        row.appendChild(voteCell);
        
        page.appendChild(row);
    });
}

function increaseVotes(index) {
    myArray[index].votes++;
    buildContent();
}
