import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(theme1) => theme1.theme.color.bg};
    font-family: 'Nunito Sans', sans-serif;
  }

  body, p, h1, h2, h3, h4, h6 {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0.2em;
    padding-left: 30px
  }
`;

export default GlobalStyle;
