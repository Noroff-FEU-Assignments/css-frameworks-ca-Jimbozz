import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import SlideOne from "../../assets/images/carousel/carousel-1.jpg";
import SlideTwo from "../../assets/images/carousel/carousel-2.jpg";
import SlideThree from "../../assets/images/carousel/carousel-3.jpg";
import TabOne from "../../assets/images/tab/tab-1.jpg";
import TabTwo from "../../assets/images/tab/tab-2.jpg";
import TabThree from "../../assets/images/tab/tab-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <Carousel className="top__padding" controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
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
      <Container className="intro">
        <h1>We do YAY things</h1>
        <p>
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
          venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
          ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
        </p>
      </Container>
      <Container className="tabs">
        <Accordion defaultActiveKey="0" className="d-md-none shadow">
          <Accordion.Item eventKey="0">
            <Accordion.Header>First</Accordion.Header>
            <Accordion.Body>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
              </p>
              <img
                className="d-block w-100"
                src={TabOne}
                alt="Television against wall"
              />
              <div className="accordion__icons">
                SHARE
                <Link to="/#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link to="/#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Second</Accordion.Header>
            <Accordion.Body>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
              </p>
              <img
                className="d-block w-100"
                src={TabTwo}
                alt="Frames on wall"
              />
              <div className="accordion__icons">
                SHARE
                <Link to="/#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link to="/#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Third</Accordion.Header>
            <Accordion.Body>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
              </p>
              <img
                className="d-block w-100"
                src={TabThree}
                alt="Rusted wall with window"
              />
              <div className="accordion__icons">
                SHARE
                <Link to="/#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link to="/#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
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
                    <div>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </div>
                    <div className="tab__icons d-flex align-items-center">
                      SHARE
                      <Link to="/#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                      <Link to="/#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </div>
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
                    <div>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </div>
                    <div className="tab__icons d-flex align-items-center">
                      <div>SHARE</div>
                      <Link to="/#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                      <Link to="/#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </div>
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
                    <div>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </div>
                    <div className="tab__icons d-flex align-items-center">
                      SHARE
                      <Link to="/#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                      <Link to="/#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </div>
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
