import "./Footer.css"
import { Icon } from "@iconify/react"

export default function Footer() {
  return (
    <footer>
      <p>Made with React and Typescript.</p>
      <a
        href="https://github.com/gniarchos/portfolio"
        target="_blank"
        className="source-code"
      >
        <Icon icon="mdi:github" className="social-icon" width="20" />
        Source Code
      </a>

      <p>{new Date().getFullYear()} © Giannis Niarchos</p>
    </footer>
  )
}
