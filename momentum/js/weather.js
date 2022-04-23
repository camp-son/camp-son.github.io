(() => {
    const API_KEY = '13f1d81ec45c413e6b20cf56216c4c93';
    const weatherElement = document.querySelector('#weather');
    const temperatureElement = weatherElement.querySelector('span:first-child');
    const addressElement = weatherElement.querySelector('span:last-child');

    const fetchWeather = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                temperatureElement.innerText = `${data.weather[0].main} ${data.main.temp}`;
                addressElement.innerText = data.name;
            });
    };

    const errorWeather = () => {
        weatherElement.classList.add('hidden');
    };

    navigator.geolocation.getCurrentPosition(fetchWeather, errorWeather);
})();