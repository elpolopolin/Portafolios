import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md center-xs">
            <img
              src="img/logo.png"
              className="margin-bottom"
              style={{ maxWidth: '150px' }}
              alt="Footer Logo"
            />
          </div>
        </div>
        <div className="row margin-bottom-small">
          <div className="col-md-8">
            <h3>About us</h3>
            <p>
              We are a group of famous musicians who have been rocking the world with our music. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#why-us">Why us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md ">
            <p>
              Follow us on{' '}
              <a href="https://twitter.com/musicians" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#38A1F3' }}>
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
            </p>
            <p>
             Website created by LOSPOLLOSANALOG
            </p>
            <p>
              More information at{' '}
              <a href="https://campusort.com.ar" target="_blank" rel="noopener">
                campus ort
              </a>
            </p>
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">
              <img alt="Creative Commons License" style={{ borderWidth: 0, maxWidth: '60px' }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
            </a>
            <br />
            
            <p>I thank the following people for their contribution: <a href="credits.txt">Credits</a>.</p>
          </div>
        </div>
      </div>
    </footer>

 

       
  );
};

export default Footer;