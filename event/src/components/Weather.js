import React from "react"
import Darksky from "darkskyjs"

var darkSky = new Darksky({API_KEY: '49d71a285cd6c6b33205b13f7e447d52'});

class Weather extends React.Component {
    constructor(props){
        super(props);
        const key = '49d71a285cd6c6b33205b13f7e447d52';
        console.log(this.props.location)
        this.state = {
            lat: this.props.location.state.data.results[this.props.i].location[0],
            lng: this.props.location.state.data.results[this.props.i].location[1],
            uri: 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lng
        };

        console.log(lat)
        console.log(weatherCall)
    }

    getWeather(uri){
        fetch(uri)
            .then(function(response){
                return response.json();
            })
            .then(response => response.json());
    }

    render(){
        const {results} = 
        return(
            <div>
            <h1>{this.props.location.state.data.results[this.props.i].location[0]}, {this.props.location.state.data.results[this.props.i].location[1]}</h1>
            </div>
        )
    }
}

export default Weather;
