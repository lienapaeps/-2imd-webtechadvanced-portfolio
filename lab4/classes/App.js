export default class App {
    constructor(API_KEY) {
        this.lat = 0;
        this.lng = 0;
        this.API_KEY = API_KEY;
        this.getLocation();
        this.getHeroes();
    }

    // geolocatie opvragen -> mdn geolocation API
    getLocation() {
        console.log("Getting location");
        navigator.geolocation.getCurrentPosition(this.locationSucces.bind(this), this.locationError.bind(this)); // navigator is de browser
    }
    // opvragen gelukt
    locationSucces(location) {
        // console.log(location);
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
        this.getWeather();
    }
    // opvragen mislukt
    locationError(error) {
        console.log(error);
    }

    // OpenWeather API -> Current Weather Data
    getWeather() {
        // API key = 6045a091342bd776dd0213c064c8c027
        console.log("Getting weather");
        // API call
        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${this.lat}&lon=${this.lng}&appid=${this.API_KEY}`;
        console.log(url);

        // MDN fetch API
        fetch(url).then( response => {
            return response.json(); // antwoord omzetten naar json
        } ).then( json => {
            // hier iets met json gaan doen
            this.printWeather(json);
            console.log(json);
        } ).catch( error => {
            console.log(error);
        }).finally( () => {
            console.log("finally done");
        } );
    }

    printWeather(json) {
        let summary = json.weather[0].description;
        let temp = Math.round(json.main.temp);
        let place = json.name;
        let maxTemp = Math.round(json.main.temp_max);
        let minTemp = Math.round(json.main.temp_min);


        document.querySelector(".summary").innerHTML = summary;
        document.querySelector(".temp").innerHTML = temp + "°";
        document.querySelector(".place").innerHTML = place;
        document.querySelector(".max").innerHTML = "max: " + maxTemp + "°";
        document.querySelector(".min").innerHTML = "min: " + minTemp + "°";

        // data teruggeven
        localStorage.getItem(place, summary, temp);

        let description = [];
        description.push(place)
        description.push(summary)
        description.push(temp)
        localStorage.setItem("weather", JSON.stringify(description));

        description = localStorage.getItem("weather");
        json = JSON.parse(weather);

        // tweede API

    }

    // Marvel API
    getHeroes() {
        // API key = 6045a091342bd776dd0213c064c8c027
        console.log("Getting heroes");
        // API call
        // Spider-Man (Ultimate)
        let url = 'https://gateway.marvel.com:443/v1/public/characters?name=Spider-Man%20(Ultimate)&apikey=f84f7431e98ce48579540c00d38f21f5';
        // console.log(url);

        // MDN fetch API
        fetch(url).then( response => {
            return response.json(); // antwoord omzetten naar json
        } ).then( json => {
            // hier iets met json gaan doen
            this.printHeroes(json);
            console.log(json);
        } ).catch( error => {
            console.log(error);
        }).finally( () => {
            console.log("finally done");
        } );
    }

    printHeroes(json) {
        // let summary = json.superhero[0].description;
        let copyright = json.copyright;
        let name = json.data.results[0].name;
        let path = json.data.results[0].thumbnail.path;
        let extension = json.data.results[0].thumbnail.extension;

        let thumbnail = path + "." + extension;

        document.querySelector(".name").innerHTML = name;

        document.querySelector("#app").style.backgroundImage = `url('${thumbnail}')`;
        document.querySelector("#app").style.backgroundSize = "cover";
        document.querySelector("#app").style.backgroundRepeat = "no-repeat";

        document.querySelector(".copyright").innerHTML = copyright;

        // data teruggeven
        // localStorage.getItem(name);

        // let description = [];
        // description.push(name)
        // localStorage.setItem("superhero", JSON.stringify(description));

        // description = localStorage.getItem("superhero");
        // json = JSON.parse(superhero);
    }
}

// 6e1cac7a40779b5ce2a25191e7eaf33d94677c26