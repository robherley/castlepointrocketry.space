import React, { useState } from 'react'
import { flatten } from 'lodash'
import { GitHub } from 'react-feather'
import { Section, Heading, Paragraph } from '../components/Components'
import mq from '../components/Breakpoints'
import LinkedInImg from '../images/linkedin.png'
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
  color: var(--light2);
  @media (max-width: 972px) {
    padding: 2rem 0;
  }
`


const DetailsWrapper = styled.div`
  min-height: 26rem;
  margin: 0 2rem;

  @media (min-width: 972px) {
    min-height: 21rem;
  }
`

const Details = styled.div`
  box-sizing: border-box;
  background: #1e91d633; // adjust-color(c('cpr-blue'), $alpha: -.8);
  border-radius: 10px;
  width: 100%;
  padding: 1rem;
  margin: 1rem auto;

  @media (min-width: 972px) {
    width: 60%;
  }

  .desktop-description { display: none; }
  .mobile-description { display: block; }

  @media (min-width: 972px) {
    .desktop-description { display: block; }
    .mobile-description { display: none; }
  }
`

const DetailsBody = styled.div`
  display: flex;
`

const RealPhoto = styled.img`
  //width: 9rem; // firefox bug
  height: 9rem;
  border-radius: 5px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background: #1e91d64d;

  @media (min-width: 972px) {
    //width: 15rem; // firefox bug
    height: 15rem;
    margin-bottom: 0;
  }
`

const Name = styled.span`
  font-size: 1.5rem;
  display: block;
  margin-bottom: .5rem;
`

const Role = styled.span`
  font-size: 1.17rem;
  display: block;
  margin-bottom: .5rem;
`

const LinkedIn = styled.img`
  width: 2rem;
  margin-bottom: 1rem;
`

const TeamListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 2rem;

  @media (min-width: 972px) {
    flex-wrap: nowrap;
  }
`

const TeamMember = styled.div`
  flex: 0 1 26%;
  margin: .5rem;
  width: 7rem;
  height: auto;
  box-sizing: border-box;

  @media (min-width: 972px) {
    width: 12rem;
  }

  > img {
    cursor: pointer;
    margin-bottom: .5rem;
    width: 100%;
    background: none;
  }

  &.active > img {
    box-shadow: 0 0 0 .2rem var(--cpr-yellow);
  }

  h4 + h4 {
    margin-top: .2rem;
  }

  h4 {
    text-align: center;
  }
`

const Team = () => {
  const [active, setActive] = useState(team[0].last)
  const selected = team.find(t => t.last === active)

  return (
    <TeamSection className="team" id="team" expand={true}>
      <Heading>Our Team</Heading>
      <div className="container">
        <section>
          <DetailsWrapper>
            <Details className="details">
              <DetailsBody className="header">
                <RealPhoto src={selected.photo} className="real-photo" />
                <div>
                  <Name>{selected.first} {selected.last}</Name>
                  <Role>{selected.role}</Role>
                  <a rel="noreferrer" target="_blank" href={`https://linkedin.com/in/${selected.linkedin}`}>
                    <LinkedIn src={LinkedInImg} alt="LinkedIn" className="icon linkedin" />
                  </a>
                  <Paragraph className="desktop-description">{selected.description}</Paragraph>
                </div>
              </DetailsBody>
              <Paragraph className="mobile-description">{selected.description}</Paragraph>
            </Details>
          </DetailsWrapper>
          <TeamListContainer>
            {team.map(member =>
              <TeamMember className={member.last === active ? 'active' : ''}>
                <img src={member.cartoon} alt={`${member.first} ${member.last}`} onClick={() => setActive(member.last)} />
                <h4>{member.first}</h4>
                <h4>{member.last}</h4>
              </TeamMember>
            )}
          </TeamListContainer>
        </section>
      </div>
    </TeamSection>
  )
}

export default Team
