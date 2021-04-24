import React from 'react'
import styled from 'styled-components'

import favicon from '../../images/favicon.svg'
import SocialLink, { links } from '../SocialLink'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.maxWidth};
  padding: 0 2rem 8rem 2rem;
  color: ${({ theme }) => theme.color.light};
  line-height: 1.5rem;

  a {
    color: inherit;
  }

  .favicon {
    height: 2rem;
    width: auto;
    margin-bottom: 1rem;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 900px) {
    text-align: center;
    flex-direction: column;

    .social-links {
      margin-top: 1rem;
    }
  }
`

const Footer = () => (
  <FooterContainer>
    <div>
      <img src={favicon} alt="hudson space systems logo" className="favicon" />
      <div className="contact">
        <a
          href="mailto:contact@hudsonspace.systems"
          style={{ marginRight: '0.25em' }}
        >
          contact@hudsonspace.systems
        </a>
        {'  '}
        <span style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap' }}>
          (201) 268-7887
        </span>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Hudson Space Systems. Created by{' '}
        <a
          href="https://github.com/robherley"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rob Herley
        </a>
      </div>
    </div>
    <div className="social-links">
      {links.map((e) => (
        <SocialLink key={e.href} href={e.href} renderIcon={<e.icon />} />
      ))}
    </div>
  </FooterContainer>
)

export default Footer
