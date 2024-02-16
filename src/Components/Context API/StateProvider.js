import React, { createContext, useContext, useReducer } from "react";

// It is about setting up the Context API for data sharing 
// purpose across the components
// It wraps the parent component (App) in context provider i.e StateProvider
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    
    {children}
   
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
