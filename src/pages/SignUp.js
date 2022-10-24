import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, createNewUser } from "../FirebaseDB.js";

function SignUp() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [username, setusername] = useState();

  function emailHandler(val) {
    setemail(val.target.value);
  }
  function passwordHandler(val) {
    setpassword(val.target.value);
  }
  function usernameHandler(val) {
    setusername(val.target.value);
  }

  const createUserHandler = (e) => {
    e.preventDefault();
    createNewUser(auth, email, password, username);
    console.log("user created");
    setemail("");
    setpassword("");
    setusername("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={emailHandler}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          onChange={usernameHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={createUserHandler}>
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;
