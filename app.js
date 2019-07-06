// init weather
const weather = new Weather('Denver', 'CO'); // hard code current location for a start

weather.getWeather()
    .then(results => {
        console.log(results)
    })
    .catch( err => console.log(err))