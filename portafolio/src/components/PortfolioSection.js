import {useState, useEffect} from 'react';
import axios from 'axios';


const PortfolioSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  }

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  }

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
            <h2 className="section-title">Portfolio</h2>
            <p>Nuestras colaboraciones con otros artistas</p>
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
                      <button onClick={(e) => { e.preventDefault(); openModal(item); }} className="light">Ver</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
             {isModalOpen && selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedItem.image} />
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>
            <a href={selectedItem.link}>Enlace</a>
            <button onClick={closeModal} className="light">Cerrar</button>
          </div>
        </div>
      )}
        </div>
      </div>
   
    </section>
  );
};

export default PortfolioSection;