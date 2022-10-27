import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const CoursesCard = ({ course }) => {
  const { id, name, image, details, price } = course;
  return (
    <Card className="mx-auto mb-3 mt-2" style={{ width: "75%" }}>
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
        <div className="d-flex justify-content-between align-items-center">
          <Link className="text-decoration-none" to={`/course/${id}`}>
            Go Details
          </Link>
          <p className="text-muetd">${price}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CoursesCard;
