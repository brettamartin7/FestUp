import React from "react"
import Titles from "./Titles"
import Fest from "./Fest"
import Forms from "./Forms"
import FormsTwo from "./FormsTwo"
import Navigate from "./Navigate"
import Background from "./FestUp_Background.png"


//const weatherKey = '6f40b22dbaa376a1572c23c064335bc5';
//const clientSecret = 'MVKtEJFja5ZaTHIg3TDcTF3adv1x1IlopKx4Kwg3';
//const accessToken = 'Bfh98sVa9jZRULfeE4I78zPzjzMUON';

var sectionStyle = {
	width: "100%",
	height: "1000px",
	backgroundImage: `url(${Background})`
}

class homePage extends React.Component {
	state = {
		titles: [],
		data: undefined,
		showEvents: false,
		showErrorLocation: false,
		showErrorTitle: false,
		showZero: false
	}


	constructor(props){
		super(props);
		this.getWeather = this.getWeather.bind(this);
		this.getEvents = this.getEvents.bind(this);
		this.getEventsTitle = this.getEventsTitle.bind(this);
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

		const apiCall = await fetch(`https://api.predicthq.com/v1/events/?category=concerts&location_around.origin=${lat},${lng}&start_around.origin=2019-5-07`, {
			headers: {
				'Authorization': 'Bearer Bfh98sVa9jZRULfeE4I78zPzjzMUON'
			}
		});
		const data = await apiCall.json();
		if(city === '' || state === ''){
			this.setState({showErrorLocation: true, showErrorTitle: false, showEvents: false, showZero: false, data: data})

		}
		else{
			this.setState({
			titles: [], //clear array
			data: data
			})

			let updated = [];
			var i;
			var stop = 10;
			if(data.count > 10){
				stop = 10;
			}
			else{
				stop = data.count;
			}

			for(i = 0; i < stop; i++){
				updated.push(data.results[i].title);
			}

			this.setState({
				titles: this.state.titles.concat(updated), //update array
				showEvents: true,
				showErrorLocation: false,
				showErrorTitle: false,
				showZero: false
			})
		}

	}

	async getEventsTitle(e){
		e.preventDefault();
		const title = e.target.elements.title.value;

		const apiCall = await fetch(`https://api.predicthq.com/v1/events/?category=concerts&q=${title}&start_around.origin=2019-5-10`, {
			headers: {
				'Authorization': 'Bearer Bfh98sVa9jZRULfeE4I78zPzjzMUON'
			}
		});
		const data = await apiCall.json();


		if(title === ''){
			this.setState({showErrorTitle: true, showErrorLocation: false, showZero: false, showEvents: false, data: data})

		}
		else{
			this.setState({
			titles: [], //clear array
			data: data
			})

			let updated = [];
			var i;
			var stop = 10;
			if(data.count > 10){
				stop = 10;
			}
			else{
				stop = data.count - 1;
			}

			for(i = 0; i < stop; i++){
				updated.push(data.results[i].title);
			}


			this.setState({
				titles: this.state.titles.concat(updated), //update array
				showEvents: true,
				showErrorLocation: false,
				showErrorTitle: false,
				showZero: false
			})
		}


	}



	  render(){
	    return(
	      <div>
	        <div className="wrapper">
	          <div className="main">
	          <Navigate/>
	            <div className="container">
	              <div className="row">
	                <div className="col-xs-5 title-container">
	                  			<Titles/>
	        					<p className= "title-container__subtitle">Search by Location:</p>
						        <Forms getEvents={this.getEvents}/>
						        <p className= "title-container__subtitle">Search by Event Title:</p>
						        <FormsTwo getEventsTitle={this.getEventsTitle}/>
	                </div>
	                <div className="col-xs-7 form-container">
	                  				{ this.state.showEvents && (<Fest titles={this.state.titles} data={this.state.data}/>)}
							        { this.state.showErrorLocation && (<p>Please Enter a City/State</p>)}
							        { this.state.showErrorTitle && (<p>Please Enter an Event Title</p>)}
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      );
	  }
};

export default homePage;
