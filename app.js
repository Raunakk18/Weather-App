const apiKey = "477de776e12ab4b2f69a06530dcd7a8f";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(`${apiURL}${city}&appid=${apiKey}`);
    const data = await response.json();

    if(data.cod === "404"){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else if(data.cod === 200){

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "assets/clouds.png";
        } else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "assets/clear.png";
        } else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "assets/rain.png";
        } else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "assets/mist.png";
        } else {
            weatherIcon.src = "assets/unknown.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    else{
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    }


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
}); 


