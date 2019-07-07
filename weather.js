// create weather class with constructor
class Weather {
    constructor(city, state) {
        // obfuscated api key since no server side code for application
        this.apiKey = 'd6b2870c9be0861074154b4b86f1f700';
        this.city = city;
        this.state = state;
    }

    // fetch weather from API
    async getWeather() {
        // fetch request to open weather api
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${this.apiKey}`);

        // get data from response
        const responseData = await response.json();

        return responseData;
    }

    // change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}