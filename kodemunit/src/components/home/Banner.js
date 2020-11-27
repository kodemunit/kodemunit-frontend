import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <div className="home-banner">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          We Convert Your Idea
          <br />
          Into Something That's Working.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          We are a diverse community of technologist committed to work together
          to create relevant tech solutions.
        </motion.p>
        <motion.div
          className="btns"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Link to="/work-showcase" className="btn btn-primary">
            Work Showcase
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
