import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="footer__icons">
            <Icon.Vimeo />
            <Icon.Youtube />
          </Col>
          <Col>
            <Row className="justify-content-md-between footer__text">
              <Col md="auto">hello@yay.com</Col>
              <Col md="auto">Copyright 2020</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
