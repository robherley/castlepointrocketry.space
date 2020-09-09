import React from 'react'

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
    role: "Lead Programmer",
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
    name: "Nicholas Yarbrough",
    role: "Electrical Engineering and Embedded System Design",
    photo: require("../images/team/cole-min.jpg"),
  },
]

const advisors = [
  {
    name: 'Igor Alexandrov',
    role: 'Senior Advisor',
    photo: require('../images/team/igor.jpg'),
  },
  {
    name: 'Khurram Nasir Gore',
    role: 'Senior Advisor',
    photo: require('../images/team/khurram.jpg'),
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}


export default Team