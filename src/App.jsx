import React from 'react';
import Layout from './components/Layout';
import ThemeProvider from './components/contexts/ThemeProvider';

import { BrowserRouter } from 'react-router-dom';

function App() {

  return(
    <BrowserRouter>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App
