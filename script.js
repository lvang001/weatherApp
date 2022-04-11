let weather = {
    "apiKey": "973777b137d46a204965f0cb350c9220",
    
    fetchWeather: function (zip) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip="+ zip + "&units=imperial&appid="+ this.apiKey)
        .then((response) => response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather: function (data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity, temp_min, temp_max} = data.main;
        const {speed} = data.wind;
        let day = new Date();
        
        // console.log(name, icon, description, temp, humidity,speed, temp_min, temp_max);
        document.querySelector(".city").innerText="Weather in " + name;
        document.querySelector(".high").innerText="High " + temp_max + " °F";
        document.querySelector(".low").innerText="Low " + temp_min + " °F";
        document.querySelector(".wind").innerText="Wind speed: " + speed + " mph";
        document.querySelector(".humidity").innerText="Humidity: " + humidity + "%";
        document.querySelector(".temperature").innerText= temp + " °F";
        document.querySelector(".image").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".discrip").innerText = description;
        document.querySelector(".time").innerText=day;
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchBar").value);
    },
}
document.querySelector(".btn").addEventListener("click",function() {
    weather.search();
})
document.querySelector(".searchBar").addEventListener("keyup",function(e) {
    if (e.key == "Enter") {
        weather.search();
    }
})
weather.fetchWeather("Charlotte");