import React, {useContext} from 'react'
import {AppContext} from "./context"

const Home = () => {
    let { setSidebarOpen, setModalOpen} = useContext(AppContext)

    return (
        <>
            <button className="open-sidebar-btn" onClick={setSidebarOpen}>open sidebar</button>

            <button className="open-modal-btn" onClick={setModalOpen}>Open modal</button>
        </>
    )
}

export default Home
