
function App() {
  return (
    <>
    <section className="sidebar">
      <button className="sidebar__close-btn ">&times;</button>
      <ul className="sidebar__items">
        <li className="sidebar__item">Home</li>
        <li className="sidebar__item">About</li>
        <li className="sidebar__item">Blog</li>
        <li className="sidebar__item">Documents</li>
      </ul>
    
    </section>

    <button className="open-sidebar-btn">open sidebar</button>

      <section className="modal-container">
        <div className="modal">
          <button className="modal__close-btn">&times;</button>
          <div className="modal-content">
            <h1>This is the modal content</h1>
          </div>
        </div>
      </section>

      <button className="open-modal-btn">Open modal</button>
    </>
  );
}

export default App;
