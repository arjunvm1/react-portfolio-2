import React from 'react'
import arrow from '../assets/arrow-sn.webp'
function Services() {
  return (
    <div>
         <section id="services">
      <p className="section__text__p1">
        <br /><br /> My
      </p>
      <h1 className="title">Services</h1><br />
      <div className="experience-details-container-2">
        <div className="about-containers">
          <div className="details-container color-container">
            <h2 className="experience-sub-title project-title">🖥️Fullstack Expertise</h2>
            <p>As a fullstack developer, I specialize in both frontend and backend technologies. From crafting stunning user interfaces with HTML, CSS, and JavaScript, to designing robust server-side architecture using languages like Python, Java, or Node.js, I've got you covered at every step of development.</p>
          </div>
          <div className="details-container color-container">
            <h2 className="experience-sub-title project-title">📝Custom Web Applications</h2>
            <p> I pride myself on my ability to turn your unique ideas into functional web applications. Whether it's an e-commerce platform, a social networking site, or a business management tool, I have the skills and experience to create tailor-made solutions that meet your specific requirements.</p>
          </div>
          <div className="details-container color-container">
            <h2 className="experience-sub-title project-title">🚀Responsive Design</h2>
            <p>In today's mobile-driven world, having a responsive website is essential. I ensure that your applications not only look great on desktops but also adapt seamlessly to various screen sizes, providing an optimal user experience across all devices.</p>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#contact'} />
    </section>
    </div>
  )
}

export default Services