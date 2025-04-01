import "./Footer.css"
import { Icon } from "@iconify/react"

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/gniarchos/portfolio"
        target="_blank"
        className="source-code"
      >
        <Icon icon="mdi:github" className="social-icon" width="20" />
        Source Code
      </a>

      <p>{new Date().getFullYear()} © Giannis Niarchos</p>

      <p>Made and designed by Giannis Niarchos</p>
    </footer>
  )
}
