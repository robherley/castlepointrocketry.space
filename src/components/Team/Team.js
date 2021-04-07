import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import members from './members'
import CartoonPhoto from './CartoonPhoto'
import CurrentMember from './CurrentMember'

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 60rem;
`

const Team = () => {
  const [active, setActive] = useState(0)
  const memberRef = useRef(null)

  const handleClick = (i) => () => {
    setActive(i)
    if (memberRef.current) {
      memberRef.current.focus()
      memberRef.current.scrollIntoView()
    }
  }

  return (
    <TeamContainer>
      <CurrentMember {...members[active]} ref={memberRef} />
      {members.map((m, i) => (
        <CartoonPhoto
          {...m}
          key={m.last}
          isActive={i === active}
          onClick={handleClick(i)}
        />
      ))}
    </TeamContainer>
  )
}

export default Team
