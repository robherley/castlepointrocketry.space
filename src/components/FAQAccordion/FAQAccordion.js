import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import styled from 'styled-components'

import questions from './questions'

const StyledAccordion = styled(Accordion)`
  .accordion__item {
    border-bottom: 1px solid ${({ theme }) => theme.color.bg3};
  }

  .accordion__item:last-child {
    border-bottom: none;
  }

  .accordion__button {
    color: ${({ theme }) => theme.color.light};
    cursor: pointer;
    padding: 1.5rem;
    transition: all 100ms ease-in-out;
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.font.family.heading};
  }

  .accordion__button:hover {
    background-color: ${({ theme }) => theme.color.bg2};
  }

  .accordion__button:before {
    display: inline-block;
    content: '';
    height: 0.75rem;
    width: 0.75rem;
    margin-right: 1.5rem;
    border-bottom: 0.25rem solid currentColor;
    border-right: 0.25rem solid currentColor;
    transform: rotate(-45deg);
    transition: all 100ms ease-in-out;
  }

  .accordion__button[aria-expanded='true'] {
    color: ${({ theme }) => theme.color.yellow};
    background-color: ${({ theme }) => theme.color.bg2};
  }

  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    padding: 1rem;
    animation: fadein 200ms ease-in-out;
    p {
      font-size: 1.2rem;
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const FAQAccordion = () => {
  return (
    <StyledAccordion allowZeroExpanded preExpanded={['0']}>
      {questions.map(({ q, a }, i) => (
        <AccordionItem key={q} uuid={`${i}`}>
          <AccordionItemHeading>
            <AccordionItemButton>{q}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>{a}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </StyledAccordion>
  )
}

export default FAQAccordion
