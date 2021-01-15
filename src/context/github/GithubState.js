import React, {useReducer} from 'react';
import {GithubContext} from "./githubContext";

export const GithubState = ({children}) => {
    const initialState = {
        user:{},
        users:[],
        loading:false,
        repos:[]
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    return (
        <GithubContext.Provider value={{

        }}>
            {children}
        </GithubContext.Provider>
    );
};

