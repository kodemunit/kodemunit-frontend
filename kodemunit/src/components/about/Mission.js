import React from "react";
import missionImage from "../../assets/images/mission.jpg";

const Mission = () => {
  return (
    <div>
      <section className="mission">
        <div className="image-container">
          <img src={missionImage} alt="The Kodemunit team in action" />
        </div>
        <div className="descr">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra
            vestibulum netus lectus lacus pretium risus et fauibus volutpat.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mission;
