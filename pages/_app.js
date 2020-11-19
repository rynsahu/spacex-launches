import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyle from '../theme/GlobalStyle';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
