import {useState, useEffect} from 'react';



const PortfolioSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  }

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  }
  
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
          {portfolioItems.map((item, index) => (
            <div className="col-md-4 " key={index}>
              <div className="hover-outer-box">
                <img src={item.image} alt={`Project ${index + 1}`} style={{height: "55vh", marginBottom: "10px"}}/>
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
          ))}
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

const portfolioItems = [
  {
    title: 'What It Means to Be King',
    description: 'the way to be the king of the block',
    image: 'https://static.hiphopdx.com/2020/11/kingvonalbumcover.jpg',
    link: '#',
  },
  {
    title: 'UTOPIA',
    description: 'feel what you hear and listen to what you feel',
    image: 'https://img1.wsimg.com/isteam/ip/52dec005-a404-4023-8c5e-0944af49ac85/FwhTOJ4X0AApKIr.jpg',
    link: '#',
  },
  {
    title: 'Bocanada',
    description: 'Arte Guitarrozo',
    image: 'https://i.scdn.co/image/ab67616d0000b2731152471596980e1bba03b6ab',
    link: '#',
  },
  {
    title: 'Too Hard',
    description: 'I can live off my closet before I go broke',
    image: 'https://i.discogs.com/fCpiagQhsq_tnNAhtlHEgMImF2f71vyOG4yBf_IJ1d8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNDI2/NTU0LTE2NjAwNzU2/MTktNjkyMi5qcGVn.jpeg',
    link: '#',
  },
  {
    title: 'My Blood',
    description: 'Puente Alto',
    image: 'https://e.snmc.io/i/600/s/2786f7745ec150bf179618ae811cc08c/7404820/polima-westcoast-my-blood-Cover-Art.png',
    link: '#',
  },
  {
    title: 'BZRP',
    description: 'loading',
    image: 'https://corta.com/wp-content/uploads/2023/07/Bizarrap-gorra.jpg',
    link: '#',
  },
];