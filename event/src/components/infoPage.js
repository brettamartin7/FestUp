import React from "react"
import Navigate from "./Navigate"



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
	      	{!(this.props.location.state.defined) && (<p> Please return to the homepage and search for an event first!</p>)}
	      </div>
	      );
	  }
	  
};


export default infoPage;