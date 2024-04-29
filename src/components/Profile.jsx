import React from 'react'
import mypic from '../assets/arjunpfpmodified.webp'
import gitpic from '../assets/github-sn.webp'
import lipic from '../assets/linkedin-sn.webp'
import resume from '../Resume/resume.pdf'

function Profile() {
  return (
    <div>
        <section id="profile">
      <div className="section__pic-container">
        <img className="rounded" src={mypic} alt="..." />
      </div>
      <div className="section__text">
        <br />
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Arjun</h1>
        <p className="section__text__p2">FullStack web Developer</p>
        <div className="btn-container">
          <a href={resume}><button className="btn btn-color-2">
            Download CV
          </button>
          </a>
          <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img src={lipic} alt="My LinkedIn profile" className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/feed/'} />
          <img src={gitpic} alt="My Github profile" className="icon" onClick={() => window.location.href = 'https://github.com/arjunvm1'} />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Profile