// init Storage class
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
// init Weather class
const weather = new Weather('Denver', 'CO'); // pass in weatherLocation city/state as params
//init UI class
const ui = new UI();

// call these functions when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

// change weather location
document.getElementById('w-change-btn').addEventListener('click', (event) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    //set location in local storage
    storage.setLocationData(city, state);

    // call getWeather again to display weather for new location
    getWeather();

    // close modal after location is updated
    $('#locModal').modal('hide');
})

// change location
// weather.changeLocation('Providence', 'RI');

function getWeather() {
    // run get weather function to start on DOM load
    weather.getWeather()
        .then(results => {
            console.log(results)
            ui.inject(results);
        })
        .catch( err => console.log(err))
}