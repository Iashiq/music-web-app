import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header(){
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input placeholder="Search for Artists, songs" type="text" />
            </div>
            <div className="header_right"></div>
        </div>
    );
}

export default Header;