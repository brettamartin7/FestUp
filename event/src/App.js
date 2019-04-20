import React from "react";
import homePage from "./components/homePage"
import infoPage from "./components/infoPage"
import {BrowserRouter, Route, Switch} from "react-router-dom"

//const weatherKey = '6f40b22dbaa376a1572c23c064335bc5';
//const clientSecret = 'MVKtEJFja5ZaTHIg3TDcTF3adv1x1IlopKx4Kwg3';
//const accessToken = 'Bfh98sVa9jZRULfeE4I78zPzjzMUON';

class App extends React.Component {

    render(){
      return(
      	//-------------------Controls Different Pages -----------------
        <BrowserRouter> 
        	<Switch>
	            <Route path="/" component={homePage} exact/> 
	            <Route path="/info" component={infoPage}/> 
            </Switch>
        </BrowserRouter>
      );
    }
};

export default App;