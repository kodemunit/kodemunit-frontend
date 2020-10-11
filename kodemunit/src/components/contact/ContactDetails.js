import React from "react"
import { FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/all"

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <h2>Get In Touch.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, expedita
        illo! Facilis nostrum rerum veniam assumenda reiciendis iure sunt
        recusandae tenetur, ea, ducimus at. Vero nulla libero est ad provident.
      </p>
      <div className="contact">
        <ul>
          <li>
            <div className="icon-container">
              <FaMapMarkerAlt className="icon" />
            </div>
            <div className="text">
              <span>Dar Es Salaam, Tanzania</span>
            </div>
          </li>
          <li>
            <div className="icon-container">
              <FaPaperPlane className="icon" />
            </div>
            <div className="text">
              <span>
                <a href="mailto:kodemunit@gmail.com">kodemunit@gmail.com</a>
              </span>
              <span>
                <a href="mailto:kodemunit@gmail.com">kodemunit@gmail.com</a>
              </span>
            </div>
          </li>
          <li>
            <div className="icon-container">
              <FaPhone className="icon" />
            </div>
            <div className="text">
              <span>
                <a href="tel:+255655392445">+255 655 392 445</a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ContactDetails
