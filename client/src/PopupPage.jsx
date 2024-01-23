import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaCheck } from 'react-icons/fa';
import './PopupPage.css'

function PopupPage({open, setOpen}) { // use props here
  return (
    <Popup open={open} modal>
      <div className="modal">
        <div className="content">
          <FaCheck size={50} color="green" />
          <h2>Success!</h2>
          <p>Your email has been sent.</p>
        </div>
        <div className="actions">
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </div>
    </Popup>
  )
}
export default PopupPage
