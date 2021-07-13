/* Library Imports */
import React from 'react';

/* Component Imports */
import Home from 'pages/Home/Home';

/* Asset Imports */
import { GlobalStyle } from './GlobalStyles.js'
import StyledApp from './StyledApp.js'


const App = () => {
  return (
    <StyledApp>
        <GlobalStyle />
        <Home />
    </StyledApp>
  )
};

export default App;