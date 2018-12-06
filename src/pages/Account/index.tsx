import * as React from "react";
import { PasswordChangeForm } from "./PasswordChangeForm";
import { AuthUserContext } from "../../config/AuthUserContext";
import { withAuthorization } from "../../config/withAuthorization";
import { PasswordResetForm } from "../PasswordReset/PasswordResetForm";

export const AccountComponent = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {(authUser as any).email}</h1>
        <PasswordResetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = (authUser: any) => !!authUser;

export const Account = withAuthorization(authCondition)(AccountComponent);
