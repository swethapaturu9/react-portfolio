import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a style={{scale:"1.5"}} href="https://www.linkedin.com/in/swetha-paturu/" target="_blank" rel="noreferrer noopener"><BsLinkedin/></a>
        <a style={{scale:"1.5"}} href="https://github.com/swethapaturu9" target="_blank" rel="noreferrer noopener"><BsGithub/></a>
        <a style={{scale:"1.5"}}href="https://leetcode.com/swetha_paturu/" target="_blank" rel="noreferrer noopener"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials
