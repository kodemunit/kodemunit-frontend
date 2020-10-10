import React from "react"
import { Link } from "react-router-dom"

// data
import services from "../../data/services"

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="description">
          <h2>A Remote-based Digital Agency</h2>
          <p>
            We are a full-stack technology solution agency based in Dar es
            salaam City - Tanzania, operating over the internet leveraging the
            power of remote work technologies.
            <br /> <br />
            We do not just create softwares but build actual working solutions
            with the end users experience in mind. We work together to make sure
            that what we deliver is the best. Contact us and let’s work
            together.
          </p>
          <Link to="our-services">Learn More</Link>
        </div>
        <div className="services-list">
          <h2>What we do!</h2>
          <ul>
            {services.map(({ title, id }) => (
              <li className="list-item" key={id}>{title} {`<<`}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
