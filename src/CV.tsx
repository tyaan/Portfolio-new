import { ReactElement, useState } from "react"
import "./CV.css"
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid"

function CV() {
  const [selectedSkill, setSelectedSkill] = useState<number>(0)

  return (
    <div className="cv-container">
      <div className="cv-about">
        <h1 className="cv-section-title">Get to know me!</h1>
        <p>
        I am a very analytical person with an affinity for math and problem solving. 
        I love all things music, and have been a musician from a young age. 
        </p>
        <p>
          I completed a BSc in Electronics Engineering in 2017, briefly worked as an electronics engineering assistant and then returned to my passion for music, working as a performing and recording instrumentalist, soundtrack writer, producer, and audio engineer. 
        </p>
        <p>
          In 2023, I picked up some freelance data analyst work (mostly creating royalties reports for musicians). 
          I developed some basic Python skills through this work and moved on to working as a data annotator for a US based company, Data Annotation. 
          This work involves rating and correcting AI chatbots on a range of data science and math topics including Python programming, which has really helped develop my coding skills. 
        </p>
        <p>
          In August 2024, I studied full stack web development at Dev Academy Aotearoa. This course provided invaluable opportunities for group and pair coding work, with a focus on Javascript/Typescript and the React framework.
        </p>
        
        <div className="cv-download-button">
          <a href="Tyaan Tech CV Dec 2024.pdf" download="Tyaan Tech CV Dec 2024.pdf">
            <button>Download Full CV</ button>
          </a>
        </div>
       
      </div>

      <div className="cv-skills">

        <h1 className="cv-section-title">
          Skills
        </h1>

        <div className="skill-list">
          {skills.map((s, idx) => (
            <button
              key={s.title + idx}
              onClick={() => setSelectedSkill(idx)}
              className={selectedSkill == idx ? 'selected-button' : ''}
            >
              {s.title}
            </button>
          ))}
        </div>
          

        <div className="skill-details">
          <p>
          {skills[selectedSkill].details}
          </p>
        </div>
        
      </div>
     
    </div>
  )
}

export default CV

interface Education {
  school: string
  dates: string
  details: string
}

const education: Education[] = [
  {
    school: "Dev Academy Aotearoa",
    dates: "Aug - Dec 2024",
    details: "Full Stack Web Development"
  },
  {
    school: "Victoria University of Wellington",
    dates: "2018", 
    details: "Graduate Diploma in Music Composition"
  },
  {
    school: "Victoria University of Wellington", 
    dates: "2015 - 2017",
    details: "Bachelor of Science in Electronics and Computer Systems Engineering"
  }
]

interface Skill {
  title: string,
  details: ReactElement
}

const skills: Skill[] = [
  {
    title: "Python",
    details: <>
    I've been using Python in my work at Data Annotation, where I rate and correct AI chatbots on data analysis and machine learning tasks. 
    <br /><br />
    I have also used Python to clean data for some freelance data reporting work. 
    <br /><br />
    Recently, I also started learning the Python Django framework for backend web development.
    </>
  },
  {
    title: "Javascript / Typescript",
    details: <>
    I learned JavaScript and TypeScript as part of my education at Dev Academy Aotearoa. 
    <br /><br />
    I have experience building full-stack websites with React, Node.js, and Express.js.
    </>
  },
  {
    title: "SQL", 
    details: <>
    I learned SQL as part of my education at Dev Academy Aotearoa. 
    <br /><br />
    I have experience using SQL queries to perform CRUD operations on databases such as SQLite and PostgreSQL. 
    <br /><br />
    I have also used the JavaScript Knex library to build SQL queries.
    </>
  },
  {
    title: "R", 
    details: <>
    I have used R for data cleaning, and generating graphs and reports for some freelance data reporting work.
    </>
  },
  {
    title: "Microsoft Excel", 
    details: <>
    I have used Excel to clean, organise and display data for some freelance data reporting work. 
    </>
  },
  {
    title: "Microsoft Power BI", 
    details: <>
    I have used Power BI to generate graphs and reports for some freelance data reporting work. 
    </>
  },
  {
    title: "Microsoft Azure", 
    details: <>
    I obtained the "Microsoft Certified: Azure Data Fundamentals" certificate in July 2024. 
    </>
  }

]

interface Work {
  position: string, 
  employer: string, 
  dates: string, 
  tasks: string[]
}

const work_history: Work[] = [
  {
    position: "Data Annotator", 
    employer: "Data Annotation", 
    dates: "March 2024 - Present", 
    tasks: [
      'Writing, rating and editing responses from AI assistants',
      'Topics include Python, Math, Statistics, Data Analysis and Machine Learning'
    ]
  }, 
  {
    position: "Data Reporting Analyst", 
    employer: "Self Employed", 
    dates: "July 2023 - Present", 
    tasks: [
      "Cleaning data", 
      "Visualising Data", 
      "Creating reports and dashboards"
    ]
  }, 
  {
    position: "Musician", 
    employer: "Self Employed", 
    dates: "2014 - Present", 
    tasks: [
      "Organising and performing shows", 
      "Musical director", 
      "Session musicain, recording and performing", 
      "Music producing for artists and for film", 
      "Audio engineering", 
      "Teaching"
    ]
  }, 
  {
    position: "Bicycle Assistant", 
    employer: "Donkey Republic Berlin", 
    dates: "March 2019 - September 2019", 
    tasks: [
      "Collecting and moving misplaced bikes"
    ]
  }, 
  {
    position: "Electronics Engineering Assistant", 
    employer: "Vanguard Electronics Wellington", 
    dates: "May 2017 - January 2018", 
    tasks: [
      "Design and analysis of analog and digital circuits", 
      "Soldering", 
      "Micro-controller programming"
    ]
  }
]