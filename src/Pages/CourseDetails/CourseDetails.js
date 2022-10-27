import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { FaMoneyBill } from "react-icons/fa";

const CourseDetails = () => {
  const detailsData = useLoaderData();
  const { name, details, price, image } = detailsData;
  return (
    <Card className="mx-auto" style={{ width: "50%" }}>
      <Card.Text
        style={{
          backgroundColor: "darkred",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <Link className="text-decoration-none text-white">Download PDF</Link>
      </Card.Text>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <p>
            <FaMoneyBill className="fs-3 text-warning"></FaMoneyBill> ${price}
          </p>
          <Link to="/premium">Get Premium</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseDetails;
