import React, {createContext, useContext, useReducer} from "react";

export const DataLayerContext = new createContext();

export const DataLayer = ({initialState, reducer, children }) =>(
        <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.Provider>
    )
