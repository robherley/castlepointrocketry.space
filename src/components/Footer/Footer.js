import React from 'react'
import styled from 'styled-components'
import {
  LogoTwitter32,
  LogoGithub32,
  LogoFacebook32,
  LogoInstagram32,
  LogoLinkedin32,
} from '@carbon/icons-react'

import favicon from '../../images/favicon.svg'
import SocialLink from './SocialLink'

const FooterContainer = styled.footer`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.maxWidth};
  padding: 0 2rem 8rem 2rem;
  color: ${({ theme }) => theme.color.light};

  a {
    color: inherit;
  }

  .upper {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
  }

  .favicon {
    height: 2rem;
    width: auto;
    margin-right: 1rem;
  }

  .contact {
    display: flex;
    align-items: center;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .robwashere {
    color: inherit;
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    text-align: center;

    .upper {
      .contact {
        margin-bottom: 1rem;
        flex-direction: column;
      }

      align-items: center;
      flex-direction: column;
    }
  }
`

const Footer = () => (
  <FooterContainer>
    <div className="upper">
      <div className="contact">
        <img
          src={favicon}
          alt="hudson space systems logo"
          className="favicon"
        />{' '}
        <a
          href="mailto:contact@hudsonspace.systems"
          style={{ marginRight: '0.25em' }}
        >
          contact@hudsonspace.systems
        </a>
        {'  '}
        <span>(201) 268-7887</span>
      </div>
      <div className="social-links">
        <SocialLink
          href="https://twitter.com/HudsonSpaceSys"
          renderIcon={<LogoTwitter32 />}
        />
        <SocialLink
          href="https://www.facebook.com/hudsonspacesys"
          renderIcon={<LogoFacebook32 />}
        />
        <SocialLink
          href="https://www.instagram.com/hudsonspacesys/"
          renderIcon={<LogoInstagram32 />}
        />
        <SocialLink
          href="https://www.linkedin.com/company/hudsonspacesys/"
          renderIcon={<LogoLinkedin32 />}
        />
        <SocialLink href="https://example.com" renderIcon={<LogoGithub32 />} />
      </div>
    </div>

    <div>
      <div className="copyright">
        © {new Date().getFullYear()} Hudson Space Systems. Created by{' '}
        <a
          href="https://github.com/robherley"
          target="_blank"
          rel="noopener noreferrer"
          className="robwashere"
        >
          Rob Herley
        </a>
      </div>
    </div>
  </FooterContainer>
)

export default Footer
