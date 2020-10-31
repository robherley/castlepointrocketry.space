import React from "react"
import styled from '@emotion/styled'
import { Section, Heading } from '../components/Components'

const Container = styled.div`
  margin: 0 auto;

  @media (min-width: 972px) {
    width: 60%;
    min-width: 35rem;
  }
`

const ContactMethod = styled.div`
  margin-top: 1rem;
  font-size: 1.0rem;

  @media (min-width: 972px) {
    font-size: 1.3rem;
  }
`

const ContactTitle = styled.span`
  color: var(--cpr-red);
  font-weight: bold;
  margin-right: 1rem;
`

const ContactDetail = styled.span`
  float: right;
  a {
    text-decoration: underline; // TODO: make links underlined by default
  }
`

const Contact = () => {
  return (
    <Section className="contact" id="contact">
      <Container>
        <Heading>Contact Us</Heading>
        <section>
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
        </section>
      </Container>
    </Section>
  )
}

export default Contact
