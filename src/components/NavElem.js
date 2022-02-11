import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink } from "react-router-dom";

function NavElem() {
  return (
    <Navbar bg="light" expand="md" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavLink className={"nav__style"} to="/">
              Home
            </NavLink>
            <NavLink className={"nav__style"} to="/news">
              News
            </NavLink>
            <NavLink className={"nav__style"} to="/contact">
              Contact
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <InputGroup>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                Go
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavElem;
