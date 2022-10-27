import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const LogIn = () => {
  const { userLogIn, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogInSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user?.emailVerified) {
          toast.success("your Account is verified");
          navigate(from, { replace: true });
        } else {
          toast.error("You should verify your email check email or spam!");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Form
      style={{ width: "50%" }}
      className="mx-auto"
      onSubmit={handleLogInSubmit}
    >
      <Form.Text
        className="text-center mb-5 text-primary fw-semibold"
        style={{ fontSize: "28px" }}
      >
        Log In Here!!
      </Form.Text>
      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Form.Text className="ms-2 text-warning">{error}</Form.Text>
      </div>
    </Form>
  );
};

export default LogIn;
