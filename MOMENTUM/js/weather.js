const API_KEY = "258b95f86f65f6d0a332787c95546485";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it" , lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const weathercontain = document.querySelector("#weather");
        
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`
        city.innerText = data.name;

        weathercontain.style.background= "rgb(117 113 113 / 54%)";
        
    });
};

function onGeoError(){
    alert("Can't find you. No weather for you.")
};


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);