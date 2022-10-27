import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNav from "../Shared/LeftNav/LeftNav";

const Courses = () => {
  return (
    <Container>
      <Row>
        <Col lg="3">
          <LeftNav></LeftNav>
        </Col>
        <Col lg="9"></Col>
      </Row>
    </Container>
  );
};

export default Courses;
