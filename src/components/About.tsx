import { Icon } from "@iconify/react"
import "./About.css"
import "animate.css"

export default function About() {
  function scrollToProjects() {
    const relevantDiv = document.getElementById("projects")
    relevantDiv?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="header">
      <div className="header-left animate__animated animate__fadeInLeft">
        <h1>Giannis Niarchos</h1>

        <div className="socials">
          <a
            href="https://github.com/gniarchos"
            aria-label="github-link"
            target="_blank"
          >
            <Icon icon="mdi:github" className="social-icon" width="40" />
          </a>
          <a
            href="https://www.linkedin.com/in/giannis-niarchos/"
            aria-label="linkedin-link"
            target="_blank"
          >
            <Icon
              icon="foundation:social-linkedin"
              className="social-icon"
              width="40"
            />
          </a>
        </div>
      </div>
      <div className="header-right animate__animated animate__fadeInRight">
        <p className="header-about-title animate__pulse">Software Engineer</p>
        <div className="header-about-contain">
          <p>
            By breaking into University of West Attica at Informatics and
            Computer Engineering department, I found out my passion about
            Programming and Web Development. My portfolio showcases my ability
            to turn ideas into reality through the use of{"  "}
            <span className="skills">HTML</span>
            {"  "}
            <span className="skills">CSS</span>
            {"  "}
            <span className="skills">JavaScript</span>
            {"  "}
            <span className="skills">React</span> and other front-end and
            back-end technologies.
          </p>
        </div>

        <div className="header-btns">
          <button
            id="view-projects"
            className="view-button"
            onClick={scrollToProjects}
          >
            View Projects
          </button>
          <a
            className="view-button resume"
            href="https://drive.google.com/file/d/1owSeju__SPYDTSQXUQOAB1xeI6o3mH2D/view?usp=sharing"
            target="_blank"
          >
            My Resume
            <Icon icon="humbleicons:download" className="download-img" />
          </a>
        </div>
      </div>
    </div>
  )
}
