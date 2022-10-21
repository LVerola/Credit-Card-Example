import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root {
    --primary: #006DBC;
    --primary-variant: #3700B3;
    --secondary: #03DAC6;
    --background: #FFFFFF;
    --surface: #202020;
    --error: #CF6679;
    --text-on-primary: #000000;
    --text-on-secondary: #000000;
    --text-on-background: #FFFFFF;
    --text-on-surface: #FFFFFF;
    --text-on-error: #000000;
    --text-secondary: #CECECE;
    --text-placeholder: #A2A0A0;
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialised;
  }
  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
    border: none;
  }
  a {
    text-decoration: none;
  }
  p {
    margin-bottom: 0px;
  }
`
