import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardUi(props) {
  return (
    <Card className="shadow-sm border-0">
      <Card.Img className="img-fluid" variant="top" src={props.imgsrc} alt="" />
      <Card.Body>
        <Card.Title>Nunc porttitor vel</Card.Title>
        <Card.Text className="lh-sm">
          Nunc malesuada eget est fringilla dapibus.
        </Card.Text>
        <div className="card__button">
          <Button variant="button-large" className="stretched-link">
            MORE
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardUi;
