import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => (
  <div className="footer" id="Footer">
    <Container>
      <Row>
        <Col xs={12}>
          <a href="https://nomorepandemics.com/">No More Pandemics</a>
          <a href="https://nomorepandemics.com/?page_id=102">Who We Are</a>
          <a href="https://nomorepandemics.com/?page_id=104">How we work</a>
          <a href="https://nomorepandemics.com/?page_id=12">Contact Us</a>
          © 2021 No More Pandemics
          <br />
        </Col>
      </Row>
    </Container>
  </div>
);
export default Footer;
