
import * as React from "react";
import { Link } from "react-router-dom";
import { HeaderButton } from "src/ui/HeaderButton";
import styled from 'styled-components'
import * as routes from "../containers/routes";
import { AuthUserContext } from "../config/AuthUserContext";
import { Logout } from "./LogoutButton";


export const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);
const NavigationAuth = () => (
  <div
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "rgb(255, 254, 252)",
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
          alignItems: "center"
        }}
      >
        <Link to="/">
          <HeaderButton style={{ fontSize: 24 }}>React Auth Example</HeaderButton>
        </Link>
           <div>
             <Link to={routes.LANDING}>
               <HeaderButton>Landing</HeaderButton>
              </Link>
              <Link to={routes.HOME}>
               <HeaderButton>Home</HeaderButton>
              </Link>
              <Link to={routes.ACCOUNT}>
               <HeaderButton>account</HeaderButton>
              </Link>

            </div>
              <Link to="#">
                <Logout />
              </Link>            
      </div> 
);


const NavigationNonAuth = () => (
     <div
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "rgb(255, 254, 252)",
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
          alignItems: "center"
        }}
      >
        <Link to="/">
          <HeaderButton style={{ fontSize: 24 }}>React Auth Example</HeaderButton>
        </Link>
         <div>
              <Link to="/login">
                    <HeaderButton>login</HeaderButton>
              </Link>
              <Link to="/register">
            <HeaderButton>register</HeaderButton>
          </Link>
        </div>
      </div> 
);
/*
export class Header extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "rgb(255, 254, 252)",
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
          alignItems: "center"
        }}
      >
        <Link to="/">
          <HeaderButton style={{ fontSize: 24 }}>React Auth Example</HeaderButton>
        </Link>
         <div>
              <Link to="/login">
                    <HeaderButton>login</HeaderButton>
              </Link>
              <Link to="/register">
            <HeaderButton>register</HeaderButton>
          </Link>
        </div>
      </div> 
  )}
}

*/