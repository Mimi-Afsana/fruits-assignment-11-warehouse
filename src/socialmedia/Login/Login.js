import Button from "@restart/ui/esm/Button";
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigateToSignup = () => {
    navigate("/signup");
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // console.log(user);
  // console.log(user?.user?.email);
  if (loading) {
    return <Loading></Loading>;
  }

  const hangdleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://mysterious-wildwood-76982.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("reset password send your email address");
    } else {
      toast("please enter email address");
    }
  };
  return (
    <div>
      <h3 className="text-center mt-5 text-warning">Please login</h3>
      <Form onSubmit={hangdleLogin} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-success h5">Email address:</Form.Label>
          <Form.Control
            ref={emailRef}
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
        <p className="text-danger h6">{error?.message}</p>
        <button onClick={navigateToSignup} className="bg-white border-0 mb-3">
          If user is new?{" "}
          <span className="text-warning">Please signup first!!</span>
        </button>{" "}
        <br />
        <p>
          Forget password?{" "}
          <button
            onClick={resetPassword}
            className="bg-white text-primary border-0 mb-3"
          >
            Reset Password!!!
          </button>
        </p>{" "}
        <br />
        <Button
          className="bg-success text-white border-0 rounded-pill px-4 h6 py-2"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
