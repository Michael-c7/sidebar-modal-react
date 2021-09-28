import React, {useContext} from 'react'
import {AppContext} from "./context"

const Modal = () => {
    let value = useContext(AppContext)

    return (
        <section className="modal-container">
        <div className="modal">
          <button className="modal__close-btn">&times;</button>
          <div className="modal-content">
            <h1>This is the modal content</h1>
          </div>
        </div>
      </section>
    )
}

export default Modal
