import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import * as Icon from "react-bootstrap-icons";
import SlideOne from "../../assets/images/carousel/carousel-1.jpg";
import SlideTwo from "../../assets/images/carousel/carousel-2.jpg";
import SlideThree from "../../assets/images/carousel/carousel-3.jpg";
import TabOne from "../../assets/images/tab/tab-1.jpg";
import TabTwo from "../../assets/images/tab/tab-2.jpg";
import TabThree from "../../assets/images/tab/tab-3.jpg";

function index() {
  return (
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 container__image"
            src={SlideOne}
            alt="bicycle and old televisions on shelves"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SlideTwo} alt="analogue camera" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SlideThree}
            alt="broken television"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <h1>We do YAY things</h1>
        <p>
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
          rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
          finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
          consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
          euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </p>
      </Container>
      <Container>
        <Accordion defaultActiveKey="0" className="d-md-none">
          <Accordion.Item eventKey="0">
            <Accordion.Header>First</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <img
                className="d-block w-100"
                src={TabOne}
                alt="Television against wall"
              />
              <Row className="tabbed__content">
                SHARE
                <Icon.Facebook />
                <Icon.Twitter />
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Second</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <img
                className="d-block w-100"
                src={TabTwo}
                alt="Frames on wall"
              />
              <Row className="tabbed__content">
                SHARE
                <Icon.Facebook />
                <Icon.Twitter />
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Third</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <img
                className="d-block w-100"
                src={TabThree}
                alt="Rusted wall with window"
              />
              <Row className="tabbed__content">
                SHARE
                <Icon.Facebook />
                <Icon.Twitter />
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="d-none d-md-block">
          <Tabs
            defaultActiveKey="first"
            id="uncontrolled-tab-example"
            className="mb-3">
            <Tab eventKey="first" title="First">
              <Container>
                <Row>
                  <Col md={4}>
                    <img
                      className="d-block w-100"
                      src={TabOne}
                      alt="Television against wall"
                    />
                  </Col>
                  <Col>
                    <Row>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </Row>
                    <Row className="tabbed__content">
                      SHARE
                      <Icon.Facebook />
                      <Icon.Twitter />
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="second" title="Second">
              <Container>
                <Row>
                  <Col md={4}>
                    <img
                      className="d-block w-100"
                      src={TabTwo}
                      alt="Frames on wall"
                    />
                  </Col>
                  <Col>
                    <Row>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </Row>
                    <Row className="tabbed__content">
                      SHARE
                      <Icon.Facebook />
                      <Icon.Twitter />
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="third" title="Third">
              <Container>
                <Row>
                  <Col md={4}>
                    <img
                      className="d-block w-100"
                      src={TabThree}
                      alt="Rusted wall with window"
                    />
                  </Col>
                  <Col>
                    <Row>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </Row>
                    <Row className="tabbed__content">
                      SHARE
                      <Icon.Facebook />
                      <Icon.Twitter />
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default index;
