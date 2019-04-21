import React from 'react'
import {NavLink} from "react-router-dom"

const Navigate = () =>{ //arrow func
	return (
		<div>
			<p><NavLink to="/">Home</NavLink></p>
			<p><NavLink to="/info">Info</NavLink></p>
		</div>
	);
}



export default Navigate;