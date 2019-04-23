import React from "react";
class Player extends React.Component{
    state ={

    }

    render(){
        return(
            <div>
            <body>
            <h1>Listen to some of the performers now!</h1>
            <script src="https://sdk.scdn.co/spotify-player.js">
                window.onSpotifyWebPlaybackSDKReady = () => {
                    const token = 'BQDw7QZesZWsBKpvMMlhqFnlS0Zl_eJf5x1K5LGLDx3SXiRdC-WKoGLHU_Efd_mAPdOzEsSn_6XESIQQ3olMxZLczq5hnSZpVYhNZ65nB521s_sBqMkSUW1Au4swcmPLqJlaCrU_P_0W2prS9KTF0DF1G3BQ0hVwsJX0VFcYcSVX';
                    const player = new Spotify.Player({
                    name: 'Web Playback SDK Quick Start Player',
                    getOAuthToken: cb => { cb(token); }
                });

                // Error handling
                player.addListener('initialization_error', ({ message }) => { console.error(message); });
                player.addListener('authentication_error', ({ message }) => { console.error(message); });
                player.addListener('account_error', ({ message }) => { console.error(message); });
                player.addListener('playback_error', ({ message }) => { console.error(message); });

                // Playback status updates
                player.addListener('player_state_changed', state => { console.log(state); });

                // Ready
                player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
              });

              // Not Ready
              player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
              });

              // Connect to the player!
              player.connect();
            };
            </script>
            </body>
            </div>
        )
    }
}

export default Player;
