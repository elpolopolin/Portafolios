import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Benefits() {
    return (
    <section className="benefits" id="benefits">
<div className="container">
  <div className="row center-xs">
    <div className="col-md">
      <h2 className="section-title text-3xl">Exitos</h2>
    </div>
  </div>
  <div className="row center-xs">
    <div className="col-md-4">
      <div className="benefit">
        <img src="https://i1.sndcdn.com/artworks-DyImXZ3pX2DxTUjp-yvL2Kw-t500x500.jpg" alt="Benefit 1" />
        <h3>GATTI</h3>
        <p>Pop Smoke & Travis Scott prod by PoloRocan.</p>
      </div>
      <div className="hover-content">      
                    <a >
                    <Link to={`/ver/7`}><button className="bg-pink-400 rounded-md p-2 w-24">Ver</button> </Link>
                    </a>
                  </div>
    </div>
    <div className="col-md-4">
      <div className="benefit">
        <img src="https://i.scdn.co/image/ab67616d0000b273422113b080aa8e2effae4fa2" alt="Benefit 2" />
        <h3>Ransom</h3>
        <p>Lil Tecca prod by PoloRocan.</p>
      </div>
      <div className="hover-content">      
                    <a >
                    <Link to={`/ver/8`}><button className="bg-pink-400 rounded-md p-2 w-24">Ver</button> </Link>
                    </a>
                  </div>
    
    </div>
    
    <div className="col-md-4">
      <div className="benefit">
        <img src="https://i1.sndcdn.com/artworks-oGirYgNahVEA-0-t500x500.jpg" alt="Benefit 3" />
        <h3>Tengo 30</h3>
        <p>Khea feat forxxo, Duki, Neo Pistea y TALI.</p>
      </div>
      <div className="hover-content">      
                    <a >
                    <Link to={`/ver/9`}><button className="bg-pink-400 rounded-md p-2 w-24">Ver</button> </Link>
                    </a>
                  </div>
    </div>
  </div>
</div>
</section>
)}

export default Benefits;