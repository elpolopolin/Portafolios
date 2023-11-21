import React from 'react'

export default function Services() {
  return (
    <div>
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

    </div>
  )
}
