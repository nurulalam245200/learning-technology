import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LogIn = () => {
  const { userLogIn, setLoading, googleSignIn, gitHubSignIn } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
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

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => setError(e.message));
  };

  const handleGitHubSignIn = () => {
    gitHubSignIn(gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
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
      <div className="d-flex justify-content-between mb-2">
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Form.Text className="text-success fw-semibold">{error}</Form.Text>
      </div>
      <div className="mx-auto w-100">
        <Button
          className="mb-2"
          style={{ width: "100%" }}
          onClick={handleGoogleSignIn}
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Sign In With Google
        </Button>
        <Button
          onClick={handleGitHubSignIn}
          style={{ width: "100%" }}
          variant="outline-dark"
        >
          <FaGithub></FaGithub> Sign In With Git
        </Button>
      </div>
    </Form>
  );
};

export default LogIn;
