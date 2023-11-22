import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PortfolioSection from './pages/PortfolioSection';
import Benefits from "./pages/Benefits"
import Ver from './pages/Ver';
import Favoritos from './pages/Favoritos';
import FavouritesProvider from "./context/FavouritesContext";

function App() {
  return (
    <FavouritesProvider>
    <BrowserRouter>
      
      
        <Routes>
        <Route element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portafolio" element={<PortfolioSection />} />
          <Route path="/Benefits" element={<Benefits />} />
          <Route path="/Favoritos" element={<Favoritos  />} />
          <Route path="/ver/:id" element={<Ver  />}
        />
          <Route path="/*" element={<AboutUs />} />
          </Route>
        </Routes>
        
     
    </BrowserRouter>
    </FavouritesProvider>
  );
}

export default App;