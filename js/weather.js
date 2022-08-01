
const API_KEY = "95170051ba82f5306bcacf94821f4ab7";
function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json().then(data=>{
        const weather_form = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const loc = data.name;
        const weather = data.weather[0].main;

        weather_form.innerText = weather;
        city.innerText = loc;
    }));

    
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);