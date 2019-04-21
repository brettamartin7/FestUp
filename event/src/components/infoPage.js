import React from "react"
import Navigate from "./Navigate"



class infoPage extends React.Component {
	
	  render(){
	  	let desc = this.props.location.state.data.results[this.props.location.state.event].description;
	  	if(desc === ""){
	  		desc = "No description provided";
	  	}
	  	
	    return(

	      <div>
	      	<Navigate/>
	      	<h1>Event Information</h1>
	      	<p> Event Title: {this.props.location.state.data.results[this.props.location.state.event].title} </p>
	      	<p> Description: {desc} </p>
	      	<p> Start Time: {this.props.location.state.data.results[this.props.location.state.event].start} </p>
	      </div>
	      );
	  }
	  
};


export default infoPage;