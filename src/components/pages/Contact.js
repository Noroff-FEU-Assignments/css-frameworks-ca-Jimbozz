import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <Container>
      <h1>Submit your details</h1>
      <Row>
        <Col>
          <Container>
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
                <Form.Control as="textarea" rows={3} />
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
          </Container>
        </Col>
        <Col>column 2</Col>
      </Row>
    </Container>
  );
}

export default Contact;
