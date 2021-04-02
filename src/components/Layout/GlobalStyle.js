import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body,
  p {
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.gray};
    font-stretch: normal;
    font-style: normal;
    font-family: ${({ theme }) =>
      `${theme.font.family.default}, ${theme.font.family.fallback}`};
    line-height: normal;
    letter-spacing: 0.12px;
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) =>
      `${theme.font.family.heading}, ${theme.font.family.fallback}`};
    clear: both;
    word-wrap: break-word;
    overflow-wrap: break-word;
    letter-spacing: 0.24px;
  }

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  h4 {
    font-size: 1.12em;
  }
  h5 {
    font-size: 0.83em;
  }
  h6 {
    font-size: 0.75em;
  }
`

export default GlobalStyle
