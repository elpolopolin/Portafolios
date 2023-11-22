import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [navbarSize, setNavbarSize] = useState('100%');
 

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
          <img src="img/logo.png" className="logo" alt="Logo" />
          <nav className="end-xs">
            <ul>
              <li onClick={() => { handleLinkClick(); scrollToTop(); }}>
                <Link to="/AboutUs" >
                  About us
                </Link>
              </li>
              <li><Link to="/Services" >Services</Link></li>
              <li><Link to="/Portafolio">Portfolio</Link></li>
              <li><Link to="/Benefits" >Benefits</Link></li>
              <li><Link to="/Contact" >Contact</Link></li>
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