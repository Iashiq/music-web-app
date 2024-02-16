import React, { useEffect, useState } from "react";
import { useStateValue } from "./Components/Context API/StateProvider";
import Player from "./Components/Center/Player";
import { getTokenFromResponse } from "./Spotify API/spotify";
import "./App.css";
import Login from "./Components/Login/Login";    
import { useRecoilValue } from "recoil";
import { playlistIdState } from "./Atom/playlistAtom";
import SpotifyWebApi from "spotify-web-api-js";

//  API object
const s = new SpotifyWebApi();    

//  First check if the token is valid, meaning user has successfully 
//  Logged in to the Spotify
//  Retrive the data from API and dispatch it to the relative case specified 
//  in src/Components/Context API/reducer.ja

function App() {
  const [{ token }, dispatch] = useStateValue();
  const playlistId = useRecoilValue(playlistIdState);

  
  useEffect(() => {
    
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

  
    if (_token) {

      // set token
      s.setAccessToken(_token);

      // Retrieve playlist with songs in it from the API
        s.getPlaylist(playlistId).then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
    });
      

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
     

    //  Get the artist name from the API
      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      // Get the user from API
      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });


      // Fetch the playlist
      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch, playlistId]);


  // If the token is valid app move to the GUI
  // Otherwise login page
  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
