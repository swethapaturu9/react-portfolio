import React from 'react'
import './about.css'
import ME from '../../assets/me-1.jpg'
import {FaLaptopCode} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {BiBook} from 'react-icons/bi'

const About = () => {
  return (
    <section id="about">
      
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me"> 
           <div className="about__me-image">
               <img src={ME} alt="">
               </img>
           </div>
        </div>
           <div className="about__me-content">
              <div className="about__cards">
                 <article className="about__card"> 
                      <FaLaptopCode  className="about__icon"/>
                      <h5> Larsen & Toubro Infotech</h5>
                      <small> July'21 - July'22 </small>
                 </article>
                 <article className="about__card"> 
                      <MdSchool className="about__icon"/>
                      <h5> Northeastern University</h5>
                      <small> Expected May 2024  </small>
                 </article>
                 <article className="about__card"> 
                  <BiBook className="about__icon"/>
                 <h5> Master of Science </h5>
                 <small> Information Systems </small>
                 </article>
                 </div>
                 <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum incidunt provident molestiae iste deleniti officiis corrupti aperiam excepturi libero! 
                   Autem quos eaque modi quasi impedit culpa omnis aperiam eius!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, in minima quibusdam quae, aperiam ad voluptatum sunt nihil non consequuntur quisquam laboriosam?
                    Commodi quibusdam illum incidunt hic nisi consectetur quas!
                  </p>
           </div>
        </div>
    </section>
  )
}

export default About
