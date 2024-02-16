import React,{useState} from "react";
import Footer from "../Footer/Footer";
import "./Player.css";
import Sidebar from "../Sidebar/Sidebar";
import Body from "./Body";
import {click} from "../Sidebar/Sidebar"

//  It contains the Header, Body and Footer in it
//  Also perform the user click events to make the components responsive

function Player({ spotify }) {
  const [searchClicked, setSearchClicked] = useState(false);
  const [playlistClicked, setPlaylistClicked] = useState(false);
  const [homeClicked, setHomeClicked] = useState(false);

  const handleHomeClick = () => {
    setHomeClicked(true);
  };

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  const handlePlaylistClick = () =>{
    setPlaylistClicked(true);
  };

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar 
        searchClicked={searchClicked}
        handleSearchClick={handleSearchClick}
        playlistClicked = {playlistClicked}
        handlePlaylistClick = {handlePlaylistClick}
        handleHomeClick = {handleHomeClick}/>
        <Body spotify={spotify} 
        searchClicked={searchClicked} 
        playlistClicked = {playlistClicked} 
        homeClicked = {homeClicked}  />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
