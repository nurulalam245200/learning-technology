import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const LogIn = () => {
  const { userLogIn } = useContext(AuthContext);

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
      })
      .catch((error) => {
        console.log(error);
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
        <Form.Control type="email" name="name" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default LogIn;
