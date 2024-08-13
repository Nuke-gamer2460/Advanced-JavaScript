// import './index.css';

const localTodoTasksArray = [];
const localTodosContainer = document.getElementById(
    'local-storage-todos-container'
);
const localInputEle = document.getElementById('local-storage-todo-input-ele');
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');

const sessionTodoTasksArray = [];
const sessionTodosContainer = document.getElementById(
    'session-storage-todos-container'
);
const sessionInputEle = document.getElementById(
    'session-storage-todo-input-ele'
);
const sessionAddTaskBtn = document.getElementById(
    'session-storage-add-task-btn'
);


// sessionAddTaskBtn.addEventListener('click', () =>{

// const currentTodoArray = JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];

// const newArray = [
//     ...currentTodoArray,
//     {checked: false, text: sessionInputEle.value}
// ]

// sessionStorage.setItem('codesweetlyStore', JSON.stringify(newArray));

// const todoLiElements = createTodoLiElements(newArray);
// sessionTodosContainer.replaceChildren(...todoLiElements);
// sessionInputEle.value;

// })

function createTodoLiElements(todoArray, sectionType) {

    // sessionStorage.setItem("SessionStorage", sessionInputEle.value);


    // Return an array of <li> elements
    // Example:
    // [
    //   <li>
    //     <input type="checkbox" id="local-chbx-0" />
    //     <label for="local-chbx-0">Dance</label>
    //   </li>,
    //   <li>
    //     <input type="checkbox" id="local-chbx-1" />
    //     <label for="local-chbx-1">Sing</label>
    //   </li>
    // ]
    return todoArray.map((i, index) => {
        // Create 3 elements:
        const liElement = document.createElement('li');
        const checkboxEle = document.createElement('input');
        const labelEle = document.createElement('label');

        // Add 2 attributes to the <input> element:
        checkboxEle.setAttribute('type', 'checkbox');
        checkboxEle.setAttribute('id', `${sectionType}-chbx-${index}`);

        // Add 1 attribute to the <label> element:
        labelEle.setAttribute('for', `${sectionType}-chbx-${index}`);

        // Add a click event to the <input> element:
        checkboxEle.addEventListener('click', (e) => {
            todoArray[e.target.getAttribute('id').split('-')[2]].checked =
                !todoArray[e.target.getAttribute('id').split('-')[2]].checked;
            labelEle.classList.toggle('todo-task-done');
        });

        labelEle.textContent = i.text; // Add text to the <label> element
        liElement.append(checkboxEle, labelEle); // Put <input> and <label> inside the <li>
        // liElement = sessionStorage.setItem("Session storage", sessionInputEle.vale)
        return liElement;
    }
    );
}

// Add a click event to the Local section's button:
localAddTaskBtn.addEventListener('click', () => {

    // Get existing local storage's content, if any. Otherwise, return an empty array:
    const currentTodoArray =
        JSON.parse(localStorage.getItem('codesweetlyStore')) || [];

    // Merge currentTodoArray with the user's new input:
    const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: localInputEle.value },
    ];

    // Add newTodoArray to the local storage object:
    sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));

    const todoLiElements = createTodoLiElements(newTodoArray);
    localTodosContainer.replaceChildren(...todoLiElements);
    localInputEle.value = '';
});

// Add a click event to the Session section's button:
sessionAddTaskBtn.addEventListener('click', () => {

    const currentTodoArray = JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];

    const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: sessionInputEle.value }
    ]


    sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));

    const todoLiElements = createTodoLiElements(newTodoArray);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    sessionInputEle.value = '';
});

window.addEventListener('load', () => {

    const sessionTodoArray = JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
    const todoLiElements = createTodoLiElements(sessionTodoArray);

    sessionTodosContainer.replaceChildren(...todoLiElements);

})

window.addEventListener('load', () =>{
    const localTodoArry = JSON.parse(localStorage.getItem('codesweetlyStore')) || [];
    const todoLiElements = createTodoLiElements(localTodoArry);
    localTodosContainer.replaceChildren(...todoLiElements)
})

