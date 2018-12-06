import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

import { createGlobalStyle } from "styled-components";

// @ts-ignore
const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(255, 254, 252);
  }
  *:focus {
    outline: 0;
  }
  a {
    color: #0d0d0d;
    text-decoration: none;
  }
`;

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
