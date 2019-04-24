document.write('\
    <html>
    <head>
      <title>Spotify Web Playback SDK Quick Start Tutorial</title>
    </head>
    <body>
      <h1>Spotify Web Playback SDK Quick Start Tutorial</h1>
      <h2>Open your console log: <code>View > Developer > JavaScript Console</code></h2>

      <script src="https://sdk.scdn.co/spotify-player.js"></script>
      <script>
        window.onSpotifyWebPlaybackSDKReady = () => {
          const token = 'BQC-i3KwOr5SBgfWZ85kRr9wxsbWy2ms7PANFOFcbkTNQXiESUhii1jBs7jzIC5kksIK6sd5mZZVH8fC-rPSe414vt60hzs8_FQL8XiZliTYFgyZL-618QGmXBMV2NLjbd-3bPKSuXMhbqsDmZCkqHX3TGSHr41WE2WNKwT1FIRk';
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
    </html>

')
