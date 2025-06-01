const inputCityName = document.querySelector('.input-city');
const searchButton = document.querySelector('.search-btn');
const temperature = document.querySelector('.temp');
const city = document.querySelector('.city');
const hum = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherIcon = document.querySelector('.weather-icon');






function weather() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=6a537df5446b4a77b52131954242811&q=${inputCityName.value}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        const {condition:{text},temp_c, humidity, wind_kph} = data.current
        const {name} = data.location
        temperature.innerText = temp_c;
        hum.innerText = humidity;
        wind.innerText = wind_kph;
        city.innerText = name;
        console.log(text);

        if(text === 'Sunny' || text === 'Clear'){
            weatherIcon.src = "/images/clear.png";
        }else if(text === 'Light rain'){
            weatherIcon.src = "/images/drizzle.png"
        } else if(text === "Partly cloudy" || text === 'Cloudy'){
            weatherIcon.src = "/images/clouds.png"
        } else if(text === 'Rain' || text === 'Heavy Rain'){
            weatherIcon.src = '/images/rain.png'
        } else if(text=== "OverCast"){
            weatherIcon.src = "/images/mist.png"
        } else {
            weatherIcon.src = '/images/snow.png'
        }



    }).catch((err)=>{
        console.log(err);
    })
}


searchButton.addEventListener('click', weather);