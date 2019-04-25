import React from "react"
import Navigate from "./Navigate"
import Weather from "./Weather"



class infoPage extends React.Component {
	constructor(props){
		super(props);
	}

	  render(){
	  	let desc;
	  	if(this.props.location.state.defined === false){

	  	}
	  	else{
	  		desc = this.props.location.state.data.results[this.props.location.state.event].description;
	  		if(desc === ""){
	  			desc = "No description provided";
	  		}
	  	}

	    return(

	      <div>
	      	<Navigate/>
	      	<h1>Event Information</h1>
	      	{this.props.location.state.defined && (<p> Event Title: {this.props.location.state.data.results[this.props.location.state.event].title} </p>)}
	      	{this.props.location.state.defined && (<p> Description: {desc} </p>)}
	      	{this.props.location.state.defined && (<p> Start Time: {this.props.location.state.data.results[this.props.location.state.event].start} </p>)}
	      	{this.props.location.state.defined && (<p> Still need to add location and format the start time better ^^^^^^^^^^^^^^^^^^^^^ </p>)}
	      	{this.props.location.state.defined && (<p> Also need to add weather and music </p>)}
	      	{!(this.props.location.state.defined) && (<p> Please return to the homepage and search for an event first!</p>)}
			<Weather location={this.props.location} i={0} />
	      </div>
	      );
	  }

};


export default infoPage;
