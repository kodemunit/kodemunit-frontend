import React from "react"

// logos
import kilimoshare from "../../assets/images/clients/kilimoshare.png"
import ceeptz from "../../assets/images/clients/ceeptz.png"
import soz from "../../assets/images/clients/soz.png"
import gramath from "../../assets/images/clients/gramath.png"
import fooduber from "../../assets/images/clients/fooduber.png"

let clients = [
  {
    name: "Kilimoshare",
    src: kilimoshare,
  },
  {
    name: "Soz",
    src: soz,
  },
  {
    name: "CEEPTz",
    src: ceeptz,
  },
  {
    name: "FoodUber",
    src: fooduber,
  },
  {
    name: "Gramath",
    src: gramath,
  },
]

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <h1>Trusted By</h1>
        <div className="showcase">
          {clients.map(({ name, src }, index) => (
            <article key={index}>
              <img src={src} alt={name} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
