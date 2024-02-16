import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "../../Spotify API/spotify";
import { useStateValue } from "../Context API/StateProvider";
import { useRecoilState } from "recoil";
import {playlistIdState} from "../../Atom/playlistAtom";
import logo from "../../assets/logo.jpg";

// Siderbar is left part of the GUI
// Display logo, Search, Home and Libray buttons make them responsive
// Fetch the user's playlist from the API and display it to GUI
// Each buttons and playlsits are SidebarOption to make it clickable separately

function Sidebar({ searchClicked, handleSearchClick, playlistClicked, handlePlaylistClick, handleHomeClick }) {
  const [{ playlists }, dispatch] = useStateValue();
  const[playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  const handlePlaylistClickEvent = (playlistId) => {
    setPlaylistId(playlistId);
    handlePlaylistClick();
  };
  

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src={logo}
        alt=""
      /> 
      <SidebarOption Icon={HomeIcon} option="Home" onClick={handleHomeClick} />
      <SidebarOption Icon={SearchIcon} option="Search" onClick={handleSearchClick}/>
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} key= {playlist.id} 
        onClick = {() =>  handlePlaylistClickEvent(playlist.id)} />
        
      ))}
    </div>
  );
}

export default Sidebar;
