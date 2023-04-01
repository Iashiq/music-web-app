export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectURI = "http://localhost:3000/";
const clintID = "cf8c1c5176bf4ce59e8af2069b54ef4d";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getAccessTokenFromURL = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) =>{
        //#accesstoken = djnnasfjnf,askdfj
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}  

export const loginURL = `${authEndpoint}?client_id=${clintID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
 