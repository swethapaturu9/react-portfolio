import React from 'react'
import './about.css'
import ME from '../../assets/me-1.jpg'
import { FaLaptopCode } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { BiBook } from 'react-icons/bi'

const About = () => {
  return (
    <section id="about">

      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
           <img src={ME} alt=""></img>
          </div>
          <div className="image-tag">
              <p> "I have only two moods" </p>
          </div>
        </div>
        <div className="about__me-content">
          <div className="about__cards">
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5> Larsen & Toubro Infotech</h5>
              <small> July'21 - July'22 </small>
            </article>
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5> Northeastern University</h5>
              <small> Expected May 2024  </small>
            </article>
            <article className="about__card">
              <BiBook className="about__icon" />
              <h5> Master of Science </h5>
              <small> Information Systems </small>
            </article>
          </div>
          <p>
          I'm  an enthusiastic (most of the times) and highly motivated Software Engineer with one year of experience in Cloud Native development. With a strong foundation in Java, Python, C++, and JavaScript, I am constantly seeking opportunities to expand my knowledge and skills. I have a deep passion for creating innovative solutions and thrive in dynamic and fast-paced environments.

If you're looking for a dedicated and adaptable team member who is willing to go the extra mile, I would be thrilled to connect and explore potential collaborations. Let's embark on a journey of learning and success together.

          </p>
        </div>
      </div>
    </section>
  )
}

export default About
