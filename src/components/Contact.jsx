import React from 'react'
import email from '../assets/email-sn.webp';
import li from '../assets/linkedin-sn.webp'

function Contact() {
  return (
    <div> <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <br />
    <div className="container">
      <form action="assets/welcome.html" id="contact-form">
        <br />
        <input type="text" placeholder=" Full Name" className="inputer" id="name" required onKeyDown={(event) => { return /[a-zA-Z]/i.test(event.key) }} /><br />
        <input type="email" placeholder=" Email Address" className="inputer" style={{ height: '50px' }} id="email" required /><br />
        <textarea name="" id="message" cols="30" rows="10" placeholder=" Message" className="inputer"></textarea><br />
        <input type="submit" className="btn btn-color-2" />
      </form>
    </div>

    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img src={email} alt="Email icon" className="icon contact-icon email-icon" />
        <p><a href="mailto:examplemail@gmail.com">arjunvm628@gmail.com</a></p>
      </div>
      <div className="contact-info-container">
        <img src={li} alt="LinkedIn icon" className="icon contact-icon" />
        <p><a href="https://www.linkedin.com/in/arjun-v-m-39111a28b/">LinkedIn</a></p>
      </div>
    </div>
  </section></div>
  )
}

export default Contact