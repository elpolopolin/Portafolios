import React from "react";
import PortfolioSection from "./PortfolioSection";

function Index() {
    return (
        
         
          <body>
            <header className="fade-in">
              <div className="navigation-bar flex middle-xs">
                <img src="img/logo.png" className="logo" alt="Logo" />
                <nav className="end-xs">
                  <ul>
                    <li><a href="#about-us">About us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#benefits">Benefits</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <div className="hero flex middle-xs" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url('img/hero-image.jpg')" }}>
                <div className="hero-text">
                  <h1>PoloRocan</h1>
                  <p>Musicos Profesionales.</p>
                </div>
              </div>
            </header>
            <div className="wrapper">
              <main>
                <section className="intro" id="about-us">
                  <div className="container">
                    <div className="row">
                      <div className="col-md">
                        <h2 className="section-title">About text</h2>
                      </div>
                    </div>
                    <div className="row margin-bottom">
                      <div className="col-md">
                        <p className="highlight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <p className="author">- John Doe</p>
                      </div>
                      <div className="col-md">
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                      </div>
                      <div className="col-md">
                        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                      </div>
                    </div>
                    <div className="row team center-xs">
                      <div className="col-md">
                        <div className="hover-outer-box">
                          <img src="img/Romi-Kobe.jpg" alt="Team Member" />
                          <div className="hover-inner-box">
                            <div className="hover-content">
                              <h3>Romi Kobe</h3>
                              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/facebook-icon.svg" className="team-icon" alt="Facebook" /></a>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/twitter-icon.svg" className="team-icon" alt="Twitter" /></a>
                            </div>
                          </div>
                        </div>
                        <p className="team-name">Romi Kobe<br /><span className="position">CEO</span></p>
                      </div>
                      <div className="col-md">
                        <div className="hover-outer-box">
                          <img src="img/Isaac-Desideria.jpg" alt="Team Member" />
                          <div className="hover-inner-box">
                            <div className="hover-content">
                              <h3>Isaac Desideria</h3>
                              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/facebook-icon.svg" className="team-icon" alt="Facebook" /></a>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/twitter-icon.svg" className="team-icon" alt="Twitter" /></a>
                            </div>
                          </div>
                        </div>
                        <p className="team-name">Isaac Desideria<br /><span className="position">CTO</span></p>
                      </div>
                      <div className="col-md">
                        <div className="hover-outer-box">
                          <img src="img/Magda-Ilija.jpg" alt="Team Member" />
                          <div className="hover-inner-box">
                            <div className="hover-content">
                              <h3>Magda Ilija</h3>
                              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/facebook-icon.svg" className="team-icon" alt="Facebook" /></a>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/twitter-icon.svg" className="team-icon" alt="Twitter" /></a>
                            </div>
                          </div>
                        </div>
                        <p className="team-name">Magda Ilija<br /><span className="position">Designer</span></p>
                      </div>
                    </div>
                  </div>
                </section>
                <hr />

                {/*section services*/}
                <section className="services" id="services">
                  <div className="container">
                    <div className="row center-xs">
                      <div className="col-md">
                        <h2 className="section-title">Servicios</h2>
                      </div>
                    </div>
                    <div className="row around-xs">
                      <div className="col-md-3">
                        <div className="service">
                          <img src="img/001-achievement.svg" alt="Service 1" className="icon"/>
                          <h3>Desarrollo Creativo</h3>
                          <p>Encontraremos tu estilo ideal, conoceremos tus gustos e intereses y encontraremos el estilo ideal que vas a transmitir en tu look y personalidad.</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="service">
                          <img src="img/002-pencil.svg" alt="Service 2"  className="icon"/>
                          <h3>Planificacion</h3>
                          <p>Te preparamos para ser un verdadero artista <b>profesional</b>, empleamos tecnicas creativas de alto conocimiento civico y radical.</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="service">
                          <img src="img/003-idea.svg" alt="Service 3" className="icon"/>
                          <h3>Proyeccion</h3>
                          <p>Compartimos tu arte al mundo. insertaremos tu arte al mundo digital, a traves de practicas de alto nivel. Tenemos <b>años en la industria </b> y somos los mejores, representamos artistas del calibre de Ricky Martin hasta Robert Deniro.</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="service">
                          <img src="img/004-shopping-bag.svg" alt="Service 4" className="icon"/>
                          <h3>Ganancias</h3>
                          <p>Sabemos que para generar un vinculo de confianza, lo primero es la comunicacion y sinceridad. Nos quedaremos solo con un <b>70%</b> de tus ganancias anuales.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr />

                {/*portaafolios */}
                    <PortfolioSection />
                {/*portaafolios */}
                <hr />
                <section className="benefits" id="benefits">
                  <div className="container">
                    <div className="row center-xs">
                      <div className="col-md">
                        <h2 className="section-title">Benefits</h2>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-md-4">
                        <div className="benefit">
                          <img src="img/benefit-icon1.svg" alt="Benefit 1" />
                          <h3>Benefit 1</h3>
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="benefit">
                          <img src="img/benefit-icon2.svg" alt="Benefit 2" />
                          <h3>Benefit 2</h3>
                          <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="benefit">
                          <img src="img/benefit-icon3.svg" alt="Benefit 3" />
                          <h3>Benefit 3</h3>
                          <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
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
                          <p>123 Main Street, City</p>
                          <p>Email: info@company.com</p>
                          <p>Phone: +123 456 789</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
         
          </body>
     
      );
    }

export default Index;