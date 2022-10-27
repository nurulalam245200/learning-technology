import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { FaFileDownload, FaMoneyBill } from "react-icons/fa";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
  const detailsData = useLoaderData();
  const { id, name, details, price, image } = detailsData;
  return (
    <div ref={ref}>
      <Card className="mx-auto" style={{ width: "70%" }}>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf}>
              <button className="">
                <FaFileDownload></FaFileDownload>
              </button>
            </button>
          )}
        </Pdf>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <p>
              <FaMoneyBill className="fs-3 text-warning"></FaMoneyBill> ${price}
            </p>
            <Link to={`/primium/${id}`}>Get Premium</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
