import React from 'react'

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact me</h1>
      <form className="contact-form">
        <input className="contact-input" type="text" name="name" placeholder='Your Name' />
        <input className="contact-input" type="email" name="email" placeholder='Your email'/>
        <button className="contact-button">Send!</button>
      </form>
    </div>
  )
}
