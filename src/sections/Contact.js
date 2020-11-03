import React from "react"
import styled from '@emotion/styled'
import { Section, Heading } from '../components/Components'

const MobileSize = `564px`

const Container = styled.div`
  margin: 0 auto;

  @media (min-width: ${MobileSize}) {
    width: 70%;
    min-width: 32rem;
  }
`

const Body = styled.section`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 377px) { // not so small phones
    width: 80%;
  }
  @media (min-width: ${MobileSize}) {
    width: 100%;
  }
`

const ContactMethod = styled.div`
  margin-top: 1rem;
  font-size: 1.0rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${MobileSize}) {
    font-size: 1.3rem;
    flex-direction: row;
  }
`

const ContactTitle = styled.span`
  flex-grow: 1;
  color: var(--cpr-red);
  font-weight: bold;
  margin-right: 1rem;
`

const ContactDetail = styled.span`
  flex-grow: 1;
  text-align: left;

  @media (min-width: ${MobileSize}) {
    text-align: right;
  }

  a {
    text-decoration: underline; // TODO: make links underlined by default
  }
`

const Contact = () => {
  return (
    <Section className="contact" id="contact">
      <Container>
        <Heading>Contact Us</Heading>
        <Body>
          <ContactMethod>
            <ContactTitle>Send us a message</ContactTitle>
            <ContactDetail><a href="mailto:contact@hudsonspace.systems">contact@hudsonspace.systems</a></ContactDetail>
          </ContactMethod>
          <ContactMethod>
            <ContactTitle>Give us a call</ContactTitle>
            <ContactDetail><a href="tel:12012687887">(201) 268-7887</a></ContactDetail>
          </ContactMethod>
          <ContactMethod>
            <ContactTitle>Inquire into launch services</ContactTitle>
            <ContactDetail>Fill out our <a href="https://airtable.com/shrt3DGgqmZ6KZwcC">form</a></ContactDetail>
          </ContactMethod>
          <ContactMethod>
            <ContactTitle>See our origin story</ContactTitle>
            <ContactDetail><a href="https://castlepointrocketry.space/news/">castlepointrocketry.space</a></ContactDetail>
          </ContactMethod>
        </Body>
      </Container>
    </Section>
  )
}

export default Contact
