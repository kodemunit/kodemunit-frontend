import React from "react"

// components
import Form from "../components/contact/Form"
import ContactDetails from "../components/contact/ContactDetails"

// styles
import "../styles/pages/contact.sass"

const Contact = () => {
  return (
    <div className="contact-page page">
      <div className="container">
        <Form />
        <ContactDetails />
      </div>
    </div>
  )
}

export default Contact
