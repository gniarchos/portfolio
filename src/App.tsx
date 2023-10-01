import "./App.css"
import StarsBackground from "./StarsBackground"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Project from "./components/Project"
import projects_data from "./components/data/project-data.json"
import skills_data from "./components/data/skills-data.json"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="page">
      <StarsBackground />
      <Navbar />
      <About />
      <div id="skills" className="mySkills">
        <h1 className="section-title workedWith">Technical Skills</h1>
        <div className="skills-dividers">
          <p className="skills-sections-title">Frontend</p>
          <div className="workedWith-wrapper">
            {skills_data
              .filter((type) => {
                return type.type === "front"
              })
              .map((skill) => {
                return (
                  <Skills key={skill.id} icon={skill.icon} name={skill.name} />
                )
              })}
          </div>
        </div>
        <div className="skills-dividers">
          <p className="skills-sections-title">Backend</p>
          <div className="workedWith-wrapper">
            {skills_data
              .filter((type) => {
                return type.type === "back"
              })
              .map((skill) => {
                return (
                  <Skills key={skill.id} icon={skill.icon} name={skill.name} />
                )
              })}
          </div>
        </div>
        <div className="skills-dividers">
          <p className="skills-sections-title">Other Skills</p>
          <div className="workedWith-wrapper">
            {skills_data
              .filter((type) => {
                return type.type === "other"
              })
              .map((skill) => {
                return (
                  <Skills key={skill.id} icon={skill.icon} name={skill.name} />
                )
              })}
          </div>
        </div>
      </div>

      <div id="projects" className="allProjects-div">
        <h1 className="section-title">My Projects</h1>
        {projects_data.map((proj) => {
          return (
            <div key={proj.number}>
              <Project
                number={proj.number}
                title={proj.title}
                desc={proj.description}
                moreInfo={proj.moreInfo}
                additionalTitle={proj.additionalTitle}
                additionalInfo={proj.additionalInfo}
                date={proj.date}
                techUsed={proj.techUsed}
                siteLink={proj.siteLink}
                projLink={proj.repoLink}
                desktopImages={
                  proj.desktopImages === null ? [] : proj.desktopImages
                }
                mobileImages={proj.mobileImages}
              />
            </div>
          )
        })}
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
