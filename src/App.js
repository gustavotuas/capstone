import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './components/routing';

import { Footer, Header, Specials, Testimonials } from './containers';
import { About, Navbar } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <div className="colored__bg">
            <Header />
          </div>
          <Specials />
          <Testimonials />
          <About />
        </>
      ) : (
        <AppRoutes />   
      )}
    </>
  );
}

export default App;