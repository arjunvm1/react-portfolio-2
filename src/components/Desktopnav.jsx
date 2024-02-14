import React from 'react'

function Desktopnav() {
  return (
    <div>
         <nav id="desktop-nav">
      <div className="logo">Arjun V M</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#services">Services</a></li> {/* Corrected "services" to "Services" */}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Desktopnav