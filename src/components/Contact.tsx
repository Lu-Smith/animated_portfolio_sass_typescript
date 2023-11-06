import React from 'react'

const Contact = () => {
  return (
    <div className='Contact'>
        <div className="textContainer">
            <h1>Let's work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>lunasmithart@gmail.com</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>Edinburgh, Scotland 🦄</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>07863734874</span>
            </div>
        </div>
        <div className="formContainer">
            <form action="">
                <input type="text" required placeholder='Name'/>
                <input type="email" required placeholder='Email'/>
                <textarea placeholder='Message'rows={8}></textarea>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact