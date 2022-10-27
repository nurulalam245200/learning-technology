import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "../Shared/CourseCard/CoursesCard";
import LeftNav from "../Shared/LeftNav/LeftNav";

const Category = () => {
  const course_category = useLoaderData();
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            <LeftNav></LeftNav>
          </Col>
          <Col lg="8">
            <h1 className="text-center">
              This catagories Has news : {course_category.length}
            </h1>
            <div>
              {course_category.map((course) => (
                <CoursesCard key={course.id} course={course}></CoursesCard>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
