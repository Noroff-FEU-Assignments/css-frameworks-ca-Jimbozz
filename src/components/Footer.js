import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeoV, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row align-items-center>
          <Col md={5} className="footer__icons">
            <FontAwesomeIcon icon={faVimeoV} />
            <FontAwesomeIcon icon={faYoutube} />
          </Col>
          <Col className="footer__text">
            <Col md="auto">hello@yay.com</Col>
            <Col md="auto">Copyright 2020</Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
