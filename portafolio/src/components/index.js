import React from "react";
import PortfolioSection from "./PortfolioSection";

function Index() {
    return (
        
          
           
            <div className="wrapper">
              <main>

               
                <hr />
                <hr />

            
                <hr />
                <section className="benefits" id="benefits">
                  <div className="container">
                    <div className="row center-xs">
                      <div className="col-md">
                        <h2 className="section-title">Exitos</h2>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-md-4">
                        <div className="benefit">
                          <img src="https://i1.sndcdn.com/artworks-DyImXZ3pX2DxTUjp-yvL2Kw-t500x500.jpg" alt="Benefit 1" />
                          <h3>GATTI</h3>
                          <p>Pop Smoke & Travis Scott prod by PoloRocan.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="benefit">
                          <img src="https://i.scdn.co/image/ab67616d0000b273422113b080aa8e2effae4fa2" alt="Benefit 2" />
                          <h3>Ransom</h3>
                          <p>Lil Tecca prod by PoloRocan.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="benefit">
                          <img src="https://i1.sndcdn.com/artworks-oGirYgNahVEA-0-t500x500.jpg" alt="Benefit 3" />
                          <h3>Tengo 30</h3>
                          <p>Khea feat forxxo, Duki, Neo Pistea y TALI.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr />
                <section className="contact" id="contact">
                  <div className="container">
                    <div className="row center-xs">
                      <div className="col-md">
                        <h2 className="section-title">Contact</h2>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-md-6">
                        <div className="contact-form">
                          <input type="text" placeholder="Your Name" />
                          <input type="email" placeholder="Your Email" />
                          <textarea placeholder="Your Message" rows="4"></textarea>
                          <button>Send Message</button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info">
                          <p>Av. Libertador 1897, CABA</p>
                          <p>Email: poloracan@company.com</p>
                          <p>Phone: +911 1109 4459</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
         
          
     
      );
    }

export default Index;