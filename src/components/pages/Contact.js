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
    <Container className="top__padding">
      <h1 className="my-5">Submit your details</h1>
      <Row>
        <Col
          className="mb-5"
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}>
          <Form className="p-4 bg-light bg-gradient">
            <Form.Group className="mb-3" controlId="form.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Label htmlFor="basic-url">Website</Form.Label>
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
                className="d-flex align-items-center"
                type="checkbox"
                label="Allow us to sell your personal details to whomever we want"
              />
            </Form.Group>
            <Button
              variant="contact"
              className="w-100 p-2 rounded-1"
              type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center p-3">
              <FontAwesomeIcon className="me-4" icon={faEnvelope} />
              <span>hello@yay.com</span>
            </li>
            <li className="d-flex align-items-center p-3">
              <FontAwesomeIcon className="me-4" icon={faPhone} />
              <span>123 456 7890</span>
            </li>
            <li className="address p-3 d-flex">
              <FontAwesomeIcon className="me-4" icon={faMapMarkerAlt} />
              <ul className="list-unstyled">
                <li>123 Some Street</li>
                <li>Somewhere</li>
                <li>Some City</li>
                <li>10000</li>
              </ul>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
