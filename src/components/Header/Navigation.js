import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Close32, Menu32 } from '@carbon/icons-react'

import { useWindowWidth } from '../../hooks'
import { HorizontalHeaderLink, VerticalHeaderLink } from './HeaderLink'
import links from './links'

const MAGIC_BREAKPOINT = 800

const HorizontalContainer = styled.nav`
  @media (max-width: ${MAGIC_BREAKPOINT}px) {
    display: none;
  }
`

const Horizontal = () => (
  <HorizontalContainer>
    {links.map((e) => (
      <HorizontalHeaderLink {...e} key={e.to} />
    ))}
  </HorizontalContainer>
)

const VerticalContainer = styled.nav`
  background-color: ${({ theme }) => theme.color.bg};
  position: fixed;
  top: 0;
  right: 0;
  width: 20rem;
  height: 100vh;
  padding: 8rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-sizing: border-box;

  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '20rem')});
  transition: transform 0.5s ease;
  border-left: 1px solid ${({ theme }) => theme.color.yellow};
`

const VerticalButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 1rem;
  z-index: 150;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  svg {
    transform: scale(1.5);
    fill: ${({ isOpen, theme }) => theme.color[isOpen ? 'yellow' : 'light']};
  }

  @media (min-width: ${MAGIC_BREAKPOINT + 1}px) {
    display: none;
  }
`

const Vertical = ({ open, setOpen }) => {
  const virtNavRef = useRef(null)

  return (
    <>
      <VerticalButton
        isOpen={open}
        onClick={() => {
          setOpen(!open)
          if (!open && virtNavRef.current) {
            virtNavRef.current.focus()
          }
        }}
      >
        {open ? <Close32 /> : <Menu32 />}
      </VerticalButton>
      <VerticalContainer
        ref={virtNavRef}
        tabIndex="-1"
        isOpen={open}
        onBlur={() => setOpen(false)}
      >
        {links.map((e) => (
          <VerticalHeaderLink
            {...e}
            key={e.to}
            onClick={() => setOpen(false)}
          />
        ))}
      </VerticalContainer>
    </>
  )
}

const Navigation = () => {
  const width = useWindowWidth()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // close if we grow > MAGIC_BREAKPOINT
    if (width > MAGIC_BREAKPOINT && open) {
      setOpen(false)
    }
  }, [width, open])

  return (
    <>
      <Horizontal />
      <Vertical open={open} setOpen={setOpen} />
    </>
  )
}

export default Navigation
