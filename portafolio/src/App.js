import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Index from './components/index';
import Layout from './components/layout';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import PortfolioSection from './components/PortfolioSection';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
        <Routes>
          <Route index element={<Index />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portafolio" element={<PortfolioSection />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;