const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = "bbce6bb8f6fcc0cf11748974bd5b531d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`);
    const response = await weather_data.json()

    console.log(response)




    if (response.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(response.main.temp - 273)}°C`
    description.innerHTML = `${response.weather[0].description}`
    humidity.innerHTML = `${response.main.humidity}%`
    wind_speed.innerHTML = `${response.wind.speed}km/h`



    switch (response.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "./assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "./assets/snow.png";
            break;

    }

}


searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
