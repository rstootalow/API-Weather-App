// init storage
const storage = new Storage();

// get stored location data or default values if null
const weatherLocation = storage.getLocationData();

// init Weather object
const weather = new Weather(weatherLocation.city);

// init UI object
const ui = new UI();

// get weather on page load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // change loaction
    weather.changeLocation(city);

    // set new location in local storage
    storage.setLocationData(city);

    // get weather from API and display it in UI
    getWeather();

    // close modal after submission of new location
    $('#locModal').modal('hide');
})

// get weather function
function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.inject(results)
        })
        .catch(err => console.log(err));
}