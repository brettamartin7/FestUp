import React from "react";
import Titles from "./components/Titles"
import Fest from "./components/Fest"
import Forms from "./components/Forms"

const weatherKey = '6f40b22dbaa376a1572c23c064335bc5';
//const clientSecret = 'MVKtEJFja5ZaTHIg3TDcTF3adv1x1IlopKx4Kwg3';
//const accessToken = 'Bfh98sVa9jZRULfeE4I78zPzjzMUON';

class App extends React.Component {
	state = {
		title: undefined,
		error: undefined
	}

	constructor(props){
		super(props);
		this.getWeather = this.getWeather.bind(this);
		this.getEvents = this.getEvents.bind(this);
	}
	
	async getWeather(e) {
		e.preventDefault(); //stops page from reloading
		

	}

	async getEvents(e){
		e.preventDefault();
		const city = e.target.elements.city.value;
		const state = e.target.elements.state.value;
		const locationCall = await fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=0cG1vW5wtFDrks3AtGXeJ4yXd9QlZiFu&location=${city},${state}&maxResults=1`);
		const locationData = await locationCall.json();
		let lat = locationData.results[0].locations[0].latLng.lat;
		let lng = locationData.results[0].locations[0].latLng.lng;

		const apiCall = await fetch(`https://api.predicthq.com/v1/events/?category=concerts&location_around.origin=${lat},${lng}`, {
			headers: {
				'Authorization': 'Bearer Bfh98sVa9jZRULfeE4I78zPzjzMUON'
			}
		});
		const data = await apiCall.json();
		console.log(data);
		this.setState({
			title:
		})

	}

	  render(){
	    return(
	      <div> 
	          <Titles/>
	          <Forms getEvents={this.getEvents}/>
	      </div>
	      );
	  }
};

export default App;