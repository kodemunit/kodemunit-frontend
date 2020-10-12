import React from "react";
import teamImage from "../../assets/images/team.jpg";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";

const Team = () => {
  return (
    <div>
      <section className="team">
        <div className="team-image">
          <img src={teamImage} alt="kodemunit team in action" />
        </div>
        <div className="team-members">
          <div className="descr">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              eleifend ultrices sit ac, donec libero lectus pellentesque.
              Viverra vestibulum netus lectus lacus pretium risus et fauibus
              volutpat.
            </p>
          </div>
          <div className="image-container">
            <img src={team1} alt="The Kodemunit team in action" />
            <span className="name">Justine Peterson</span><br></br>
            <span className="Title">Team Lead</span>
          </div>
          <div className="image-container">
            <img src={team2} alt="The Kodemunit team in action" />
            <span className="name">Justine Peterson</span><br></br>
            <span className="Title">Team Lead</span>
          </div>
          <div className="image-container">
            <img src={team3} alt="The Kodemunit team in action" />
            <span className="name">Justine Peterson</span><br></br>
            <span className="Title">Team Lead</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
