import React from "react"

// components
import Accordion from "./Accordion"

// data
import services from "../../data/services"

const ServiceList = () => {
  return (
    <section className="service-list">
      <div className="container">
        <h2>Our Services</h2>
        <div className="showcase">
          <ul>
            {services.map(({ id, title, descrption }) => (
              <Accordion title={title} descr={descrption} key={id}/>
              // <li key={id}>
              //   <h3 onClick={() => setAccord(id)}>{title} <span>{accord === id? "-": "+"}</span></h3>
              //   <p className={accord === id ? "active" : ""}>{descrption}</p>
              // </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServiceList
