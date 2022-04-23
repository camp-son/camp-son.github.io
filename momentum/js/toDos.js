const toDoForm = document.querySelector('#toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#toDoList');

const TODO_LIST_KEY = 'toDos';
let toDos = [];

const removeToDo = (e) => {
    const buttonElement = e.target;
    const liElement = buttonElement.parentNode;
    buttonElement.removeEventListener('click', removeToDo);
    toDos = toDos.filter((todo) => todo.id.toString() !== liElement.id);
    liElement.remove();
    saveToDos();
};

const checkToDo = (e) => {
    const checkboxElement = e.target;
    const labelElement = checkboxElement.parentNode;
    const liElement = labelElement.parentNode;
    const textElement = labelElement.querySelector('span');
    
    const targetTodo = toDos.find(({ id }) => id.toString() === liElement.id);
    toDos = toDos.map((todo) => todo.id === targetTodo.id ? { ...todo, done: !todo.done } : todo);
    textElement.className = !targetTodo.done ? 'done' : '';

    saveToDos();
};

const saveToDos = () => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(toDos));
};

const paintToDo = (todo) => {
    const labelId = `${todo.id}_check`;
    const toDoItemElement = document.createElement('li');
    toDoItemElement.id = todo.id;

    const toDoLabelElement = document.createElement('label');
    toDoLabelElement.for = labelId;

    const doneCheckboxElement = document.createElement('input');
    doneCheckboxElement.id = labelId;
    doneCheckboxElement.type = 'checkbox';
    doneCheckboxElement.checked = todo.done;
    doneCheckboxElement.addEventListener('click', checkToDo);

    const toDoTextElement = document.createElement('span');
    toDoTextElement.innerText = todo.text;
    toDoTextElement.className = todo.done ? 'done' : '';

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.type = 'button';
    deleteButtonElement.innerText = 'X'
    deleteButtonElement.addEventListener('click', removeToDo);

    toDoLabelElement.appendChild(doneCheckboxElement);
    toDoLabelElement.appendChild(toDoTextElement);

    toDoItemElement.appendChild(toDoLabelElement);
    toDoItemElement.appendChild(deleteButtonElement);

    toDoList.appendChild(toDoItemElement);
};

toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = {
        id: new Date().getTime(),
        text: toDoInput.value,
        done: false,
    };

    toDoInput.value = '';

    toDos.push(todo);
    paintToDo(todo);
    saveToDos();
});

const savedToDos = JSON.parse(localStorage.getItem(TODO_LIST_KEY));

if (savedToDos) {
    toDos = savedToDos;
    toDos.forEach(paintToDo);
}