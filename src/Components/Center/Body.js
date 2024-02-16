import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "../Context API/StateProvider";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { playlistIdState, playlistState } from "../../Atom/playlistAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

// This component implements the body part of the GUI
// Fetch the songs from the API and display it to the user

function Body({ spotify, searchClicked, playlistClicked, homeClicked}) {
  const [{ discover_weekly }, dispatch] = useStateValue();
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist1, setPlaylist] = useRecoilState(playlistState);

  
  useEffect(()=>{
    spotify.getPlaylist(playlistId).then((response)=>{
      setPlaylist(response);
    })
    .catch((err)=>console.log("Something went wrong!",err));  
  },[spotify, playlistId])

  console.log(playlist1);
  console.log(playlistClicked);

  const playPlaylist = () => { ///(id)
    spotify
      .play({
        context_uri: `spotify:playlist:${playlistId}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  
  return (
    <div className="body">
      <Header spotify={spotify} searchClicked={searchClicked}/>

      <div className="body__info">
        {playlistClicked?(
          <>
        <img src={playlist1?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{playlist1?.name}</h2>
          <p>{playlist1?.description}</p>
        </div>
        </>
        ): homeClicked?(
          
          <>
          {console.log(playlist1)}
          <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
        </>
        ):(
          <>
          <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
        </>
        )
        }
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        
        {playlistClicked?(
          <>
        {playlist1?.tracks?.items.map((item) => (
          <SongRow key={item.track.id} playSong={playSong} track={item.track} />
        ))}
        </>
        ):homeClicked?(
          <>
          {discover_weekly?.tracks?.items.map((item) => (
            <SongRow key={item.track.id} playSong={playSong} track={item.track} />
          ))}
          </>
        ): (
          <>
          {discover_weekly?.tracks?.items.map((item) => (
            <SongRow key={item.track.id} playSong={playSong} track={item.track} />
          ))}
          </>
        )
        }
      </div>
    </div>
  );
}

export default Body;
