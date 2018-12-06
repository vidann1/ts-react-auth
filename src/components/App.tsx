import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from "../containers/routes";
import { firebase } from "../config";
import { withAuthentication } from "../config/withAuthentication";
import { Account } from "../pages/Account";
import { Home } from "../pages/Home";
import { Landing } from "../pages/Landing";
import { PasswordForget } from "../pages/PasswordReset";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
// import { Navigation } from "./Navigation";

import { Navigation } from "./Header";

import styled from 'styled-components'

import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  
  Icon,
  Image,
  Label,
  Menu,
  Message,
  Segment,
  Table,
  Container,
} from 'semantic-ui-react'


class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  public render() {
    return (
      <BrowserRouter>
        <div
          style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}          
        >
          
          <Navigation />
          <hr />
          <Switch>
            <Route exact={true} path={routes.LANDING} component={Landing} />
            <Route exact={true} path={routes.REGISTER} component={Register} />
            <Route exact={true} path={routes.LOGIN} component={Login} />
            <Route
              exact={true}
              path={routes.PASSWORD_RESET}
              component={PasswordForget}
            />
            <Route exact={true} path={routes.HOME} component={Home} />
            <Route exact={true} path={routes.ACCOUNT} component={Account} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export const App = withAuthentication(AppComponent);