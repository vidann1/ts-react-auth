import * as React from "react";
import * as routes from "../../containers/routes";
import { auth } from "../../config";
import { Input } from "../../ui/Input";
import { CustomButton } from "../../ui/CustomButton";
import styled from 'styled-components';


interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  password?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  password: string;
}


export class SignInForm extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    password: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);

    this.state = { ...SignInForm.INITIAL_STATE };
  }

  public onSubmit = (event: any) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...SignInForm.INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(SignInForm.propKey("error", error));
      });

    event.preventDefault();
  };

  public render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}  
      >
      <form onSubmit={event => this.onSubmit(event)}>
      
        <Input
          label="email"
          value={email}
          onChange={event => this.setStateWithEvent(event, "email")}
          type="text"
          placeholder="Email Address"
        />
      
      
        <Input
          label="password"
          value={password}
          onChange={event => this.setStateWithEvent(event, "password")}
          type="password"
          placeholder="Password"
        />
      
        <CustomButton className="primary" disabled={isInvalid} type="submit">
          Login
        </CustomButton>

        {error && <p>{error.message}</p>}
      </form>
      </div>
      
    );
  }

  private setStateWithEvent(event: any, columnType: string): void {
    this.setState(SignInForm.propKey(columnType, (event.target as any).value));
  }
}