import * as React from "react";
import { Link } from "react-router-dom";
import * as routes from "../containers/routes";
import { AuthUserContext } from "../config/AuthUserContext";
import { Logout } from "./LogoutButton";
import { CustomButton } from "../ui/CustomButton";
import styled from 'styled-components';

export const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Logout />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.LOGIN}>Sign In</Link>
    </li>
  </ul>
);