import React from "react"
//import Darksky from "darkskyjs"

//var darkSky = new Darksky({API_KEY: '49d71a285cd6c6b33205b13f7e447d52'});

class Weather extends React.Component {
    state = {
        lat: 0.0,
        lng: 0.0,
        uri: "",
    }

    async getWeather(){
        window.addEventListener("unhandledrejection", function (event) {
            event.preventDefault();
        });
        const weatherCall = await fetch(this.state.uri, {
            headers: {
                'Access-Control-Allow-Origin' : "localhost:3000",//'*',
            },
            //mode: "no-cors",
            dataType: "json"
        });
        const weatherData = await weatherCall.json();
        this.setState({
            weather: weatherData,//currently not setting value
            showWeather: true,
        });
        console.log(weatherData)
    }

    constructor(props){
        super(props);
        const key = '49d71a285cd6c6b33205b13f7e447d52';
        console.log(key);
        const lat1 = this.props.location.state.data.results[this.props.i].location[0];
        const lng1 = this.props.location.state.data.results[this.props.i].location[1];
        //const excludes = "?exclude=currently,minutely,hourly,flags";
        this.getWeather = this.getWeather.bind(this);
        this.state = {
            lat: lat1,
            lng: lng1,
            uri: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + key + "/" + lng1 + "," + lat1,// + excludes,
            showWeather: false,
            weather: null,
        };

        this.getWeather();
    }

    render(){
        return(
            <div>
                {this.state.showWeather && (<p className="title-container__subtitle">Event Weather: {this.state.weather.daily.summary}</p>)}
                <p className="title-container__subtitle">Weather Powered by Dark Sky</p>
            </div>
        );
    }
};

export default Weather;