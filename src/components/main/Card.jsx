import React from 'react';
import './Card.css'
import icon2 from './icon2.jpeg'
import icon3 from './icon3.jpg'
import icon4 from './icon4.jpg'
import icon5 from './icon5.jpeg'

const Card = ({ title, content,img,content2, content3 }) => {
  return (
    <div className="card-custom card mb-3">
    <div className='card-image-custom card-img' >
    <img src={img} alt={title}  />
    </div>
 
      <div className="card-body-custom">
      
    
        <p className="card-text-custom">{content}</p>
        <h5 className="card-title-custom "style={{fontSize:`small`}}>{title}</h5>
   
        <p style={{color:`#C4627E`,fontSize:`smaller`}} className="card-text-custom">{content2}</p>
      </div>
    </div>
  );
};

export default Card;