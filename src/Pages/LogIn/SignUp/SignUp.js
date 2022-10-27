import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, upadateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    console.log(email, password, name, photoURL);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile();
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdateUserProfile = () => {
    upadateUserProfile()
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Form style={{ width: "50%" }} className="mx-auto" onSubmit={handleSubmit}>
      <Form.Text
        className="text-center my-5 text-primary fw-semibold"
        style={{ fontSize: "28px" }}
      >
        Registation Form Here!!
      </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PhotoUrl</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms">Terms And Condition</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default SignUp;
