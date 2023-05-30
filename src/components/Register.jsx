import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { registerComp } from "../apiHandling/apiCaller";
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    registerComp(data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
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
            <h3 className="text-dark">Hello, Register Here.</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
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

              <Form.Group className="mb-3 w-100">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "**Please provide Email",
                  })}
                />
                <Form.Text style={{ color: "red", margin: "0px" }}>
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <br />
          <div className="login-question">
            Existing user ? Click Here to{" "}
            <span className="effect-login">
              <Link to="/" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </span>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
