// create storage class to store city/state location in local browser storage
class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Denver';
        this.defaultState = 'CO';
    }

    // get location data assign defaults if nothing is in storage
    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        // same logic for state
        if(localStorage.getItem('state') === null) {
            this.city = this.defaultState;
        } else {
            this.city = localStorage.getItem('state')
        }

        //return results from function
        return {
            city: this.city,
            state: this.state
        }
    }

    // set location data to either the defaults or the values present in local storage
    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}