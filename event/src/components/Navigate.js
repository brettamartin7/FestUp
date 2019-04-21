import React from 'react'
import { NavLink } from "react-router-dom"

const Navigate = () =>{ //arrow func
	return (
		<div>
			<p><NavLink to="/">Home</NavLink></p>
			<p><NavLink to={{pathname: "/info", state: { defined: false }}}> Info </NavLink> </p>
		</div>
	);
}



export default Navigate;