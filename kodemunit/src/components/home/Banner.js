import React from 'react'
import {Link} from "react-router-dom"

const Banner = () => {
    return (
        <div className="home-banner">
            <div className="container">
                <h1>We Convert Your Idea<br />Into Something That's Working.</h1>
                <p>
                We are a diverse community of technologist committed to work together to create relevant tech solutions.
                </p>
                <div className="btns">
                    <Link to="/work-showcase" className="btn btn-primary">Work Showcase</Link>
                    <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
