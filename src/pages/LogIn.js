import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { logInUser } from "../FirebaseDB";
import {  } from "firebase/auth";

function SignUp() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  function emailHandler(val) {
    setemail(val.target.value);
  }
  function passwordHandler(val) {
    setpassword(val.target.value);
  }

  const logInUserHandler = (e) => {
    e.preventDefault();
    console.log("button worked");
    logInUser(email, password);
    console.log("user logged in");
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
      <Button variant="primary" type="submit" onClick={logInUserHandler}>
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;
