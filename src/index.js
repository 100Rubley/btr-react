import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import './styles/index.scss';
import ThemeProvider from './styles/theme/ThemeProvider';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.querySelector('#app')
);

// eslint-disable-next-line unicorn/prefer-module, no-undef
module.hot.accept();
