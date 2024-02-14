import React from "react";
import mypic from "../assets/arjunpfpmodified.webp";
import exp from "../assets/experience-sn.webp";
import arrow from '../assets/arrow-sn.webp'
import edu from '../assets/education-sn.webp'

function About() {
  return (
    <div>
      <section id="about">
        {/* <p class="section__text__p1">Get To Know More</p> */}
        <h1 class="title">About Me</h1>
        <br />
        <div class="section-container">
          <div class="section__pic-container">
            <img src={mypic} alt="Profile" class="about-pic" />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src={exp}
                  alt="skill icon"
                  class="icon"
                />
                <h3>Skills</h3>
                <p>
                  html, css <br /> JavaScript ,bootstrap
                </p>
              </div>
              <div class="details-container-2">
                <img
                  src={edu}
                  alt="Educatn icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>B.Sc. Computer science</p>
              </div>
            </div>
            <div class="text-container">
              <p>
                👋 Welcome to my coding journey! <br />
                <br />
                🌱 Enthusiastic Full Stack Development Student | 💡 Future Tech
                Trailblazer <br />
                📚 Currently diving deep into the world of full stack
                development, I'm on a mission to transform ideas into impactful
                digital solutions. <br />
                🖥️ Exploring front-end magic with: HTML, CSS, JavaScript, React{" "}
                <br />
                💻 Delving into the server realm with: Node.js, Express <br />
                🛢️ Unraveling the database puzzle with: MongoDB <br />
                📝 Continuously documenting my learning through coding projects{" "}
                <br />
                🚀 Join me as I tinker, code, and conquer the realm of web
                development. Let's learn and grow together!
                <br />
                <br />
                🔗 Connect with me and explore my coding journey. Open to
                collaboration and eager to learn from fellow developers. <br />
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          class="icon arrow"
          onClick={() => (window.location.href = "./#experience")}
        />
      </section>
    </div>
  );
}

export default About;
