import { ReactElement, useState } from "react"
import "./CV.css"

function CV() {
  const [selectedSkill, setSelectedSkill] = useState<number>(0)

  return (
    <div className="about-container">

      <div className="about-title">
        ABOUT ME
      </div>

      <div className="blue-line" />

      <div className="cv-container">

        <div className="cv-about">
          <h1>Get to know me!</h1>
          <p>
          I'm a problem solver with a creative edge, combining a strong analytical background with a passion for technology and music. After completing a BSc in Electronics Engineering, I spent several years in the music industry as a performer, producer, and audio engineer, before rediscovering my love for tech through freelance data analysis and AI data annotation work.
          </p>
          <p>
            Now, as a full-stack web developer, I bring a unique perspective to coding, blending technical precision with creativity. I'm especially excited about building user-friendly web applications using JavaScript/TypeScript and the React framework, and I love collaborating on projects that solve real-world problems.
          </p>
          <p>
            Currently, I'm focused on sharpening my development skills and tackling innovative projects that challenge me to grow.
          </p>
        </div>

        <div className="cv-skills">

          <h1>Skills</h1>

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
      
      <div className="cv-download-button">
        <a href="Tyaan Singh Tech CV Feb 25.pdf" download="Tyaan Singh Tech CV Feb 25.pdf">
          <button>Download Full CV</ button>
        </a>
      </div>
    </div>
    
  )
}

export default CV

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
