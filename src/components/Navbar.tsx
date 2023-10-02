import { useEffect, useState, useRef } from "react"
import "animate.css"
import "./Navbar.css"

export default function Navbar() {
  const [changeNavbarBackground, setChangeNavbarBackground] = useState(false)
  const [showNavbarMenu, setShowNavbarMenu] = useState(false)

  function scrollToProjects() {
    const relevantDiv = document.getElementById("projects")
    relevantDiv?.scrollIntoView({ behavior: "smooth" })
    setShowNavbarMenu(!showNavbarMenu)
  }

  function scrollToContact() {
    const relevantDiv = document.getElementById("contact")
    relevantDiv?.scrollIntoView({ behavior: "smooth" })
    setShowNavbarMenu(!showNavbarMenu)
  }

  function scrollToSkills() {
    const relevantDiv = document.getElementById("skills")
    relevantDiv?.scrollIntoView({ behavior: "smooth" })
    setShowNavbarMenu(!showNavbarMenu)
  }

  function handleScrollDesktop() {
    if (window.scrollY >= 150) {
      setChangeNavbarBackground(true)
    } else {
      setChangeNavbarBackground(false)
    }
  }

  function handleScrollMobile() {
    if (window.scrollY >= 30) {
      setChangeNavbarBackground(true)
    } else {
      setChangeNavbarBackground(false)
    }
  }

  useEffect(() => {
    if (window.innerWidth <= 499) {
      window.addEventListener("scroll", handleScrollMobile)
    } else {
      window.addEventListener("scroll", handleScrollDesktop)
    }
  }, [])

  function handleNavbarMenu() {
    setShowNavbarMenu(!showNavbarMenu)
  }

  return (
    <div>
      <nav className={changeNavbarBackground ? "navbar expandNav" : "navbar"}>
        <h3 className="logo-name">G.Niarchos</h3>
        <div className="nav-links">
          <p
            className="link animate__animated animate__fadeInDown animate__delay-1s"
            onClick={scrollToSkills}
          >
            Skills
          </p>
          <p
            className="link animate__animated animate__fadeInDown animate__delay-2s"
            onClick={scrollToProjects}
          >
            Projects
          </p>
          <p
            className="link  animate__animated animate__fadeInDown animate__delay-3s"
            onClick={scrollToContact}
          >
            Contact
          </p>
        </div>

        <button
          onClick={handleNavbarMenu}
          id="hamburger"
          className={showNavbarMenu ? "hamburger is-active" : "hamburger"}
        >
          <div className="bar"></div>
        </button>
      </nav>
      <div
        id="mobile-nav"
        className={showNavbarMenu ? "mobile-nav is-active" : "mobile-nav"}
      >
        <p className="mobile-link" onClick={scrollToSkills}>
          Skills
        </p>
        <p className="mobile-link" onClick={scrollToProjects}>
          Projects
        </p>
        <p className="mobile-link" onClick={scrollToContact}>
          Contact
        </p>
      </div>
    </div>
  )
}
