import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, input, textarea, select {
    font: inherit;
    border: none;
    outline: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html, body {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.5;
    font-weight: 400;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
