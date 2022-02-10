import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <Container>
      <h1>Submit your details</h1>
      <Row>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
          <Form>
            <Form.Group className="mb-3" controlId="form.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Allow us to sell your personal details to whomever we want"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
          <Row>
            <div>
              <FontAwesomeIcon icon={faEnvelope} /> hello@yay.com
            </div>
          </Row>
          <Row>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              123 456 7890
            </div>
          </Row>
          <Row>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <ul className="list-unstyled">
                <li>123 Some Street</li>
                <li>Somewhere</li>
                <li>Some City</li>
                <li>10000</li>
              </ul>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
