const titleElement = document.querySelector('.title');
const nameForm = document.querySelector('#nameForm');
const nameInput = nameForm.querySelector('input');
const TODO_ELEMENTS = [
    document.querySelector('#toDoForm'),
    document.querySelector('#toDoList'),
];

const USERNAME_KEY = 'username';

const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(USERNAME_KEY, nameInput.value);
    loggedInUser();
};

const addFormSubmit = () => {
    nameForm.addEventListener('submit', handleSubmit);
};

const removeFormSubmit = () => {
    nameForm.removeEventListener('submit', handleSubmit);
};

const loggedInUser = () => {
    const username = localStorage.getItem(USERNAME_KEY);
    titleElement.innerText = `Hello, ${username}!`;
    nameForm.classList.add('hidden');
    TODO_ELEMENTS.forEach((elem) => {
        elem.classList.remove('hidden');
    });
    removeFormSubmit();
};

const loggedOutUser = () => {
    titleElement.innerText = `Welcome to to-do world`;
    nameForm.classList.remove('hidden');
    TODO_ELEMENTS.forEach((elem) => {
        elem.classList.add('hidden');
    });
    addFormSubmit();
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
    loggedInUser();
} else {
    loggedOutUser();
}