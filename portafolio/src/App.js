import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PortfolioSection from './components/PortfolioSection';


function App() {
  return (
    <BrowserRouter>
      
        
        <Routes>
        <Route element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portafolio" element={<PortfolioSection />} />
          <Route path="/*" element={<AboutUs />} />
          </Route>
        </Routes>
        
     
    </BrowserRouter>
  );
}

export default App;