const apiKey = "&appid=de7ba0244ed535d792959b7d0b65f0df";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button")


const checkWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&appid=de7ba0244ed535d792959b7d0b65f0df`);
    if( response === "404"){
        document.querySelector(".error p").innerHTML = "Invalid Data"
        document.querySelector(".wheather").style.display = "none";
    }else{
        var data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} kmph`;
    
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".wheather-icon").src = "images/clouds.png"
        }else if (data.weather[0].main == "Rain"){
            document.querySelector(".wheather-icon").src = "images/rain.png"
        }else if (data.weather[0].main == "Clear"){
            document.querySelector(".wheather-icon").src = "images/clear.png"
        }else if (data.weather[0].main == "Drizzle"){
            document.querySelector(".wheather-icon").src = "images/drizzle.png"
        }else if (data.weather[0].main == "Mist"){
            document.querySelector(".wheather-icon").src = "images/mist.png"
        }else if (data.weather[0].main == "Snow"){
            document.querySelector(".wheather-icon").src = "images/snow.png"
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    

}
buttonEl.addEventListener("click", checkWeather)

