import React from "react"
import TinyIdea from "../images/tiny-idea.inline.svg"
import TinyTeam from "../images/tiny-team.inline.svg"

const team = [
  {
    name: "Nathan Tahbaz",
    role: "Team Lead, Design and Fabrication",
    photo: require("../images/team/nathan-min.jpg"),
  },
  {
    name: "Monica Traupmann",
    role: "Propulsion Specialist, Materials",
    photo: require("../images/team/monica-min.jpg"),
  },
  {
    name: "Ben Iofel",
    role: "Lead Programer",
    photo: require("../images/team/ben-min.jpg"),
  },
  {
    name: "William Skwirut",
    role: "Aerodynamic Design and Machining Specialist",
    photo: require("../images/team/will-min.jpg"),
  },
  {
    name: "Dakota Van Deursen",
    role: "Propulsion Specialist, Materials, and Media",
    photo: require("../images/team/dakota-min.jpg"),
  },
  {
    name: "Rodrigo Nogueira",
    role: "Manufacturing, Welding",
    photo: require("../images/team/rodrigo-min.jpg"),
  },
]

const Mission = () => {
  return (
    <div className="mission">
      <h1 className="page-header">Our Mission</h1>
      <div className="container">
        <section className="mission--sub-section">
          <div className="icon">
            <TinyIdea />
          </div>
          <h1 className="sub-header">Our Service</h1>
          <p>
            Research in space, without the high price tag. We offer
            competitively priced payload space in our suborbital rocket
            launches.
          </p>
        </section>
      </div>
      <div className="container" style={{ backgroundColor: "var(--light)" }}>
        <section className="mission--sub-section">
          <div className="icon">
            <TinyTeam />
          </div>
          <h1 className="sub-header">How we're doing it</h1>
          <p>
            Castle Point Rocketry has developed a fully-reusable sounding
            rocket. Each component of the vehicle was designed by us to push the
            cutting edge of rocketry. The system is pressure fed from a high
            pressure Helium source and utilizes LOX/RP-1 propellants.
          </p>
        </section>
        <section>
          <div className="team-container">
            {team.map(e => (
              <div className="team-member" key={e.name}>
                <img src={e.photo} alt={e.name} />
                <p className="bold">{e.name}</p>
                <p style={{ marginTop: "0.2rem" }}>{e.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Mission
