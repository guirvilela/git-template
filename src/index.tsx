import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './globalStyles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>,
  document.getElementById('root'),
);
