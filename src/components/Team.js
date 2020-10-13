import React, { useState } from 'react'
import { Linkedin, GitHub } from 'react-feather'

const team = [
  {
    name: "Nathan Tahbaz",
    role: "CEO",
    photo: require("../images/team/nathan-min.jpg"),
    description: `Nathan is a space nerd with experience in management, systems, rapid prototyping, manufacturing, and project management. He has a Bachelor's degree in Mechanical Engineering and a Master's degree in Space Systems Engineering from Stevens Institute of Technology.`,
    linkedin: 'nathan-tahbaz',
  },
  {
    name: "Monica Traupmann",
    role: "COO",
    photo: require("../images/team/monica-min.jpg"),
    linkedin: 'monica-traupmann',
    description: "Monica is an explosions enthusiast with experience in propulsion design, fuel delivery systems, and instrumentation, as well as fundraising and crowdfunding for small-scale projects. She has a Bachelor’s degree in Chemical Engineering and a Master’s degree in Mechanical Engineering with a focus on Energy, Fluids, and Heat Transfer.",
  },
  {
    name: "Benjamin Iofel",
    role: "CIO",
    photo: require("../images/team/ben-min.jpg"),
    linkedin: 'beniofel',
    github: 'benwaffle',
    description: `Ben is a computer expert with extensive experience in software development, embedded programming, and Linux. He is a software engineer at Flow and brings that culture and experience to Hudson Space Systems. He has a B.S. in Computer Science`,
  },
  {
    name: "William Skwirut",
    role: "CTO",
    photo: require("../images/team/will-min.jpg"),
    linkedin: 'williamskwirut',
    description: `Will’s background includes designing, manufacturing, and testing fluid control components and systems. He also has experience in numerical analysis, rapid prototyping, computational fluid dynamics, and finite element analysis. Will has Bachelor’s and Master’s Degrees in Mechanical Engineering from Stevens Institute of Technology, specializing in Fluids, Thermal, and Energy.`,
  },
  {
    name: "Dakota Van Deursen",
    role: "CFO",
    photo: require("../images/team/dakota-min.jpg"),
    linkedin: 'dvandeursen',
    description: `Dakota is passionate about learning how complex systems work together - both physically and socially. He weaves experience with STEM in the workplace into his personal history in peer management and governing bodies. He has a B.Eng. in Chemical Engineering and an M.S. in Materials Science & Engineering from Stevens Institute of Technology.`,
  },
  {
    name: "Nicholas Yarbrough",
    role: "Engineer",
    photo: require("../images/team/cole-min.jpg"),
    linkedin: 'cole-yarbrough-2a39551b2',
    description: `Cole is a lifelong maker and electrical / computer engineer who has worked on space projects both small and large: from communicating with the ISS to launching a high-altitude balloon. Cole leads the development of avionics hardware for our suborbital launch platforms.`,
  },
]

const advisors = [
  {
    name: 'Igor Alexandrov',
    role: 'Senior Advisor',
    photo: require('../images/team/igor.jpg'),
    linkedin: 'igor-alexandrov-033123',
    description: 'Igor is an experienced president with a demonstrated history of working in the research industry. Strong business development professional skilled in Analytical Skills, Entrepreneurship, Fundraising, Software Development, and Start-ups.',
  },
  {
    name: 'Khurram Nasir Gore',
    role: 'Senior Advisor',
    photo: require('../images/team/khurram.jpg'),
    linkedin: 'kngore',
    description: 'Khurram is a business executive, attorney, engineer and an advocate for diversity and STEM.  With over 20 years in the tech and innovation space, his work brings together a deep understanding of business development, product lifecycle, data ethics, and the legal implications and challenges for companies that push boundaries.',
  }
]

const Team = () => {
  const [active, setActive] = useState(team[0].name)
  const selectedTeamMember = team.find(t => t.name === active)
  const selectedAdvisor = advisors.find(t => t.name === active)

  return (
    <div className="team">
      <h1 className="page-header">Our Team</h1>
      <div className="container" style={{ backgroundColor: "var(--light)" }}>
        <section>
          <div className="team-container">
            {team.map(e => (
              <div className={`team-member ${e.name === active ? 'active' : ''}`} key={e.name}>
                <img src={e.photo} alt={e.name} onClick={() => setActive(e.name)} />
                <p className="bold">{e.name}</p>
                <p style={{ marginTop: "0.2rem" }}>{e.role}</p>
                <div className="icons" style={{display: 'inline'}}>
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
          <div className="description">
            {selectedTeamMember?.description}
          </div>
        </section>
        <section>
          <h2>Advisory Board</h2>
          <div className="team-container">
            {advisors.map(e => (
              <div className="team-member" key={e.name}>
                <img src={e.photo} alt={e.name} onClick={() => setActive(e.name)}  />
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
          <div className="description">
            {selectedAdvisor?.description}
          </div>
        </section>
      </div>
    </div>
  )
}


export default Team
