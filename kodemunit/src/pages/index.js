import React from "react"

// components
import Banner from "../components/home/Banner"
import Services from "../components/home/Services"
import Projects from "../components/home/Projects"
import Clients from "../components/home/Clients"
import Testimonies from "../components/home/Testimonies"
// import Products from "../components/home/Products"

// styles
import "../styles/pages/home.sass"

const Home = () => {
  return (
    <div className="page home-page">
      <Banner />
      <main>
        <Services />
        <Projects />
        <Clients />
        <Testimonies />
      </main>
    </div>
  )
}

export default Home
