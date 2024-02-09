import React,  { useEffect, useState } from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const Footer = () => {

  const [views, setViews] = useState('Loading...');

  useEffect(() => {
  
    const lambdaURL = 'https://eg2yyqmmhms6mptmer2op4bdwa0xzjqv.lambda-url.us-east-1.on.aws/';

    fetch(lambdaURL)
      .then(response => response.json())
      .then(data => {
        setViews(data.newVisitorCount);
      })
      .catch(error => {
        console.error('Error fetching view count:', error);
        setViews('Error fetching views');
      });
  }, []);
  
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
       <a href="https://www.linkedin.com/in/swetha-paturu/" target="_blank" rel="noreferrer noopener"><BsLinkedin/></a>
        <a href="https://github.com/swethapaturu9" target="_blank" rel="noreferrer noopener"><BsGithub/></a>
        <a href="https://leetcode.com/swetha_paturu/" target="_blank" rel="noreferrer noopener"><SiLeetcode/></a>  
    </div>

    <div className="footer__views">
      <small> Views: {views}</small>
    </div>
      
     <div className="footer__copyright">
     <small> &copy; Swetha Paturu </small>

     </div>
    </footer>

    
  )
}

export default Footer
