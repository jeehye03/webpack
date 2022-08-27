import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
${normalize()};

html {
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  li, ul, ol, dl {
    list-style: none;
    padding: 0;
    margin: 0;
  }

body {
    *{ font-family: 'Spoqa Han Sans' }
}

`;

export default GlobalStyled;
