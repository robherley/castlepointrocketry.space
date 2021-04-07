import React from 'react'
import styled from 'styled-components'

const PhotoContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-family: ${({ theme }) => theme.font.family.heading};
    text-align: center;
  }

  @media (max-width: 770px) {
    .name {
      max-width: 6rem;
    }
  }
`

const PhotoButton = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0;
  outline: 0;
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.color.bg2};
  border: 3px solid
    ${({ theme, isActive }) =>
      isActive ? theme.color.yellow : 'rgba(0, 0, 0, 0)'};

  img {
    width: 100%;
    height: auto;
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.light};
  }

  &:active {
    border-color: ${({ theme }) => theme.color.yellow};
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.bg3};
  }

  @media (max-width: 770px) {
    width: 7rem;
    height: 7rem;
  }
`

const UserPhoto = ({ cartoon, first, last, isActive, onClick }) => {
  return (
    <PhotoContainer>
      <PhotoButton isActive={isActive} onClick={() => onClick()}>
        <img
          src={cartoon.default}
          alt={`${first} ${last}'s cartoon portrait`}
        />
      </PhotoButton>
      <div className="name">
        {first} {last}
      </div>
    </PhotoContainer>
  )
}

export default UserPhoto
