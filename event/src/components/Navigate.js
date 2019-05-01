import React from 'react'
import { NavLink } from "react-router-dom"

const Navigate = () =>{ //arrow func
	return (
		<div>
			<button><NavLink to="/" style={{color: 'white', textDecoration: 'none'}}>Home Page</NavLink></button>
			<button><NavLink to={{pathname: "/info", state: { defined: false }}} style={{color: 'white', textDecoration: 'none'}}> Event Page </NavLink> </button>
		</div>
	);
}



export default Navigate;