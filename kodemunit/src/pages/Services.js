import React from 'react'

// components
import Banner from "../components/services/Banner"
import ServiceList from "../components/services/ServiceList"

const Services = () => {
    return (
        <div className="page services-page">
            <Banner />
            <main>
                <ServiceList />
            </main>
        </div>
    )
}

export default Services
