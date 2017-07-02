import React from 'react';
import ReactDOM from 'react-dom';

import App, { AppDescription } from './components/app';

console.log(AppDescription);

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
