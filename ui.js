// create UI class
class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.lowTemp = document.getElementById('w-low-temp');
        this.highTemp = document.getElementById('w-high-temp');
        this.wind = document.getElementById('w-wind');
        this.windDirection = document.getElementById('w-wind-direction');
        this.pressure = document.getElementById('w-pressure');
       
    }

    inject(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + ' ºF';
        this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Current Humidity: ${weather.main.humidity} %`;
        this.lowTemp.textContent = `Low Temp Of: ${weather.main.temp_min} ºF`
        this.highTemp.textContent = `High Temp Of:  ${weather.main.temp_max}  ºF`;
        this.wind.textContent = `Wind: ${weather.wind.speed} mph`
        this.windDirection.textContent = `Wind Direction: ${weather.wind.deg}º`
        this.pressure.textContent = `Atmospheric Pressure: ${weather.main.pressure} inches `
    }
}