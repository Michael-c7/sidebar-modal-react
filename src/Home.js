import React, {useContext} from 'react'
import {AppContext} from "./context"

const Home = () => {
    let value = useContext(AppContext)
    console.log(value)

    return (
        <>
            <button className="open-sidebar-btn">open sidebar</button>

            <button className="open-modal-btn">Open modal</button>
        </>
    )
}

export default Home
