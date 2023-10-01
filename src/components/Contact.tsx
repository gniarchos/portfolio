import "./Contact.css"
import { Icon } from "@iconify/react"

export default function Contact() {
  return (
    <div className="contact-wrapper" id="contact">
      <h1 className="section-title">Contact</h1>

      <div className="myEmail">
        <Icon icon="ic:round-mark-email-unread" />
        <a href="mailto: giannisnrch@gmail.com">giannisnrch@gmail.com</a>
      </div>

      <form
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/xvonwkjr"
        method="post"
      >
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last Name"
          required
        />
        <label htmlFor="email-address">Email Address</label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.tld"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          rows={5}
          name="message"
          id="message"
          placeholder="Your message..."
          required={true}
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />

        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}
