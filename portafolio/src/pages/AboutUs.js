import React from 'react'

export default function AboutUs() {
  return (
    <div>
         <section className="intro" id="about-us">
                  <div className="container">
                    <div className="row">
                      <div className="col-md">
                        <h2 className="section-title">Sobre Nosotros</h2>
                      </div>
                    </div>
                    <div className="row margin-bottom">
                      <div className="col-md">
                        <p className="highlight">Buscamos impulsar el talento de los jovenes artitas que quieren un futuro con la musica, el talento avaces se encuentra donde menos te los esperes.</p>
                        <p className="author">- Rumpelinsky</p>
                      </div>
                      <div className="col-md">
                        <p>Hemos colaborado con grandes artitas a nivel internacional como travis scott, king von y lil baby, no solo sabemos producir mezclas si no que tambien tenemos nuestros proyectos individuales.</p>
                      </div>
                      <div className="col-md">
                        <p>Tenemos artistas firmados por nuestro sello discografico y trabajamos en conjuntos para beneficio de ambos.</p>
                      </div>
                    </div>
                    <div className="row team center-xs">
                      <div className="col-md">
                        <div className="hover-outer-box">
                          <img src={require("../img/rocco.jpg")} alt="Team Member" />
                          <div className="hover-inner-box">
                            <div className="hover-content">
                              <h3>Rocco Bolainas</h3>
                              <p>Fundador del estudio y productor.</p>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/facebook-icon.svg" className="team-icon" alt="Facebook" /></a>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/twitter-icon.svg" className="team-icon" alt="Twitter" /></a>
                            </div>
                          </div>
                        </div>
                        <p className="team-name">Rocco Bolainas<br /><span className="position">CEO/productor</span></p>
                      </div>
                      <div className="col-md">
                        <div className="hover-outer-box">
                          <img src={require("../img/polo.jpg")} alt="Team Member" />
                          <div className="hover-inner-box">
                            <div className="hover-content">
                              <h3>Antoan Polonsky</h3>
                              <p>Cofundador del estudio y guitarrista profesinal.</p>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/facebook-icon.svg" className="team-icon" alt="Facebook" /></a>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/twitter-icon.svg" className="team-icon" alt="Twitter" /></a>
                            </div>
                          </div>
                        </div>
                        <p className="team-name">Antoan Polonsky<br /><span className="position">CEO/Artista</span></p>
                      </div>
                      <div className="col-md">
                        <div className="hover-outer-box">
                          <img src={require("../img/forni.jpg")} alt="Team Member" />
                          <div className="hover-inner-box">
                            <div className="hover-content">
                              <h3>Tomas Forxxo</h3>
                              <p>Artista destacado del genero urbano.</p>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/facebook-icon.svg" className="team-icon" alt="Facebook" /></a>
                              <a href="#!" target="_blank" rel="noopener"><img src="img/twitter-icon.svg" className="team-icon" alt="Twitter" /></a>
                            </div>
                          </div>
                        </div>
                        <p className="team-name">Tomas Forxxo<br /><span className="position">Artista</span></p>
                      </div>
                    </div>
                  </div>
                </section>

    </div>
  )
}
