import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardUi(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.imgsrc} alt="" />
      <Card.Body>
        <Card.Title>Nunc porttitor vel</Card.Title>
        <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
        <div className="card__button">
          <Button variant="button-large">MORE</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardUi;
