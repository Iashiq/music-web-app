import React, {useState, useRef} from "react";
import "./Header.css";
import { useStateValue } from "../Context API/StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";

// Implements the header part of the app
// Contains the search bar and user profile implementations

function Header({ spotify, searchClicked  }) {
  const [{ user }, dispatch] = useStateValue();
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);

  if(searchClicked) {
    inputRef.current.focus();
    searchClicked = false;
  };

  return (
    <div className="header">
      <div className="header__left">
      {searchClicked?(
        <>
      <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
          ref={inputRef}
        />
        </>):(
        <>
      <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
          ref={inputRef}
        />
        </>)
        }
      
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
