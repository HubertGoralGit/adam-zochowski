import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Projects } from './Pages/Projects';
import { theme } from './theme';
import { Nav } from './Components/Nav/Nav';
import { GlobalStyle } from './GlobalStyles';
import { routes } from './utils/routes';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.projects} element={<Projects />} />
          <Route path={routes.contact} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
