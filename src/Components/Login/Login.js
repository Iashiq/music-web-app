import React from "react";
import "./Login.css";
import { accessUrl } from "../../Spotify API/spotify";
import logo from "../../assets/logo.jpg";

// Implements the login page 
// Call the access URI created in the src/Spotify/Spotify.js file
// Bring the user to the Spotify authorization page
function Login() {
  return (
    <div className="login">
      <img
        src={logo}
        alt=""
      />
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
