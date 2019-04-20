import React from "react";

class Forms extends React.Component {
	render(){
		return(
			<form onSubmit={this.props.getEvents}>
				<input type="text" name="city" placeholder="City..."/>
				<input type="text" name="state" placeholder="State..."/>
				<button> Get Upcoming Events </button>
			</form>
			)
	}
};

export default Forms;