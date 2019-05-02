import React from "react"
import Navigate from "./Navigate"
import MapC from "./MapC"



class infoPage extends React.Component {

	  render(){
	  	let desc;
	  	let date;
	  	let year;
	  	let day;
	  	let month;
	  	let time;
			let latlng;
			let title;
			let spotifyTitle;
	  	let pm = false;
	  	if(this.props.location.state.defined === false){

	  	}
	  	else{
	  		latlng = this.props.location.state.data.results[this.props.location.state.event].location;
				title = this.props.location.state.data.results[this.props.location.state.event].title;
	  		desc = this.props.location.state.data.results[this.props.location.state.event].description;
	  		date = new Date(this.props.location.state.data.results[this.props.location.state.event].start);
	  		if(desc === ""){
	  			desc = "No description provided";
				}

			year = date.getFullYear();
			month = date.getMonth()+1;
			day = date.getDate();
			time = date.getHours();
			spotifyTitle = title.split(' ').join('+');

			if(day < 10){
				day = '0' + day;
			}
			if(month < 10){
				month = '0' + month;
			}

			if (time > 12){
				pm = true;
				time = time - 12;
			}
	  	}
			

	    return(

	      <div>
	        <div className="wrapper">
	          <div className="main">
	          <Navigate/>
	            <div className="container">
	              <div className="row">
	                <div className="col-xs-6 title-container">
	                  		<h1 className= "title-container__title">Event Information</h1>
					      	{this.props.location.state.defined && (<p className= "title-container__subtitle"> Event Title: {this.props.location.state.data.results[this.props.location.state.event].title} </p>)}
					      	{this.props.location.state.defined && !pm &&(<p className= "title-container__subtitle"> Event Start: {month + '-' + day + '-' + year + " at " + time + ':00 am'} </p>)}
					      	{this.props.location.state.defined && pm &&(<p className= "title-container__subtitle"> Event Start: {month + '-' + day + '-' + year + " at " + time + ':00 pm'} </p>)}
					      	{this.props.location.state.defined && (<p className= "title-container__subtitle"> Description: {desc} </p>)}		
					      	{!(this.props.location.state.defined) && (<p className= "title-container__subtitle"> Please return to the homepage and search for an event first!</p>)}
	                </div>
	                <div className="col-xs-6 map-container">
	                  		{this.props.location.state.defined && (<MapC ltlg={latlng} />)}
	                </div>
									<div className="col-xs-6 spotify-container">
												{this.props.location.state.defined && 
													(<iframe title="spotify" src="https://open.spotify.com/embed/album/3Mj4A4nNJzIdxOyS4yzOhj" width="300" 
													height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>)}
									</div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      );
	  }
	  
};


export default infoPage;


	      	