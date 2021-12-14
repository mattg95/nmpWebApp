import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => (
  <div className="footer" id="Footer">
    <Container>
      <Row>
        <Col xs={12}>
          <a href="https://nomorepandemics.com/">
            Find out about No More Pandemics
          </a>
          <a href="https://nomorepandemics.com/who-we-are">Who We Are</a>
          <a href="https://nomorepandemics.com/how-we-work">How we work</a>
          <a href="https://nomorepandemics.com/contact">Contact Us</a>
          © 2021 No More Pandemics
          <br />
        </Col>
      </Row>
    </Container>
  </div>
);
export default Footer;
