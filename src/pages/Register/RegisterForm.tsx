import * as React from "react";
import * as routes from "../../containers/routes";
import { auth, db } from "../../config";
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'
import { Input } from "../../ui/Input";
import { CustomButton } from "../../ui/CustomButton";
import styled from 'styled-components';

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  passwordOne?: string;
  passwordTwo?: string;
  username?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  passwordOne: string;
  passwordTwo: string;
  username: string;
}

export class RegisterForm extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    passwordOne: "",
    passwordTwo: "",
    username: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);
    this.state = { ...RegisterForm.INITIAL_STATE };
  }

  public onSubmit(event: any) {
    event.preventDefault();

    const { email, passwordOne, username } = this.state;
    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser: any) => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {

            this.setState(() => ({ ...RegisterForm.INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(RegisterForm.propKey("error", error));
          });
      })
      .catch(error => {
        this.setState(RegisterForm.propKey("error", error));
      });
  }

  public render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}        
      >
      <form onSubmit={(event) => this.onSubmit(event)}>
        <Input
        label="username"
          value={username}
          onChange={event => this.setStateWithEvent(event, "username")}
          type="text"
          placeholder="Full Name"
        />
        <Input
        label="email"
          value={email}
          onChange={event => this.setStateWithEvent(event, "email")}
          type="text"
          placeholder="Email Address"
        />
        <Input
        label="password"
          value={passwordOne}
          onChange={event => this.setStateWithEvent(event, "passwordOne")}
          type="password"
          placeholder="Password"
        />
        <Input
        label="repeat password"
          value={passwordTwo}
          onChange={event => this.setStateWithEvent(event, "passwordTwo")}
          type="password"
          placeholder="Confirm Password"
        />
        <CustomButton className="primary" disabled={isInvalid} type="submit">
          Register
        </CustomButton>

        {error && <p>{error.message}</p>}
      </form>
      </div>
    );
  }

  private setStateWithEvent(event: any, columnType: string) {
    this.setState(RegisterForm.propKey(columnType, (event.target as any).value));
  }
}