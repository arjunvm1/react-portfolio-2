import React from 'react'
import  check from '../assets/checkmark-sn.webp'
import arrow from '../assets/arrow-sn.webp'

function Experience() {
  return (
    <div>
      <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
              <img src={check} alt="Experience icon" class="icon" />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" class="icon" />
              <div>
                <h3>JavaScript</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" class="icon" />
              <div>
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" class="icon" />
              <div>
                <h3>Material UI</h3>
                <p>basic</p>
              </div>
            </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>MongoDB</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              {/* Add other articles for backend development */}
              <article>
              <img src={check} alt="Experience icon" class="icon" />
              <div>
                <h3>Node JS</h3>
                <p>basic</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" class="icon" />
              <div>
                <h3>Express JS</h3>
                <p>basic</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" class="icon" />
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
            </div>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#projects'} />
    </section>
    </div>
  )
}

export default Experience