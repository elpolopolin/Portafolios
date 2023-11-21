import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Layout() {
  const [navbarSize, setNavbarSize] = useState('100%');
  const [background, setBackground] = useState("");

  useEffect(() => {
    setBackground("linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url('img/hero-image.jpg')");
  }, []);

  const handleLinkClick = () => {
    setNavbarSize('5%');
    setBackground(null);
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
              <li><Link to="/Services" onClick={() => { handleLinkClick(); scrollToTop(); }}>Services</Link></li>
              <li><Link to="/Portafolio" onClick={() => { handleLinkClick(); scrollToTop(); }}>Portfolio</Link></li>
              <li><Link to="/Benefits" onClick={() => { handleLinkClick(); scrollToTop(); }}>Benefits</Link></li>
              <li><Link to="/Contact" onClick={() => { handleLinkClick(); scrollToTop(); }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
        {background && (
          <div
            className="hero flex middle-xs"
            style={{
              backgroundImage: background,
            }}
          >
            <div className="hero-text">
              <h1>PoloRocan</h1>
              <p>Musicos Profesionales.</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}