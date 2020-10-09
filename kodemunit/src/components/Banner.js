import React from 'react'

const Banner = ({title1, title2, descr, img, children}) => {
    return (
        <section className="banner">
            <div className="container">
                <div className="descr">
                    <h1>
                        {title1}<br />{title2}
                    </h1>
                    <p>
                        {descr}
                    </p>
                </div>
                <div className="image-container">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Banner
