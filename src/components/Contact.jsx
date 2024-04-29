import React, { useState } from "react"
import li from "../assets/linkedin-sn.webp"
import mail from "../assets/email-sn.webp"
import emailjs from "@emailjs/browser";

function Contact() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_fte93jn";
    const templateId = "template_0332d3s";
    const publicKey = "JifNzwky8nNH4yInE";

    const templateParams = {
      from_name : name,
      email_id  : email,
      to_name   : "Arjun",
      message   : message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("email sent successfully", response);
      setName('')
      setEmail('')
      setMessage('')
      alert("email sent! i'll get back to you as soon as possible.")
    })
    .catch((error) => {
      console.log(error.text);
    })



  }

  return (
    <div>
      {" "}
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <br />
        <div className="container">
          <form onSubmit={handleSubmit} id="contact-form">
            <br />
            <input type="text" value={name} placeholder=" Full Name" onChange={(e) => setName(e.target.value)} id="name" />
            <br />
            <input type="email" value={email} placeholder=" Email Address" onChange={(e) => setEmail(e.target.value)} style={{ height: "50px" }} id="email" required />
            <br />
            <textarea value={message} id="message" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} placeholder=" Message" ></textarea>
            <br />
            <input type="submit" className="btn btn-color-2" />
          </form>
        </div>

        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={mail} alt="Email icon" className="icon contact-icon email-icon" />
            <p>
              <a href="mailto:examplemail@gmail.com">arjunvm628@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img src={li} alt="LinkedIn icon" className="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/arjun-v-m-39111a28b/">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
