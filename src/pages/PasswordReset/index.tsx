import * as React from "react";
import { Link } from "react-router-dom";
import { PasswordResetForm } from "./PasswordResetForm";

export const PasswordForget = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordResetForm />
  </div>
);

export const PasswordForgetLink = () => (
  <p>
    <Link to="/pw-forget">Forgot Password</Link>
  </p>
);