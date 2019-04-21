import React from "react"
import Titles from "./Titles"
import Fest from "./Fest"
import Forms from "./Forms"
import Navigate from "./Navigate"

//const weatherKey = '6f40b22dbaa376a1572c23c064335bc5';
//const clientSecret = 'MVKtEJFja5ZaTHIg3TDcTF3adv1x1IlopKx4Kwg3';
//const accessToken = 'Bfh98sVa9jZRULfeE4I78zPzjzMUON';

class homePage extends React.Component {
	state = {
		titles: [],
		showEvents: false,
		showError: false
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

		const apiCall = await fetch(`https://api.predicthq.com/v1/events/?category=concerts&location_around.origin=${lat},${lng}&start_around.origin=2019-4-30`, {
			headers: {
				'Authorization': 'Bearer Bfh98sVa9jZRULfeE4I78zPzjzMUON'
			}
		});
		const data = await apiCall.json();
		//console.log(locationData);
		//console.log(data);
		if(city === '' || state === ''){
			this.setState({showError: true, showEvents: false})
		}
		else{
			this.setState({
			titles: [] //clear array
			})

			let updated = [data.results[0].title,
				data.results[1].title,
				data.results[2].title,
				data.results[3].title,
				data.results[4].title,
				data.results[5].title,
				data.results[6].title,
				data.results[7].title,
				data.results[8].title,
				data.results[9].title
				]

			this.setState({
				titles: this.state.titles.concat(updated), //update array
				showEvents: true,
				showError: false
			})
		}
		
	}

	

	  render(){
	    return(
	      <div>
	      	<Navigate/> 
	        <Titles/>
	        <Forms getEvents={this.getEvents}/>
	        { this.state.showEvents && (<Fest titles={this.state.titles}/>)}
	        { this.state.showError && (<p>Please Enter a City/State</p>)}
	      </div>
	      );
	  }
};

export default homePage;