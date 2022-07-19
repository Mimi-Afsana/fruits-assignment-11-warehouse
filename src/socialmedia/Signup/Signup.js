import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { signOut } from "@firebase/auth";
import Loading from "../Loading/Loading";
import axios from "axios";

const Signup = () => {
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [user1, loading1, error1] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/home");
  }

  const hangdleSignup = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm = event.target.passwords.value;

    if (password !== confirm) {
      setErrorPassword("Two password didnt match");
      return;
    }
    if (password.length < 6) {
      setErrorPassword("password must be 6 character or more");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://mysterious-wildwood-76982.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate("/home");
  };

  return (
    <div>
      <h3 className="text-center mt-5 text-warning">Please signup</h3>
      <Form onSubmit={hangdleSignup} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-success h5">Email address:</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-success h5">Password: </Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-success h5">
            Confirm Password:{" "}
          </Form.Label>
          <Form.Control
            name="passwords"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className="text-danger h6">{errorPassword}</p>
        <button onClick={navigateToLogin} className="bg-white border-0 mb-3">
          If user is signup alreay?
          <span className="text-warning ">Please Login!!</span>
        </button>{" "}
        <br />
        {user ? (
          <button
            className="bg-warning  fw-bold border-0 rounded-pill px-3"
            onClick={logout}
          >
            Sign out
          </button>
        ) : (
          <button
            className="bg-success text-white  fw-bold border-0 rounded-pill px-4 py-2"
            eventKey={2}
            as={Link}
            to="/home"
          >
            signup
          </button>
        )}
      </Form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
