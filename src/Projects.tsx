import {useState } from "react"
import { Project } from "../models/Project.tsx"
import "./Projects.css"
import ProjectDetails from "./components/ProjectDetails.tsx"
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'


function Projects(){
  const [selectedProject, setSelectedProject] = useState<number>(0)

  return (
    <div className="projects-container">

      <div className="projects-inner-container">

        <ul className="project-list">

        {projects.map((p, idx) => (
          <button
            key={p.title + idx}
            onClick={() => setSelectedProject(idx)}
            className={selectedProject == idx ? 'selected-project': ''}
          >
            {p.title }
            {<ChevronDoubleRightIcon className="chevron-right" style={{opacity: selectedProject==idx?1:0}}/>}
          </button>
        ))}
        
        </ul>

        <ProjectDetails project={projects[selectedProject]} />

      </div>

      <div className="project-buttons-container">

        {((projects[selectedProject].title != "Free-Tix") && (projects[selectedProject].title != "Portfolio Site")) &&
        <div className="project-button">
          <a
            href={projects[selectedProject].siteURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button >Visit Deployed Site</button>
          </a>
        </div>
        }

        
        
        <div className="project-button">
          <a
            href={projects[selectedProject].githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link"
          >
            <button >View Project Github</button>
          </a>
        </div>
      </div>

    </div>
  )
}

const projects: Project[] = [
  {
    title: "Free-Tix", 
    overview: "Event ticketing website", 
    details: <>
      This app is still in development. At the time of writing this (24/02/25), I have finished the majority of the main front end functionality for creating and listing events, and am finishing up the backend. 
      <br />
      The next stage will be to learn how to implement emailing out tickets, and a payment system. 
      <br />
      <br />
      The motivation for this site came about from a desire to avoid the high booking fees on all currently available ticketing sites. The goal is to have a full functionality ticketing site I can use for my own events, taking inspiration from sites like Humanitix. 
      <br />
      <br />
      I decided to use Python Django for the first time for the backend of this site, as I wanted to expand my Python skills beyond data analysis. 
    </>,
    siteURL: "", 
    imgURL: "images/freetix-screenshot.png",
    githubURL: "https://github.com/tyaan/free-tix", 
    tech: [
      "Typescript", 
      "React", 
      "Python Django"
    ]
  },
  {
    title: "Portfolio Site", 
    overview: "The website you are currently on!", 
    details: <>
      This app is somewhat self explanatory, you're looking at it right now :)
    </>,
    siteURL: "", 
    imgURL: "images/portfolio-screenshot.png",
    githubURL: "https://github.com/tyaan/Portfolio-new", 
    tech: [
      "Typescript", 
      "React"
    ]
  },
  {
    title: "Stellar Share", 
    overview: "Community sharing app with a sci-fi theme", 
    details: <>
      This app was created in a group of 6 developers as our final group project for Dev Academy Aotearoa. 
      <br />
      <br />
      It is a community item sharing / borrowing app with a fun sci-fi theme. 
    </>,
    siteURL: "https://stellar-share-mania-roa-24.pushed.nz/", 
    imgURL: "images/stellar-share-screenshot.png",
    githubURL: "https://github.com/tyaan/DA-group-project-stellar-share", 
    tech: [
      "Typescript", 
      "React", 
      "Node.js",
      "Express.js", 
      "Knex.js", 
      "SQLite 3"
    ]
  },
  {
    title: "Analysis of Film Directors", 
    overview: "An R Shiny App visualising data on popular film directors", 
    details: <>
      I created this app to help me learn to develop data visualisation apps with the R Shiny library, and to learn about web scraping data.  
      <br />
      <br />
      I started by scraping information on films from the Letterboxd website using the Selenium library with Python. 
      <br />
      <br />
      I then cleaned the data using Python, transferred the data to R and created a range of data visualisations using the Shiny library. 
    </>,
    siteURL: "https://y9xjge-tyaan-singh.shinyapps.io/analysis-of-director-genders-in-popular-films/", 
    imgURL: "images/director-analysis-screenshot.png",
    githubURL: "https://github.com/tyaan/analysis-of-director-genders-in-popular-films", 
    tech: [
      "Python", 
      "Pandas", 
      "Selenium", 
      "R", 
      "Shiny"
    ]
  },
  {
    title: "Guess the Flag Game", 
    overview: "Try beat your high score!", 
    details: <>
      This app was created in a group of 4 developers as a part of my study at Dev Academy Aotearoa. 
      <br />
      <br />
      It is a flag guessing game containing all of the worlds flags (plus some extra obscure ones). 
    </>,
    siteURL: "https://dev-academy-flag-guessing-game.netlify.app/", 
    imgURL: "images/flag-game-screenshot.png",
    githubURL: "https://github.com/tyaan/DA-group-project-flag-game", 
    tech: [
      "Typescript", 
      "React"
    ]
  },
  {
    title: "PokeAPI App", 
    overview: "Simple site that pulls pokemon info from the public Poke API", 
    details: <>
      This app was one of the first I built as a part of my study at Dev Academy Aotearoa. 
      <br />
      <br />
      It is a simple app that pulls information on all pokemon from the publicly available poke API, and displays info on each one. 
    </>,
    siteURL: "https://dev-academy-poke-api-app.netlify.app",
    imgURL: "images/poke-app-screenshot.png",
    githubURL: "https://github.com/tyaan/DA-project-pokeAPI", 
    tech: [
      "Typescript", 
      "React"
    ]
  },
  
]


export default Projects