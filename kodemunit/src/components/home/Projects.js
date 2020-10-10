import React from 'react'

// data
import projects from "../../data/projects"

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
            <header>
                
                    <h2>Featured Projects</h2>
            </header>
            <div className="showcase">
                {projects.map(({name, slug, url, imgSrc, gallery, category, theme, coreProduct, cost, sales}, index) => (
                    <article>
                        <h3>
                            {name}
                        </h3>
                        <picture>
                            <source media="(min-width:650px)" srcset="" />
                            <source media="(min-width:465px)" srcset="" />
                            <img src="" alt="Flowers" style="width:auto;">
                        </picture>
                        <div className="project details">
                            
                        </div>
                    </article>
                ))}
            </div>
            <div className="arrows">

            </div>
            </div>
        </section>
    )
}

export default Projects
