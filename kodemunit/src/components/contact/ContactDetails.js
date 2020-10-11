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
            <div className='left'>
              <FaMapMarkerAlt className='icon' />
            </div>
            <div className='right'>
              <span>Dar Es Salaam, Tanzania</span>
            </div>
          </li>
          <li>
            <div className='left'>
              <FaPaperPlane className='icon' />
            </div>
            <div className='right'>
              <span>
                <a href='mailto:bmsteve@yahoo.com'>kodemunit@gmail.com</a>
              </span>
            </div>
          </li>
          <li>
            <div className='left'>
              <FaPhone className='icon' />
            </div>
            <div className='right'>
              <span>
                <a href='tel:+255655392445'>+255 655 392 445</a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ContactDetails
