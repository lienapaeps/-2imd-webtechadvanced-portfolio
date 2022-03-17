export default class App {
    constructor(API_KEY) {
        this.lat = 0;
        this.lng = 0;
        this.API_KEY = API_KEY;
        this.getLocation();
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
        document.querySelector(".max").innerHTML = "Max: " + maxTemp + "°";
        document.querySelector(".min").innerHTML = "Min: " + minTemp + "°";

        // if warm weather show Human Torch
        if (temp >= 20) {
            this.getHumanTorch();
        // if cold weather show Iceman
        } else if (temp <= 0) {
            this.getIceman();
        } else {
            // if normal weather show Spider-Man
            this.getSpiderMan(); 
        }

        // data teruggeven
        // localStorage.getItem(place, summary, temp);

        // let description = [];
        // description.push(place)
        // description.push(summary)
        // description.push(temp)
        // localStorage.setItem("weather", JSON.stringify(description));

        // description = localStorage.getItem("weather");
        // json = JSON.parse(weather);

        // tweede API

    }

    // Marvel API
    getHumanTorch() {
        console.log("Getting Human Torch");

        let url = 'https://gateway.marvel.com:443/v1/public/characters?name=Human%20Torch&apikey=f84f7431e98ce48579540c00d38f21f5';

        fetch(url).then( response => {
            return response.json(); // antwoord omzetten naar json
        } ).then( json => {
            // hier iets met json gaan doen
            console.log(json);
            this.printHumanTorch(json);
        } ).catch( error => {
            console.log(error);
        }).finally( () => {
            console.log("finally done");
        } );
    }
    
    printHumanTorch(json) {
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
        document.querySelector("#app").style.backgroundPosition = "center";
        document.querySelector(".copyright").innerHTML = copyright;
    }

    getIceman() {
        console.log("Getting Iceman");

        let url = 'https://gateway.marvel.com:443/v1/public/characters?name=Iceman%20(Ultimate)&apikey=f84f7431e98ce48579540c00d38f21f5';

        fetch(url).then( response => {
            return response.json(); // antwoord omzetten naar json
        } ).then( json => {
            // hier iets met json gaan doen
            console.log(json);
            this.printIceMan(json);
        } ).catch( error => {
            console.log(error);
        }).finally( () => {
            console.log("finally done");
        } );
    }
    
    printIceMan(json) {
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
        document.querySelector("#app").style.backgroundPosition = "center";
        document.querySelector(".copyright").innerHTML = copyright;
    }

    getSpiderMan() {
        console.log("Getting Spider-Man");

        let url = 'https://gateway.marvel.com:443/v1/public/characters?name=Spider-Man%20(Ultimate)&apikey=f84f7431e98ce48579540c00d38f21f5';

        fetch(url).then( response => {
            return response.json(); // antwoord omzetten naar json
        } ).then( json => {
            // hier iets met json gaan doen
            console.log(json);
            this.printSpiderMan(json);
        } ).catch( error => {
            console.log(error);
        }).finally( () => {
            console.log("finally done");
        } );
    }
    
    printSpiderMan(json) {
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
        document.querySelector("#app").style.backgroundPosition = "center";
        document.querySelector(".copyright").innerHTML = copyright;
    }
}