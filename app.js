// init Weather class
const weather = new Weather('Denver', 'CO'); // hard code current location for a start

//init UI class
const ui = new UI();

// call these functions when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

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