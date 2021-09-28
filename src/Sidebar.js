import React, {useContext} from 'react'
import {AppContext} from "./context"

const Sidebar = () => {
    let value = useContext(AppContext)

    return (
        <section className="sidebar">
            <button className="sidebar__close-btn">&times;</button>
            <ul className="sidebar__items">
                <li className="sidebar__item">Home</li>
                <li className="sidebar__item">About</li>
                <li className="sidebar__item">Blog</li>
                <li className="sidebar__item">Documents</li>
            </ul>
        </section>
    )
}

export default Sidebar;
