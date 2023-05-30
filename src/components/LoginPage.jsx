import React, { useState } from "react";
import { Form, Button, ToastContainer, Toast } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { loginFunction } from "../apiHandling/apiCaller";
import { useNavigate, Link } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [showToast, setToast] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginFunction(data)
      .then((res) => {
        console.log(res.data);
        if (res.data === "success") {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err.response);
        setErr(err.response.data.message);
        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 2000);
      });
  };
  return (
    <div className="login-background" style={{ height: "100%" }}>
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div
          className="test-it"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="login-card">
            <h3 className="text-dark">Hello, Please Login.</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  {...register("username", {
                    required: "**Please provide Username",
                  })}
                />
                <Form.Text style={{ color: "red", margin: "0px" }}>
                  {errors.username?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "**Please provide Password",
                  })}
                />
                <Form.Text style={{ color: "red", margin: "0px" }}>
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <br />
          <div className="login-question">
            New user ? Click Here to{" "}
            <span className="effect-login">
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </span>
            .
          </div>
        </div>
      </div>
      <ToastContainer position="top-center">
        <Toast
          show={showToast}
          autoHide={true}
          onClose={() => {
            setToast(false);
          }}
          delay={2000}
          className="bg-danger"
          style={{ textAlign: "center", marginTop: "20px", color: "#fff" }}
        >
          <Toast.Body>{err}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default LoginPage;
