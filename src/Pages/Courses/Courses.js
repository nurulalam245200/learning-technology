import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNav from "../Shared/LeftNav/LeftNav";
import CoursesCard from "../Shared/CourseCard/CoursesCard";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const courseData = useLoaderData();
  return (
    <Container>
      <Row>
        <Col lg="3">
          <div className="">
            <LeftNav></LeftNav>
          </div>
        </Col>
        <Col lg="9">
          <>
            {courseData.map((data) => (
              <CoursesCard key={data.id} course={data}></CoursesCard>
            ))}
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
