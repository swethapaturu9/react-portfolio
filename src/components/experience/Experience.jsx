import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
       <h2> Core Skills </h2>
       <div className="container experience__container">
           <div className="experience_frontend">
                <h3> Programming Languages </h3>
                <div className="experience__content"> 
                   <article className="experience__details"> 
                     <BsPatchCheckFill className="experience__details-icon"/>
                     <div>
                     <h4> Java </h4>
                   
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className="experience__details-icon"/>
                     <div>
                     <h4> Go </h4>
                    
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className="experience__details-icon"/>
                     <div>
                     <h4> C++ </h4>
                  
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className="experience__details-icon"/>
                     <div>
                     <h4> JavaScript </h4>
                    
                     </div>
                   </article>
                  
                </div>

            </div>

            <div className="experience_backend">
            <h3> Web Technologies </h3>
                <div className="experience__content"> 
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4> ReactJS </h4>
                     <small classname="text-light">Experienced</small>
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>  HTML5/CSS </h4>
                     <small classname="text-light">Experienced</small>
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>  jQuery </h4>
                     <small classname="text-light">Experienced</small>
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4> NodeJS </h4>
                     <small classname="text-light">Experienced</small>
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>  Spring MVC </h4>
                     <small classname="text-light">Experienced</small>
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>  Spring Boot </h4>
                     <small classname="text-light">Experienced</small>
                     </div>
                   </article>
                   
                   
                </div>

            </div>


           
            <div className="experience_backend">
            <h3> Databases </h3>
                <div className="experience__content"> 
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4> MySQL </h4>
                     <small classname="text-light">Experienced</small>
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4> MongoDB </h4>
                     <small classname="text-light">Experienced</small>
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                     <h4> Oracle </h4>
                     <small classname="text-light">Experienced</small>
                     </div>
                   </article>
                  
                </div>

            </div>


            <div className="experience_backend">
            <h3> Tools and Technologies </h3>
                <div className="experience__content"> 
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4> Git </h4>
                     
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4> Linux </h4>
                    
                     </div>
                   </article>
                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                     <h4> Terraform </h4>
                     </div>
                   </article>

                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                     <h4> Docker </h4>
                     </div>
                   </article>

                   <article className="experience__details"> 
                     <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                     <h4> Kubernetes </h4>
                     </div>
                   </article>
                  
                </div>

            </div>





       </div>
    </section>
  )
}

export default Experience
