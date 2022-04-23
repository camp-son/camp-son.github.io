const IMAGES = [
    'dog1.jpeg',
    'dog2.jpeg',
    'dog3.jpeg',
    'dog4.jpeg',
    'dog5.jpeg',
    'dog6.jpeg',
    'dog7.jpeg',
];

const body = document.querySelector('body');

const backgroundImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];

body.style.backgroundImage = `url(img/${backgroundImage})`;