import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../CardUi";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import img1 from "../../assets/images/news/news-1.jpg";
import img2 from "../../assets/images/news/news-2.jpg";
import img3 from "../../assets/images/news/news-3.jpg";
import img4 from "../../assets/images/news/news-4.jpg";
import img5 from "../../assets/images/news/news-5.jpg";
import img6 from "../../assets/images/news/news-6.jpg";
import img7 from "../../assets/images/news/news-7.jpg";
import img8 from "../../assets/images/news/news-8.jpg";

function News() {
  return (
    <Container className="news top__padding">
      <h1 className="news__heading">News</h1>
      <Pagination className="news__pagination">
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
      </Pagination>
      <Row xs={1} sm={2} md={4} className="g-4">
        <Col>
          <Card imgsrc={img1} />
        </Col>
        <Col>
          <Card imgsrc={img2} />
        </Col>
        <Col>
          <Card imgsrc={img3} />
        </Col>
        <Col>
          <Card imgsrc={img4} />
        </Col>
        <Col>
          <Card imgsrc={img5} />
        </Col>
        <Col>
          <Card imgsrc={img6} />
        </Col>
        <Col>
          <Card imgsrc={img7} />
        </Col>
        <Col>
          <Card imgsrc={img8} />
        </Col>
      </Row>
      <Pagination className="news__pagination--two">
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
      </Pagination>
    </Container>
  );
}

export default News;
