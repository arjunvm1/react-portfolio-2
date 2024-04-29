import React from 'react'
import pic1 from '../assets/luminar-logo.webp';
import pic3 from '../assets/netflix.jpg';
import arrow from '../assets/arrow-sn.webp'
import pic2 from '../assets/headphones.jpg'
import estate from '../assets/estate.jpg'
function Projects() {
  return (
    <div>
         <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1><br />
      <div className="experience-details-container-2">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={pic1} alt="Project 1" className="project-img1" />
            </div>
            <h2 className="experience-sub-title project-title">Luminar's Webpage</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://app.netlify.com/sites/luminarwebpagetask/overview'}>
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://luminarwebpagetask.netlify.app/'}>
                Live Demo
              </button>
            </div>
          </div>
          {/* Repeat the same structure for other projects */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src={pic2} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">HeadPhones Site</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/arjunvm1/headphones-site'}>
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://headphonesdemosite.netlify.app/'}>
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={estate} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">SetEstate (A real estate website)</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/arjunvm1/mern-estate'}>
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://mern-estate-bpqf.onrender.com/'}>
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#contact'} />
    </section>
    </div>
  )
}

export default Projects