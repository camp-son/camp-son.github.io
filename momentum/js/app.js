const titleElement = document.querySelector('.title');

const savedUsername = localStorage.getItem('username');

if (savedUsername) {
    titleElement.innerText = `Hello, ${savedUsername}!`;
} else {
    titleElement.innerText = 'Welcome to world!';
}