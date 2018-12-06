import * as React from "react";
import { auth } from "../config";
import { HeaderButton } from "src/ui/HeaderButton";
import styled from 'styled-components'

export const Logout = () => (
	<div>
  <HeaderButton onClick={auth.doSignOut}>Logout</HeaderButton>
  </div>
);