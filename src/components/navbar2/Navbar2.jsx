import React from 'react';
import './Navbar2.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from './levis.png'

const Navbar2 = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-light">
        <Container fluid>
        
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <div className="d-flex justify-content-center align-items-center">
              <Carousel data-bs-theme="dark" interval={3000} showIndicators={false}>
                <Carousel.Item>
                
  <p style={{ color: 'black' }}>Free Shipping </p>
  <Carousel.Caption>

  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <p>See What's new at Store</p>
                <Carousel.Caption>

                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <p>30% off at Checkout</p>
                <Carousel.Caption>

                </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          
              {/* Use Nav.Link for each navigation item */}
              <Nav.Link href="#home">Login</Nav.Link>
              <Nav.Link href="#features">Sign Up</Nav.Link>
              <Nav.Link href="#pricing">Find stores& Services</Nav.Link>
              <Nav.Link href="#about">United States</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar2;
