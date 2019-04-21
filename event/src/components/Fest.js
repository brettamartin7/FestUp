import React from "react";
import { Redirect } from "react-router-dom"

class Fest extends React.Component{
	state = {
		toInfo: false,
		num: undefined
	}

	getInfo(num){
		this.setState({
			toInfo: true,
			num: num
		})
	}

	renderRedirect(){
		let num = this.state.num;
		if(this.state.toInfo){	
			return <Redirect
			  to={{
			    pathname: "/info",
			    state: { event: num,
			    	data: this.props.data
			     }
			  }}
			/>
		}
	}

	render(){
		return(
			<div>
				{ this.renderRedirect() }
				<h1> Select an event from the list below to receive more information! </h1>
				<ul>
					<li onClick={() => this.getInfo(0)}>{this.props.titles[0]}</li>
					<li onClick={() => this.getInfo(1)}>{this.props.titles[1]}</li>
					<li onClick={() => this.getInfo(2)}>{this.props.titles[2]}</li>
					<li onClick={() => this.getInfo(3)}>{this.props.titles[3]}</li>
					<li onClick={() => this.getInfo(4)}>{this.props.titles[4]}</li>
					<li onClick={() => this.getInfo(5)}>{this.props.titles[5]}</li>
					<li onClick={() => this.getInfo(6)}>{this.props.titles[6]}</li>
					<li onClick={() => this.getInfo(7)}>{this.props.titles[7]}</li>
					<li onClick={() => this.getInfo(8)}>{this.props.titles[8]}</li>
					<li onClick={() => this.getInfo(9)}>{this.props.titles[9]}</li>
				</ul>
			</div>
			)
	}
}

export default Fest;