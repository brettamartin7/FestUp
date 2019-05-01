import React from "react";

class FormsTwo extends React.Component {
	render(){
		return(
			<form onSubmit={this.props.getEventsTitle}>
				<input type="text" name="title" placeholder="Title..."/>
				<button> Get Upcoming Events </button>
			</form>
			)
	}
};

export default FormsTwo;