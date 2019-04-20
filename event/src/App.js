import React from "react";
import Titles from "./components/Titles"
import Fest from "./components/Fest"
import Forms from "./components/Forms"
import homePage from "./components/homePage"
import infoPage from "./components/infoPage"
import errorPage from "./components/errorPage"
import {BrowserRouter, Route, Switch} from "react-router-dom"

const weatherKey = '6f40b22dbaa376a1572c23c064335bc5';
//const clientSecret = 'MVKtEJFja5ZaTHIg3TDcTF3adv1x1IlopKx4Kwg3';
//const accessToken = 'Bfh98sVa9jZRULfeE4I78zPzjzMUON';

class App extends React.Component {

	constructor(props){
		super(props);
	}
    render(){
      return(
      	//-------------------Controls Different Pages -----------------
        <BrowserRouter> 
        	<Switch>
	            <Route path="/" component={homePage} exact/> //see homePage.js
	            <Route path="/info" component={infoPage}/> //see infoPage.js
	            <Route component={errorPage}/> //see errorPage.js
            </Switch>
        </BrowserRouter>
      );
    }
};

export default App;