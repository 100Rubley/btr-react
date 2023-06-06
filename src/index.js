import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './index.module.css';

ReactDOM.render(<App />, document.querySelector('#app'));

// eslint-disable-next-line unicorn/prefer-module, no-undef
module.hot.accept();
