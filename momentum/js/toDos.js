const toDoForm = document.querySelector('#toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#toDoList');

const paintToDo = (todo) => {
    const id = `${todo.id}_check`;
    const toDoItemElement = document.createElement('li');
    toDoItemElement.id = id;

    const toDoLabelElement = document.createElement('label');
    toDoLabelElement.for = id;

    const doneCheckboxElement = document.createElement('input');
    doneCheckboxElement.id = id;
    doneCheckboxElement.type = 'checkbox';

    const toDoTextElement = document.createElement('span');
    toDoTextElement.innerText = todo.text;

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.type = 'button';
    deleteButtonElement.innerText = '❌'

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

    paintToDo(todo);
});
