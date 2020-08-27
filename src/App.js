import React , { useEffect   }from 'react';
import './App.css';
import Login from './login/Login';
import Player from './player/player';

import { getTokenFromResponse } from './spotify';
import {useDataLayerValue } from './Datalayer'

import SpotifyWebApi from "spotify-web-api-js";

const spotify =  new SpotifyWebApi();

function App() {
  const [{token }, dispatch] = useDataLayerValue();
  useEffect(()=>{
      const hash = getTokenFromResponse();
      const _token  = hash.access_token;
      if (_token) {
        dispatch({
          type:"SET_TOKEN",
          token : _token
        })
        spotify.setAccessToken(_token);
        spotify.getMe().then(user=>{
          dispatch({
            type:"SET_USER",
            user
          })
        })
      }
  },[dispatch])
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
