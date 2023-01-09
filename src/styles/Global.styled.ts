import { createGlobalStyle } from "styled-components"

interface GlobalStyleProps {
  overflowY: string
}


export const Global = createGlobalStyle<GlobalStyleProps>`
  * {
      font-style: normal;
      font-family: 'Montserrat';
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: #303030;
      text-decoration: none;
      overwlow-y: scroll;
  }

  body {
    background-color: #FBFBFB;
    overflow-x: hidden;
    overflow-y: ${props => props.overflowY};
    width: 100vw;
  }

`