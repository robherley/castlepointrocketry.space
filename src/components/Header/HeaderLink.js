import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const common = css`
  position: relative;
  color: ${({ theme }) => theme.color.light};
  padding: 0 1rem;
  box-sizing: border-box;
  letter-spacing: 0.025rem;
  text-decoration: none;
  transition: all 300ms;
`

export const HorizontalHeaderLink = styled(Link)`
  ${common}

  /* for spacer */
  margin-right: 1px;

  &:after {
    content: '';
    position: absolute;
    top: 25%;
    bottom: 25%;
    right: -1px;
    width: 1px;
    height: 50%;
    background-color: ${({ theme }) => theme.color.gray};
  }

  &::before {
    bottom: -0.2rem;
    content: '';
    position: absolute;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: ${({ theme }) => theme.color.yellow};
    transform: scaleX(0);
    transition: transform 0.5s ease;
    transform-origin: center right;
  }

  &:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }

  &:first-child {
    padding-left: 0;
    &:before {
      left: 0;
    }
  }

  &:last-child {
    padding-right: 0;
    &:before {
      right: 0;
    }
    &:after {
      background-color: transparent;
    }
  }

  &::before {
    bottom: -0.2rem;
    content: '';
    position: absolute;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: ${({ theme }) => theme.color.yellow};
    transform: scaleX(0);
    transition: transform 0.5s ease;
    transform-origin: center right;
  }

  &:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }
`

export const VerticalHeaderLink = styled(Link)`
  ${common}

  /* font-family: ${({ theme }) => theme.font.family.heading}; */

  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  text-align: right;

  &::after {
    bottom: -0.5rem;
    content: '';
    position: absolute;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: ${({ theme }) => theme.color.yellow};
    transform: scaleX(0);
    transition: transform 0.5s ease;
    transform-origin: center right;
  }

  &:hover::after {
    transform-origin: center left;
    transform: scaleX(1);
  }

  &::before {
    bottom: -0.5rem;
    content: '';
    position: absolute;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: ${({ theme }) => theme.color.gray};
  }

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
  }
`
