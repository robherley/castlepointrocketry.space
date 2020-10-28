import React, { useState } from 'react'
import { flatten } from 'lodash'
import { GitHub } from 'react-feather'
import { Section, Heading, Paragraph } from '../components/Components'
import LinkedIn from '../images/linkedin.png'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const team = [
  {
    first: "Nathan",
    last: "Tahbaz",
    role: "CEO",
    photo: require("../images/team/real/nathan.png"),
    cartoon: require("../images/team/cartoons/nathan.png"),
    description: `Nathan is a space nerd with experience in management, systems, rapid prototyping, manufacturing, and project management. He has a Bachelor's degree in Mechanical Engineering and a Master's degree in Space Systems Engineering from Stevens Institute of Technology.`,
    linkedin: 'nathan-tahbaz',
  },
  {
    first: "Monica",
    last: "Traupmann",
    role: "COO",
    photo: require("../images/team/real/monica.png"),
    cartoon: require("../images/team/cartoons/monica.png"),
    linkedin: 'monica-traupmann',
    description: "Monica is an explosions enthusiast with experience in propulsion design, fuel delivery systems, and instrumentation, as well as fundraising and crowdfunding for small-scale projects. She has a Bachelor’s degree in Chemical Engineering and a Master’s degree in Mechanical Engineering with a focus on Energy, Fluids, and Heat Transfer.",
  },
  {
    first: "Benjamin",
    last: "Iofel",
    role: "CIO",
    photo: require("../images/team/real/ben.png"),
    cartoon: require("../images/team/cartoons/ben.png"),
    linkedin: 'beniofel',
    github: 'benwaffle',
    description: `Ben is a computer expert with extensive experience in software development, embedded programming, and Linux. He is a software engineer at Flow and brings that culture and experience to Hudson Space Systems. He has a B.S. in Computer Science.`,
  },
  {
    first: "William",
    last: "Skwirut",
    role: "CTO",
    photo: require("../images/team/real/will.png"),
    cartoon: require("../images/team/cartoons/will.png"),
    linkedin: 'williamskwirut',
    description: `Will’s background includes designing, manufacturing, and testing fluid control components and systems. He also has experience in numerical analysis, rapid prototyping, computational fluid dynamics, and finite element analysis. Will has Bachelor’s and Master’s Degrees in Mechanical Engineering from Stevens Institute of Technology, specializing in Fluids, Thermal, and Energy.`,
  },
  {
    first: "Dakota",
    last: "Van Deursen",
    role: "CFO",
    photo: require("../images/team/real/dakota.png"),
    cartoon: require("../images/team/cartoons/dakota.png"),
    linkedin: 'dvandeursen',
    description: `Dakota is passionate about learning how complex systems work together - both physically and socially. He weaves experience with STEM in the workplace into his personal history in peer management and governing bodies. He has a B.Eng. in Chemical Engineering and an M.S. in Materials Science & Engineering from Stevens Institute of Technology.`,
  },
  {
    first: "Nicholas",
    last: "Yarbrough",
    role: "Engineer",
    photo: require("../images/team/real/cole.png"),
    cartoon: require("../images/team/cartoons/cole.png"),
    linkedin: 'cole-yarbrough-2a39551b2',
    description: `Cole is a lifelong maker and electrical / computer engineer who has worked on space projects both small and large: from communicating with the ISS to launching a high-altitude balloon. Cole leads the development of avionics hardware for our suborbital launch platforms.`,
  },
  {
    first: 'Igor',
    last: 'Alexandrov',
    role: 'Senior Advisor',
    photo: require('../images/team/real/igor.png'),
    cartoon: require('../images/team/cartoons/igor.png'),
    linkedin: 'igor-alexandrov-033123',
    description: 'Igor is an experienced president with a demonstrated history of working in the research industry. Strong business development professional skilled in Analytical Skills, Entrepreneurship, Fundraising, Software Development, and Start-ups.',
  },
  {
    first: 'Khurram',
    last: 'Nasir Gore',
    role: 'Senior Advisor',
    photo: require('../images/team/real/khurram.png'),
    cartoon: require('../images/team/cartoons/khurram.png'),
    linkedin: 'kngore',
    description: 'Khurram is a business executive, attorney, engineer and an advocate for diversity and STEM.  With over 20 years in the tech and innovation space, his work brings together a deep understanding of business development, product lifecycle, data ethics, and the legal implications and challenges for companies that push boundaries.',
  },
]

const TeamSection = styled(Section)`
  @media (max-width: 972px) {
    padding: 2rem 0;
  }
`

const Team = () => {
  const [active, setActive] = useState(team[0].last)
  const selected = team.find(t => t.last === active)

  return (
    <TeamSection className="team" id="team">
      <Heading>Our Team</Heading>
      <div className="container">
        <section>
          <div className="details-wrapper">
            <div className="details">
              <div className="header">
                <img src={selected.photo} className="real-photo" />
                <div>
                  <h1>{selected.first} {selected.last}</h1>
                  <h3>{selected.role}</h3>
                  <a rel="noreferrer" target="_blank" href={`https://linkedin.com/in/${selected.linkedin}`}>
                    <img src={LinkedIn} alt="LinkedIn" className="icon linkedin" />
                  </a>
                  <Paragraph className="desktop-description">{selected.description}</Paragraph>
                </div>
              </div>
              <Paragraph className="mobile-description">{selected.description}</Paragraph>
            </div>
          </div>
          <div className="team-container">
            {team.map(member =>
              <div className={`team-member ${member.last === active ? 'active' : ''}`}>
                <img src={member.cartoon} alt={`${member.first} ${member.last}`} onClick={() => setActive(member.last)} />
                <h4>{member.first}</h4>
                <h4>{member.last}</h4>
              </div>
            )}
          </div>
        </section>
      </div>
    </TeamSection>
  )
}


export default Team
