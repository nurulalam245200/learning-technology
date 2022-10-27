import React from "react";
import logo from "../../images/home.png";
const Home = () => {
  return (
    <div className="mx-auto">
      <h1
        style={{ backgroundImage: "linear-gradient(darkblue, skyblue)" }}
        className="text-light fs-1 fw-bold text-center"
      >
        Welcome Our E-learning website
      </h1>

      <p className="fs-5 fw-semibold text-center">
        We are provide diffrent Types of Courses for you and Your Children. We
        want to share knowledge by our some ideas. <br /> We always care about
        you or your child future.We will do better for learning but you have to
        share you problem <br /> without any condition.We always with you or
        your child.Best of luck !!!
      </p>
      <img className="w-100 " style={{ height: "350px" }} src={logo} alt="" />
    </div>
  );
};

export default Home;
