import React from "react";

class Player extends React.Component{
    state ={
    }

    render(){
        return(
            <div>
            <h1>Listen to some of the performers now!</h1>
            <script src="https://sdk.scdn.co/spotify-player.js"></script>
            <script src="./spotPlay"></script>
            </div>
        )
    }
}

export default Player;
