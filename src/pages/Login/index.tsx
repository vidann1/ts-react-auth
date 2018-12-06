import * as React from "react";
import { withRouter } from "react-router-dom";
import { PasswordForgetLink } from "../PasswordReset";
import { SignUpLink } from "../Register";
import { SignInForm } from "./LoginForm";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
  Form,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components'

const SignInComponent = ({ history }: { [key: string]: any }) => (
	<Container>
		<Segment.Group>
			<Segment>
			  <div
                style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
			    <h1>Login</h1>
			    <SignInForm history={history} />
			    <SignUpLink />
			    <PasswordForgetLink />
			  </div>
			</Segment>
		  </Segment.Group>
 	 </Container>
);

export const Login = withRouter(SignInComponent);