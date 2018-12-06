import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../containers/routes";
import { RegisterForm } from "./RegisterForm";

const SignUpComponent = () => (
  <div>
    <h3>Register</h3>
    <RegisterForm />
  </div>
);

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.REGISTER}>Register</Link>
  </p>
);

export const Register = withRouter(SignUpComponent);