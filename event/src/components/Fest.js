import React from "react";

class Fest extends React.Component{
	render(){
		return(
			<div>
				<h1> Select an event from the list below to receive more information! </h1>
				<ul>
					<li>{this.props.titles[0]}</li>
					<li>{this.props.titles[1]}</li>
					<li>{this.props.titles[2]}</li>
					<li>{this.props.titles[3]}</li>
					<li>{this.props.titles[4]}</li>
					<li>{this.props.titles[5]}</li>
					<li>{this.props.titles[6]}</li>
					<li>{this.props.titles[7]}</li>
					<li>{this.props.titles[8]}</li>
					<li>{this.props.titles[9]}</li>
				</ul>
			</div>
			)
	}
}

export default Fest;