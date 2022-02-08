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
          <Col className="footer__icons">
            <Icon.Vimeo />
            <Icon.Youtube />
          </Col>
          <Col>hello@yay.com</Col>
          <Col>Copyright 2022</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
