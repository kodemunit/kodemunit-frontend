import React, { useState, useRef } from "react"
import { BiPlus, BiMinus } from "react-icons/all"

const Accordion = ({ id, title, descr }) => {
  const [active, setActive] = useState("")
  const [height, setHeight] = useState("0px")

  const content = useRef(null)

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "")
    console.log(height)
    setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
  }
  return (
    <li onClick={() => toggleAccordion()}>
      <h3>
        {title}{" "}
        <span>
          {active ? <BiMinus className="icon" /> : <BiPlus className="icon" />}
        </span>
      </h3>
      <div
        ref={content}
        style={{
          maxHeight: `${height}`,
        }}
        className="accordion__content"
      >
        <p className="accordion__text">{descr}</p>
      </div>
    </li>
  )
}

export default Accordion
