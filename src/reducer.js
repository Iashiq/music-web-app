export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // //set token: null after the development
    // token: 'BQC1uYa-UDBmIVNTv1vatersYtW_kWXRqctdEgvB642tlgvE-l6y0UcJDLwJJqsrzTvcngil1iG3NJn_uCWSNVRld2V184Wde6giGL3l6FXxxZCFo0FHeMXOhhSHwPHp-R5Esyfo80BK3tD_FGlnDAX3VrX5YQcLmTCVhRydr9zYtciSzm7GEyf_-f-GRPWsNrIJIZppj7yHeI2DqcoNWw',
};

const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };
        
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token, 
            };

        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
        
            default:
                return state;
    }

}

export default reducer