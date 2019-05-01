import React from "react"
import Navigate from "./Navigate"
import MapC from "./MapC"
import Weather from "./Weather"



class infoPage extends React.Component {

	  render(){
	  	let desc;
	  	let date;
	  	let year;
	  	let day;
	  	let month;
	  	let time;
	  	let latlng;
	  	let pm = false;
	  	if(this.props.location.state.defined === false){

	  	}
	  	else{
	  		latlng = this.props.location.state.data.results[this.props.location.state.event].location;


	  		desc = this.props.location.state.data.results[this.props.location.state.event].description;
	  		date = new Date(this.props.location.state.data.results[this.props.location.state.event].start);
	  		if(desc === ""){
	  			desc = "No description provided";
	  		}

	  		year = date.getFullYear();
			month = date.getMonth()+1;
			day = date.getDate();
			time = date.getHours();

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
        					<h1 className= "title-container__title">Event Information</h1>
					      	{this.props.location.state.defined && (<p className= "title-container__subtitle"> Event Title: {this.props.location.state.data.results[this.props.location.state.event].title} </p>)}
					      	{this.props.location.state.defined && !pm &&(<p className= "title-container__subtitle"> Event Start: {month + '-' + day + '-' + year + " at " + time + ':00 am'} </p>)}
					      	{this.props.location.state.defined && pm &&(<p className= "title-container__subtitle"> Event Start: {month + '-' + day + '-' + year + " at " + time + ':00 pm'} </p>)}
					      	{this.props.location.state.defined && (<p className= "title-container__subtitle"> Description: {desc} </p>)}
					      	{this.props.location.state.defined && (<MapC ltlg={latlng} />)}
					      	{!(this.props.location.state.defined) && (<p className= "title-container__subtitle"> Please return to the homepage and search for an event first!</p>)}
	        			</div>
	        		</div>
	        	</div>
				<Weather location={this.props.location} i={0}/>
	        </div>
	      </div>
	      );
	  }

};


export default infoPage;
