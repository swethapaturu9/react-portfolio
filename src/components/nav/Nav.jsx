import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {BiBook} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => { 
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" className='active'><AiOutlineHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#experience"><MdOutlineWorkOutline/></a>
        <a href="#projects"><BiBook/></a>
        <a href="#contact"><AiOutlinePhone/></a>

    </nav>
  )
}

export default Nav
