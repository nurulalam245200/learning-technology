import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h2>We Will Provide free access!!</h2>
      <p>But you have to full fill Terms And Condition</p>
      <p>
        Goto <Link to="/register">Register</Link> Page
      </p>
    </div>
  );
};

export default TermsAndCondition;
