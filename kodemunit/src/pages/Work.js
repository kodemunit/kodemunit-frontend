import React from "react"

// components
import Banner from "../components/Banner"
import WorkSvg from "../components/work/WorkSvg"

const Work = () => {
  return (
    <div>
      <Banner
        title1="Work"
        title2="Showcase."
        descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra vestibulum netus lectus lacus pretium risus et faucibus volutpat."
      >
        <WorkSvg />
      </Banner>
    </div>
  )
}

export default Work
