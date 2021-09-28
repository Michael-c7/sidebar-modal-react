import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = (props) => {
    return (
        <AppContext.Provider value={666}>
            {/*Need to render the children */}
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};