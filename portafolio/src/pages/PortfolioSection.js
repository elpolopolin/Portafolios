import {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const PortfolioSection = () => {
 
  const [selectedItem, setSelectedItem] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);


  useEffect(() => {
    axios.get('/portfolio.json') 
      .then((response) => {
        setPortfolioItems(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []); 

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="row center-xs">
          <div className="col-md">
            <h2 className="section-title text-2xl">Portfolio</h2>
            <p className='text-xl'>Nuestras colaboraciones con otros artistas</p>
          </div>
        </div>
      </div>
      <div className="padding-small">
        <div className="row margin-bottom-small">
         
                {
          portfolioItems &&
          portfolioItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="hover-outer-box">
                <img src={item.image} alt={`Project ${index + 1}`} style={{ height: "55vh", marginBottom: "10px" }} />
                <div className="hover-inner-box">
                  <div className="hover-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.link}>
                    <Link to={`/ver/${index + 1}`}><button className="bg-pink-400 rounded-md p-2 w-24">Ver</button> </Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
            
    
        </div>
      </div>
   
    </section>
  );
};

export default PortfolioSection;