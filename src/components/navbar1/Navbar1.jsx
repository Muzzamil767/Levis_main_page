import React from 'react';
import './Navbar1.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from './levis.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar1 = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-light p-4 " >
        <Container fluid>
        <Navbar.Brand href="#" className="navbar-brand d-lg-none mx-auto mb-2">
            <img src={logo} alt="Logo" width="100" height="60" className="d-inline-block align-center" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 link" style={{ maxHeight: '400px' }} navbarScroll>
              <Nav.Link  style={{fontWeight:`bolder`, color:`black`}}>Shop</Nav.Link>
              <Nav.Link  style={{fontWeight:`bolder`, color:`black`}}>Discover</Nav.Link>
              <Nav.Link  style={{fontWeight:`bolder`, color:`black`}}>Secondhand</Nav.Link>
            </Nav>
            <Navbar.Brand href="#" className="navbar-brand d-none d-lg-block">
                <img src={logo} alt="Logo" width="100" height="60" className="d-inline-block align-center" />
              </Navbar.Brand>
           
            <Form className="d-flex">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <Form.Control type="search" placeholder="looking for?" className="me-2 custom-search-input mx-3" aria-label="Search" />
              <div className="icons-container">
              <FontAwesomeIcon icon={faHeart} className="heart-icon mx-3" />
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon mx-3" />
            </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
