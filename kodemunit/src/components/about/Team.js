import React from "react"
import teamImage from "../../assets/images/team.jpg"
import team1 from "../../assets/images/team1.png"
import team2 from "../../assets/images/team2.png"
import team3 from "../../assets/images/team3.png"

let team = [
  {
    name: "Justine Peterson",
    src: team1,
    title: "Team Lead",
  },
  {
    name: "Benedict Steven",
    src: team2,
    title: "Team Lead",
  },
  {
    name: "Daniel Kweka",
    src: team3,
    title: "Team Lead",
  },
  {
    name: "Kelvin",
    src: team3,
    title: "Team Lead",
  },
]

const Team = () => {
  return (
    <div>
      <section className="team">
        <div className="team-image">
          <img src={teamImage} alt="kodemunit team in action" />
        </div>
        <div className="team-members">
          <div className="team-container descr">
            <h1>Our Team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              eleifend ultrices sit ac, donec libero lectus pellentesque.
              Viverra vestibulum netus lectus lacus pretium risus et fauibus
              volutpat.
            </p>
          </div>
          {team.map(({ name, title, src }, index) => (
            <div className="team-container image-card" key={index}>
              <img src={src} alt="The Kodemunit team in action" />
              <span className="name">{name}</span>
              <br></br>
              <span className="title">{title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Team
