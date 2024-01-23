import { useState } from 'react'
import './index.css';
import axios from "axios"
import PopupPage from './PopupPage'; 

function App() {
  const [email,setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [name, setName] = useState();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/send-email", {
      name,
      email,
      subject,
      message,
    })
    .then(() =>{
      console.log("Message sent successfully");
      setOpen(true);
    })
    .catch((error) =>{
      console.log("something went wrong..", error);
      alert(error.message);
    })
  }
  return (
    <>
       <div  className="container">
          <form className='form' key={open}>
            <label htmlFor="subject">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="name-input"
                onChange={(e) => setName(e.target.value)}
              />
            <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Recipients email address"
                className="email-input"
                onChange={(e) => setEmail(e.target.value)}
              />

            <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="subject-input"
                onChange={(e) => setSubject(e.target.value)}
              />
             <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.target.value)}
             />

              <button
                type="submit"
                onClick={sendEmail}
              >
                Submit
              </button>
              {open && <PopupPage open={open} setOpen={setOpen} />}
          </form>
    </div>
    </>
  )
}
export default App
