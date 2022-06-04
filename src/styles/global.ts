import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #FCFCFC;
    }

    html {
        font-size: 62.5%; 
    }

    body {
        font-size: 16px; 
        font-size: 1.6rem; 
        line-height: 1.5; 
    }
`

export {GlobalStyle}