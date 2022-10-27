import React, { useContext, useState } from "react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.diaplayName);
  const handleProfileSubmit = (event) => {
    event.preventDefault();
  };
  const handleUpdateName = (event) => {
    setName(event.target.value);
  };
  const photoRef = useRef(user?.photoURL);
  return (
    <Form onSubmit={handleProfileSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          onChange={handleUpdateName}
          defaultValue={name}
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control ref={photoRef} type="text" placeholder="Photo Url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default Profile;
