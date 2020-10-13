import React from "react";

// components
import Banner from "../components/Banner";
import AboutSvg from "../components/about/AboutSvg";
import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";
import Team from "../components/about/Team";

const About = () => {
  return (
    <div className="page about-page">
      <Banner
        title1="About"
        title2="Us Page."
        descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra vestibulum netus lectus lacus pretium risus et faucibus volutpat. Viverra vestibulum netus lectus lacus pretium risus et faucibus volutpat.
                Aenean eleifend ultrices sit ac, donec libero lectus pellentesque."
      >
        <AboutSvg />
      </Banner>
      <Mission />
      <Vision />
      <Team />
    </div>
  );
};

export default About;
