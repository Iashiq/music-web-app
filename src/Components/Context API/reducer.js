import { findAllByDisplayValue } from "@testing-library/react";


// intial state contains the varibles 
// These varibales are used to dispache the data retrived from the API
export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};


// Switch case: To use the data we dispached in the above mention varibles
// for the UI purpose
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {

    // case: for user's profile
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    // Case: for audio player
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    
    // Case: for listing the songs
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    // Case: for listing the user's playlists
    case "SET_DISCOVER_WEEKLY":
      console.log(action.discover_weekly);
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    // Case: for artist name
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    
    
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
 
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
