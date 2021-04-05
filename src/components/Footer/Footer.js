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

  .favicon {
    height: 2rem;
    width: auto;
    margin-right: 1rem;
  }

  .contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    > div {
      display: flex;
      align-items: center;
    }
  }

  .robwashere {
    color: inherit;
    text-decoration: underline;
  }
`

const Footer = () => (
  <FooterContainer>
    <div className="contact">
      <div>
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
        <span>&middot; (201) 268-7887</span>
      </div>
      <div>
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
