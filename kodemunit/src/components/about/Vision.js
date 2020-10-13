import React from 'react'
import visionImage from "../../assets/images/vision.jpg"

const Vision = () => {
    return (
        <div>
            <section className="vision">
                <div className="descr">
                    <h1>
                         Our Vision
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra vestibulum netus lectus lacus pretium risus et fauibus volutpat.
                        Viverra vestibulum netus lectus lacus pretium risus et fauibus volutpat.                    </p>
                </div>
                <div className="image-container">
                    <img src={visionImage} alt="The Kodemunit team in action"/>
                </div>
           </section>
        </div>
    )
}

export default Vision