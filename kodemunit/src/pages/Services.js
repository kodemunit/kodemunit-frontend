import React from "react"

// components
import Banner from "../components/services/Banner"
import ServiceList from "../components/services/ServiceList"
import Process from "../components/services/Process.js"

// styles
import "../styles/pages/services.sass"

const Services = () => {
  return (
    <div className="page services-page">
      <Banner />
      <main>
        <ServiceList />
        <Process />
      </main>
    </div>
  )
}

export default Services
