import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id="contact">
      <h2> Get In Touch </h2>

       <div className="container contact__container">
          <article className="contact__option"> 
          <a className="contact__option-link" href="mailto:paturu.s@northeastern.edu"> <MdEmail className="contact__option-icon"/> </a>
           <h2> paturu.s@northeastern.edu </h2>
           
           
          </article>
        
        </div>      
    </section>
  )
}

export default Contact
