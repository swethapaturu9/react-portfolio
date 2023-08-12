import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/swetha-paturu/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/swethapaturu9" target="_blank"><BsGithub/></a>
        <a href="https://leetcode.com/swetha_paturu/" target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials
