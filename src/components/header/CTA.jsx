import React from 'react'
import resume from '../../assets/resume.pdf'

function CTA() {
  return (
    <div className='cta'>
     <a href={resume} download className="btn"> Download Resume</a>
    </div>
  )
}

export default CTA
