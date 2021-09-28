import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const setModalOpen = _ => {
        setIsModalOpen(true)
    }

    const setModalClosed = _ => {
        setIsModalOpen(false)
    }

    const setSidebarOpen = _ => {
        setIsSidebarOpen(true)
    }

    const setSidebarClosed = _ => {
        setIsSidebarOpen(false)
    }





    return (
        <AppContext.Provider value={
            {
            isModalOpen,
            setModalOpen,
            setModalClosed,
            isSidebarOpen,
            setSidebarOpen,
            setSidebarClosed,
            }
            }>
            {/*Need to render the children */}
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};