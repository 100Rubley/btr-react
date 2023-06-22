import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import './styles/index.scss';
import ThemeProvider from '../src/theme/ThemeProvider';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.querySelector('#app')
);

module.hot.accept();
