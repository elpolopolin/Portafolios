import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import {FavouritesContext} from "../context/FavouritesContext"

export default function NavBar() {
  const [navbarSize, setNavbarSize] = useState('100%');
  const {cantidadFavoritos } = useContext(FavouritesContext);

  const handleLinkClick = () => {
    setNavbarSize('5%');
  
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='' style={{ marginBottom: "20px" }}>
      <header className="fade-in">
        <div className="navigation-bar flex middle-xs" style={{ backgroundColor: "black" }}>
          <Link to="/"><img src="img/logo.png" className="logo" alt="Logo" /> </Link>
          <nav className="end-xs">
            <ul>
              <li onClick={() => { handleLinkClick(); scrollToTop(); }}>
                <Link to="/AboutUs" >
                  About us
                </Link>
              </li>
              <li><Link to="/Services" >Services</Link></li>
              <li><Link to="/Portafolio">Portfolio</Link></li>
              <li><Link to="/Benefits" >Populares</Link></li>
              <li className="relative">
              <Link to="/Favoritos" className="text-white">
                Favoritos
              </Link>
              <div className="bg-pink-500 rounded-full h-4 w-6 flex items-center justify-center absolute -top-2  -right-0">
                <p className="text-white">{cantidadFavoritos}</p>
              </div>
            </li>
            </ul>
          </nav>
        </div>
        {(
          
           
              <h1 className=''>PoloRocan</h1>
              
           
      
        )}
      </header>
    </div>
  );
}