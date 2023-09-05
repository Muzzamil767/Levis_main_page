import React from "react";
import "./Footer1.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Footer1 = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block">
              <ul className="custom-list">
                <h5>Special Discount</h5>
                <li>Levi's promo code</li>
                <li>Teacher discount</li>
                <li>Military discount</li>
                <li>Medicine & First Responder</li>
                <li>Student discount</li>
                <li>Red Tab member Program</li>
              </ul>
            </div>
            <div className="col-lg-2 d-none d-lg-block">
              <ul className="custom-list">
                <h5>Support</h5>
                <li>Help</li>
                <li>Return & Exchange</li>
                <li>Shipping</li>
                <li>Track Order</li>
                <li>Payment Accepted</li>
                <li>Gift Cards</li>
                <li>Unsubscribe</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div className="col-lg-2 d-none d-lg-block">
              <ul className="custom-list">
                <h5>Company</h5>
                <li>About US</li>
                <li>Our Values</li>
                <li>Careers</li>
                <li>Affiliate Program</li>
                <li>Submit Your Idea</li>
              </ul>
            </div>
            <div className="col-lg-2 d-none d-lg-block">
              <ul className="custom-list">
                <h5>Store</h5>
                <li>Find a Store</li>
                <li>Store Services</li>
                <li>Shop by Appointment</li>
                <li>Levi's Secondhand</li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <ul className="custom-list">
                <h5>Our Brands</h5>
                <li>Levi's</li>
                <li>Dockers</li>
                <li>Denizen</li>
                <li>Beyond Yoga</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="d-md-none">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Special Discount</Accordion.Header>
            <Accordion.Body>
              <ul className="custom-list2">
                <li>Levi's promo code</li>
                <li>Teacher discount</li>
                <li>Military discount</li>
                <li>Medicine & First Responder</li>
                <li>Student discount</li>
                <li>Red Tab member Program</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Support</Accordion.Header>
            <Accordion.Body>
              <ul className="custom-list2">
                <li>Help</li>
                <li>Return & Exchange</li>
                <li>Shipping</li>
                <li>Track Order</li>
                <li>Payment Accepted</li>
                <li>Gift Cards</li>
                <li>Unsubscribe</li>
                <li>Accessibility</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header> Company</Accordion.Header>
            <Accordion.Body>
              <ul className="custom-list2">
                <li>About US</li>
                <li>Our Values</li>
                <li>Careers</li>
                <li>Affiliate Program</li>
                <li>Submit Your Idea</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Store</Accordion.Header>
            <Accordion.Body>
              <ul className="custom-list2">
                <li>Find a Store</li>
                <li>Store Services</li>
                <li>Shop by Appointment</li>
                <li>Levi's Secondhand</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Our Brands</Accordion.Header>
            <Accordion.Body>
              <ul className="custom-list2">
                <h5>Our Brands</h5>
                <li>Levi's</li>
                <li>Dockers</li>
                <li>Denizen</li>
                <li>Beyond Yoga</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Footer1;
