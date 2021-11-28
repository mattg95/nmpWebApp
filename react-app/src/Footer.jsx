import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => (
  <div className="footer" id="Footer">
    <Container>
      <Row>
        <Col xs={12}>
          <a href="https://nomorepandemics.com/">
            A No More Pandemics Campaign
          </a>
          © 2021 No More Pandemics
          <br />
        </Col>
      </Row>
    </Container>
  </div>
);
export default Footer;
