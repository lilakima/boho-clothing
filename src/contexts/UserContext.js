import React, { createContext, useReducer } from 'react'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

const userReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: payload
            }

        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const {currentUser} = state



    const value = {currentUser}



    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
