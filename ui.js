// create UI class
class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        // this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.temp = document.getElementById('w-temp');
        this.wind = document.getElementById('w-wind');
        this.visibility = document.getElementById('w-visibility');
    }

    inject(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description.toUpperCase();
        this.string.textContent = weather.main.temp;
        //store icon image in variable to concat with url below
        const iconImg = weather.weather[0].icon;
        this.icon.setAttribute('src', 'http://openweathermap.org/img/w/' + iconImg + '.png');
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.temp.textContent = `Temperature: ${weather.main.temp}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}`;
        this.visibility.textContent = `Visibility: ${weather.visibility}`;
    }
}