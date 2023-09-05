import React from "react";
import './UpperFooter.css'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/upperfooter/ExampleCarouselImage'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'
import img4 from './img4.jpeg'
import img5 from './img5.jpeg'
import img6 from './img6.jpeg'
import img7 from './img7.jpeg'

const UpperFooter = () => {
    
  return (
    <>
    <div className="whole">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12 ">
          <h5 style={{fontWeight:`bolder`, marginTop:`60px`}}>#LIVEINLEVIS</h5>
          {/*for carousel */}
          <Carousel style={{ marginTop: `70px` }}>
  <Carousel.Item>
    <div className="d-flex justify-content-center"> {/* Center both images horizontally */}
      <div>
        <img src={img1} className="carousel-image a1" style={{ margin: `20px`, width: '100%' }} />
      </div>
      <div className="d-none d-md-block"> {/* Hide on small screens */}
        <img src={img2} className="carousel-image a2" style={{ margin: `20px`, width: '100%' }} />
      </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex justify-content-center">
      <div>
        <img src={img3} className="carousel-image" style={{ margin: `20px`, width: '100%' }} />
      </div>
      <div className="d-none d-md-block"> {/* Hide on small screens */}
        <img src={img4} className="carousel-image" style={{ margin: `20px`, width: '100%' }} />
      </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex justify-content-center">
      <div>
        <img src={img5} className="carousel-image" style={{ margin: `20px`, width: '100%' }} />
      </div>
      <div className="d-none d-md-block"> {/* Hide on small screens */}
        <img src={img6} className="carousel-image" style={{ margin: `20px`, width: '100%' }} />
      </div>
      </div>
      </Carousel.Item>
      
  
 
</Carousel>


          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 ">
            <h3 style={{fontWeight:`bolder`,marginTop:`35px`}}>20% Off + Free <br/>Shipping</h3>
            <p >For All New Levi's Email Suscribe</p>
            <input type="email" placeholder="Email*" className="email"/>
            <p style={{fontSize:`small` ,marginTop:`15px`, marginBottom:`15px`, opacity:`0.7`}}>Send me the new & from the LS&CO. Group of <br/>Companies. I can <span style={{fontWeight:`bold` ,textDecoration:`underline`}}>unsuscribe</span>.<br/>at any time i have read the LS&CO.<span style={{fontWeight:`bold` ,textDecoration:`underline`}}>Privacy Policy</span> offer detail,financial incentives and exclusions available <span style={{fontWeight:`bold` ,textDecoration:`underline`}}>here</span>.</p>
            <div className="d-grid gap-2">
      <Button variant="dark" size="lg">
        Sign Up
      </Button>
     
    </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default UpperFooter;
