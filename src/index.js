import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';

ReactDOM.render(<App />, document.querySelector('#app'));

// eslint-disable-next-line unicorn/prefer-module, no-undef
module.hot.accept();
