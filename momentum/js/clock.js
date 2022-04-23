const clockElement = document.querySelector('.clock');
let colon = true;

const paintCurrentTime = () => {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');

    colon = !colon;
    clockElement.innerText = `${hour}${colon ? ':' : ' '}${minute}`;
};

paintCurrentTime();
setInterval(paintCurrentTime, 1000);
