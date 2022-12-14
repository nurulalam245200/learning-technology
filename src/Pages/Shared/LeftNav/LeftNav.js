import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCatgories] = useState([]);

  useEffect(() => {
    fetch("https://learning-technology-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCatgories(data));
  }, []);
  return (
    <div>
      <h4>Total Courses :{categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
