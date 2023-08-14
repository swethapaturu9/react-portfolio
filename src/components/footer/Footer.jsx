import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
       <ul className="links"> 
         <li><a href="#"> Home </a> </li>
         <li><a href="#about"> About </a> </li>
         <li><a href="#experience"> Skills </a> </li>
         <li><a href="#projects"> Projects </a> </li>
         <li><a href="#contact"> Contact </a> </li>
       </ul>
       <div className="footer__socials">
       <a href="https://www.linkedin.com/in/swetha-paturu/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/swethapaturu9" target="_blank"><BsGithub/></a>
        <a href="https://leetcode.com/swetha_paturu/" target="_blank"><SiLeetcode/></a>  
    </div>
     <div className="footer__copyright">
     <small> &copy; Swetha Paturu </small>

     </div>
    </footer>

    
  )
}

export default Footer
