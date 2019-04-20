import React from "react"
import Navigate from "./Navigate"

class errorPage extends React.Component {
	  render(){
	    return(
	      <div>
	      	<Navigate/>
	      	<h1>Error: This page does not exist!</h1>
	      </div>
	      );
	  }
};

export default errorPage;