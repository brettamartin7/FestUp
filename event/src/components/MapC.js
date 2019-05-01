import React from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapC extends React.Component{
	
	render(){
		let lat = this.props.ltlg[1];
		let lng = this.props.ltlg[0];
		
		return(
			
				<div>
					<Map google={this.props.google} zoom={14} initialCenter= {{lat: lat, lng: lng}} style={{width: '300px', height: '300px', position: 'relative'}}>
					<Marker position={{lat: lat, lng: lng}}/>
			    	</Map>
				</div>
			);
	}
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyAZzj9w1IgbjVbgM8UNEWAuuPvYQ3Jzb2E'
})(MapC)

