import React from 'react'

function Footer() {
  return (
    <div>
         <footer bg-primary>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links ">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <br />
      <p>Copyright &copy; 2023 Arjun V M. All Rights Reserved.</p>
      <p>BUILT USING REACT.</p>
    </footer>
    </div>
  )
}

export default Footer