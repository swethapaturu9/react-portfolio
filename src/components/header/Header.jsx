import React from 'react'
import CTA from './CTA'
import ME from '../../assets/Myproject-1.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
         <div className="container header__container">
                <h4>Hello I&apos;m</h4>
                <h1>Swetha Paturu</h1>
                <h4 className="text-light">Software Engineer</h4>
                <CTA/>
                <HeaderSocials/>
         
         <div className="me">
           <img src={ME} alt="me"></img>
         </div>
         <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
