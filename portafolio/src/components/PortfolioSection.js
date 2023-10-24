import React from 'react';

const PortfolioSection = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="row center-xs">
          <div className="col-md">
            <h2 className="section-title">Portfolio</h2>
            <p>Nuestras Creaciones</p>
          </div>
        </div>
      </div>
      <div className="padding-small">
        <div className="row margin-bottom-small">
          {portfolioItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="hover-outer-box">
                <img src={item.image} alt={`Project ${index + 1}`} />
                <div className="hover-inner-box">
                  <div className="hover-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.link}>
                      <button className="light">Call to action</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    title: 'Project Title 4',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    image: 'img/project-4.jpg',
    link: '#',
  },
  {
    title: 'Project Title 5',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    image: 'img/project-5.jpg',
    link: '#',
  },
  {
    title: 'Project Title 6',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    image: 'img/project-6.jpg',
    link: '#',
  },
];