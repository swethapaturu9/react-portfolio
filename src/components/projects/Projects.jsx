import React from 'react'
import './projects.css'
import IMG1 from '../../assets/networking.png'
import IMG2 from '../../assets/workit.png'
import IMG3 from '../../assets/darkness.webp'
import IMG4 from '../../assets/darkness.webp'
import IMG5 from '../../assets/darkness.webp'
import IMG6 from '../../assets/darkness.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project Title 1",
    github: "https://github.com/swethapaturu9/AlumniNetworkSpringBoot"
  },
  {
    id: 2,
    image: IMG2,
    title: "Project Title 1",
    github: "https://github.com/swethapaturu9"


  },
  {
    id: 3,
    image: IMG3,
    title: "Project Title 1",
    github: "https://github.com/swethapaturu9"

  },
  {
    id: 4,
    image: IMG4,
    title: "Project Title 1",
    github: "https://github.com/swethapaturu9"

  },
  {
    id: 5,
    image: IMG5,
    title: "Project Title 1",
    github: "https://github.com/swethapaturu9"

  },
  {
    id: 6,
    image: IMG6,
    title: "Project Title 1",
    github: "https://github.com/swethapaturu9"

  }
]

const Projects = () => {
  return (
    <section id="projects">
      {/* <h5> Projects</h5>
      <h2> Portfolio </h2> */}

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github }) => {
            return (


              <article key={id} className="portfolio_item">
                <div className="portfolio__item-image">

                  <img src={image} />

                </div>
                <h3> {title} </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'> README </a>
                </div>
              </article>



            )

          }

          )


        }
      </div>


    </section>
  )
}

export default Projects
