import React , { useEffect , useState }from 'react';
import './App.css';
import Login from './login/Login';

import { getTokenFromResponse } from './spotify';

import SpotifyWebApi from "spotify-web-api-js";

const spotify =  new SpotifyWebApi();

function App() {
  let [ token , setToken ] = useState('');
  useEffect(()=>{
      const hash = getTokenFromResponse();
      const _token  = hash.access_token;
      if (_token) {
        setToken(_token);
        spotify.setAccessToken(_token);
        spotify.getMe().then(user=>{
          console.log('user ==> ', user);
        })
      }
  },[])
  return (
    <div className="app">
      {
        token ? (
          <h1>user is logged in </h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
