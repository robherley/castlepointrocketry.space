import React from 'react'

import styled from 'styled-components'

const InvestContainer = styled.div`
  padding-top: 8rem;

  .equation {
    display: flex;
    align-items: center;

    > div {
      flex: 1;
    }
  }

  ul {
    padding-inline-start: 1rem;
  }

  .header {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.light};
    font-family: ${({ theme }) => theme.font.family.heading};
  }

  .content {
    padding: 0.5rem;
    align-self: flex-start;
    line-height: 1.3rem;
  }

  .op {
    max-width: 4rem;
    font-size: 3rem;
    color: ${({ theme }) => theme.color.yellow};
    font-family: ${({ theme }) => theme.font.family.heading};
    text-align: center;
  }

  .equals {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.light};
    font-family: ${({ theme }) => theme.font.family.heading};
  }

  .invest {
    text-align: center;
    margin-top: 6rem;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.yellow};
    font-family: ${({ theme }) => theme.font.family.heading};
  }

  .invest-link {
    text-decoration: none;
    cursor: pointer;
    padding: 1rem;
    color: ${({ theme }) => theme.color.light};
    border: 1px solid ${({ theme }) => theme.color.light};
    font-family: ${({ theme }) => theme.font.family.heading};
    text-align: center;
    display: block;
    max-width: 14rem;
    transition: all 300ms ease-in-out;
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 1.1rem;

    &:hover {
      background-color: ${({ theme }) => theme.color.light};
      color: ${({ theme }) => theme.color.bg};
    }
  }

  @media (max-width: 780px) {
    .equation {
      flex-direction: column;
    }
  }
`

const Invest = (props) => {
  return (
    <InvestContainer {...props}>
      <div className="equation">
        <div className="content">
          <div className="header">Reusable Design</div>
          <div>
            Our 3D-printed engine is quick to manufacture and reusable for up to
            15 launches. The vehicle utilizes a robust and lightweight
            carbon-fiber structure. A redundant, multi-stage parachute system
            ensures reliable recovery.
          </div>
        </div>
        <div className="op">+</div>
        <div className="content">
          <div className="header">Faster Turnaround</div>
          <div>
            Our vehicle can be recovered, inspected, and launched within days.
            Payloads can be rapidly integrated for launch, and returned to
            customers in a matter of hours, not weeks.
          </div>
        </div>
        <div className="op">+</div>
        <div className="content">
          <div className="header">Lower Costs</div>
          <div>
            Innovations in pressure-fed fuel-delivery systems allow for
            elimination of costly components such as turbopumps. Our reusable
            design reduces fleet and manufacturing costs.
          </div>
        </div>
      </div>

      <div className="op" style={{ textAlign: 'center', maxWidth: 'unset' }}>
        =
      </div>
      <div className="header" style={{ textAlign: 'center' }}>
        More Ground-escaping Science!
      </div>

      <div className="invest">
        Help Us Enable the Next Scientific Revolution, in Space!
      </div>
      <a
        href="https://invest.microventures.com/offerings/hudson-space-systems/?referral_code=HSSWEB092420"
        target="_blank"
        rel="noopener noreferrer"
        className="invest-link"
      >
        Invest on Microventures
      </a>
    </InvestContainer>
  )
}

export default Invest
