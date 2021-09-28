import React, {useContext} from 'react'
import {AppContext} from "./context"

const Modal = () => {
    let { isModalOpen, setModalClosed } = useContext(AppContext)

    return (
        <section className={`${isModalOpen ? "modal-container show-modal" : "modal-container"}`}>
        <div className="modal">
          <button className="modal__close-btn" onClick={setModalClosed}>&times;</button>
          <div className="modal-content">
            <h1>This is the modal content</h1>
          </div>
        </div>
      </section>
    )
}

export default Modal


//modal-container