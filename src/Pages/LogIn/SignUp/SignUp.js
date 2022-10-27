import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const { createUser, upadateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
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
        form.reset();
        setError("");
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const userInfo = {
      displayName: name,
      photoURL: photoURL,
    };
    upadateUserProfile(userInfo)
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => setError(e));
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
      <p>{error}</p>
      <Button className="mb-2" variant="primary" type="submit">
        Register
      </Button>
      <Form.Text className="text-warning">{error}</Form.Text>
      <div className="mx-auto w-100">
        <Button
          className="mb-2"
          style={{ width: "100%" }}
          onClick={handleGoogleSignIn}
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Sign In With Google
        </Button>
        <Button style={{ width: "100%" }} variant="outline-dark">
          <FaGithub></FaGithub> Sign In With Git
        </Button>
      </div>
    </Form>
  );
};

export default SignUp;
