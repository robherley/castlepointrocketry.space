import React from 'react'
import { Linkedin, GitHub } from 'react-feather'

const team = [
  {
    name: "Nathan Tahbaz",
    role: "Team Lead, Design and Fabrication",
    photo: require("../images/team/nathan-min.jpg"),
    linkedin: 'nathan-tahbaz',
  },
  {
    name: "Monica Traupmann",
    role: "Propulsion Specialist, Materials",
    photo: require("../images/team/monica-min.jpg"),
    linkedin: 'monica-traupmann',
  },
  {
    name: "Ben Iofel",
    role: "Avionics Specialist, Lead Programmer",
    photo: require("../images/team/ben-min.jpg"),
    linkedin: 'beniofel',
    github: 'benwaffle'
  },
  {
    name: "William Skwirut",
    role: "Aerodynamic Design and Machining Specialist",
    photo: require("../images/team/will-min.jpg"),
    linkedin: 'williamskwirut',
  },
  {
    name: "Dakota Van Deursen",
    role: "Propulsion Specialist, Materials, and Media",
    photo: require("../images/team/dakota-min.jpg"),
    linkedin: 'dvandeursen',
  },
  {
    name: "Nicholas Yarbrough",
    role: "Electrical Engineering and Embedded System Design",
    photo: require("../images/team/cole-min.jpg"),
    linkedin: 'cole-yarbrough-2a39551b2',
  },
]

const advisors = [
  {
    name: 'Igor Alexandrov',
    role: 'Senior Advisor',
    photo: require('../images/team/igor.jpg'),
    linkedin: 'igor-alexandrov-033123',
  },
  {
    name: 'Khurram Nasir Gore',
    role: 'Senior Advisor',
    photo: require('../images/team/khurram.jpg'),
    linkedin: 'kngore',
  }
]

const Team = () => {
  return (
    <div className="team">
      <h1 className="page-header">Our Team</h1>
      <div className="container" style={{ backgroundColor: "var(--light)" }}>
        <section>
          <div className="team-container">
            {team.map(e => (
              <div className="team-member" key={e.name}>
                <img src={e.photo} alt={e.name} />
                <p className="bold">{e.name}</p>
                <p style={{ marginTop: "0.2rem" }}>{e.role}</p>
                <div className="icons">
                  <a target="_blank" href={`https://linkedin.com/in/${e.linkedin}`}>
                    <Linkedin className="linkedin" />
                  </a>
                  { e.github &&
                    <a target="_blank" href={`https://github.com/${e.github}`}>
                      <GitHub />
                    </a> }
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2>Advisory Board</h2>
          <div className="team-container">
            {advisors.map(e => (
              <div className="team-member" key={e.name}>
                <img src={e.photo} alt={e.name} />
                <p className="bold">{e.name}</p>
                <p style={{ marginTop: "0.2rem" }}>{e.role}</p>
                <div className="icons">
                  <a target="_blank" href={`https://linkedin.com/in/${e.linkedin}`}>
                    <Linkedin className="linkedin" />
                  </a>
                  { e.github &&
                    <a target="_blank" href={`https://github.com/${e.github}`}>
                      <GitHub />
                    </a> }
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}


export default Team