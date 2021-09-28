import React, {useContext} from 'react'
import {AppContext} from "./context"

const Sidebar = () => {
    let { isSidebarOpen, setSidebarClosed } = useContext(AppContext)

    return (
        <section className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
            <button className="sidebar__close-btn" onClick={setSidebarClosed}>&times;</button>
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
