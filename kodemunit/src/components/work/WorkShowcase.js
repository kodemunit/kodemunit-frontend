import React from "react"

// components
import Categories from "../Categories"
import Pagination from "../Pagination"
import Works from "./Works"

// data
import projects from "../../data/projects"

const WorkShowcase = () => {
  //   let works = projects.filter()
  return (
    <div className="work-showcase">
      <Categories />
      <Works projects={projects} />
      <Pagination />
    </div>
  )
}

export default WorkShowcase
