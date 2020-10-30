import React from "react"

// components
import ServicesSvg from "./ServicesSvg"

const Process = () => {
  return (
    <div className="process">
      <div className="process__contents">
        <div className="container">
          <div className="descr">
            <h2>Our Process</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              vitae, consequatur temporibus dignissimos rerum maiores blanditiis
              expedita dolorem nulla omnis, reiciendis ipsa et commodi
              doloremque neque perferendis distinctio voluptatem doloribus?
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              eleifend ultrices sit ac, donec libero lectus pellentesque.
              Viverra vestibulum netus lectus lacus pretium risus et faucibus
              volutpat.
            </p>
          </div>
          <div className="img-container">
            <ServicesSvg />
          </div>
        </div>
      </div>
      <div className="steps"></div>
    </div>
  )
}

export default Process
