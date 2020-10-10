import React, { useState } from "react"

// data
import services from "../../data/services"

const ServiceList = () => {
  const [accord, setAccord] = useState(1)
  return (
    <section className="service-list">
      <div className="container">
        <h2>Our Services</h2>
        <div className="showcase">
          <ul>
            {services.map(({ id, title, descrption }) => (
              <li key={id}>
                <h3 onClick={() => setAccord(id)}>{title} <span>{accord === id? "-": "+"}</span></h3>
                <p className={accord === id ? "active" : ""}>{descrption}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServiceList
