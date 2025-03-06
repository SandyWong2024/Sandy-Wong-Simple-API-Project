import {config} from "../Javascript Version/private-config.js"

function setPreset(){
    document.getElementById("apiKey").value = config.API_KEY;
    document.getElementById("lat").value = 37.748;
    document.getElementById("lon").value = -121.457;
}

async function fetchData() {
    const apiKey = document.getElementById("apiKey").value;
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const response = await fetch(apiURL);
    const weatherData = await response.json();

    document.getElementById("dataContainer").innerHTML = JSON.stringify(weatherData, null, 2);
}

document.getElementById('preset-button').addEventListener('click', setPreset)
document.getElementById('fetch-data').addEventListener('click', fetchData)