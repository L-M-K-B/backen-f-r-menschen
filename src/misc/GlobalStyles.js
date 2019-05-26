import { createGlobalStyle } from 'styled-components'
import { font } from './colors'

export default createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Domine&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0 20px;
    font-family: 'Roboto', sans-serif;
    color: ${font}
  }
`
// für Überschriften: font-family: 'Domine', serif;
