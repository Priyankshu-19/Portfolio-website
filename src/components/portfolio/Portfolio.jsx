import React from 'react';
import './Portfolio.css';
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data=[
  {
    id:1,
    image:IMG1,
    title:"Crypto currency Dashboard and Final Visualization",
    github:"https://github.com",
    dribble:"https://dribbble.com/shots/18254672-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id:2,
    image:IMG2,
    title:"Charts Templates and infographics in Figma",
    github:"https://github.com",
    dribble:"https://dribbble.com/shots/18308145-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id:3,
    image:IMG3,
    title:"Figma dashboard UI kit for data design web apps",
    github:"https://github.com",
    dribble:"https://dribbble.com/shots/18044449-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },
  {
    id:4,
    image:IMG4,
    title:"Maintaining tasks and tracking progress",
    github:"https://github.com",
    dribble:"https://dribbble.com/shots/17992262-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id:5,
    image:IMG5,
    title:"Charts Templates and infographics in Figma",
    github:"https://github.com",
    dribble:"https://dribbble.com/shots/17845733-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },
  {
    id:5,
    image:IMG6,
    title:"Charts Templates and infographics in Figma",
    github:"https://github.com",
    dribble:""
  },
  
]
 
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(item => {
            const {id,image,title,github,dribble} = item
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel='noopener noreferrer' >Github</a>
            <a href={dribble} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio