import React, { useState } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider';
import './CardsRow.css'; // Make sure to import the CSS file

const CardsRow = ({ cards }) => {
  const [sliderOpen, setSliderOpen] = useState(false);

  const toggleSlider = () => {
    setSliderOpen(!sliderOpen);
  };

  return (
    <div className={`row ${sliderOpen ? 'offcanvas-open' : ''}`}>
      <div className={`col-lg-${sliderOpen ? '3' : '12'} col-md-12 col-sm-12 mb-2`}>
        <button className="btn btn-filter filter-1" onClick={toggleSlider}>
          <FontAwesomeIcon icon={faBars} className="mx-3" /> filter / Sort
        </button>
     
      {sliderOpen && (
        <div className="offcanvas-container  col-md-12 col-sm-12 mt-3"  style={{ overflowY: 'scroll', height: '2000px',display:`block` }}>
          <Slider />
          <a className="close-button" onClick={toggleSlider}>
          <FontAwesomeIcon icon={faTimes} />
          </a>
      
        </div>
        
        
      )}
      </div>
      <div className={`col-lg-${sliderOpen ? '9' : '12'} col-md-12 col-sm-12`}>
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className={`col-lg-4 col-md-6 mb-3`}>
              <Card img={card.image} title={card.title} content={card.content} content2={card.content2} content3={card.content3}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsRow;
