import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const CoursesCard = ({ course }) => {
  const { id, name, image, details, price } = course;
  return (
    <Card style={{ width: "75%" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details.length > 200 ? (
            <>
              {details.slice(0, 190) + "..."}{" "}
              <Link to={`/course/${id}`}>learn More</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
        <div className="">
          <Button variant="primary">Get Primium</Button>
          <p className="text-muetd">${price}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CoursesCard;
