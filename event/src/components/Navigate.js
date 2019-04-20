import React from 'react'
import {NavLink} from "react-router-dom"

const Navigate = () =>{ //arrow func
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<br/>
			<NavLink to="/info">Info</NavLink>
		</div>
	);
}



export default Navigate;