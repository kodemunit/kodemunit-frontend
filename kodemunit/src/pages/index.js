import React from "react"

// components
import Banner from "../components/home/Banner"
import Services from "../components/home/Services"

const Home = () => {
  return (
    <div className="page home-page">
      <Banner />
      <main>
        <Services />
      </main>
    </div>
  )
}

export default Home
