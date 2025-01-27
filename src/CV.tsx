import { ReactElement, useState } from "react"
import "./CV.css"
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid"

function CV() {
  const [selectedSkill, setSelectedSkill] = useState<number>(0)
  const [selectedWork, setSelectedWork] = useState<number>(0)

  return (
    <div className="cv-container">
      <div className="cv-section">
        <div className="cv-section-title" >
          Skills
        </div>
        <div className="item-details">
          <p>
          {skills[selectedSkill].details}
          </p>
        </div>
        <ul className="item-list right-align">
          {skills.map((s, idx) => (
            <li key={s.title + idx}>
              <button
                onClick={() => setSelectedSkill(idx)}
                style={{
                  fontSize: selectedSkill == idx ? '19px' : '',
                  fontWeight: selectedSkill == idx ? 'bold' : ''
                }}
              >
                {<ChevronDoubleLeftIcon className="chevron" style={{opacity: selectedSkill==idx ? 1: 0}}/>}
                {s.title}
              </button>
            </li>
          ))}
        </ul>

      </div>
      <div className="cv-section">
        <ul className="item-list left-align">
            {work_history.map((w, idx) => (
              <li key={w.position + idx}>
                <button
                  onClick={() => setSelectedWork(idx)}
                  style={{
                    fontSize: selectedWork == idx ? '19px' : '',
                    fontWeight: selectedWork == idx ? 'bold' : ''
                  }}
                >
                  {w.position}
                  {<ChevronDoubleRightIcon className="chevron" style={{opacity: selectedWork==idx ? 1: 0}}/>}
                </button>
              </li>
            ))}
          </ul>
          <div className="item-details right-align">
            <h3>{work_history[selectedWork].employer}</h3>
            <h4 style={{opacity: 0.5}}>{work_history[selectedWork].dates}</h4>
            <ul>
              {work_history[selectedWork].tasks.map((t, idx) => (
                <li key={t + idx}>
                  {t + ' ▪'}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="cv-section-title">
            Work History
          </div> */}
      </div>
      {/* <div className="cv-work">

        {work_history.map((w, idx) => (
          <div key={w.position + idx} className="cv-item work-item">
            <h4>
              {w.position}
            </h4>
            <p>
              {w.employer}
            </p>
            <p>
              {w.dates}
            </p>
            <ul>
              {w.tasks.map((t, idx) => (
                <li key={t + idx}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
      {/* <div className="cv-education">
        
        {education.map((e, idx) => (
          
        ))}
      </div> */}
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