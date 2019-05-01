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
        console.log(this.state.uri);
        const weatherCall = await fetch(this.state.uri, {
            mode: "no-cors",
        });
        const weatherData = await weatherCall.json();
        this.setState({
            weather: weatherData,
            showWeather: true,
        })
        console.log(weatherData);

    }

    constructor(props){
        super(props);
        const key = '49d71a285cd6c6b33205b13f7e447d52';
        console.log(key)
        const lat1 = this.props.location.state.data.results[this.props.i].location[0];
        const lng1 = this.props.location.state.data.results[this.props.i].location[1];
        //const excludes = "?exclude=currently,minutely,hourly,flags";
        this.state = {
            lat: this.props.location.state.data.results[this.props.i].location[0],
            lng: this.props.location.state.data.results[this.props.i].location[1],
            uri: 'https://api.darksky.net/forecast/' + key + "/" + lng1 + "," + lat1,// + excludes,
            showWeather: false,
        };
        this.getWeather = this.getWeather.bind(this);
        this.getWeather();
    }

    render(){
        return(
            <div>
            <h1>{this.props.location.state.data.results[this.props.i].location[0]}, {this.props.location.state.data.results[this.props.i].location[1]}</h1>
            <h2>{this.state.weather}</h2>
            <h3>Powered by Dark Sky</h3>
            </div>
        )
    }
}

export default Weather;
